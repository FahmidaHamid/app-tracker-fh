import { GiRoundStar } from "react-icons/gi";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { NavLink } from "react-router";
/*
"image": "https://example.com/images/app1_icon.png",
    "title": "Quantum Task Manager",
    "companyName": "Future Tech Inc.",
    "id": 101,
    "description": "A revolutionary productivity app that uses quantum computing to organize your tasks. Features include a minimalist design, cross-platform syncing, and AI-driven task prioritization.",
    "size": 75,
    "reviews": 1250,
    "ratingAvg": 4.5,

*/
import "./Product.css";

const Product = ({ aProduct }) => {
  console.log(aProduct.id);
  return (
    <NavLink to={`../detailed-app/${aProduct.id}`}>
      <div className="card pcard bg-purple-100 w-92 shadow-md flex-1">
        <figure>
          <img
            className="rounded-xl border-4 m-4 h-[240px] w-[8/10] "
            src={aProduct.image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold">{aProduct.title}</h2>
          <p>{aProduct.companyName}</p>
          <div className="flex flex-row justify-end">
            <p className="btn-accent text-xl font-bold flex flex-row gap-1.5 items-center justify-left">
              <IoCloudDownloadOutline />
              {aProduct.downloads}
            </p>
            <p className="btn-accent text-xl font-bold flex flex-row gap-1.5 items-center justify-end">
              <GiRoundStar />
              {aProduct.ratingAvg}
            </p>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default Product;
