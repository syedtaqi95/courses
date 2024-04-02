import React from "react";
import { ListingProps } from "../types";

export default function useListings() {
  const [listings, setListings] = React.useState<ListingProps[] | null>(null);

  React.useEffect(() => {
    fetch("https://house-lydiahallie.vercel.app/api/listings")
      .then((res) => res.json())
      .then((res) => setListings(res.listings));
  }, []);

  return listings;
}
