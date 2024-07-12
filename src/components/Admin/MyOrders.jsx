import { useState } from "react";

const MyOrders = () => {
    const [selectedTab, setSelectedTab] = useState("All");
    const [orderID, setOrderID] = useState("");
    const [shippingChannel, setShippingChannel] = useState("");
    const [orders, setOrders] = useState([]);
    const [selectedDelivery, setSelectedDelivery] = useState('Shipping Channel');

    const handleApplyFilters = () => {
        // Filter logic can be implemented here
        console.log("Filters applied:", { orderID, shippingChannel });
    };

    const handleResetFilters = () => {
        setOrderID("");
        setShippingChannel("");
    };

    const handleExport = () => {
        // Export logic can be implemented here
        console.log("Export clicked");
    };

    const handleExportHistory = () => {
        // Export history logic can be implemented here
        console.log("Export History clicked");
    };

    const handleSelectDelivery = (delivery) => {
        setSelectedDelivery(delivery);
    };

    return (
        <div className="container mx-auto mt-40 w-[60%] p-4">
            <h2 className="text-2xl font-bold mb-4">My Orders</h2>
            <div className="flex justify-between text-lg font-semibold items-center mb-8 py-4 px-6 border-2">
                {['Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled',]
                    .map((item) => (
                        <button
                            key={item}
                            onClick={() => setSelectedTab(item)}
                            className={`px-4 py-2 ${selectedTab === item ? "text-red-500 border-b-2 border-red-500" : ""
                                }`}
                        >
                            {item}
                        </button>
                    ))}
            </div>
            <div className="flex justify-between gap-4 bg-white  items-center mb-4">
                <div className="flex items-center border border-gray-300 rounded-lg">
                    <span className="w-64 p-4 text-lg font-semibold">Order ID</span>
                    <input
                        type='text'
                        value={orderID}
                        onChange={(e) => setOrderID(e.target.value)}
                        placeholder='Enter Order ID'
                        className='bg-transparent  focus:outline-none w-full'
                        aria-label='Search products'
                    />
                </div>
                <div className="dropdown dropdown-hover">
                    <div tabIndex={0} role="button" className="btn m-1 w-80 h-16 text-lg font-semibold bg-white border-2 border-gray-300">
                        {selectedDelivery}
                    </div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-80 p-2 text-lg shadow-lg">
                        <li><a onClick={() => handleSelectDelivery('Thailand Post')}>Thailand Post</a></li>
                        <li><a onClick={() => handleSelectDelivery('Kerry')}>Kerry</a></li>
                        <li><a onClick={() => handleSelectDelivery('Flash Express')}>Flash Express</a></li>
                        <li><a onClick={() => handleSelectDelivery('J&T Express')}>J&T Express</a></li>
                    </ul>
                </div>
                <button
                    onClick={handleApplyFilters}
                    className="border border-gray-300 px-6 py-4 rounded-lg hover:bg-black hover:text-white"
                >
                    Apply
                </button>
                <button
                    onClick={handleResetFilters}
                    className="border border-gray-300 px-6 py-4 rounded-lg hover:bg-black hover:text-white"
                >
                    Reset
                </button>
            </div>
            <div>
                <p className="text-2xl font-bold mt-8 mb-8">Orders</p>
                <table className="w-full text-left table-auto border-collapse border border-gray-200">
                    <thead>
                        <tr>
                            {[
                                "Product(s)",
                                "Order Total",
                                "Status",
                                "Countdown",
                                "Shipping Channel",
                                "Actions",
                            ].map((header) => (
                                <th
                                    key={header}
                                    className="border border-gray-200 px-4 py-4 text-lg font-semibold text-center"
                                >
                                    {header}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {orders.length === 0 ? (
                            <tr>
                                <td
                                    colSpan={6}
                                    className="border border-gray-200 text-center py-8"
                                >
                                    <div className="flex flex-col items-center">
                                        <svg
                                            className="w-12 h-12 text-gray-400 mb-2"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M9 17v-2a2 2 0 00-2-2H5a2 2 0 00-2 2v2m16-6V7a2 2 0 00-2-2h-3.586a1 1 0 01-.707-.293l-1.414-1.414A1 1 0 0011.586 3H8a2 2 0 00-2 2v6m16 4v2a2 2 0 01-2 2h-3a2 2 0 01-2-2v-2m0 0a2 2 0 00-2-2H9a2 2 0 00-2 2v2m16-6V9a2 2 0 00-2-2h-3a2 2 0 00-2 2v2m0 0a2 2 0 01-2 2h-3a2 2 0 01-2-2V9a2 2 0 012-2h3a2 2 0 012 2v2m-6 0v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2"
                                            ></path>
                                        </svg>
                                        <p className="text-gray-500">No Orders Found</p>
                                    </div>
                                </td>
                            </tr>
                        ) : (
                            orders.map((order) => (
                                <tr key={order.id}>
                                    <td className="border border-gray-200 px-4 py-2">{order.product}</td>
                                    <td className="border border-gray-200 px-4 py-2">{order.total}</td>
                                    <td className="border border-gray-200 px-4 py-2">{order.status}</td>
                                    <td className="border border-gray-200 px-4 py-2">{order.countdown}</td>
                                    <td className="border border-gray-200 px-4 py-2">{order.shippingChannel}</td>
                                    <td className="border border-gray-200 px-4 py-2">{order.actions}</td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;
