// AdminDashboard.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminNavbar from '../components/Admin/AdminNavbar';
import AdminSidebar from '../components/Admin/AdminSidebar';



const AdminPage = () => {
    return (
        <div className="flex">
            <AdminSidebar />
            <div className="flex-grow">
                <AdminNavbar />
                <div className="flex justify-center items-center flex-col mx-auto">
                </div>
                <div>
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default AdminPage;

