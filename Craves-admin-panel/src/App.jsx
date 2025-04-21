import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen";
import Home from "./Screens/Home";
import Restaurants from "./Screens/Restaurants";
import DeliveryAgents from "./Screens/DeliveryAgents";
import Order from "./Screens/Order";
import DeliveryAgentDetailsPage from "./Screens/DeliveryAgentDetailsPage";
import Customers from "./Screens/Customers";
function App() {
  return (
    <div className="h-screen w-full bg-backGround text-white">
      <BrowserRouter>
        <Routes>
          <Route element={<Home />}>
            <Route index element={<HomeScreen />} />
            <Route path="customer" element={<Customers />} />
            <Route path="restaurant" element={<Restaurants />} />
            <Route path="delivery" element={<DeliveryAgents />} />
            <Route
              path="delivery/agent-details/:id"
              element={<DeliveryAgentDetailsPage />}
            />

            <Route path="order" element={<Order />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
