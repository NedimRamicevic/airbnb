"use client"
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import {useState} from 'react'
import MenuItem from "./MenuItem";

const UserMenu = () => {
    const [showMenu, setShowMenu] = useState(false)

    const handleShowMenu = () => {
        setShowMenu(!showMenu)
    }
    return(
        <div className="relative">
            <div className="flex flex-row items-center gap-3">
                <div className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer" onClick={()=>{}}>
                    Your Home
                </div>
                <div onClick={handleShowMenu}
                 className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-100 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition">
                    <AiOutlineMenu className="text-2xl"/>
                </div>
                <div className="hidden md:block">
                    <Avatar/>
                </div>
            </div>
            {showMenu && (
                <div className=" absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
                    <div className="flex flex-col cursor-pointer">
                        <>
                            <MenuItem onclick={()=>{}} label="Login" />
                            <MenuItem onclick={()=>{}} label="Sign-Up" />
                        </>
                    </div>
                </div>)}
        </div>
    )
}

export default UserMenu;