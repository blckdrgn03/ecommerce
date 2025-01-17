"use client"

import { useState } from "react";
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";

export default function Home() {
    const [isBarOpen, setIsBarOpen] = useState(false);
    return (
        <div className="container mx-auto relative ">
            <Header isBarOpen={isBarOpen} setIsBarOpen={setIsBarOpen} />
            <div className={` transtion-all duration-300 xl:flex h-screen ${isBarOpen ? "gap-2" : "gap-0"}`}>
                <Sidebar isBarOpen={isBarOpen} setIsBarOpen={setIsBarOpen} />
                <main className={`pt-16 sm:pt-[4.5rem] xl:pt-20 px-4 overflow-y-scroll transition-all duration-300 overflow-x-hidden ${isBarOpen ? "xl:w-[calc(75%-4px)]" : "xl:w-full"}`}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque quidem deserunt inventore, quos asperiores tenetur cupiditate officiis incidunt rem libero voluptas aut, ducimus illo minima est quibusdam voluptates! Numquam, minima.lorem orem ipsum dolor, sit amet consectetur adipisicing elit. Atque quidem de quidem deserunt inventore, quos asperiores tenetur cupiditate officiis incidunt rem libero voluptas aut, ducimus illo minima est quibusdam voluptates! Numquam, minima.lorem orem ipsum dolor, sit amet consectetur adipisicing elit. Atque quidem deserunt inventore, quos asperiores tenetur cupiditate officiis incidunt rem libero voluptas aut, ducimus illo minima est quibusdam voluptates! Numquam, minima.lorem ore quidem deserunt inventore, quos asperiores tenetur cupiditate officiis incidunt rem libero voluptas aut, ducimus illo minima est quibusdam voluptates! Numquam, minima.lorem orem ipsum dolor, sit amet consectetur adipisicing elit. Atque quidem deserunt inventore, quos asperiores tenetur cupiditate officiis incidunt rem libero voluptas aut, ducimus illo minima est quibusdam voluptates! Numquam, minima.lorem ore quidem deserunt inventore, quos asperiores tenetur cupiditate officiis incidunt rem libero voluptas aut, ducimus illo minima est quibusdam voluptates! Numquam, minima.lorem orem ipsum dolor, sit amet consectetur adipisicing elit. Atque quidem deserunt inventore, quos asperiores tenetur cupiditate officiis incidunt rem libero voluptas aut, ducimus illo minima est quibusdam voluptates! Numquam, minima.lorem oreserunt inventore, quos asperiores tenetur cupiditate officiis incidunt rem libero voluptas aut, ducimus illo minima est quibusdam voluptates! Numquam, minima.lorem orem ipsum dolor, sit amet consectetur adipisicing elit. Atque quidem deserunt inventore, quos asperiores tenetur cupiditate officiis incidunt rem libero voluptas aut, ducimus illo minima est quibusdam voluptates! Numquam, minima.lorem orem ipsum dolor, sit amet consectetur adipisicing elit. Atque quidem deserunt inventore, quos asperiores tenetur cupiditate officiis incidunt rem libero voluptas aut, ducimus illo minima est quibusdam voluptates! Numquam, minima.lorem orem ipsum dolor, sit amet consectetur adipisicing elit. Atque quidem deserunt inventore, quos asperiores tenetur cupiditate officiis incidunt rem libero voluptas aut, ducimus illo minima est quibusdam voluptates! Numquam, minima.lorem orem ipsum dolor, sit amet consectetur adipisicing elit. Atque quidem deserunt inventore, quos asperiores tenetur cupiditate officiis incidunt rem libero voluptas aut, ducimus illo minima est quibusdam voluptates! Numquam, minima.lorem orem ipsum dolor, sit amet consectetur adipisicing elit. Atque quidem deserunt inventore, quos asperiores tenetur cupiditate officiis incidunt rem libero voluptas aut, ducimus illo minima est quibusdam voluptates! Numquam, minima.lorem orem ipsum dolor, sit amet consectetur adipisicing elit. Atque quidem deserunt inventore, quos asperiores tenetur cupiditate officiis incidunt rem libero voluptas aut, ducimus illo minima est quibusdam voluptates! Numquam, minima.lorem 
                </main>
            </div>
                    
        </div>
    );
}
