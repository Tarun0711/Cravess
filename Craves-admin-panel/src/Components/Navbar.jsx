import React from "react";
import Notification from "../assets/Icons/notification.svg";
import DropDown from "../assets/Icons/DropDownFilled.svg";
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-primary h-16 w-full flex items-center justify-between px-6 md:px-12">
      {/* Logo */}
      <Link to="/" className="text-3xl font-semibold text-white">
        Cravesss
      </Link>

      {/* Search Input */}
      <div className="relative w-2/4 hidden md:block">
        <input
          type="search"
          className="focus:outline-none focus:ring-2 focus:ring-primary text-richblack-400 bg-white p-2 pl-4 pr-10 w-full rounded-3xl text-sm"
          aria-label="Search"
          placeholder="Search"
        />
        <IoSearch
          className="absolute top-1/2 right-4 transform text-primary -translate-y-1/2 text-gray-400"
          fontSize={20}
        />
      </div>

      {/* Notification Icon */}

      {/* Profile Section */}
      <div className="flex gap-7 items-center">
        <img
          src={Notification}
          alt="Notifications"
          className="w-6 h-6 cursor-pointer"
        />
        <div className="flex items-center gap-2 cursor-pointer border border-white rounded-full p-1 h-[53px]">
          <img
            className="h-[45px] w-[45px] rounded-full"
            src="https://img.freepik.com/free-photo/young-adult-enjoying-virtual-date_23-2149328221.jpg?w=360&t=st=1726472385~exp=1726472985~hmac=e5d60c3508f13e7620e2848249b7dd07278719c4dd2a1e2088527937c0901c90"
            alt="Profile"
          />
          <img src={DropDown} alt="Dropdown" className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
