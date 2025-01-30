import { IoSearch } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { useState, useRef, useEffect } from "react";
import { HiOutlineMenu } from "react-icons/hi";


export default function Header({ isBarOpen, setIsBarOpen }: { isBarOpen: boolean, setIsBarOpen: React.Dispatch<React.SetStateAction<boolean>> }) {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [windowSize, setWindowSize] = useState(0);
    const [isPopoverOpen, setIsPopoverOpen] = useState(false);
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
        <><header className={`fixed left-0 top-0 z-40 h-14 sm:h-16 xl:h-[72px] w-full bg-neutral-50 dark:bg-neutral-950 transtion-all duration-300  `}>
            <div className="container relative flex h-full px-2 lg:px-4 justify-between mx-auto items-center gap-4">

                <div className="text-xl md:text-2xl lg:text-3xl flex gap-2 items-center font-bold">
                    <button onClick={() => {setIsBarOpen(!isBarOpen);setIsPopoverOpen(false)}} className="rounded-md  text-xl lg:text-3xl p-[6px] sm:p-2 hover:bg-slate-500/[0.25] transition-all ">
                        <HiOutlineMenu />
                    </button>
                    E-Shop
                </div>
                <div className="flex justify-end grow items-center gap-1 lg:gap-2">

                    <div className={`flex transition-all duration-300 rounded-md justify-end items-center ${isSearchOpen ? "grow bg-slate-500/[0.25] xl:mx-10" : ""}`}>
                        <input spellCheck={false} onBlur={handleBlur} ref={inputRef} type="text" placeholder="Search a product" className={`bg-transparent placeholder:text-slate-500 dark:placeholder:text-slate-500 transition-all h-full text outline-none duration-300 delay-150 ${isSearchOpen ? "shrink grow w-1 px-4 lg:px-6" : "w-0 opacity-0"}`} />
                        <button ref={searchRef} onBlur={handleBlur} onClick={handleSearch} className="hover:bg-slate-500/[0.25] transition-all rounded-md p-[6px] sm:p-2">
                            <IoSearch className="text-xl  lg:text-3xl" />
                        </button>
                    </div>
                    <button className={`hover:bg-slate-500/[0.25] overflow-hidden transition-all rounded-md  ${isSearchOpen ? "w-0 opacity-0 sm:w-auto sm:opacity-100 sm:p-2" : " p-[6px] sm:p-2"}`}>
                        <IoCartOutline className="text-xl lg:text-3xl" />
                    </button>
                    <button onClick={() => {
                        setIsPopoverOpen(!isPopoverOpen);
                        if (window.innerWidth < 1280) {setIsBarOpen(false)}
                    }} className={`hover:bg-slate-500/[0.25] overflow-hidden transition-all rounded-md  ${isSearchOpen ? "w-0 opacity-0 sm:w-auto sm:opacity-100 sm:p-[10px]" : "p-[8px] sm:p-[10px]"}`}>
                        <FaRegUser className="text-lg lg:text-2xl" />
                    </button>

                </div>

            </div>


        </header><Popover isOpen={isPopoverOpen} setIsOpen={setIsPopoverOpen} /></>
        
    );
}

function Popover({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: React.Dispatch<React.SetStateAction<boolean>> }) {
    const [isZUp, setIsZUp] = useState(false);

    useEffect(() => {
        if (isOpen) {
            requestAnimationFrame(() => {
                setIsZUp(true);
            })
        } else {
            setTimeout(() => {
                setIsZUp(false);
            }, 300)
        }
    }, [isOpen])

    return (
        <div  onClick={() => setIsOpen(false)} className={`fixed  top-14 sm:top-16 xl:top-[72px] bottom-0   overflow-hidden w-full left-0 transition-all duration-300 ${isOpen ? " backdrop-blur- bg-black/[0.35]     " : ""} ${isZUp ? "z-[999] " : "-z-[999]"}`}>
            <div className={`container mx-auto h-full py-2 flex justify-end items-start px-2 lg:py-4 lg:px-4 `}>
                <div onClick={(e) => e.stopPropagation()} className={`bg-neutral-50 dark:bg-neutral-950  rounded-md transition-all duration-300 overflow-hidden flex flex-col  justify-center   ${isOpen ? "w-1/2  h-[9rem] sm:h-[10rem] md:h-[9rem] lg:w-1/3  xl:w-1/4 " : "h-0 w-0"}`}>
                    <div className={`px-2 lg:px-4 text-xs sm:text-sm md:text-base transition-all duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`}>
                        <div className="text-center text-slate-500 pb-4">
                            You are not logged in. Please sign in. 
                        </div>    
                        <div className="flex flex-col md:flex-row justify-center gap-2 lg:gap-3">
                            <button className="bg-black text-white hover:bg-black/[0.75]   dark:hover:bg-white/[0.75]   border border-black dark:border-white dark:bg-white dark:text-black transition-all rounded-md px-4 lg:px-5 font-semibold py-2">Sign In</button>
                            <button className="border-black rounded-md dark:border-white border px-4 hover:bg-black/[0.25]  dark:hover:bg-white/[0.25] lg:px-5  font-semibold py-2 transition-all">Sign Up</button>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}