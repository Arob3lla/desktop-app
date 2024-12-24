import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
const UserDetails = () => {
  const location = useLocation();
  const { user } = location.state;
  const [isClicked, setIsClicked] = useState(false);
  //uselocation hook in react is used to access the current location object in your application provides
  //thehash
  // key
  // pathname
  // search
  // state
  // and other stuffs

  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <div className="p-10 ">
      <h2 className="text-2xl font-bold text-black px-9">USER DETAILS</h2>
      <div className="p-5 mt-10 border-black rounded-lg">
        <p className="rounded-full mb-1 p-5 px-10 bg-black ">
          <strong>ID:</strong> {user.id}
        </p>
        <p className="rounded-full mb-1 p-5 px-10 bg-black">
          <strong>Name:</strong> {user.name}
        </p>
        <p className="rounded-full mb-1 p-5 px-10 bg-black">
          <strong>CNIC:</strong> {user.cnic}
        </p>
        <p className="rounded-full mb-1 p-5 px-10 bg-black">
          <strong>Created At:</strong> {user.created_at}
        </p>
        <p className="rounded-full mb-1 p-5 px-10 bg-black">
          <strong>Payment:</strong> {user.payment}
        </p>
      </div>
      <div className="absolute  right-20">
        {" "}
        <Link className="btn btn-outline bg-black rounded-full" to="/modal">
          {" "}
          Edit Tenant
        </Link>
      </div>
      <button onClick={handleClick} className="ml-10">
        <Link className="btn btn-outline bg-black rounded-full" to="/modal">
          {" "}
          Edit Tenant
        </Link>
      </button>
    </div>
  );
};

export default UserDetails;
