import React from "react";
import { Listing } from "./Listing.tsx";
import { ListingsGrid } from "./ListingsGrid.tsx";

export default function Listings({ listings }) {
  return (
    <ListingsGrid>
      {listings.map((listing: any) => (
        <Listing key={listing.id} listing={listing} />
      ))}
    </ListingsGrid>
  );
}
