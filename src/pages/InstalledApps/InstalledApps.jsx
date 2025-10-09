import { useState, useEffect } from "react";
import { getWishlist } from "../../utilities/handleSome";
import { useLoaderData, useNavigation } from "react-router";
import Loading from "../../components/Loading/Loading";
const InstalledApps = () => {
  const [myWishList, setMyWishList] = useState([]);

  const data = useLoaderData();
  const { state } = useNavigation();

  useEffect(() => {
    const wishList = getWishlist();
    const convertedWishList = wishList.map((m) => parseInt(m));
    console.log(convertedWishList);

    const onlyWished = data.filter((d) => convertedWishList.includes(d.id));
    setMyWishList(onlyWished);
  }, []);

  return (
    <>
      {state === "loading" && <Loading />}
      <div>
        <h1>So far, you have installed ...</h1>
        <h2>Wish List</h2>
        <ul>
          {myWishList.map((b) => (
            <li key={b.id}>
              <h4>{b.title}</h4>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default InstalledApps;
