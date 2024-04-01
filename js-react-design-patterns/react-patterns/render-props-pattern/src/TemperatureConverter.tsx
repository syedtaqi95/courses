import React, { JSX } from "react";

interface Props {
  renderKelvin: ({ value }: { value: number }) => JSX.Element;
  renderFahrenheit: ({ value }: { value: number }) => JSX.Element;
}

export default function TemperatureConverter(props: Props) {
  const [value, setValue] = React.useState(0);

  return (
    <div className="card">
      <input
        type="number"
        placeholder="Degrees Celcius"
        onChange={(e) => setValue(parseInt(e.target.value))}
      />
      {props.renderKelvin({ value: Math.floor(value + 273.15) })}
      {props.renderFahrenheit({ value: Math.floor((value * 9) / 5 + 32) })}
    </div>
  );
}
