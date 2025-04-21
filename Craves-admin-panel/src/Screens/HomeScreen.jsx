import React, { useState, useEffect } from "react";
import HomeScreenCard from "../Components/HomeScreenCard";
import Revenue from "../assets/Images/revenue.svg";
import Users from "../assets/Images/users.svg";
import Order from "../assets/Images/order.svg";
import Restaurant from "../assets/Images/restaurant.svg";
import Fall from "../assets/Images/downfall.svg";
import UpFall from "../assets/Images/Upfall.svg";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import download from "../assets/Images/download.svg";
import ReviewCard from "../Components/ReviewCard";

const Data = [
  {
    title: "Total Revenue",
    image: Revenue,
    count: "22.5K",
    fall: "increase",
    fallBy: "10%",
  },
  {
    title: "Total Users",
    image: Users,
    count: "22.5K",
    fall: "increase",
    fallBy: "10%",
  },
  {
    title: "Successful Orders",
    image: Order,
    count: "22.5K",
    fall: "decrease",
    fallBy: "10%",
  },
  {
    title: "Total Restaurants",
    image: Restaurant,
    count: "22.5K",
    fall: "decrease",
    fallBy: "10%",
  },
];

const reviews = [
  <ReviewCard key={0} />,
  <ReviewCard key={1} />,
  <ReviewCard key={2} />,
  <ReviewCard key={3} />,
  <ReviewCard key={4} />,
];

function HomeScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-swipe effect to change the current index every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex < reviews.length - 2 ? prevIndex + 2 : 0
      );
    }, 5000);
    return () => clearInterval(interval); // Cleanup the interval
  }, []);

  const handleNext = () => {
    if (currentIndex < reviews.length - 2) {
      setCurrentIndex(currentIndex + 2);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 2);
    }
  };

  return (
    <div className="text-black h-[calc(100vh-4.5rem)] overflow-y-scroll font-inter w-full p-4">
      <div>
        <h1 className="text-2xl font-medium">Dashboard</h1>
      </div>

      <div className="flex mt-4 w-full pl-4 items-center gap-7 overflow-x-auto">
        {Data.map((item, index) => (
          <HomeScreenCard
            key={index}
            title={item.title}
            fallBy={item.fallBy}
            Downfall={Fall}
            UpFall={UpFall}
            fallPosition={item.fall}
            count={item.count}
            image={item.image}
          />
        ))}
      </div>

      <div className="mt-4">
        <h1 className="text-2xl font-medium">Order's Overview</h1>
        <div className="w-full p-4 mt-4 bg-white rounded-xl min-h-32">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-2xl text-[#464255]">Chart Order</p>
              <p className="text-md text-gray-300">
                Lorem ipsum dolor sit amet. Lorem, ipsum dolor.
              </p>
            </div>
            <button className="border-2 gap-2 text-[#2D9CDB] border-[#2D9CDB] flex items-center w-[190px] h-[50px] justify-center rounded-xl">
              <img src={download} alt="download" />
              <p className="text-xl font-bold">Save Report</p>
            </button>
          </div>
          <div className="flex items-center justify-center mt-4">Chart</div>
        </div>
      </div>

      <div className="mt-4">
        <div className="w-full p-4 bg-white rounded-xl min-h-32">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-2xl text-[#464255]">Total Revenue</p>
              <p className="text-md text-gray-300">
                Lorem ipsum dolor sit amet. Lorem, ipsum dolor.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center mt-4">Chart</div>
        </div>
      </div>

      <div className="mt-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-medium">Customer Review</h1>
          <div className="flex gap-4 px-4">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`bg-white flex items-center justify-center h-[50px] w-[50px] rounded-xl ${
                currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              <MdArrowBackIos className="text-[#00B074]" />
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex >= reviews.length - 2}
              className={`bg-white flex items-center justify-center h-[50px] w-[50px] rounded-xl ${
                currentIndex >= reviews.length - 2
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
            >
              <MdArrowForwardIos className="text-[#00B074]" />
            </button>
          </div>
        </div>
        <div className="mt-4 flex items-center w-full justify-center gap-4">
          {reviews.slice(currentIndex, currentIndex + 2)}
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
