import { useState, useEffect } from "react";
import { getWishlist } from "../../utilities/handleSome";
import { useLoaderData } from "react-router";
import InstalledDetails from "./InstalledDetails";
import { useLocation, Link } from "react-router";
// import Loading from "../../components/Loading/Loading";
// import { Suspense } from "react";
const InstalledApps = () => {
  const [installedItems, setInstalledItems] = useState([]);

  const data = useLoaderData();
  const location = useLocation();
  // <Suspense fallback={<Loading />}>

  // </Suspense>;

  //const navigate = useNavigate();
  // const handleBackClick = () => {
  //   navigate(-1);
  // };
  useEffect(() => {
    const wishList = getWishlist();
    const convertedWishList = wishList.map((m) => parseInt(m));
    console.log(convertedWishList);

    const onlyWished = data.filter((d) => convertedWishList.includes(d.id));
    setInstalledItems(onlyWished);
  }, []);

  return (
    <>
      <div className="min-h-64 m-10 p-10 flex flex-1 flex-col items-center justify-center">
        <h1 className="text-3xl font-bold m-3">
          So far, you have installed {installedItems.length} apps.
        </h1>

        <ul>
          {installedItems.map((item) => (
            <li key={item.id}>
              <InstalledDetails item={item} />
            </li>
          ))}
        </ul>
        <Link to="/all-apps" state={{ from: location.pathname }}>
          <button
            // onClick={handleBackClick}
            className="btn btn-active bg-purple-500 hover:bg-purple-800 text-xl text-white m-10"
          >
            Back
          </button>
        </Link>
      </div>
    </>
  );
};

export default InstalledApps;
