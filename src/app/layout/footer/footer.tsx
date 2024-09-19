import Image from "next/image";
import React from "react";
import img from "../../../../public/image.png";
import { Settings } from "lucide-react";
const Footer = () => {
  return (
    <div className="flex justify-between items-center ">
      <div className="flex items-center space-x-3">
        <Image
          src={img}
          alt="Profile"
          height={40}
          width={40}
          className="rounded-full aspect-square object-cover"
        />
        <span className="text-gray-800 font-medium">Carla</span>
      </div>
      <div>
        <Settings size={25} color="#000000" strokeWidth={2} />
      </div>
    </div>
  );
};

export default Footer;
