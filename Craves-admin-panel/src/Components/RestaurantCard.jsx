import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { IoCallSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

function RestaurantCard() {
  return (
    <div className="bg-white font-inter h-[380px] flex items-center justify-between py-4 flex-col w-[300px] rounded-2xl">
      <img
        className="h-[65px] w-[65px] rounded-full"
        src="https://thumbs.dreamstime.com/b/real-man-portrait-natural-african-blue-background-33718609.jpg"
        alt="Profile"
      />
      <div className="text-center">
        <p className="text-lg font-bold">Healthy Feast Corner</p>
        <p className="text-md">Hollie Bruggen</p>
      </div>

      <div className="flex items-center gap-8 mt-4">
        <div className="text-center">
          <p className="text-primary font-bold text-2xl">34</p>
          <p className="text-lg">Total Products</p>
        </div>
        <hr className="border-[1px] border-richblack-200 h-12" />
        <div className="text-center">
          <p className="text-primary font-bold text-2xl">4.5K</p>
          <p className="text-lg">Total Sale</p>
        </div>
      </div>
      <div className="w-full p-4">
        <div className="flex items-center gap-4">
          <FaLocationDot className="text-black" />
          <p>123 Main St, Anytown, USA</p>
        </div>
        <div className="flex items-center gap-4">
          <IoMail className="text-black" />
          <p>email@healthyfeastcorner.com</p>
        </div>
        <div className="flex items-center gap-4">
          <IoCallSharp className="text-black" />
          <p>(123) 456-7890</p>
        </div>
      </div>
      <Link
        to={"/delivery/agent-details/123"}
        className="w-[180px] h-[40px] flex items-center justify-center bg-primary rounded-lg font-semibold text-white"
      >
        View Details
      </Link>
    </div>
  );
}

export default RestaurantCard;
