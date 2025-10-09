//import React, { useEffect, useLocation, useState } from "react";
import { NavLink } from "react-router";
import logo from "../../assets/logo.png";
import { FaGithub } from "react-icons/fa";
//import { useSearch } from "../SearchContext/SearchContext";
import { IoHomeOutline } from "react-icons/io5";
import { RiApps2AddFill } from "react-icons/ri";
import { MdOutlineInstallMobile } from "react-icons/md";
const Header = () => {
  //const { resetSearch } = useSearch();

  const links = (
    <>
      <NavLink
        to="/"
        //onClick={resetSearch}
        className={({ isActive }) => (isActive ? "active-link" : "")}
      >
        <li className="m-2 p-1">
          <div className="flex flex-1 items-center justify-center gap-1">
            <IoHomeOutline /> Home
          </div>
        </li>
      </NavLink>

      <NavLink
        to="all-apps"
        //onClick={resetSearch}
        className={({ isActive }) => (isActive ? "active-link" : "")}
      >
        <li className="m-2 p-1">
          <div className="flex flex-1 items-center justify-center gap-1">
            <RiApps2AddFill />
            Apps
          </div>
        </li>
      </NavLink>

      <NavLink
        to="installed-apps"
        //onClick={resetSearch}
        className={({ isActive }) => (isActive ? "active-link" : "")}
      >
        <li className="m-2 p-1">
          <div className="flex flex-1 items-center justify-center gap-1">
            <MdOutlineInstallMobile />
            Installed Apps
          </div>
        </li>
      </NavLink>
    </>
  );

  return (
    <div className="navbar bg-[#E6E6FA] shadow-xl">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-[#E6E6FA] rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>

        <NavLink to="/" className="btn bg-[#E6E6FA] rounded-2xl">
          <img className="max-h-[30px]" src={logo} alt="" />
          <span className="text-xl font-bold text-[#632EE3]">Hero.IO</span>
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex text-[#632EE3]">
        <ul className="flex flex-row justify-center">{links}</ul>
      </div>
      <div className="navbar-end">
        <a
          href="https://github.com/FahmidaHamid"
          target="_blank"
          className="btn text-white bg-gradient-to-br from-[#632EE3] to-[#9F62F2]"
        >
          <FaGithub size="24px" /> <span>Contribute </span>
        </a>
      </div>
    </div>
  );
};

export default Header;
