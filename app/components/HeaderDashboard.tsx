"use client";
import { FiCalendar } from "react-icons/fi";

export function HeaderDashboard() {
  return (
    <div className="flex justify-between items-center mb-4 text-[#121212]">
      <div>
        <h2 className="text-lg font-bold">
          Hi Nazeer, what would you like to do today?
        </h2>
        <p className="text-xs font-normal"><span className="font-medium">Last login:</span> 26/11/2024 14:39:58</p>
      </div>

      <button className="hidden md:flex items-center gap-4 border border-[#D0D5DD] rounded-lg px-4 py-2 outline-none">
        <div className="flex items-center gap-1.5">
          <FiCalendar />
          <span className="text-sm hover:underline ">Today</span>
        </div>
        {/* Divider */}
        <div className="h-4 w-px bg-[#D0D5DD]" />
        {/* Date */}
        <span className="text-sm">11 Nov 2024</span>
      </button>
    </div>
  );
}