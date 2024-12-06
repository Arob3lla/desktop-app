import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-slate-700">
        <div className="flex-1">
          <span className="font-bold">DESKTOP APP</span>
        </div>
        <div className="flex-1">
          <Link to="/createUser">
            {" "}
            <span className="font-bold">Add new</span>
          </Link>
        </div>
        <div className="flex-1">
          <Link to="/allusers">
            {" "}
            <span className="font-bold">All Tenats</span>
          </Link>
        </div>
        <div className="flex-1">
          <Link to="/pendingdues">
            {" "}
            <span className="font-bold">Pending dues</span>
          </Link>
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
