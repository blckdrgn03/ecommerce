import { specials } from "@/data/specials";
import Image from "next/image";
import { useEffect, useState, useCallback } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";


export default function Slider() {
    const [sliderIndex, setSliderIndex] = useState(1);
    
    type Special = {
        name: string;
        price: number;
        discount: number;
        img: string;
        description: string;
        id: number;
    };

    const nextSlide = useCallback(() => {
        setSliderIndex((i) => {
            if (i >= specials.length - 1) {
                return 0;
            } else {
                return i + 1;
            }
        });
      }, []);
    
    const prevSlide = useCallback(() => {
        setSliderIndex((i) => {
            if (i === 0) {
                return specials.length - 1;
            } else {
                return i - 1;
            }
        });
    }, []); 
    
    useEffect(() => {
        const intervalId = setInterval(() => {
            nextSlide(); 
        }, 7000);
    
        return () => {
            clearInterval(intervalId);
        };
    }, [nextSlide]); 

    return (
        <div className="w-full aspect-[7/5] md:aspect-video xl:aspect-[2/1] rounded-md bg-blue-500 relative flex overflow-hidden">
            {specials.map((special: Special) => {
                return (
                    <div style={{ transform: `translateX(calc(-100% * ${sliderIndex}))` }} key={special.id} className={`shrink-0 w-full aspect-[7/6] sm:aspect-[7/5] md:aspect-video transtion-all duration-500 flex items-end justify-between gap-1 px-4 py-5 sm:py-7 md:px-6 md:py-9 relative lg:px-8`}>
                        <Image src={special.img} style={{ zIndex: -10 }} className="object-center object-cover" fill alt={special.name} />
                        <div className=" ">
                            <h2><span className="text-black dark:text-white text-lg  sm:text-xl md:text-2xl lg:text-3xl font-semibold">${Math.round(special.price - special.price * special.discount / 100)}</span>&nbsp; <span className="line-through text-xs sm:text-sm md:text-base lg:text-lg text-black/[0.5] dark:text-white/[0.5] transition-all">${special.price}</span><span className="text-xs font-semibold sm:text-sm md:text-base lg:text-lg"> - %{special.discount}</span></h2>
                            <p className=" text-black/[0.5] dark:text-white/[0.5] transition-all w-[30ch] sm:w-auto truncate sm:whitespace-normal sm:overflow-visible sm:text-clip lg:text-lg text-xs sm:text-sm md:text-base">{special.description}</p>
                            <h2 className="text-black dark:text-white sm:text-xl text-lg md:text-2xl lg:text-3xl font-semibold">{special.name}</h2>
                        </div>
                        <div className=" ">
                            <button className="font-semibold border-black rounded-md dark:border-white border px-4 lg:px-5 hover:bg-black/[0.25]  dark:hover:bg-white/[0.25]   transition-all shrink-0 p-2  lg:text-lg text-xs sm:text-sm md:text-base">View <span className="hidden sm:inline">Product</span></button>
                        </div>
                        
                    </div>
                );
            })}
            <button className="absolute p-1 text-3xl md:text-4xl rounded-lg left-1 dark:text-white/[0.25] text-black/[0.25]   transition-all top-1/2 lg:p-2 hover:scale-y-125 active:scale-y-75 -translate-y-1/2 hover:text-black/[0.75] hover:dark:text-white/[0.75]" onClick={prevSlide}><IoIosArrowBack /></button>
            <button className="absolute dark:text-white/[0.25] text-black/[0.25] transition-all md:text-4xl top-1/2 hover:scale-y-125 active:scale-y-75 -translate-y-1/2 right-1 hover:text-black/[0.75] hover:dark:text-white/[0.75] text-3xl rounded-lg p-1 lg:p-2" onClick={nextSlide}><IoIosArrowForward /></button>

            <div className="absolute p-1  rounded-full bottom-1 left-1/2 flex items-end gap-1 -translate-x-1/2">
                {specials.map((special: Special, i: number) => (
                    <button onClick={() => setSliderIndex(i)} className={`h-2 w-2 transition-all duration-500 dark:bg-white/[0.25] bg-black/[0.25] rounded-full  hover:bg-slate-700 hover:dark:bg-slate-300 ${sliderIndex == i ? " w-8" : ""}`} key={special.id}></button>
                ))}
                <div
                style={{ transform: `translateX(calc(12px * ${sliderIndex})) translateY(-50%)` }}
                className="absolute  bg-slate-700 dark:bg-slate-300 transition-all duration-500 rounded-full left-1 top-1/2  h-2 w-8 "
                ></div>

            </div>
            
        </div>
    );
}
