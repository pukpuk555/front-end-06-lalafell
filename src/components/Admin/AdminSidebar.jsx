import { useState } from "react";
import { VscChevronDown, VscChevronUp } from "react-icons/vsc";
import { CiCircleChevRight, CiViewList, CiDeliveryTruck } from "react-icons/ci";
import { Link } from "react-router-dom";


const AdminSidebar = () => {
    const [nav, setNav] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <div className="shadow-lg ">
            <div className={nav ? 'fixed flex-col top-32 left-0 w-[300px] h-full bg-white z-10 duration-300' : 'fixed top-32 left-[-250px] w-[300px] h-screen bg-white z-10 duration-300'}>
                <CiCircleChevRight onClick={() => setNav(!nav)} className='absolute right-[-30px] top-4 cursor-pointer text-3xl hover:bg-black hover:text-white hover:rounded-full' />
                <nav>
                    <ul className='flex flex-col pl-16 pr-10  my-2'>
                        <li className='text-xl font-bold px-2 py-2 gap-2 flex items-center cursor-pointer hover:bg-base-200 rounded-lg' onClick={() => setDropdownOpen(!dropdownOpen)}>
                            <CiViewList className='text-2xl' />
                            Orders
                            {dropdownOpen ? <VscChevronUp className='ml-auto' /> : <VscChevronDown className='ml-auto' />}
                        </li>
                        {dropdownOpen && (
                            <ul className=''>
                                <li className='text-lg py-2 pl-10 rounded-lg hover:bg-base-200'>My Order</li>
                                <li className='text-lg py-2 pl-10 rounded-lg hover:bg-base-200'>Mass Ship</li>
                                <li className='text-lg py-2 pl-10 rounded-lg hover:bg-base-200'>Cancellation</li>
                            </ul>
                        )}
                    </ul>
                    <ul className='flex flex-col pl-16 pr-10  my-2'>
                        <li className='text-xl font-bold px-2 py-2 gap-2  flex items-center cursor-pointer hover:bg-base-200 rounded-lg' onClick={() => setDropdownOpen(!dropdownOpen)}>
                            <CiDeliveryTruck className='text-2xl' />
                            Product
                            {dropdownOpen ? <VscChevronUp className='ml-auto' /> : <VscChevronDown className='ml-auto' />}
                        </li>
                        {dropdownOpen && (
                            <ul className=''>
                                <li className='text-lg py-2 pl-10 rounded-lg hover:bg-base-200'>My Product</li>
                                <li className='text-lg py-2 pl-10 rounded-lg hover:bg-base-200'>
                                    <Link to="/admin/add-new-product">Add New Product</Link>
                                </li>
                            </ul>
                        )}
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default AdminSidebar;
