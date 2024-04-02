import React from "react";

interface FlyOutContextProps {
  open: boolean;
  toggle: () => void;
  value: string;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const FlyOutContext = React.createContext<FlyOutContextProps>({
  open: false,
  toggle: () => { },
  value: "",
  setOpen: () => { },
  setValue: () => { },
});

const FlyOut = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const toggle = React.useCallback(() => setOpen((state) => !state), []);

  return (
    <FlyOutContext.Provider value={{ open, toggle, value, setOpen, setValue }}>
      <div className="flyout">{children}</div>
    </FlyOutContext.Provider>
  );
};

const Input = (props: any) => {
  const { toggle, value, setValue } = React.useContext(FlyOutContext);
  return (
    <input
      onFocus={toggle}
      onBlur={toggle}
      className="flyout-input"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Enter an address, city or ZIP code"
      {...props}
    />
  );
};

const List = ({ children }: { children: React.ReactNode }) => {
  const { open } = React.useContext(FlyOutContext);
  return (
    open && (
      <div className="flyout-list">
        <ul>{children}</ul>
      </div>
    )
  );
};

const ListItem = ({
  children,
  value,
}: {
  children: React.ReactNode;
  value: string;
}) => {
  const { setValue } = React.useContext(FlyOutContext);
  return (
    <li
      onMouseDown={() => {
        setValue(value);
      }}
      className="flyout-list-item"
    >
      {children}
    </li>
  );
};

FlyOut.Input = Input;
FlyOut.List = List;
FlyOut.ListItem = ListItem;

export default FlyOut;
