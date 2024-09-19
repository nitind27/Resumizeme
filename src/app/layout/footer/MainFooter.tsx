import React from "react";

const MainFooter = () => {
  return (
    <div className="fixed bottom-0 bg-white">
      <div className="border-t border-gray-300 mx-auto w-[800px]">
        <div className="mt-3 flex justify-start gap-10 text-[14px] text-[#595964] py-4">
          <div>Terms & Conditions</div>
          <div>Privacy Policy</div>
          <div>FAQ</div>
          <div>Contact Us</div>
        </div>
      </div>
    </div>
  );
};

export default MainFooter;
