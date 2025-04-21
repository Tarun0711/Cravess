import Cooking, { useState } from "react";
import "./TabCss.css";
import OrderStatusCard from "./OrderStatusCard";

function OrderStatusTab() {
  // State to store the selected tab
  const [selectedTab, setSelectedTab] = useState("Packed");

  // Dummy data for each tab
  const orders = {
    Packed: [
      <OrderStatusCard />,
      <OrderStatusCard />,
      <OrderStatusCard />,
      <OrderStatusCard />,
    ],
    Cooking: [
      <OrderStatusCard />,
      <OrderStatusCard />,
      <OrderStatusCard />,
      <OrderStatusCard />,
      <OrderStatusCard />,
      <OrderStatusCard />,
      <OrderStatusCard />,
      <OrderStatusCard />,
    ],

    InQueue: [
      <OrderStatusCard />,
      <OrderStatusCard />,
      <OrderStatusCard />,
      <OrderStatusCard />,
    ],
  };

  return (
    <div className="bg-white rounded-2xl max-h-[] w-[383px] p-2">
      <h1 className="text-center my-2 text-xl font-medium">Ongoing Orders</h1>
      <div className="radio-inputs">
        <label className="radio">
          <input
            type="radio"
            name="radio"
            value="Packed"
            checked={selectedTab === "Packed"}
            onChange={() => setSelectedTab("Packed")}
          />
          <span className="name">Packed</span>
        </label>

        <label className="radio">
          <input
            type="radio"
            name="radio"
            value="Cooking"
            checked={selectedTab === "Cooking"}
            onChange={() => setSelectedTab("Cooking")}
          />
          <span className="name">Cooking</span>
        </label>
        <label className="radio">
          <input
            type="radio"
            name="radio"
            value="InQueue"
            checked={selectedTab === "InQueue"}
            onChange={() => setSelectedTab("InQueue")}
          />
          <span className="name">In Queue</span>
        </label>
      </div>

      {/* Display content based on the selected tab */}
      <div className="order-list">
        <ul className="overflow-y-scroll">
          {orders[selectedTab].map((order, index) => (
            <li key={index}>{order}</li>
          ))}
        </ul>
      </div>
      

    </div>
  );
}

export default OrderStatusTab;
