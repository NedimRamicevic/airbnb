"use client"
import { BiSearch } from "react-icons/bi";
const Search = () => {
    return(
        <div className=" border-[1px] w-full transition cursor-pointer rounded-full py-2 shadow-sm hover:shadow-md md:w-auto">
            <div className="flex flex-row items-center justify-between">
                <div className="text-sm font-semibold px-6">
                    Search
                </div>
                <div className=" hidden sm:block text-sm font-semibold px-8 border-x-[1px] flex-1 text-center">
                    Any Week
                </div>
                <div className=" text-sm pl-6 pr-2 text-gray-600 flex flex-row items-center gap-3">
                    <div className=" hidden sm:block">Add Guest</div>
                    <div className=" p-2 bg-red-500 text-white rounded-full">
                        <BiSearch/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search;