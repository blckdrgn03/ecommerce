import { useEffect, useState } from "react";
import Link from "next/link";
import { TiHome } from "react-icons/ti";
import { HiMiniCog6Tooth } from "react-icons/hi2";
import { FaShapes } from "react-icons/fa6";
import { AiFillAppstore } from "react-icons/ai";
import { FaShop } from "react-icons/fa6";
import { MdLocalOffer } from "react-icons/md";


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
        <div style={{left: left[0], width: left[1]}} onClick={() => isBarOpen && setIsBarOpen(false)} className={`fixed  top-14 sm:top-16 xl:top-[76px] bottom-0   overflow-hidden max-lg:!w-full  transition-all duration-300 ${isBarOpen ? " backdrop-blur-lg xl:z-40 xl:backdrop-blur-none bg-black/[0] xl:bg-transparent  dark:xl:bg-transparent dark:bg-white/[0] " : " xl:!w-0"} ${isZUp ? "z-40 " : "-z-50"}`}>
            <div className={`max-lg:container max-lg:mx-auto xl:absolute xl:w-full h-full py-2 px-2 lg:py-4 lg:px-4 `}>
                <div onClick={(e) => e.stopPropagation()} className={`bg-neutral-50 dark:bg-neutral-950  rounded-md transition-all duration-300 overflow-hidden flex flex-col items-center justify-center xl:items-start   xl:z-40 h-full ${isBarOpen ? "w-2/3 p-6 md:w-1/2 lg:w-1/3  xl:w-full " : "w-0 "}`}>
                    <Link href="/" className={`text-xl xl:text-3xl border-b-black/[0.1] font-semibold dark:border-b-white/[0.1] border-b flex w-full gap-3 items-center p-4 transition-all  ${isBarOpen ? "" : "opacity-0"}`}>
                        <TiHome className="" /> 
                        <div>Home</div>
                    </Link>
                    <Link href="/categories" className={`text-xl xl:text-3xl border-b-black/[0.1] font-semibold dark:border-b-white/[0.1] border-b flex w-full gap-3 items-center p-4 transition-all ${isBarOpen ? "" : "opacity-0"}`}>
                        <FaShapes className="" /> 
                        <div>Categories</div>
                    </Link>
                    <Link href="/products" className={`text-xl xl:text-3xl border-b-black/[0.1] font-semibold dark:border-b-white/[0.1] border-b flex w-full gap-3 items-center p-4 transition-all ${isBarOpen ? "" : "opacity-0"}`}>
                        <AiFillAppstore className="" /> 
                        <div>All products</div>
                    </Link>
                    <Link href="/special-offer" className={`text-xl xl:text-3xl border-b-black/[0.1] font-semibold dark:border-b-white/[0.1] border-b flex w-full gap-3 items-center p-4 transition-all ${isBarOpen ? "" : "opacity-0"}`}>
                        <MdLocalOffer className="" /> 
                        <div>Special offer</div>
                    </Link>
                    <Link href="/my-shop" className={`text-xl xl:text-3xl border-b-black/[0.1] font-semibold dark:border-b-white/[0.1] border-b flex w-full gap-3 items-center p-4 transition-all ${isBarOpen ? "" : "opacity-0"}`}>
                        <FaShop className="" /> 
                        <div>My shop</div>
                    </Link>
                    <Link href="/settings" className={`text-xl xl:text-3xl border-b-black/[0.1] font-semibold dark:border-b-white/[0.1]  flex w-full gap-3 items-center p-4 transition-all ${isBarOpen ? "" : "opacity-0"}`}>
                        <HiMiniCog6Tooth />
                        <div>Settings</div>
                    </Link>
                </div>
            </div>
        </div>
    );
}