import React, { useState } from "react";
import {
    ComposedChart,
    Line,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";

const data = {
    day: [
        { name: "Mon", profit: 4000 },
        { name: "Tue", profit: 3000 },
        { name: "Wed", profit: 2000 },
        { name: "Thu", profit: 2780 },
        { name: "Fri", profit: 1890 },
        { name: "Sat", profit: 1890 },
        { name: "Sun", profit: 3490 }
    ],
    month: [
        { name: "Jan", profit: 40000 },
        { name: "Feb", profit: 30000 },
        { name: "Mar", profit: 20000 },
        { name: "Apr", profit: 27800 },
        { name: "May", profit: 18900 },
        { name: "Jun", profit: 18900 },
        { name: "Jul", profit: 34900 },
        { name: "Aug", profit: 27800 },
        { name: "Sep", profit: 18900 },
        { name: "Oct", profit: 28900 },
        { name: "Nov", profit: 34900 },
        { name: "Dec", profit: 45900 }
    ],
    year: [
        { name: "2020", profit: 240000 },
        { name: "2021", profit: 300000 },
        { name: "2022", profit: 350000 },
        { name: "2023", profit: 400000 }
    ],
};

const Barchart = () => {
    const [timeFrame, setTimeFrame] = useState("day");

    return (
        <div className="flex justify-center items-center">
            <div className="my-8 bg-white shadow-md rounded-lg p-4 ">
                <div className="flex justify-end">
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
                <div>
                    <ComposedChart
                        width={1200}
                        height={400}
                        data={data[timeFrame]}
                        margin={{
                            top: 20,
                            right: 20,
                            bottom: 20,
                            left: 20
                        }}
                    >
                        <CartesianGrid stroke="#f5f5f5" />
                        <XAxis dataKey="name" scale="band" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="profit" barSize={20} fill="#413ea0" />
                        <Line type="monotone" dataKey="profit" stroke="#ff7300" name={timeFrame} />
                    </ComposedChart>
                </div>
            </div>
        </div>
    );
}

export default Barchart;
