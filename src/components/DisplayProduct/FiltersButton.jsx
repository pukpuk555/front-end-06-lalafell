import { useState } from "react"
import { CiCircleChevRight, CiViewList, CiDeliveryTruck } from "react-icons/ci";
import SearchBar from "./SearchBar";
import FiltersProductType from "./FiltersProductType";
import FiltersPrice from "./FiltersPrice";
const FilterButton = () => {
    const [nav, setNav] = useState(false);

    return (
        <div className="shadow-lg ">
            <div className={nav ? 'fixed flex-col top-0 py-24 lg:py-40 left-0 w-[300px] lg:w-[380px] h-full bg-white z-10 duration-300' : 'fixed top-0 py-24 lg:py-40 left-[-280px] w-[300px] lg:left-[-350px] lg:w-[380px] h-screen bg-white z-10 duration-300'}>
                <CiCircleChevRight onClick={() => setNav(!nav)} className='absolute right-[-30px] top-28 lg:top-40 cursor-pointer text-4xl hover:bg-black hover:text-white hover:rounded-full' />
                <h3 className="text-2xl font-bold px-8 lg:mx-8">Filter</h3>
                <div className='flex flex-col px-8 lg:pl-14'>
                    <SearchBar />
                    <FiltersProductType />
                    <FiltersPrice />
                </div>

            </div>
        </div>
    );
}

export default FilterButton;