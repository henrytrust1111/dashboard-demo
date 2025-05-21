"use client";

import React from "react";
import Image from "next/image";
import { FiChevronRight } from "react-icons/fi";

const items = [
  {
    label: "Manage a Card",
    imageSrc: "/icons/quick-access/credit-card-shield.svg"
  },
  {
    label: "Issue Instant Card",
    imageSrc: "/icons/quick-access/credit-card.svg"
  },
  {
    label: "Issue Personalized Card",
    imageSrc: "/icons/quick-access/credit-card-edit.svg"
  },
  {
    label: "Review Card Requests",
    imageSrc: "/icons/quick-access/credit-card-plus.svg"
  }
];

export function QuickAccess() {
  return (
    <section className="rounded-lg border border-gray-200 bg-white p-4">
      <h2 className="text-base font-medium text-[#121212]">
        Your Quick Access
      </h2>

      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map(({ label, imageSrc }, idx) => (
          <button
            key={idx}
            type="button"
            className="flex-shrink-0 flex w-full max-w-xs items-center gap-3 rounded-lg bg-[#E6F0FF] px-4 py-3 transition hover:bg-[#d4e8ff] focus:outline-none"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#014DAF]">
              <Image
                src={imageSrc}
                alt={label}
                width={20}
                height={20}
                className="object-contain w-5 h-5"
              />
            </span>
            <span className="flex-1 text-sm font-medium text-[#121212] text-left">
              {label}
            </span>
            <FiChevronRight className="text-[#808080] text-lg" />
          </button>
        ))}
      </div>
    </section>
  );
}
