import React from "react";
import { LuDot } from "react-icons/lu";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";

function ReviewsCardForDetailsPage() {
  return (
    <div className=" bg-white p-4 rounded-xl h-full w-[320px]">
      <p className="text-xl font-medium text-richblack-600">
        Reviews BreakDown
      </p>
      <div className="border flex text-center justify-center px-3 w-fit gap-2 py-1 rounded-2xl">
        <div className="bg-[#1FD501] h-2 w-2 mt-2 rounded-full"></div>
        <p>All</p>
      </div>
      <div>
        <p className="text-[142px] font-bold text-richblack-500">4.5</p>
        <div className="flex items-center text-2xl -mt-12 text-yellow-100 gap-1">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStarHalfAlt />
        </div>
        <p className="text-richblack-400 font-normal px-4">3,143 Reviews</p>
      </div>
    </div>
  );
}

export default ReviewsCardForDetailsPage;
