import React from "react";
import { FaPhoneAlt, FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { Link } from "react-router-dom";
import ReviewsCardForDetailsPage from "../Components/ReviewsCardForDetailsPage";

function DeliveryAgentDetailsPage() {
  return (
    <div className="text-black h-[calc(100vh-4.5rem)] overflow-y-scroll font-inter w-full p-4">
      <h1 className="text-2xl font-medium font-inter">
        Delivery Agent Details
      </h1>
      <div className="flex  gap-2 mt-4">
        <div className="w-[452px] rounded-xl bg-white py-3 flex flex-col gap-2 items-center justify-center">
          <img
            className="h-[65px] w-[65px] rounded-full"
            src="https://thumbs.dreamstime.com/b/real-man-portrait-natural-african-blue-background-33718609.jpg"
            alt="Profile"
          />
          <h1 className="font-bold">Jhon Deo</h1>
          <div className="flex items-center gap-8 mt-4">
            <div className="text-center">
              <p className="text-primary font-bold text-2xl">34</p>
              <p className="text-lg">Order shipped</p>
            </div>
            <hr className="border-[1px] border-richblack-200 h-12" />
            <div className="text-center">
              <p className="text-primary font-bold text-2xl">4.5K</p>
              <p className="text-lg">Total Earning</p>
            </div>
          </div>
          <p className="w-full px-8 font-semibold text-sm ">About Him/Her</p>
          <p className="-mt-3 px-12 text-richblack-500 text-sm">
            Hi I'm Kaiya Botosh,has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type.
          </p>
          <div className="w-full px-4">
            <p className="flex items-center py-2 gap-2 text-md">
              <IoMdMail />
              abc123@gmail.com
            </p>
            <p className="flex items-center py-2 gap-2 text-md">
              <FaPhoneAlt />
              +91 781738318
            </p>
            <Link to={""} className="flex py-2 items-center  text-md">
              <FaLocationDot />
              12,B model town phagwara punjab
            </Link>
          </div>
          <div className="w-[200px] bg-caribbeangreen-5 text-caribbeangreen-400 text-center py-2 rounded-xl">
            Verified
          </div>
        </div>
        <ReviewsCardForDetailsPage />
        <div className=" bg-white p-4 rounded-xl h-full w-[520px]">
          <p className="text-xl font-medium text-richblack-600">
            Recent Transactions
          </p>
          <table className="w-full">
            <thead>
            <tr className="border w-full">
            <th>
                  Transaction Id
                </th>
                <th>
                  Date
                </th>
                <th>
                  Amount
                </th>
                <th>
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
            <tr className="border w-full">
            <td>TRX123456</td>
                <td>12/08/2024</td>
                <td>₹1,200</td>

                <td>
                  <span className="text-caribbeangreen-300">Done</span>
                </td>

              </tr>
              <tr className="border w-full">
                <td>TRX789012</td>
                <td>11/08/2024</td>
                <td>₹800</td>
                <td>
                  <span className="text-orange-500">Canceled</span>
                </td>
              </tr>
              <tr className="border w-full">
                <td>TRX345678</td>
                <td>10/08/2024</td>
                <td>₹50</td>
                <td>
                  <span className="text-pink-300">In Queue</span>
                </td>
              </tr>
              <tr className="border w-full">
                <td>TRX789012</td>
                <td>11/08/2024</td>
                <td>₹800</td>
                <td>
                  <span className="text-orange-500">Canceled</span>
                </td>
              </tr>
              <tr className="border w-full">
                <td>TRX345678</td>
                <td>10/08/2024</td>
                <td>₹50</td>
                <td>
                  <span className="text-pink-300">In Queue</span>
                </td>
              </tr>
              <tr className="border w-full">
                <td>TRX789012</td>
                <td>11/08/2024</td>
                <td>₹800</td>
                <td>
                  <span className="text-orange-500">Canceled</span>
                </td>
              </tr>
              <tr className="border w-full">
                <td>TRX345678</td>
                <td>10/08/2024</td>
                <td>₹50</td>
                <td>
                  <span className="text-pink-300">In Queue</span>
                </td>
              </tr>
              <tr className="border w-full">
                <td>TRX789012</td>
                <td>11/08/2024</td>
                <td>₹800</td>
                <td>
                  <span className="text-orange-500">Canceled</span>
                </td>
              </tr>
              <tr className="border w-full">
                <td>TRX345678</td>
                <td>10/08/2024</td>
                <td>₹50</td>
                <td>
                  <span className="text-pink-300">In Queue</span>
                </td>
              </tr>
              <tr className="border w-full">
                <td>TRX789012</td>
                <td>11/08/2024</td>
                <td>₹800</td>
                <td>
                  <span className="text-orange-500">Canceled</span>
                </td>
              </tr>
              <tr className="border w-full">
                <td>TRX345678</td>
                <td>10/08/2024</td>
                <td>₹50</td>
                <td>
                  <span className="text-pink-300">In Queue</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <table className="w-full bg-white mt-4">
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
                    <span className="text-md font-medium text-black">4.5 </span>
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
  );
}

export default DeliveryAgentDetailsPage;
