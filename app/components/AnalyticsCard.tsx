"use client";

import React from "react";
import Image from "next/image";

const cardData = [
  {
    icon: "icons/analytics/credit-card-check.svg",
    title: "Total Active Cards",
    value: "26,478",
    change: "+9%",
    subtitle: "this month",
    changeColor: "bg-[#EFFAF6] text-[#29A174]"
  },
  {
    icon: "icons/analytics/credit-card-edit.svg",
    title: "Total Personalized Cards",
    value: "15,703",
    change: "8.5%",
    subtitle: "this month",
    changeColor: "bg-[#EFFAF6] text-[#29A174]"
  },
  {
    icon: "icons/analytics/bank-note.svg",
    title: "Today’s Revenue",
    value: "₦9.3M",
    change: "+6%",
    subtitle: "vs yesterday",
    changeColor: "bg-[#EFFAF6] text-[#29A174]"
  },
  {
    icon: "icons/analytics/hourglass.svg",
    title: "Pending Requests",
    value: "38",
    subtitle: "Requires attention",
    attention: true
  }
];

export const AnalyticsCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="bg-white border border-[#E2E2E2] rounded-xl p-2 flex flex-col gap-2"
        >
          <div className="text-sm font-medium text-[#0000008F]">
            {/* {card.icon} */}
            <Image
              src={card.icon}
              alt={card.title}
              width={20}
              height={20}
              className="object-contain w-5 h-5"
            />
            {card.title}
          </div>

          <div className="flex justify-between items-center">
            <div className="text-2xl font-semibold text-[#121212]">
              {card.value}
            </div>

            {card.attention ? (
              <div className="flex items-center gap-1 text-xs text-[#E78020] font-medium">
                {/* <span className="w-2 h-2 border border-[#E78020] bg-[#E78020] rounded-full"></span> */}
                <Image
                  src="icons/analytics/alert-circle.svg"
                  alt="alert-circle"
                  width={20}
                  height={20}
                  className="object-contain w-2 h-2"
                />
                {card.subtitle}
              </div>
            ) : (
              <div className="flex items-center gap-1 text-sm text-[#0000008F]">
                <div
                  className={`${card.changeColor} rounded-[4px] flex items-center gap-1 p-0.5 text-xs`}
                >
                  <Image
                    src="icons/analytics/arrow-narrow-up-right.svg"
                    alt="alert-circle"
                    width={20}
                    height={20}
                    className="object-contain w-2 h-2"
                  />
                  <span className={`font-medium `}>{card.change}</span>
                </div>
                <span>{card.subtitle}</span>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
