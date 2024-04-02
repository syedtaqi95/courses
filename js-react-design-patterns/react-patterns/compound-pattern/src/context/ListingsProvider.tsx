import React, { ReactNode } from "react";
import useListings from "../hooks/useListings";
import { ListingProps } from "../types";

const ListingsContext = React.createContext<ListingProps[] | null>(null);

export function useListingsContext() {
  return React.useContext(ListingsContext);
}

export function ListingsProvider(props: { children: ReactNode }) {
  const listings = useListings();

  if (!listings) return null;

  return (
    <ListingsContext.Provider value={listings}>
      {props.children}
    </ListingsContext.Provider>
  );
}
