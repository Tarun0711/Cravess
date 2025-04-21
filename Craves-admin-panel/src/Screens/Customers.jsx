import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import CustomerDetailsPage from "./CustomerDetailsPage";

function Customers() {
  const [customers, setCustomers] = useState([
    {
      id: 1,
      name: "John Doe",
      phoneNumber: "1234567890",
      email: "johndoe@example.com",
      orders: 3,
      ordersTotal: "₹345",
      customerSince: "2022-12-25",
      status: true, // initial status is active
    },
    {
      id: 2,
      name: "Jane Doe",
      phoneNumber: "9876543210",
      email: "janedoe@example.com",
      orders: 5,
      ordersTotal: "₹450",
      customerSince: "2023-01-15",
      status: true, // initial status is active
    },
  ]);

  const [selectedCustomer, setSelectedCustomer] = useState(null); // State for selected customer
  const [showDetails, setShowDetails] = useState(false); // State for showing the details page

  const handleToggleStatus = (customerId) => {
    const customer = customers.find((customer) => customer.id === customerId);
    if (customer.status) {
      if (
        window.confirm(
          `Are you sure you want to make ${customer.name} inactive?`
        )
      ) {
        setCustomers((prevCustomers) =>
          prevCustomers.map((customer) =>
            customer.id === customerId
              ? { ...customer, status: !customer.status }
              : customer
          )
        );
      }
    } else {
      setCustomers((prevCustomers) =>
        prevCustomers.map((customer) =>
          customer.id === customerId
            ? { ...customer, status: !customer.status }
            : customer
        )
      );
    }
  };

  // Function to handle row click and show details page
  const handleRowClick = (customer) => {
    setSelectedCustomer(customer);
    setShowDetails(true);
  };

  // Function to close details page
  const handleCloseDetails = () => {
    setShowDetails(false);
  };

  return (
    <div className="text-black relative h-[calc(100vh-4.5rem)] overflow-y-scroll font-inter w-full p-4">
      <h1 className="text-2xl font-medium font-inter">Customers Dashboard</h1>
      <div className="flex items-center justify-between pt-2 bg-white px-4 rounded-t-lg w-full">
        <p className="text-2xl p-2">Customer List</p>
        <div className="flex gap-2 ">
          {/* <button className="bg-primary bg-opacity-10 text-primary p-2 rounded-md">
            Add New Customer +
          </button> */}
          <button className="bg-primary text-white p-2 ml-2 rounded-md">
            Export to PDF
          </button>
        </div>
      </div>
      <div className="flex items-center justify-between px-4  bg-white w-full">
        <div className="relative w-[360px] my-4 mx-4 h-45px hidden md:block">
          <input
            type="search"
            className="focus:outline-none focus:ring-2 focus:ring-primary focus:border-none text-richblack-400 border bg-white p-2 pl-4 pr-10 w-full rounded-3xl text-sm"
            aria-label="Search"
            placeholder="Search"
          />
          <IoSearch
            className="absolute top-1/2 right-4 transform text-primary -translate-y-1/2 text-gray-400"
            fontSize={20}
          />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <button className="bg-blue-5 text-black p-1 px-4 rounded-md">
              Ascending
            </button>
            <button className="bg-blue-5 text-black p-1 px-4 rounded-md">
              Status
            </button>
          </div>
        </div>
      </div>
      <table className="bg-white w-full rounded-b-lg min-h-32 ">
        <thead className="w-full">
          <tr className="bg-[#FFC1C1] bg-opacity-25">
            <th className="text-left px-2 py-4">
              <input
                type="checkbox"
                className="h-4 w-4 ring-2 ring-[#FFC1C1] rounded-md outline-0 checked:bg-[#FFC1C1]"
              />
            </th>
            <th className="text-sm font-medium px-4 py-2 text-left">Name</th>
            <th className="text-sm font-medium px-4 py-2 text-left">
              Phone Number
            </th>
            <th className="text-sm font-medium px-4 py-2 text-left">Email</th>
            <th className="text-sm font-medium px-4 py-2 text-left">Orders</th>
            <th className="text-sm font-medium px-4 py-2 text-left">
              Orders Total
            </th>
            <th className="text-sm font-medium px-4 py-2 text-left">
              Customer Since
            </th>
            <th className="text-sm font-medium py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr
              key={customer.id}
              className="border-b cursor-pointer"
              onClick={() => handleRowClick(customer)}
            >
              <td className="text-left px-2 py-4">
                <input
                  type="checkbox"
                  className="h-4 w-4 ring-2 ring-[#FFC1C1] checked:bg-[#FFC1C1]"
                />
              </td>
              <td className="text-sm px-4 py-2">{customer.name}</td>
              <td className="text-sm px-4 py-2">{customer.phoneNumber}</td>
              <td className="text-sm px-4 py-2">{customer.email}</td>
              <td className="text-sm px-4 py-2">{customer.orders}</td>
              <td className="text-sm px-4 py-2">{customer.ordersTotal}</td>
              <td className="text-sm px-4 py-2 text-center">
                {customer.customerSince}
              </td>
              <td className="text-sm flex items-center h-full mt-2 gap-2 px-4 py-2 text-center">
                <button
                  className={`px-3 min-w-24 rounded-md ${
                    customer.status
                      ? "bg-caribbeangreen-25 text-caribbeangreen-500"
                      : "bg-pink-25 text-pink-400"
                  }`}
                  onClick={() => handleToggleStatus(customer.id)}
                >
                  {customer.status ? "Active" : "Not Active"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex bg-white text-white gap-2 w-[100%] justify-center rounded-b-lg  items-center  py-6">
        <button className="flex items-center text-primary">
          <IoIosArrowRoundBack /> Previous
        </button>
        <button className="h-8 w-8 bg-primary rounded-lg ">1</button>
        <button className="h-8 w-8 text-primary rounded-lg ">2</button>
        <button className="h-8 w-8 text-primary rounded-lg ">3</button>
        <button className="h-8 w-8 text-primary rounded-lg ">4</button>
        <button className="flex right-0 items-center text-primary">
          <IoIosArrowRoundForward /> Next
        </button>
      </div>

      {/* Conditionally render CustomerDetailsPage */}
      {showDetails && (
        <div className="absolute top-0 right-0 h-screen w-screen bg-black bg-opacity-25 z-10">
          <CustomerDetailsPage
            customer={selectedCustomer}
            onClose={handleCloseDetails} 
          />
        </div>
      )}
    </div>
  );
}

export default Customers;
