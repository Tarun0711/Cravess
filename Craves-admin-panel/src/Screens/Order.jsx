import React from "react";
import OrderCard from "../Components/OrderCard";
import { BiBriefcaseAlt } from "react-icons/bi";
import { AiOutlineLike } from "react-icons/ai";
import { LuUsers } from "react-icons/lu";
import OrderChart from "../Components/OrderChart";
import OrderStatusTab from "../Components/OrderStatusTab";
import { FaStar } from "react-icons/fa6";

const Data = [
  {
    title: "Total Orders",
    number: "24324",
    icon: <BiBriefcaseAlt size={25} />,
    Flow: "Increase",
    By: "12",
  },
  {
    title: "Delivered Order",
    number: "24324",
    icon: <AiOutlineLike size={25} />,
    Flow: "Decrease",
    By: "12",
  },
  {
    title: "Total Customers",
    Flow: "Decrease",
    number: "24324",
    icon: <LuUsers size={25} />,
    By: "12",
  },
];

function Order() {
  return (
    <div className="text-black h-[calc(100vh-4.5rem)] overflow-y-scroll font-inter w-full p-4">
      <h1 className="text-2xl font-medium font-inter">Order Dashboard</h1>
      <div className="flex items-center gap-4 mt-4 ">
        {Data.map((item, index) => (
          <>
            <OrderCard
              key={index}
              title={item.title}
              number={item.number}
              icon={item.icon}
              Flow={item.Flow}
              By={item.By}
            />
          </>
        ))}
      </div>
      <div className="mt-4 flex gap-2">
        <OrderChart />
        <OrderStatusTab />
      </div>
      <div className=" bg-white w-full rounded-lg mt-4">
        <p className="py-5 text-lg font-medium px-4 ">Order history</p>
        <table className="w-full">
          <thead className="bg-blue-5 py-4">
            <tr className="">
              <th className="text-left px-4 py-4 text-sm font-medium text-richblack-800">
                Date/Time
              </th>
              <th className="text-left px-4 py-4 text-sm font-medium text-richblack-800">
                Phone
              </th>
              <th className="text-left px-4 py-4 text-sm font-medium text-richblack-800">
                Order Id
              </th>
              <th className="text-left px-4 py-4 text-sm font-medium text-richblack-800">
                Dishes
              </th>
              <th className="text-left px-4 py-4 text-sm font-medium text-richblack-800">
                Items
              </th>
              <th className="text-left px-4 py-4 text-sm font-medium text-richblack-800">
                Order Total
              </th>

              <th className="text-left px-4 py-4 text-sm font-medium text-richblack-800">
                Order Status
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td
                className="
              text-left px-4 py-4 text-sm font-medium text-gray-800"
              >
                12/08/2024 - 12:04
              </td>
              <td className="text-left px-4 py-4 text-sm font-medium text-gray-800">
                +91 7845785478
              </td>
              <td className="text-left px-4 py-4 text-sm font-medium text-gray-800">
                #67890
              </td>
              <td className=" flex gap-2 px-4 py-4 text-sm font-medium text-gray-800">
                <img
                  src="https://fitfoodiefinds.com/wp-content/uploads/2022/09/Poached-Eggs-sq.jpg"
                  alt="food"
                  height={40}
                  width={40}
                  className=" rounded-full"
                />
                <div>
                  <p className="text-xl font-semibold">Poached Eggs</p>
                  <div className="flex gap-2">
                    <p className="text-yellow-50 flex gap-1 items-center">
                      <span className="text-md text-puregreys-400 font-medium">
                        Rating{" "}
                      </span>
                      <FaStar />
                      <span className="text-md font-medium text-black">
                        4.5{" "}
                      </span>
                    </p>
                    <p className=" font-semibold">
                      <span className="text-md text-puregreys-400 font-medium">
                        Price{" "}
                      </span>
                      30.00
                    </p>
                  </div>
                </div>
              </td>
              <td className="text-left px-4 py-4 text-sm font-medium text-gray-800">
                4
              </td>
              <td className="text-left text-primary text-lg px-4 py-4 font-semibold text-gray-800">
                ₹96.00
              </td>

              <td>
                <p className="bg-caribbeangreen-5 text-caribbeangreen-600 px-2 rounded-lg w-fit text-center">
                  Delivered
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Order;
