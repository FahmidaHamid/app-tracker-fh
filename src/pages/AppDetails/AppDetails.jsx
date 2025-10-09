import React from "react";
import { CiStar } from "react-icons/ci";
import { useParams, useNavigate, useLoaderData } from "react-router";
import { addToWishlist } from "../../utilities/handleSome";
import { NavLink } from "react-router";
import Swal from "sweetalert2";
import { useState } from "react";

const AppDetails = () => {
  const [isInstalled, setIsInstalled] = useState(false);

  const { id } = useParams();
  console.log(id);
  const productData = useLoaderData();
  console.log(productData);
  const navigate = useNavigate();

  const showSwal = () => {
    Swal.fire({
      title: "Sweet!",
      text: "Added to your wishlist :)",
      imageUrl: "https://unsplash.it/400/200",
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Custom image",
    });
  };

  const theProduct = productData.find((d) => {
    return d.id === parseInt(id);
  });
  console.log(theProduct);

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
  const handleClick = () => {
    navigate(-1);
  };

  const handleWishlist = (bookid) => {
    //console.log(bookid);
    addToWishlist(bookid);
    setIsInstalled(true);
    showSwal();
  };

  return (
    <>
      <div className="bg-blue-200 p-10 m-10">
        <div className="p-5">
          <button
            onClick={handleClick}
            className="btn btn-active bg-purple-500 hover:bg-purple-800 text-xl text-white "
          >
            Back
          </button>
        </div>
        <div className="hero bg-base-200 min-h-[60vh]">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src={theProduct.image}
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-5xl font-bold p-3">{theProduct.title}</h1>
              <h3 className="text-xl font-semibold p-5">
                {theProduct.companyName}
              </h3>
              <p className="py-6 p-6">
                <b>Description:</b>
                {theProduct.description}
              </p>
              {/* <div className="p-6 flex gap-5">
                <p>
                  <b>Tags:</b>
                </p>
                {aBook.tags.map((t) => (
                  <p>{`#${t}`}</p>
                ))}
              </div> */}
              <div className="p-6 flex flex-col gap-5">
                <p>
                  No of Reviews: <b>{theProduct.reviews}</b>
                </p>
                <p>
                  Size: <b>{theProduct.size} MB</b>
                </p>
                <p>
                  Average Rating: <b>{theProduct.ratingAvg}</b>
                </p>
              </div>
              {
                <button
                  onClick={() => handleWishlist(theProduct.id)}
                  disabled={isInstalled}
                  className="btn bg-gradient-to-br from-purple-500 to-blue-500 p-6 m-3"
                >
                  Download
                </button>
              }
              {/*<button
              onClick={() => handleMark(aBook.bookId)}
              className="btn btn-secondary p-6 m-3"
            >
              Mark as Mark
            </button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppDetails;
