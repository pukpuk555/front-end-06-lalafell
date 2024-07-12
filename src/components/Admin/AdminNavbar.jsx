
const AdminNavbar = () => {

    return (
        <div className="navbar py-8 fixed top-0 left-0 right-0 bg-white z-50 shadow-lg">
            <div className="flex-1  ml-10">
                <a className="text-3xl font-bold mx-2">Lalafell Keyboard</a>
            </div>
            <div className="flex-none gap-8 mx-10">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src="public\admin profile-outline.png" />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li>
                            <a className="justify-between">Profile</a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default AdminNavbar;