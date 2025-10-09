import { removeFromWishlist } from "../../utilities/handleSome";
import Swal from "sweetalert2";
import { useState } from "react";

const InstalledDetails = ({ item }) => {
  const [unInstalled, setUnInstalled] = useState(false);

  const showSwal = () => {
    Swal.fire({
      title: "Oh no...",
      text: "Sorry to see you go :(",
      imageUrl: "https://unsplash.it/400/200",
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Custom image",
    });
  };

  const handleWishlist = (itemId) => {
    removeFromWishlist(itemId);
    setUnInstalled(true);
    showSwal();
  };

  return (
    <>
      <div className="border-2 rounded-2xl bg-amber-50 m-3 p-3 flex flex-1">
        <img className="rounded-xl border-4 m-4 h-[100px]" src={item.image} />
        <p>
          <b>{item.title}</b>
          {" " + item.companyName + " "}
          takes upto {item.size} MB of space
        </p>
        <div className="flex flex-1 items-center justify-end-safe">
          <button
            onClick={() => {
              handleWishlist(item.id);
            }}
            disabled={unInstalled}
            className="btn bg-gradient-to-b from-green-100 to-gray-300"
          >
            Uninstall
          </button>
        </div>
      </div>
    </>
  );
};

export default InstalledDetails;
