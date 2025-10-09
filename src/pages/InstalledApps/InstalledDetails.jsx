import React from "react";
import { CiStar } from "react-icons/ci";
//import { useParams, useNavigate, useLoaderData } from "react-router";
import { removeFromWishlist } from "../../utilities/handleSome";
import Swal from "sweetalert2";
import { useState } from "react";

const InstalledDetails = ({ item }) => {
  const [unInstalled, setUnInstalled] = useState(false);

  //   const { id } = useParams();
  //   console.log(id);
  // const productData = useLoaderData();
  //  console.log(productData);
  // const navigate = useNavigate();

  const showSwal = () => {
    Swal.fire({
      title: "Sweet!",
      text: "Sorry to see you go :(",
      imageUrl: "https://unsplash.it/400/200",
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Custom image",
    });
  };

  //   const theProduct = productData.find((d) => {
  //     return d.id === parseInt(id);
  //   });
  //   console.log(theProduct);

  /*
{
    "image": "https://i.postimg.cc/JhTjfpHZ/flat-design-atheism-logo-template-23-2149248382.avif",
    "title": "Quantum Task Manager",
    "companyName": "Future Tech Inc.",
    "id": 101,
    "description": "A revolutionary productivity app that uses quantum computing to organize your tasks. Features include a minimalist design, cross-platform syncing, and AI-driven task prioritization.",
    "size": 75,
    "reviews": 1250,
    "ratingAvg": 4.5,
    "downloads": 560000,
    "ratings": [
      { "name": "1 star", "count": 50 },
      { "name": "2 star", "count": 75 },
      { "name": "3 star", "count": 125 },
      { "name": "4 star", "count": 250 },
      { "name": "5 star", "count": 750 }
    ]
  }
  */
  //   const handleClick = () => {
  //     navigate(-1);
  //   };

  const handleWishlist = (itemId) => {
    //console.log(bookid);
    removeFromWishlist(itemId);
    setUnInstalled(true);
    showSwal();
  };

  return (
    <>
      <div className="border-2 rounded-2xl bg-amber-50 m-3 p-3 flex flex-1">
        {/* <p>{item.id}</p> */}
        <img className="rounded-xl border-4 m-4 h-[100px]" src={item.image} />
        <p>
          <b>{item.title}</b>
          {" " + item.companyName + " "}
          takes upto {item.size} MB
        </p>
        <div className="flex flex-1 items-center justify-end-safe">
          <button
            onClick={() => {
              handleWishlist(item.id);
              showSwal();
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
