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
        <div onClick={() => isBarOpen && setIsBarOpen(false)} className={`fixed xl:static top-14 sm:top-16 bottom-0 left-0 xl:mt-[66px]  overflow-hidden  w-full  transition-all duration-300 ${isBarOpen ? " backdrop-blur-sm xl:backdrop-blur-none bg-black/[0.25] xl:bg-transparent  dark:xl:bg-transparent dark:bg-white/[0.1]  xl:w-[calc(25%-4px)]" : " xl:w-0"} ${isZUp ? "z-40" : "-z-50"}`}>
            <div className={`container mx-auto h-full py-2 px-2 xl:py-4 xl:px-0`}>
                <div onClick={(e) => e.stopPropagation()} className={`bg-white dark:bg-black container rounded-lg transition-all duration-300 overflow-hidden  border-black/[0.1] dark:border-white/[0.1] h-full ${isBarOpen ? "w-2/3 md:w-1/2 lg:w-1/3 xl:w-full border" : "w-0"}`}>
                
                </div>
            </div>
        </div>
    );
}