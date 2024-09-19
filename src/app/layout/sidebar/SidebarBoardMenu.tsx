import Image from "next/image";
import React from "react";

const boards = [
  { title: "Board 1", image: "/file.png" },
  { title: "Board 2", image: "/file.png" },
  { title: "Board 3", image: "/file.png" },
  { title: "Board agent 1", image: "/lock.png" },
  { title: "Board agent 2", image: "/lock.png" },
  { title: "Board agent 3", image: "/lock.png" },
];

const SidebarBoardMenu = () => {
  return (
    <div className="text-[13px]">
      <div className="space-y-3">
        {boards.map((boardsName, index) => (
          <div
            key={index}
            className="flex items-center hover:bg-gray-200 rounded transition duration-200"
          >
            <Image
              src={boardsName.image}
              alt={boardsName.title}
              className="w-[16px] h-[16px] mr-3"
              width={16}
              height={16}
            />
            <span className="text-gray-800">{boardsName.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SidebarBoardMenu;