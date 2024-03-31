import React from "react";
import { Listing, ListingProps } from "./Listing";
import { ListingsGrid } from "./ListingsGrid";
import withLoader from "../../hoc/withLoader";

export function Listings(props: any) {
  return (
    <ListingsGrid>
      {props.data.listings.map((listing: ListingProps) => (
        <Listing key={listing.id} listing={listing} />
      ))}
    </ListingsGrid>
  );
}

export default withLoader(
  Listings,
  "https://house-lydiahallie.vercel.app/api/listings",
);
