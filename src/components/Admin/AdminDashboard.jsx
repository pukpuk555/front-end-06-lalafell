// AdminDashboard.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminNavbar from './AdminNavbar';
import AdminSidebar from './AdminSidebar';

const AdminDashboard = () => {
    return (
        <div className="flex">
            <AdminSidebar />
            <div className="flex-grow">
                <AdminNavbar />
                <div className="p-4">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default AdminDashboard;
