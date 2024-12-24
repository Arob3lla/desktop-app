import React, { useEffect, useState } from "react";
import { fetchAllUsers } from "./apis/user";

function App() {
  return (
    <>
      <div className="App bg-gray-200 min-h-screen overflow-y-auto text-black">
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gray-200">
          <div className="absolute bottom-0 right-0 w-1/2 h-40 bg-black clip-diagonal"></div>
        </div>
      </div>
    </>
  );
}

export default App;
