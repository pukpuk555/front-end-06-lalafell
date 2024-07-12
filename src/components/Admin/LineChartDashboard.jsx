import React, { useState } from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ReferenceLine,
    ReferenceDot,
    ReferenceArea,
} from "recharts";

const data = {
    day: [
        { name: "Monday", revenue: 4000, sales: 2400, orders: 2400, customers: 1500 },
        { name: "Tuesday", revenue: 3000, sales: 1398, orders: 2210, customers: 1500 },
        { name: "Wednesday", revenue: 2000, sales: 9800, orders: 2290, customers: 1500 },
        { name: "Thursday", revenue: 2780, sales: 3908, orders: 2000, customers: 1500 },
        { name: "Friday", revenue: 1890, sales: 4800, orders: 2181, customers: 1500 },
        { name: "Saturday", revenue: 1890, sales: 3800, orders: 2500, customers: 1500 },
        { name: "Sunday", revenue: 3490, sales: 4300, orders: 2100, customers: 1500 },
    ],
    month: [
        { name: "Jan", revenue: 40000, sales: 24000, orders: 24000, customers: 15000 },
        { name: "Feb", revenue: 30000, sales: 13980, orders: 22100, customers: 15000 },
        { name: "Mar", revenue: 20000, sales: 98000, orders: 22900, customers: 15000 },
        { name: "Apr", revenue: 27800, sales: 39080, orders: 20000, customers: 15000 },
        { name: "May", revenue: 18900, sales: 48000, orders: 21810, customers: 15000 },
        { name: "Jun", revenue: 18900, sales: 38000, orders: 25000, customers: 15000 },
        { name: "Jul", revenue: 34900, sales: 43000, orders: 21000, customers: 15000 },
        { name: "Aug", revenue: 27800, sales: 29080, orders: 19000, customers: 15000 },
        { name: "Sep", revenue: 18900, sales: 37000, orders: 24000, customers: 15000 },
        { name: "Oct", revenue: 28900, sales: 49000, orders: 21000, customers: 15000 },
        { name: "Nov", revenue: 34900, sales: 33000, orders: 22000, customers: 15000 },
        { name: "Dec", revenue: 45900, sales: 43000, orders: 21000, customers: 15000 },
    ],
    year: [
        { name: "2020", revenue: 240000, sales: 180000, orders: 140000, customers: 90000 },
        { name: "2021", revenue: 300000, sales: 200000, orders: 160000, customers: 95000 },
        { name: "2022", revenue: 350000, sales: 220000, orders: 180000, customers: 98000 },
        { name: "2023", revenue: 400000, sales: 240000, orders: 200000, customers: 100000 },
    ],
};

const LineChartDashboard = () => {
    const [timeFrame, setTimeFrame] = useState("day");

    // ตรวจสอบข้อมูลที่เกี่ยวข้องกับ timeframe
    console.log("Current TimeFrame:", timeFrame);
    console.log("Data for TimeFrame:", data[timeFrame]);

    return (
        <div className="flex justify-center mx-auto w-full  bg-white  pt-6">
            <div className=" shadow-lg p-4">
                <div className="flex justify-end mb-4 w-full ">
                    <button
                        onClick={() => setTimeFrame("day")}
                        className={`mx-2 py-2 px-4 ${timeFrame === "day" ? "bg-black text-white" : "bg-gray-200"} rounded`}
                    >
                        Day
                    </button>
                    <button
                        onClick={() => setTimeFrame("month")}
                        className={`mx-2 py-2 px-4 ${timeFrame === "month" ? "bg-black text-white" : "bg-gray-200"} rounded`}
                    >
                        Month
                    </button>
                    <button
                        onClick={() => setTimeFrame("year")}
                        className={`mx-2 py-2 px-4 ${timeFrame === "year" ? "bg-black text-white" : "bg-gray-200"} rounded`}
                    >
                        Year
                    </button>
                </div>
                <LineChart width={1200} height={400} data={data[timeFrame]}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" padding={{ left: 0, right: 0 }} />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                        type="monotone"
                        dataKey="revenue"
                        stroke="#3365D3"
                        activeDot={{ r: 8 }}
                    />
                    <Line
                        type="monotone"
                        dataKey="sales"
                        stroke="#E63A26"
                    />
                    <Line
                        type="monotone"
                        dataKey="orders"
                        stroke="#27B46B"
                    />
                    <Line
                        type="monotone"
                        dataKey="customers"
                        stroke="#FDD519"
                    />
                    <ReferenceLine y={12000} ifOverflow="discard" />
                    <ReferenceDot x="Monday" y={4000} ifOverflow="discard" />
                    <ReferenceArea
                        x1="Wednesday"
                        x2="Thursday"
                        y1={1000}
                        y2={7000}
                        ifOverflow="visible"
                        strokeOpacity={0.3}
                    />
                </LineChart>
            </div>

        </div>
    );
}

export default LineChartDashboard;
