import React from "react";

const useListings = (): null | any[] => {
  const [listings, setListings] = React.useState(null);

  React.useEffect(() => {
    fetch("https://house-lydiahallie.vercel.app/api/listings")
      .then((res) => res.json())
      .then((res) => setListings(res.listings));
  }, []);

  return listings;
};

export default useListings;
