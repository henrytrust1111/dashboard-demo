"use client";

import React from "react";
import { LuMaximize2 } from "react-icons/lu";

interface Request {
  branch: string;
  type: string;
  quantity: number;
  status: "Ready" | "In Progress" | "Acknowledged" | "Pending";
}

const requests: Request[] = [
  { branch: "Corporate", type: "Instant", quantity: 10, status: "Ready" },
  {
    branch: "Corporate",
    type: "Personalized",
    quantity: 10,
    status: "In Progress"
  },
  {
    branch: "Corporate",
    type: "Personalized",
    quantity: 10,
    status: "Acknowledged"
  },
  { branch: "Corporate", type: "Instant", quantity: 10, status: "Pending" }
];

const statusStyles: Record<Request["status"], string> = {
  Ready: "bg-green-100 text-green-700",
  "In Progress": "bg-yellow-100 text-yellow-700",
  Acknowledged: "bg-blue-100 text-blue-700",
  Pending: "bg-gray-100 text-gray-700"
};

export function RecentRequestsTable() {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-4 flex flex-col space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium text-[#121212]">
          Recent Card Requests
        </h3>
        <LuMaximize2
          size={20}
          className="text-[#D0D5DD] hover:text-gray-600 cursor-pointer"
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto no-scrollbar">
        <table className="w-full text-left">
          <thead className="bg-[#F1F7FF]">
            <tr>
              {["Branch", "Card Type", "Quantity", "Status", "Action"].map(
                (heading) => (
                  <th
                    key={heading}
                    className="px-4 py-2 text-sm font-medium text-gray-500 capitalize tracking-wide"
                  >
                    {heading}
                  </th>
                )
              )}
            </tr>
          </thead>

          <tbody>
            {requests.map((req, idx) => (
              <tr
                key={idx}
                className="border-b last:border-b-0 border-gray-200"
              >
                <td className="px-4 py-4 text-sm text-gray-700">
                  {req.branch}
                </td>
                <td className="px-4 py-4 text-sm text-gray-700">{req.type}</td>
                <td className="px-4 py-4 text-sm text-gray-700">
                  {req.quantity}
                </td>
                <td className="px-4 py-4">
                  <span
                    className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${
                      statusStyles[req.status]
                    }`}
                  >
                    {req.status}
                  </span>
                </td>
                <td className="px-4 py-4 text-sm">
                  <button className="text-blue-600 hover:underline font-medium">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
