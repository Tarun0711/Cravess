import React, { useState, useMemo } from "react";
import { MdDashboard } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { MdRestaurant } from "react-icons/md";
import { MdDeliveryDining } from "react-icons/md";
import { HiClipboardDocumentList } from "react-icons/hi2";
import { NavLink, useLocation } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { PiSignOutBold } from "react-icons/pi";

const Data = [
  {
    title: "Dashboard",
    icon: <MdDashboard fontSize={25} />,
    link: "/",
  },
  {
    title: "Customer",
    icon: <FaUser fontSize={25} />,
    link: "/customer",
  },
  {
    title: "Restaurant",
    icon: <MdRestaurant fontSize={25} />,
    link: "/restaurant",
  },
  {
    title: "Delivery",
    icon: <MdDeliveryDining fontSize={25} />,
    link: "/delivery",
  },
  {
    title: "Order",
    icon: <HiClipboardDocumentList fontSize={25} />,
    link: "/order",
  },
];



function Sidebar() {
  const location = useLocation();
  const [dropdownOpen, setDropdownOpen] = useState(null);

  // Memoized data to prevent re-calculation on every render
  const sidebarData = useMemo(() => Data, []);

  const toggleDropdown = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  const linkClasses = (isActive) =>
    `flex items-center w-full justify-center gap-2 p-2  hover:bg-gray-200 ${
      isActive ? "border-l-4 border-primary" : ""
    }`;

  const innerDivClasses = (isActive) =>
    `w-[200px] flex items-center rounded-xl gap-3 p-2 transition-all duration-300 ease-in-out ${
      isActive
        ? "border-primary border-2 text-white bg-primary"
        : "text-secondary hover:bg-gray-100"
    }`;

  return (
    <div className="w-[300px] relative h-[calc(100vh-4rem)] bg-white text-secondary py-6 flex flex-col gap-2 md:w-[250px]">
      {sidebarData.map((item, index) => (
        <NavLink
          to={item.link}
          key={index}
          className={({ isActive }) => linkClasses(isActive)}
          aria-label={`Go to ${item.title}`}
        >
          <div
            className={innerDivClasses(location.pathname === item.link)}
            onClick={() => toggleDropdown(index)}
          >
            {item.icon}
            <span className="text-[20px]">{item.title}</span>
            
          </div>
          {dropdownOpen === index && (
            <div className="">{/* Add actual dropdown options here */}</div>
          )}
        </NavLink>
      ))}

      <hr/>

      <div className="flex flex-col gap-2 bg-white py-2 px-2 absolute bottom-4 w-full">
        <button className="bg-blue-5 flex items-center gap-3 justify-center rounded-lg text-black py-2">
          <FaRegUserCircle/>
          Profile
        </button>
        <button className="bg-primary flex items-center gap-3 justify-center rounded-lg bg-opacity-15 py-2 text-primary">
          <PiSignOutBold/>
          Sign Out
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
