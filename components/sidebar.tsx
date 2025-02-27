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

    return (
        <div style={{left: left[0], width: left[1]}} onClick={() => isBarOpen && window.innerWidth <= 1280 && setIsBarOpen(false)} className={`fixed  top-14 sm:top-16 xl:top-[88px] bottom-0 xl:bottom-4   overflow-hidden max-xl:!w-full  transition-all duration-300 ${isBarOpen ? "  bg-black/[0.35] xl:z-[999] xl:backdrop-blur-none xl:bg-transparent   " : " xl:!w-0"} ${isZUp ? "z-[999] " : "-z-[999]"}`}>
            <div className={`max-xl:container max-xl:mx-auto xl:w-full h-full py-2 px-2 lg:py-4 lg:px-4 xl:px-0 xl:py-0`}>
                <div onClick={(e) => e.stopPropagation()} className={`bg-neutral-50 dark:bg-neutral-950  rounded-md transition-all duration-300 overflow-hidden flex flex-col  justify-between   xl:z-[999] h-full ${isBarOpen ? "w-2/3 p-6 pb-2 lg:pb-4 md:w-1/2 lg:w-1/3  xl:w-full " : "w-0 "}`}>
                    <div className="flex flex-col w-full">
                        <Link href="/" className={`text-lg lg:text-2xl md:text-xl border-b-slate-500/[0.25] border-b flex w-full gap-3 md:gap-4 items-center p-4 pr-2 pt-2 sm:pb-5 transition-all  ${isBarOpen ? "" : "opacity-0"}`}>
                            <TiHome className="" /> 
                            <div>Home</div>
                        </Link>
                        <Link href="/categories" className={`text-lg lg:text-2xl md:text-xl border-b-slate-500/[0.25] border-b flex w-full gap-3 md:gap-4 items-center p-4 pr-2 sm:py-5 transition-all ${isBarOpen ? "" : "opacity-0"}`}>
                            <FaShapes className="" /> 
                            <div>Categories</div>
                        </Link>
                        <Link href="/products" className={`text-lg lg:text-2xl md:text-xl border-b-slate-500/[0.25] border-b flex w-full gap-3 md:gap-4 items-center p-4 pr-2 sm:py-5 transition-all ${isBarOpen ? "" : "opacity-0"}`}>
                            <AiFillAppstore className="" /> 
                            <div>All products</div>
                        </Link>
                        <Link href="/special-offer" className={`text-lg lg:text-2xl md:text-xl border-b-slate-500/[0.25] border-b flex w-full gap-3 md:gap-4 items-center p-4 pr-2 sm:py-5 transition-all ${isBarOpen ? "" : "opacity-0"}`}>
                            <MdLocalOffer className="" /> 
                            <div>Special offer</div>
                        </Link>
                        <Link href="/my-shop" className={`text-lg lg:text-2xl md:text-xl border-b-slate-500/[0.25]  flex w-full gap-3 md:gap-4 items-center p-4 pb-2 pr-2 sm:py-5 transition-all ${isBarOpen ? "" : "opacity-0"}`}>
                            <FaShop className="" /> 
                            <div>My shop</div>
                        </Link>
                        
                    </div>
                    
                    <div className="flex flex-col w-full items-center gap-4">
                        <div className="border border-slate-500/[0.25] gap-1 relative rounded-full flex transition-all">
                            <button onClick={() => document.querySelector("html")?.classList.remove("dark")} className="p-1 z-[1000] rounded-full text-slate-500 text-xl">
                                <MdSunny />
                            </button>
                            <button onClick={() => document.querySelector("html")?.classList.add("dark")} className="p-1 z-[1000] text-xl text-slate-500">
                                <WiMoonFull />
                            </button>
                            
                            <div className="absolute aspect-square transition-all  h-full  bg-slate-500/[0.25] flex items-center justify-center rounded-full left-0 dark:left-[calc(50%+2px)]">
                            </div>
                        </div>
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