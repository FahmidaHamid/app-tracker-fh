import React from "react";

import Footer from "../Footer/Footer";
import { Outlet } from "react-router";
import NavBar from "../Header/NavBar";

const Base = () => {
  return (
    <div className="flex flex-col mx-auto mx-w-[100vw]">
      <div>
        <NavBar />
      </div>
      <div className="min-h-[660px]">
        <Outlet></Outlet>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Base;
