import { useState } from "react";

const StatisticsCard = () => {
    const [revenue, setRevenue] = useState(0);
    const [sales, setSales] = useState(0);
    const [orders, setOrders] = useState(0);
    const [customers, setCustomers] = useState(0);

    return (
        <div className="flex flex-wrap gap-6 justify-between mt-40 mb-8 ">
            <div className="bg-white rounded-lg shadow-md p-4 flex flex-col w-72 md:w-[280px] h-36 md:h-[150px] border-t-4 border-t-blue-500">
                <h3 className="font-bold text-xl">Revenue</h3>
                <span className="font-bold text-4xl my-2">${revenue}</span>
                <span className="text-xl"><span className="text-green-500 mx-2">{0}%</span>%month over month</span>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4 flex flex-col w-72 md:w-[280px] h-36 md:h-[150px] border-t-4 border-t-red-500">
                <h3 className="font-bold text-xl">Sales</h3>
                <span className="font-bold text-4xl my-2">${sales}</span>
                <span className="text-xl"><span className="text-green-500 mx-2">{0}%</span>month over month</span>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4 flex flex-col w-72 md:w-[280px] h-36 md:h-[150px] border-t-4 border-t-green-600">
                <h3 className="font-bold text-xl">Orders</h3>
                <span className="font-bold text-4xl my-2">{orders}</span>
                <span className="text-xl"><span className="text-green-500 mx-2">{0}%</span>% month over month</span>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4 flex flex-col w-72 md:w-[280px] h-36 md:h-[150px] border-t-4 border-t-yellow-400">
                <h3 className="font-bold text-xl">Customers</h3>
                <span className="font-bold text-4xl my-2">{customers}</span>
                <span className="text-xl"><span className="text-green-500 mx-2">{0}%</span> % month over month</span>
            </div>

        </div>
    );
};

export default StatisticsCard;
