// import React from "react";
import homeImage from "../../assets/hero.png";
import { PiGooglePlayLogoLight } from "react-icons/pi";
import { FaAppStore } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="flex flex-1 flex-col items-center">
      <div className="flex flex-1 flex-col items-center mb-2">
        <h2 className="text-2xl pt-2">We bulid</h2>
        <h1 className="text-7xl pb-5 ">
          <strong className="bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 text-transparent bg-clip-text">
            Productive
          </strong>{" "}
          Apps
        </h1>
        <p className="text-lg decoration-1 mb-2">
          At HERO.IO, we craft innovative apps to make everyday life simpler,
          smarter, and more enjoyable for you!
        </p>
        <div className="buttons flex flex-row justify-center items-center gap-1.5">
          <a href="https://play.google.com/store/games/" target="_blank">
            <button className="btn btn-accent bg-purple-300">
              <PiGooglePlayLogoLight color="purple-900" size={24} />
              Google Play
            </button>
          </a>
          <a href="https://www.apple.com/app-store/" target="_blank">
            <button className="btn btn-accent bg-purple-300">
              <FaAppStore color="purple-900" size={24} />
              App Store
            </button>{" "}
          </a>
        </div>
      </div>
      <div>
        <img className="max-h-[320px]" src={homeImage} alt="" />
      </div>
    </div>
  );
};

export default Hero;
