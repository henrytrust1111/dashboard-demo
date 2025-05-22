"use client";

import React, { useState } from "react";
import { FiMenu, FiBell, FiSearch } from "react-icons/fi";
import { useMyContext } from "@/context";
import Image from "next/image";

const Header: React.FC = () => {
  const { setIsOpen } = useMyContext();
  const [user] = useState({
    firstName: "John",
    lastName: "Doe",
    role: "Administrator",
    imageUrl: ""
  });

  const renderAvatar = () => {
    if (user.imageUrl) {
      return (
        <Image
          src={user.imageUrl}
          alt={`${user.firstName} ${user.lastName}`}
          className="w-10 h-10 rounded-full object-cover"
          width={40}
          height={40}
          priority
        />
      );
    }
    const initials = `${user.firstName.charAt(0)}${user.lastName.charAt(
      0
    )}`.toUpperCase();
    return (
      <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-700 font-semibold">
        {initials}
      </div>
    );
  };

  return (
    <header className="fixed top-0 left-0 right-0 md:pl-72 z-10 flex items-center justify-between bg-white h-16 px-4">
      {/* Left: Menu toggle + Greeting */}
      <div className="flex items-center space-x-4">
        <button
          className="md:hidden text-gray-700 hover:text-gray-900"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <FiMenu size={24} />
        </button>
        <div className="hidden md:flex items-center gap-3">
          <Image alt="home" src={"/home.svg"} width={20} height={20} />
          <p className="text-xs text-[#001735] font-medium">Dashboard</p>
        </div>
      </div>

      {/* Right: Search, Notification, User */}
      <div className="flex items-center space-x-6">
        {/* Search input */}
        <div className="relative hidden sm:block">
          <FiSearch
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#344054]"
            size={18}
          />
          <input
            type="text"
            placeholder="Search"
            className="pl-10 pr-4 py-2 w-48 text-xs border border-[#D0D5DD] shadow-[#1018280D] text-[#344054] rounded-4xl focus:outline-none placeholder:text-[#344054]"
          />
        </div>

        {/* Notification bell */}
        <button
          className="relative text-[#475467] hover:text-gray-900"
          aria-label="Notifications"
        >
          <FiBell size={20} />
          {/* <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-500 rounded-full" /> */}
        </button>

        {/* Divider */}
        <div className="h-6 w-px bg-gray-200" />

        {/* User avatar and info */}
        <div className="flex items-center space-x-2">
          {renderAvatar()}
          <div className="hidden md:flex flex-col leading-tight">
            <span className="font-medium truncate max-w-[12ch]">
              {user.firstName} {user.lastName}
            </span>
            <span className="text-xs text-gray-500 capitalize">
              {user.role}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
