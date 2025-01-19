"use client"

import { useState } from "react";
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import Slider from "@/components/slider";
import Categories from "@/components/categories";

export default function Page() {
    const [isBarOpen, setIsBarOpen] = useState(false);
    return (
        <div className="container h-full mx-auto relative ">
            <Header isBarOpen={isBarOpen} setIsBarOpen={setIsBarOpen} />
            <div className={` transtion-all duration-300 xl:flex h-screen ${isBarOpen ? "gap-2" : "gap-0"}`}>
                <Sidebar isBarOpen={isBarOpen} setIsBarOpen={setIsBarOpen} />
                <main className={`pt-16 sm:pt-[4.5rem] xl:pt-[92px] h-full px-4 overflow-y-scroll transition-all duration-300 overflow-x-hidden ${isBarOpen ? "xl:w-[calc(75%-4px)]" : "xl:w-full"}`}>
                    <Slider />
                    <Categories isBarOpen={isBarOpen} />
                </main>
            </div>
                    
        </div>
    );
}
