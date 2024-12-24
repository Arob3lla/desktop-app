import React from "react";
import { Link } from "react-router-dom";
import applicationImage from "./icon.png";

const Navbar = () => {
  return (
    <div>
      <div className="px-10 shadow-lg navbar flex justify-between gap-10  bg-black">
        <div className="left-0 flex-none gap-6">
          <div className="image">
            <img
              src={applicationImage}
              alt="Application Preview"
              className="w-10 h-10 object-contain"
            />
          </div>
          <div className=" flex shadow-md items-center rounded-full justify-center h-10 bg-gray-50 flex-1 px-10">
            <span className="font-sans font-bold text-black">DESKTOP APP</span>
          </div>
        </div>
        <div className="flex justify-end flex-1 gap-10">
          <div className="flex shadow-md rounded-full items-center justify-center h-10 bg-gray-200 flex-2  px-5 hover:bg-gray-50 transform motion-safe:hover:scale-110">
            <Link to="/createUser">
              {" "}
              <span className="font-sans font-medium text-black whitespace-nowrap ">
                Add New
              </span>
            </Link>
          </div>
          <div className="transform motion-safe:hover:scale-110 flex shadow-md rounded-full items-center justify-center h-10 bg-gray-200 flex-2  px-5 hover:bg-gray-50">
            <Link to="/allusers">
              {" "}
              <span className="font-sans font-semibold text-black whitespace-nowrap">
                All Tenats
              </span>
            </Link>
          </div>
          <div className="flex shadow-md items-center rounded-full justify-center h-10 bg-gray-200 flex-2  px-5 hover:bg-gray-50 transform motion-safe:hover:scale-110">
            <Link to="/pendingdues">
              {" "}
              <span className="font-semibold text-black whitespace-nowrap">
                Pending Dues
              </span>
            </Link>
          </div>
        </div>

        {/* <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search Tenats"
              className="input input-bordered rounded-full w-24 md:w-auto"
            />
          </div>
        </div> */}
      </div>
    </div>
  );
};

//hello world
export default Navbar;
