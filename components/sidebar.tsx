import { useEffect, useState } from "react";
import Link from "next/link";
import { TiHome } from "react-icons/ti";
import { FaShapes } from "react-icons/fa6";
import { AiFillAppstore } from "react-icons/ai";
import { FaShop } from "react-icons/fa6";
import { MdLocalOffer } from "react-icons/md";
import { MdSunny } from "react-icons/md";
import { WiMoonFull } from "react-icons/wi";


export default function Sidebar({ isBarOpen, setIsBarOpen, left }: { isBarOpen: boolean, setIsBarOpen: React.Dispatch<React.SetStateAction<boolean>>, left: number[] }) {
    const [isZUp, setIsZUp] = useState(false);
   

    useEffect(() => {
        if (isBarOpen) {
            requestAnimationFrame(() => {
                setIsZUp(true);
            })
        } else {
            setTimeout(() => {
                setIsZUp(false);
            }, 300)
        }
        
        
    }, [isBarOpen])

    function handleThemeChange() {
        
        document.querySelector("html")?.classList.toggle("dark");
    }

    return (
        <div style={{left: left[0], width: left[1]}} onClick={() => isBarOpen && window.innerWidth <= 1280 && setIsBarOpen(false)} className={`fixed  top-14 sm:top-16 xl:top-[76px] bottom-0   overflow-hidden max-xl:!w-full  transition-all duration-300 ${isBarOpen ? " backdrop-blur-lg xl:z-40 xl:backdrop-blur-none bg-black/[0] xl:bg-transparent  dark:xl:bg-transparent dark:bg-white/[0] " : " xl:!w-0"} ${isZUp ? "z-40 " : "-z-50"}`}>
            <div className={`max-xl:container max-xl:mx-auto xl:absolute xl:w-full h-full py-2 px-2 lg:py-4 lg:px-4 `}>
                <div onClick={(e) => e.stopPropagation()} className={`bg-neutral-50 dark:bg-neutral-950  rounded-md transition-all duration-300 overflow-hidden flex flex-col  justify-between   xl:z-40 h-full ${isBarOpen ? "w-2/3 p-6 pb-2 lg:pb-4 md:w-1/2 lg:w-1/3  xl:w-full " : "w-0 "}`}>
                    <div className="flex flex-col w-full">
                        <Link href="/" className={`text-lg lg:text-2xl md:text-xl border-b-black/[0.1]  dark:border-b-white/[0.1] border-b flex w-full gap-3 md:gap-4 items-center p-4 pr-2 pt-1 sm:pb-5 transition-all  ${isBarOpen ? "" : "opacity-0"}`}>
                            <TiHome className="" /> 
                            <div>Home</div>
                        </Link>
                        <Link href="/categories" className={`text-lg lg:text-2xl md:text-xl border-b-black/[0.1]  dark:border-b-white/[0.1] border-b flex w-full gap-3 md:gap-4 items-center p-4 pr-2 sm:py-5 transition-all ${isBarOpen ? "" : "opacity-0"}`}>
                            <FaShapes className="" /> 
                            <div>Categories</div>
                        </Link>
                        <Link href="/products" className={`text-lg lg:text-2xl md:text-xl border-b-black/[0.1]  dark:border-b-white/[0.1] border-b flex w-full gap-3 md:gap-4 items-center p-4 pr-2 sm:py-5 transition-all ${isBarOpen ? "" : "opacity-0"}`}>
                            <AiFillAppstore className="" /> 
                            <div>All products</div>
                        </Link>
                        <Link href="/special-offer" className={`text-lg lg:text-2xl md:text-xl border-b-black/[0.1]  dark:border-b-white/[0.1] border-b flex w-full gap-3 md:gap-4 items-center p-4 pr-2 sm:py-5 transition-all ${isBarOpen ? "" : "opacity-0"}`}>
                            <MdLocalOffer className="" /> 
                            <div>Special offer</div>
                        </Link>
                        <Link href="/my-shop" className={`text-lg lg:text-2xl md:text-xl border-b-black/[0.1]  dark:border-b-white/[0.1]  flex w-full gap-3 md:gap-4 items-center p-4 pb-2 pr-2 sm:py-5 transition-all ${isBarOpen ? "" : "opacity-0"}`}>
                            <FaShop className="" /> 
                            <div>My shop</div>
                        </Link>
                        
                    </div>
                    
                    <div className="flex flex-col w-full items-center gap-4">
                        <button onClick={handleThemeChange} className=" bg-slate-600 relative rounded-full flex transition-all duration-500">
                            <MdSunny className="p-1 rounded-full text-white text-2xl" />
                            <WiMoonFull className="p-1 text-2xl text-white" />
                            <div className="absolute aspect-square transition-all duration-500 h-full  bg-slate-400 flex items-center justify-center rounded-full left-0 dark:left-1/2">
                                <MdSunny className="p-1 rounded-full transition-all duration-500 dark:text-xl text-2xl text-white" />
                                <div className="absolute red-500 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  transition-all duration-500 h-0 w-0 rounded-full dark:h-3 dark:w-3  bg-white"></div>
                            </div>
                        </button>
                        <div className="text-slate-500 text-xs text-center">
                            <a className="hover:text-black dark:hover:text-white transition-all" href="">More info</a>  | <a className="hover:text-black dark:hover:text-white transition-all" href="">Github</a> | <a className="hover:text-black dark:hover:text-white transition-all" href="">Contact</a>  | <a className="hover:text-black dark:hover:text-white transition-all" href="">Help</a> | <a className="hover:text-black dark:hover:text-white transition-all" href="">Contact</a> <br />
                            <span  className="">Copyright 2025 ©</span> 
                        </div>
                        <div className="text-xs  text-slate-500">~ABDULLAH AL SAYEF~</div>
                    </div>
                </div>
            </div>
        </div>
    );
}