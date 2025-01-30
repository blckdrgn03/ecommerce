"use client"

import { useRef, useState, useEffect } from "react";
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import Slider from "@/components/slider";
import Categories from "@/components/categories";
import JustForYou from "@/components/justforyou";


export default function Page() {
    const [isBarOpen, setIsBarOpen] = useState(false);
    const [sidebarLeft, setSidebarLeft] = useState([0, 0]);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
            if (window.innerWidth <= 1280) {
                setSidebarLeft([0, 0])
            } else {
                setSidebarLeft([(window.innerWidth - (containerRef.current?.offsetWidth || 0)) / 2 + 11, (containerRef.current?.offsetWidth || 0) / 4 - 9])
            }
                
        }, [])
    
        useEffect(() => {
            let prevWidth = window.innerWidth;
            const handleResize = () => {
                const currWidth = window.innerWidth;
    
                if (prevWidth != currWidth) {
                    prevWidth = currWidth;
                    
                    if (window.innerWidth <= 1280) {
                        setSidebarLeft([0, 0])
                    } else {
                        setSidebarLeft([(window.innerWidth - (containerRef.current?.offsetWidth || 0)) / 2 + 11, (containerRef.current?.offsetWidth || 0) / 4 - 9])
                    }
                }
                
                
            };
    
            window.addEventListener('resize', handleResize);
    
            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }, []);

    return (
        <div ref={containerRef} className="container  h-full mx-auto relative ">
            <Header isBarOpen={isBarOpen} setIsBarOpen={setIsBarOpen} />
            <div className={`flex justify-end transtion-all duration-300   ${isBarOpen ? "" : ""}`}>
                <Sidebar left={sidebarLeft} isBarOpen={isBarOpen} setIsBarOpen={setIsBarOpen} />
                <main className={`pt-[64px] sm:pt-[72px] lg:pt-[80px] xl:pt-[88px] px-2 lg:px-4  transition-all duration-300 overflow-x-hidden ${isBarOpen ? "xl:w-[calc(75%-8px)]" : "xl:w-full"}`}>
                    <Slider />
                    <Categories isBarOpen={isBarOpen} />
                    <JustForYou />
                </main>
            </div>
                    
        </div>
    );
}
