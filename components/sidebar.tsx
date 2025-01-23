import { useEffect, useState } from "react";

export default function Sidebar({ isBarOpen, setIsBarOpen }: { isBarOpen: boolean, setIsBarOpen: React.Dispatch<React.SetStateAction<boolean>> }) {
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
        <div onClick={() => isBarOpen && setIsBarOpen(false)} className={`fixed top-14 sm:top-16 xl:top-[75px] bottom-0 left-0   overflow-hidden  w-full  transition-all duration-300 ${isBarOpen ? " backdrop-blur-lg xl:backdrop-blur-none bg-black/[0] xl:bg-transparent  dark:xl:bg-transparent dark:bg-white/[0] " : " xl:w-0"} ${isZUp ? "z-40 xl:-z-50" : "-z-50"}`}>
            <div className={`container mx-auto h-full py-2 px-2 lg:py-4 lg:px-4`}>
                <div onClick={(e) => e.stopPropagation()} className={`bg-neutral-50 dark:bg-neutral-950 container rounded-md transition-all duration-300 overflow-hidden   h-full ${isBarOpen ? "w-2/3 md:w-1/2 lg:w-1/3 xl:z-30 xl:w-[calc(25%-8px)] " : "w-0"}`}>
                    
                </div>
            </div>
        </div>
    );
}