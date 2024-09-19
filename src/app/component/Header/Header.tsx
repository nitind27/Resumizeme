import Account from "@/assets/svg/Account";
import React from "react";

const Header = () => {
  return (
    <div className="flex justify-center">
      <div className="bg-primary text-white w-full max-w-[800px] h-auto p-6 flex items-center rounded-lg shadow-lg">
        <div className="flex items-center">
          <Account />
        </div>

        <div className="flex flex-col justify-center ml-4">
          <span className="text-xl md:text-2xl font-semibold">
            Premium Account
          </span>
          <div className="text-sm md:text-base mt-1">
            You have a premium account, granting you access to all the
            remarkable features offered by ResumeDone. With this privilege, you
            can indulge in the freedom of downloading an unlimited number of
            resumes and cover letters in both PDF and Word formats.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
