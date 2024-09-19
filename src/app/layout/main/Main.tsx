import Delete from "@/app/component/Delete";
import GetPersonal from "@/app/component/GetPersonal";

import Header from "@/app/component/Header/Header";
import React from "react";

const Main = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-[800px] h-[148px] gap-[16px]">
        <Header />
      </div>

      <div className="w-[800px] h-[484px] gap-[16px] flex flex-col ">
        <GetPersonal />

        <div className="flex items-center mb-5 mt-52 md:mt-2 sm:mt-32 xs:mt-24">
          <input
            type="checkbox"
            className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            id="showProfileCheckbox"
          />
          <div className="ml-2 text-[15px] text-center">
            Show my profile to serious employers on
            <span className="text-[#1688FE]"> hirethesbest.io </span> for free
          </div>
        </div>

        <Delete />
      </div>
    </div>
  );
};

export default Main;
