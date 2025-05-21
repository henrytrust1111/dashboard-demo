"use client";

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";
// import { FiExpand } from 'react-icons/fi';
import { LuMaximize2 } from "react-icons/lu";

interface DataPoint {
  month: string;
  Instant: number;
  Personalized: number;
}

const data: DataPoint[] = [
  { month: "May", Instant: 40, Personalized: 10 },
  { month: "Jun", Instant: 50, Personalized: 20 },
  { month: "Jul", Instant: 25, Personalized: 5 },
  { month: "Aug", Instant: 50, Personalized: 10 },
  { month: "Sep", Instant: 40, Personalized: 10 },
  { month: "Oct", Instant: 55, Personalized: 18 },
  { month: "Nov", Instant: 65, Personalized: 10 }
];

export function MonthlyIssuanceChart() {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-4 flex flex-col h-[350px]">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-medium text-[#121212]">
          Monthly Issuance
        </h3>
        <LuMaximize2 size={20} className="text-[#D0D5DD] hover:text-gray-600 cursor-pointer" />
      </div>

      {/* Chart */}
      <div className="flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
          >
            <CartesianGrid horizontal stroke="#E5E7EB" vertical={false} />
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#6B7280", fontSize: 14 }}
              padding={{ left: 12, right: 12 }}
            />
            <YAxis
              domain={[0, 100]}
              width={35}
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#6B7280", fontSize: 14 }}
              tickCount={6}
            />
            <Tooltip
              cursor={{ fill: "transparent" }}
              contentStyle={{
                backgroundColor: "white",
                border: "1px solid #E5E7EB",
                borderRadius: "8px",
                boxShadow: "none"
              }}
              labelStyle={{ color: "#6B7280", fontSize: "14px" }}
              itemStyle={{ fontSize: "14px", color: "#111827" }}
            />
            <Bar
              dataKey="Personalized"
              stackId="a"
              fill="#014DAF"
              radius={[4, 4, 0, 0]}
            />
            <Bar
              dataKey="Instant"
              stackId="a"
              fill="#CCE2FF"
              radius={[4, 4, 0, 0]}
            />
            <Legend
              verticalAlign="bottom"
              align="center"
              iconType="circle"
              iconSize={10}
              wrapperStyle={{ paddingTop: 16 }}
              formatter={(value) => (
                <span className="text-gray-600 font-medium text-sm">
                  {value}
                </span>
              )}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

// 'use client';
// import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

// const data = [
//   { month: 'May', Instant: 20, Personalized: 40 },
//   { month: 'Jun', Instant: 25, Personalized: 60 },
//   { month: 'Jul', Instant: 10, Personalized: 30 },
//   { month: 'Aug', Instant: 20, Personalized: 45 },
//   { month: 'Sep', Instant: 25, Personalized: 50 },
//   { month: 'Oct', Instant: 30, Personalized: 55 },
//   { month: 'Nov', Instant: 30, Personalized: 50 },
// ];

// export function MonthlyIssuanceChart() {
//   return (
//     <div className="bg-white p-4 rounded shadow h-[300px]">
//       <h3 className="text-sm font-semibold mb-2">Monthly Issuance</h3>
//       <ResponsiveContainer width="100%" height="100%">
//         <BarChart data={data}>
//           <XAxis dataKey="month" />
//           <YAxis />
//           <Tooltip />
//           <Bar dataKey="Personalized" stackId="a" fill="#8884d8" />
//           <Bar dataKey="Instant" stackId="a" fill="#413ea0" />
//         </BarChart>
//       </ResponsiveContainer>
//     </div>
//   );
// }
