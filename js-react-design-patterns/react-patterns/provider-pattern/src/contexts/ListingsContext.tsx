import React from "react";
import { ListingProps } from "../types";
import useListings from "../hooks/useListings";

export const ListingsContext = React.createContext<ListingProps[] | null>(null);

export const useListingsContext = () => {
  const context = React.useContext(ListingsContext);
  return context;
};

export const ListingsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const listings = useListings();

  return (
    <ListingsContext.Provider value={listings}>
      {children}
    </ListingsContext.Provider>
  );
};
