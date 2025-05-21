'use client';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';
import { LuMaximize2 } from 'react-icons/lu';

const data = [
  { day: 'Mon', income: 50 },
  { day: 'Tue', income: 40 },
  { day: 'Wed', income: 38 },
  { day: 'Thu', income: 55 },
  { day: 'Fri', income: 58 },
  { day: 'Sat', income: 25 },
  { day: 'Sun', income: 78 },
];

export function IncomeChart() {
  return (
    <div className="bg-white rounded-2xl shadow p-4 flex flex-col h-[400px]">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-medium text-[#121212]">This Week’s Income</h3>
        <LuMaximize2 size={20} className="text-[#D0D5DD] hover:text-gray-600 cursor-pointer" />
      </div>
      {/* Chart */}
      <div className="flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
            {/* Drop shadow filter */}
            <defs>
              <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#01A4AF78" />
              </filter>
            </defs>
            {/* Hide grid except horizontal */}
            <CartesianGrid vertical={false} stroke="#EDF2F7" />
            {/* X Axis */}
            <XAxis
              dataKey="day"
              tick={{ fill: '#4A5568', fontSize: 14 }}
              axisLine={false}
              tickLine={false}
              padding={{ left: 10, right: 10 }}
            />
            {/* Y Axis */}
            <YAxis
            width={35}
              tick={{ fill: '#A0AEC0', fontSize: 12 }}
              axisLine={false}
              tickLine={false}
              domain={[0, 100]}
              ticks={[0, 20, 40, 60, 80, 100]}
            />
            {/* Tooltip */}
            <Tooltip
              contentStyle={{ backgroundColor: '#FFFFFF', borderRadius: 8, boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}
              labelStyle={{ fontSize: 12, color: '#4A5568' }}
              itemStyle={{ fontSize: 14, color: '#2F855A' }}
            />
            {/* Line with custom color and drop shadow */}
            <Line
              type="monotone"
              dataKey="income"
              stroke="#4DAF01"
              strokeWidth={1}
              dot={false}
              activeDot={{ r: 5, fill: '#4DAF01', strokeWidth: 0 }}
              filter="url(#shadow)"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
