// AdminDashboard.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminNavbar from './AdminNavbar';
import AdminSidebar from './AdminSidebar';
import LineChartDashboard from './LineChartDashboard';
import Barchart from './BarChart';
import StatisticsCard from './StatisticsCard';


const AdminDashboard = () => {
    return (
        <div className="flex">
            <AdminSidebar />
            <div className="flex-grow">
                <AdminNavbar />
                <div className="flex justify-center items-center flex-col mx-auto">
                    <StatisticsCard />
                    <LineChartDashboard />
                    <Barchart />
                </div>
                <div>
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default AdminDashboard;

