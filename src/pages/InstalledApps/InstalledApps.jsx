import { useState, useEffect } from "react";
import { getWishlist } from "../../utilities/handleSome";
import { useLoaderData, useNavigation } from "react-router";
import Loading from "../../components/Loading/Loading";
import Swal from "sweetalert2";
import InstalledDetails from "./InstalledDetails";
const InstalledApps = () => {
  const [installedItems, setInstalledItems] = useState([]);

  const data = useLoaderData();

  const { state } = useNavigation();

  console.log(state);

  // const showSwal = () => {
  //   Swal.fire({
  //     title: "Sorry to see you go",
  //     text: "Uninstalled :)",
  //     imageUrl: "https://unsplash.it/400/200",
  //     imageWidth: 400,
  //     imageHeight: 200,
  //     imageAlt: "Custom image",
  //   });
  // };

  useEffect(() => {
    const wishList = getWishlist();
    const convertedWishList = wishList.map((m) => parseInt(m));
    console.log(convertedWishList);

    const onlyWished = data.filter((d) => convertedWishList.includes(d.id));
    setInstalledItems(onlyWished);
  }, []);

  // const handleUninstalled = ({ id }) => {
  //   removeFromWishlist(id);
  //   const wishList = getWishlist();
  //   //const convertedWishList = wishList.map((m) => parseInt(m));
  //   setInstalledItems(wishList);
  // };

  return (
    <>
      {(state === "loading") | (state === "submitting") && <Loading />}
      <div>
        <h1 className="text-3xl font-bold m-3">
          So far, you have installed ...
        </h1>
        <h1>{installedItems.length}</h1>
        <ul>
          {installedItems.map((item) => (
            <li key={item.id}>
              {/* <div className="border-2 rounded-2xl bg-amber-50 m-3 p-3 flex flex-1">
                <p>{item.id}</p>
                <img
                  className="rounded-xl border-4 m-4 h-[100px]"
                  src={item.image}
                />
                <p>
                  <b>{item.title}</b>
                  {" " + item.companyName + " "}
                  takes upto {item.size} MB
                </p>
                <div className="flex flex-1 items-center justify-end-safe">
                  <button
                    onClick={() => {
                      removeFromWishlist(item.id);
                      showSwal();
                    }}
                    className="btn bg-gradient-to-b from-green-100 to-gray-300"
                  >
                    Uninstall
                  </button>
                </div>
              </div> */}
              <InstalledDetails item={item} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default InstalledApps;
