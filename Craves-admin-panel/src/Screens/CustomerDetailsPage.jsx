import React from "react";
import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";

function CustomerDetailsPage({ onClose }) {
  return (
    <div className="bg-black h-full bg-opacity-5 w-full text-black flex justify-end">
      <div className="w-1/2 bg-white relative px-4 py-4 flex flex-col items-center ">
        <RxCross2
          onClick={onClose}
          fontSize={30}
          className=" text-richblack-400 hover:text-primary absolute top-4 left-6"
        />
        <h1 className="text-2xl">Customer Details</h1>
        <img
          className="h-[100px] w-[100px] rounded-2xl mt-4"
          src="https://img.freepik.com/free-photo/young-adult-enjoying-virtual-date_23-2149328221.jpg?w=360&t=st=1726472385~exp=1726472985~hmac=e5d60c3508f13e7620e2848249b7dd07278719c4dd2a1e2088527937c0901c90"
          alt="Profile"
        />
        <div className="border rounded-md w-full mt-4  py-2 border-richblack-100 px-4">
          <p className="w-full text-left  text-richblack-400">
            Details Contact Details
          </p>
          <div className="flex flex-col pl-8">
            <p className="flex items-center gap-2 text-lg">
              <FaUser />
              Jaspreet Singh
            </p>
            <p className="flex items-center gap-2 text-md">
              <IoMdMail />
              abc123@gmail.com
            </p>
            <p className="flex items-center gap-2 text-md">
              <FaPhoneAlt />
              +91 781738318
            </p>
            <Link to={""} className="flex items-center gap-2 text-md">
              <FaLocationDot />
              12,B model town phagwara punjab
            </Link>
          </div>
        </div>
        <div className="border rounded-md py-2 w-full mt-4  border-richblack-100 px-4">
          <p className="w-full text-left  text-richblack-400">
            Order Details Details
          </p>
          <div className="flex flex-col pl-8">
            <p className="flex items-center gap-2 text-md">
              <span className="text-richblack-300">Total Order</span>
              234
            </p>
            <p className="flex items-center gap-2 text-md">
              <span className="text-richblack-300">Total Revenue</span>
              ₹234.5K
            </p>
            <p className="flex items-center gap-2 text-md">
              <span className="text-richblack-300">Cancel Orders</span>5
            </p>
            <Link className="flex items-center gap-2 text-blue-300 text-md">
              <span className="text-richblack-300">Recent Order</span>
              click to get Recent order Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerDetailsPage;
