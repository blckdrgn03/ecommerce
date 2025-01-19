import { IoSearch } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { useState, useRef, useEffect } from "react";
import { HiOutlineMenu } from "react-icons/hi";


export default function Header({ isBarOpen, setIsBarOpen }: { isBarOpen: boolean, setIsBarOpen: React.Dispatch<React.SetStateAction<boolean>> }) {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [windowSize, setWindowSize] = useState(0);
    const inputRef = useRef<HTMLInputElement>(null);
    const searchRef = useRef<HTMLButtonElement>(null);

   

    useEffect(() => {
        setWindowSize(window.innerWidth);
        if (window.innerWidth >= 1024) {
            setIsSearchOpen(true);
        } else {
            setIsSearchOpen(false);
        }
        if (window.innerWidth >= 1280) {
            setIsBarOpen(true);
        } else {
            setIsBarOpen(false);
        }
    }, [])

    useEffect(() => {
        let prevWidth = window.innerWidth;
        const handleResize = () => {
            const currWidth = window.innerWidth;

            if (prevWidth != currWidth) {
                prevWidth = currWidth;
                
                setWindowSize(currWidth);
                if (currWidth >= 1024) {
                    setIsSearchOpen(true);
                } else {
                    setIsSearchOpen(false);
                }
                if (window.innerWidth >= 1280) {
                setIsBarOpen(true);
                } else {
                    setIsBarOpen(false);
                }
            }
            
            
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


const handleSearch = () => {
    if (!isSearchOpen && windowSize < 1024) {
        setIsSearchOpen(true);
    }
    inputRef.current?.focus();
};

const handleBlur = () => {
    if (windowSize >= 1024) {
        return;
    }
    setTimeout(() => {
        if (searchRef.current !== document.activeElement && inputRef.current !== document.activeElement) {
            setIsSearchOpen(false);
        }
    }, 0); 
};

    return (
        <header className={`fixed px-2 left-1/2 -translate-x-1/2 top-0 z-40 h-14 sm:h-16 container flex transtion-all duration-300 justify-between border-b-black/[0.1] dark:border-b-white/[0.1] items-center xl:border-b  bg-white dark:bg-black gap-4 ${isBarOpen ? "" : " border-b"}`} >
            <div className="text-2xl lg:text-3xl flex gap-2 items-center font-bold">
                <button onClick={() => setIsBarOpen(!isBarOpen)} className="rounded-md hover:bg-black/[0.2]  p-[6px] sm:p-2 dark:hover:bg-white/[0.2] transition-all ">
                    <HiOutlineMenu />
                </button>
                E-Shop
            </div>
            <div className="flex justify-end grow items-center gap-1 lg:gap-2">

                <div className={`flex transition-all duration-300 rounded-md justify-end items-center ${isSearchOpen ? "grow bg-black/[0.2] dark:bg-white/[0.2] xl:mx-10" : ""}`}>
                    <input spellCheck={false} onBlur={handleBlur} ref={inputRef} type="text" placeholder="Search a product" className={`bg-transparent placeholder:text-gray-600 dark:placeholder:text-gray-400 transition-all h-full outline-none duration-300 delay-150 ${isSearchOpen ? "shrink grow w-1 px-4 lg:px-6" : "w-0 opacity-0"}`} />
                    <button ref={searchRef} onBlur={handleBlur} onClick={handleSearch} className="hover:bg-black/[0.2] dark:hover:bg-white/[0.2] transition-all rounded-md p-[6px] sm:p-2">
                        <IoSearch className="text-2xl  lg:text-3xl" />
                    </button>
                </div>
                <button className={`hover:bg-black/[0.2] dark:hover:bg-white/[0.2] overflow-hidden transition-all rounded-md  ${isSearchOpen ? "w-0 opacity-0 sm:w-auto sm:opacity-100 sm:p-2" : " p-[6px] "}`}>
                    <IoCartOutline className="text-2xl lg:text-3xl" />
                </button>
                <button  className={`hover:bg-black/[0.2] dark:hover:bg-white/[0.2] overflow-hidden transition-all rounded-md  ${isSearchOpen ? "w-0 opacity-0 sm:w-auto sm:opacity-100 sm:p-[10px]" : "p-[8px]"}`}>
                    <FaRegUser className="text-xl lg:text-2xl" />
                </button>

            </div>
            
        </header>
    );
}