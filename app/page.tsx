"use client"

import { useState } from "react";
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import Slider from "@/components/slider";
import Categories from "@/components/categories";
import JustForYou from "@/components/justforyou";

export default function Page() {
    const [isBarOpen, setIsBarOpen] = useState(false);
    return (
        <div className="container h-full mx-auto relative ">
            <Header isBarOpen={isBarOpen} setIsBarOpen={setIsBarOpen} />
            <div className={`flex justify-end transtion-all duration-300  ${isBarOpen ? "" : ""}`}>
                <Sidebar isBarOpen={isBarOpen} setIsBarOpen={setIsBarOpen} />
                <main className={`pt-[64px] sm:pt-[72px] lg:pt-[80px] xl:pt-[92px] px-2 lg:px-4  transition-all duration-300 overflow-x-hidden ${isBarOpen ? "xl:w-[calc(75%-8px)]" : "xl:w-full"}`}>
                    <Slider />
                    <Categories isBarOpen={isBarOpen} />
                    <JustForYou />
                </main>
            </div>
                    
        </div>
    );
}
