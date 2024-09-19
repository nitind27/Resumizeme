
import React from "react";

const Delete = () => {
  return (
    <div className="w-[800px] h-[124px] gap-4 rounded border-l border-r border-t border-b border-gray-300 ">
      <div className="p-4">
        <h2 className="text-lg font-semibold">Delete account</h2>
        <p className="mt-2">
          If you delete your account you’ll be permanently removing it from our
          systems - you can’t undo it.
        </p>
        <p className="mt-4 text-[#F25773]">Yes, Delete my account</p>
      </div>
      <div className="text-sm text-gray-600 mt-5">
        <span className="text-[#1688FE]">
          Get in touch with our support team
        </span>{" "}
        if you have any questions or want to leave some feedback.
        <p>We’ll be happy to hear from you.</p>
      </div>
    </div>
  );
};

export default Delete;
