import { useState, useEffect } from "react";
import { getWishlist } from "../../utilities/handleSome";
import { useLoaderData } from "react-router";
import InstalledDetails from "./InstalledDetails";

const InstalledApps = () => {
  const [installedItems, setInstalledItems] = useState([]);

  const data = useLoaderData();

  useEffect(() => {
    const wishList = getWishlist();
    const convertedWishList = wishList.map((m) => parseInt(m));
    console.log(convertedWishList);

    const onlyWished = data.filter((d) => convertedWishList.includes(d.id));
    setInstalledItems(onlyWished);
  }, []);

  return (
    <>
      <div>
        <h1 className="text-3xl font-bold m-3">
          So far, you have installed ...
        </h1>
        <h1>{installedItems.length}</h1>
        <ul>
          {installedItems.map((item) => (
            <li key={item.id}>
              <InstalledDetails item={item} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default InstalledApps;
