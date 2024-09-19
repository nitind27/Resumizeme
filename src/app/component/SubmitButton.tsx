import React from "react";

const SubmitButton = () => {
  return (
    <div>
      <button
        style={{ backgroundColor: "#1688FE" }}
        className="w-[170px] h-[40px] text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Save
      </button>
    </div>
  );
};

export default SubmitButton;
