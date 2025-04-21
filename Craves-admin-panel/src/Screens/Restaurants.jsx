import React from "react";
import { IoSearch } from "react-icons/io5";
import RestaurantCard from "../Components/RestaurantCard";

function Restaurants() {
  return (
    <div className="text-black h-[calc(100vh-4.5rem)] overflow-y-scroll font-inter w-full p-4">
      <div className="flex items-center justify-between ">
        <h1 className="text-2xl font-medium">Restaurant Dashboard</h1>
        <div className="relative w-[30%] hidden md:block">
          <input
            type="search"
            className="focus:outline-none focus:ring-2 focus:ring-primary text-richblack-400 bg-white p-2 pl-4 pr-10 w-full rounded-3xl text-sm"
            aria-label="Search"
            placeholder="search restaurant"
          />
          <IoSearch
            className="absolute top-1/2 right-4 transform text-primary -translate-y-1/2 text-gray-400"
            fontSize={20}
          />
        </div>
        <div className="bg-white w-[300px] h-10 rounded text-white flex items-center justify-center">
          <button className="h-8 w-8 bg-primary rounded-lg ">1</button>
          <button className="h-8 w-8 text-primary rounded-lg ">2</button>
          <button className="h-8 w-8 text-primary rounded-lg ">3</button>
          <button className="h-8 w-8 text-primary rounded-lg ">3</button>
          <button className="h-8 w-8 text-primary rounded-lg ">3</button>
          <button className="h-8 w-8 text-primary rounded-lg ">3</button>
          <button className="h-8 w-8 text-primary rounded-lg ">3</button>
          <button className="h-8 w-8 text-primary rounded-lg ">3</button>
          <button className="h-8 w-8 text-primary rounded-lg ">4</button>
        </div>
      </div>
      <div className="mt-4 flex gap-4 flex-wrap">
        <RestaurantCard /> <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  );
}

export default Restaurants;
