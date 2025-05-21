"use client";
import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { RiRadioButtonFill } from "react-icons/ri";

const data = [
  { name: "Active", value: 1200 },
  { name: "Expired", value: 340 },
  { name: "Inactive", value: 120 },
  { name: "Blocked", value: 80 },
  { name: "Lost", value: 50 }
];

const COLORS = ["#14B8A6", "#F59E0B", "#2563EB", "#A855F7", "#EF4444"];

export function StatusDistributionChart() {
  const total = data.reduce((sum, entry) => sum + entry.value, 0);

  return (
    <div className="bg-white rounded-2xl shadow p-4 flex flex-col h-[400px]">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-semibold text-gray-900">
          Card Status Distribution
        </h3>
      </div>
      {/* Chart Area */}
      <div className="relative flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              width={2}
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              // innerRadius={80}
              // outerRadius={100}
              // startAngle={90}
              // endAngle={-270}
              // paddingAngle={2}
              innerRadius={90}
              outerRadius={100}
              startAngle={100}
              endAngle={460}
              paddingAngle={1}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: "#FFFFFF",
                borderRadius: 8,
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
              }}
              labelStyle={{ fontSize: 12, color: "#4A5568" }}
              itemStyle={{ fontSize: 14 }}
            />
          </PieChart>
        </ResponsiveContainer>
        {/* Center Label */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <span className="text-gray-500 text-sm">Total Cards</span>
          <span className="text-2xl font-bold text-gray-900">
            {total.toLocaleString()}
          </span>
        </div>
      </div>
      {/* Legend */}
      <div className="w-full flex items-center justify-center mt-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 justify-items-center place-items-center max-w-[400px] w-full">
          {data.map((entry, idx) => (
            <div key={entry.name} className="flex items-center space-x-2">
              <RiRadioButtonFill size={12} style={{ color: COLORS[idx] }} />
              <span className="text-sm text-gray-600">{entry.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
