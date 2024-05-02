import React from "react";
import logo from "../Images/pexels-martin-lopez-1117132.jpg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  return (
    <div className="flex gap-x-7 items-center px-10 border h-[12vh] bg-slate-900	text-white">
      <img className="h-[40px]" src={logo} alt="" />
      <Link to={"/"} className="cursor-pointer">
        Movies
      </Link>
      <Link to={"./WatchList"}>My WatchList</Link>
      <div className="relative">
        <input
          className="p-1 w-[25rem] text-black pl-8"
          type="text"
          placeholder="Search for movies..."
        />
        <div className="absolute inset-y-0 left-0 flex items-center pl-2">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="text-gray-400" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
