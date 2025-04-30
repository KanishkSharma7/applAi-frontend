"use client";

import Image from "next/image";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Monday",
    Present: 50,
    Absent: 3,
  },
  {
    name: "Tuesday",
    Present: 41,
    Absent: 12,
  },
  {
    name: "Wednesday",
    Present: 12,
    Absent: 41,
  },
  {
    name: "Thursday",
    Present: 30,
    Absent: 23,
  },
  {
    name: "Friday",
    Present: 44,
    Absent: 9,
  },
];

const AttendanceChart = () => {
  return (
    <div className="bg-white rounded-lg p-4 h-full">
      <div className="flex items-center justify-between">
        <h1 className="font-lg font-semibold">Attendance</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart width={500} height={300} data={data} barSize={20}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd"/>
          <XAxis dataKey="name" axisLine={false} tick={{ fill: "#d1d5db" }} tickLine={false}/>
          <YAxis axisLine={false} tick={{ fill: "#d1d5db" }} tickLine={false}/>
          <Tooltip contentStyle={{ borderRadius:"10px", borderColor: "lightgray" }}/>
          <Legend align="left" verticalAlign="top" wrapperStyle={{paddingTop:"20px", paddingBottom:"40px"}}/>
          <Bar
            dataKey="Present"
            fill="#FAE27C"
            legendType="circle"
            radius={[10, 10, 0, 0]}
          />
          <Bar
            dataKey="Absent"
            fill="#C3EBFA"
            legendType="circle"
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AttendanceChart;
