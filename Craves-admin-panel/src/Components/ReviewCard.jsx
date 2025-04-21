import React from "react";
import Food from "../assets/Images/Food.png";
import { FaStar } from "react-icons/fa6";

function ReviewCard() {
  return (
    <div className="min-w-[450px] max-w-[450px]  mr-32 scroll-smooth relative p-6 font-inter bg-white h-[270px] rounded-2xl">
      <img
        src={Food}
        alt="Food"
        className="w-[200px] h-[200px] object-cover rounded-full absolute drop-shadow-lg shadow-black -right-24 top-[15%]"
      />
      <div className="flex items-center gap-4">
        <img
          className="h-[54px] w-[54px] rounded-full"
          src="https://thumbs.dreamstime.com/b/real-man-portrait-natural-african-blue-background-33718609.jpg"
          alt="Profile"
        />
        <div>
          <h3 className="text-xl font-medium">John Doe</h3>
          <p className="text-sm text-[#A3A3A3]">2 days ago</p>
        </div>
      </div>
      <p className="w-[60%] mt-4 text[#464255] font-light text-sm">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text
      </p>
      <div className=" flex gap-2 items-center absolute bottom-4">
        <FaStar fontSize={16} color="#F7C604" />
        <FaStar fontSize={16} color="#F7C604" />
        <FaStar fontSize={16} color="#F7C604" />
        <FaStar fontSize={16} color="#F7C604" />
        <FaStar fontSize={16} color="#B9BBBD" />
        <p className="text-puregreys-600  font-bold text-md">4.5/5</p>
      </div>
    </div>
  );
}

export default ReviewCard;
