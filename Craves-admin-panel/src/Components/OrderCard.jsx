import React from "react";
import DownStream from "../assets/Images/OrderDownStream.svg";
import UpStream from "../assets/Images/OrderUpStream.svg";
import { IoMdArrowDropdown } from "react-icons/io";

function OrderCard({ icon, number, title, Flow, By }) {
  return (
    <div className="w-[351px] h-[148px] flex gap-2 items-start justify-between bg-white rounded-lg p-4">
      <div className="flex flex-col gap-2">
        <p className="h-[40px] w-[40px] rounded-full bg-[#EEEEEE] flex items-center justify-center">
          {icon}
        </p>
        <p className="text-2xl font-bold">{number}</p>
        <p className="text-xs text-[#999999]">{title}</p>
      </div>
      <div className="flex flex-col h-full justify-between items-end">
        {Flow === "Increase" ? (
          <img src={UpStream} alt="UpStream" />
        ) : (
          <img src={DownStream} alt="DownStream" />
        )}
        <p
          className={`text-sm font-bold flex items-center gap-1 ${
            Flow === "Increase" ? "text-caribbeangreen-400" : "text-pink-300"
          }`}
        >
          <IoMdArrowDropdown
            style={{
              transform: Flow === "Increase" ? "rotate(180deg)" : "rotate(0deg)"
            }}
          />
          {By}{" %"}
        </p>
      </div>
    </div>
  );
}

export default OrderCard;