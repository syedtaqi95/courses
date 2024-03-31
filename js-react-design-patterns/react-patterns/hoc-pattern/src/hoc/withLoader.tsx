import React, { ComponentType } from "react";
import { LoadingSpinner } from "../components/ListingSpinner";

export default function withLoader(Element: ComponentType<any>, url: string) {
  return (props: any) => {
    /* Add logic to:
    1. Fetch data from the url that was passed as an argument.
    2. Show the <LoadingSpinner /> while the  data is being fetched.
    3. Pass the fetched data to the wrapped component.
    */

    const [data, setData] = React.useState(null);

    React.useEffect(() => {
      fetch(url)
        .then((res) => res.json())
        .then((res) => setData(res));
    }, []);

    if (!data) return <LoadingSpinner />;

    return <Element {...props} data={data} />;
  };
}
