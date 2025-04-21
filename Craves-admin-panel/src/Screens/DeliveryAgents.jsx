import React from "react";
import RestaurantCard from "../Components/RestaurantCard";
import { IoSearch } from "react-icons/io5";

function DeliveryAgents() {
  return (
    <div className="text-black h-[calc(100vh-4.5rem)] overflow-y-scroll font-inter w-full p-4">
      {/* Dashboard Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-medium">Delivery Agents Dashboard</h1>
      </div>

      {/* Agents for Verification Title */}
      <div className="mt-4">
        <p className="text-xl p-2">Agents For Verification</p>
      </div>

      {/* Table Section */}
      <table className="bg-white w-full min-h-32 mt-4">
        <thead>
          <tr className="bg-[#FFC1C1]  bg-opacity-25">
            <th className="text-left px-2 py-4">
              <input
                type="checkbox"
                className="h-4 w-4 ring-2  ring-[#FFC1C1] rounded-md outline-0 checked:bg-[#FFC1C1]"
              />
            </th>
            <th className="text-sm font-medium px-4 py-2 text-left">Name</th>
            <th className="text-sm font-medium px-4 py-2 text-left">Phone Number</th>
            <th className="text-sm font-medium px-4 py-2 text-left">Email</th>
            <th className="text-sm font-medium px-4 py-2 text-left">Vehicle Type</th>
            <th className="text-sm font-medium px-4 py-2 text-left">Duty Type</th>
            <th className="text-sm font-medium px-4 py-2 text-left">Requested Date</th>
            <th className="text-sm font-medium px-4 py-2 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="text-left px-2 py-4">
              <input
                type="checkbox"
                className="h-4 w-4 ring-2 ring-[#FFC1C1] checked:bg-[#FFC1C1]"
              />
            </td>
            <td className="text-sm px-4 py-2">John Doe</td>
            <td className="text-sm px-4 py-2">1234567890</td>
            <td className="text-sm px-4 py-2">johndoe@example.com</td>
            <td className="text-sm px-4 py-2">Car</td>
            <td className="text-sm px-4 py-2">Full-time</td>
            <td className="text-sm px-4 py-2 text-center">2022-12-25</td>
            <td className="text-sm flex items-center n gap-2  h-full mt-2 px-4 py-2 text-center">
              <button className=" bg-pink-25 text-pink-400 px-3 rounded-md">
                Deny
              </button>
              <button className="bg-caribbeangreen-25 text-caribbeangreen-400 px-3 rounded-md">
                Allow
              </button>
            </td>
          </tr>
          <tr className="border-b">
            <td className="text-left px-2 py-4">
              <input
                type="checkbox"
                className="h-4 w-4 ring-2 ring-[#FFC1C1] checked:bg-[#FFC1C1]"
              />
            </td>
            <td className="text-sm px-4 py-2">John Doe</td>
            <td className="text-sm px-4 py-2">1234567890</td>
            <td className="text-sm px-4 py-2">johndoe@example.com</td>
            <td className="text-sm px-4 py-2">Car</td>
            <td className="text-sm px-4 py-2">Full-time</td>
            <td className="text-sm px-4 py-2 text-center">2022-12-25</td>
            <td className="text-sm flex items-center h-full mt-2 gap-2 px-4 py-2 text-center">
              <button className=" bg-pink-25 text-pink-400 px-3 rounded-md">
                Deny
              </button>
              <button className="bg-caribbeangreen-25 text-caribbeangreen-400 px-3 rounded-md">
                Allow
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div>
      <div className="flex items-center justify-between mt-8 ">
        <h1 className="text-2xl font-medium">Active Agents</h1>
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
    </div>
  );
}

export default DeliveryAgents;
