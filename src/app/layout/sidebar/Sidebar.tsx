"use client";
import React, { useState } from "react";
import Cart from "@/assets/svg/Cart";
import Logo from "@/assets/svg/Logo";
import Search from "@/assets/svg/Search";
import SidebarMenu from "./SidebarMenu";
import Board from "@/assets/svg/Board";
import SidebarBoardMenu from "./SidebarBoardMenu";
import Footer from "../footer/footer";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button onClick={toggleSidebar}>
          <span className="text-3xl">&#9776;</span>
        </button>
      </div>

      <div
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out
        ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 flex flex-col`}
        style={{ maxWidth: "16rem" }}
      >
        <div className="flex items-center p-4 border-b">
          <Logo />
          <span className="text-xl font-bold ml-[-50px]">Resumizeme</span>
          <button className="ml-auto md:hidden" onClick={toggleSidebar}>
            &#10005;
          </button>
        </div>

        <div className="flex-1 p-4 space-y-4 overflow-y-auto cursor-pointer">
          <div className="flex items-center hover:bg-gray-100 cursor-pointer">
            <Cart />
            <span className="ml-2 font-semibold">My templates</span>
          </div>
          <div className="flex items-center hover:bg-gray-100 cursor-pointer">
            <Search />
            <span className="ml-2 font-semibold">Search</span>
          </div>
          <SidebarMenu />
          <div className="flex items-center hover:bg-gray-100 cursor-pointer">
            <Board />
            <span className="ml-2 font-semibold">My boards</span>
          </div>
          <SidebarBoardMenu />
        </div>

        <div className="border-t p-3">
          <Footer />
        </div>
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
};

export default Sidebar;
