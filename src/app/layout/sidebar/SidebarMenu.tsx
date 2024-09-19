import React from "react";
import { Star } from "lucide-react";
import Clock from "@/assets/svg/Clock";

const professions = [
  { title: "Software Engineer", image: "./star.png" },
  { title: "Computer Hardware Engineer", image: "./star.png" },
  { title: "Network Engineer", image: "./star.png" },
  { title: "Technical Support", image: "./star.png" },
  { title: "Network Administrator", image: "./star.png" },
  { title: "Management", image: "./star.png" },
  { title: "Data Analyst", image: "./star.png" },
  { title: "Computer Technician", image: "./star.png" },
  { title: "Past search 1" },
  { title: "Past search 2" },
  { title: "Computers and information..." },
  { title: "Database Administrator" },
  { title: "Computer security" },
  { title: "Computer Systems Analyst" },
];

const SidebarMenu = () => {
  return (
    <div className="">
      <div className="space-y-3">
        {professions.map((profession, index) => (
          <div
            key={index}
            className="flex items-center hover:bg-gray-200 rounded transition duration-200"
          >
            {profession.image ? (
              <>
                <span className="flex justify-center items-center">
                  <img
                    src={profession.image}
                    alt={profession.title}
                    className="w-[16px] h-[16px] mr-2"
                  />
                </span>
              </>
            ) : (
              <span className="mr-2">
                <Clock />
              </span>
            )}
            <span className="text-gray-800 text-[13px]">
              {profession.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SidebarMenu;
