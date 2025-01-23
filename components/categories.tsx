import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";
import { useRef, useEffect } from "react";

export default function Categories({ isBarOpen }: { isBarOpen: boolean }) {
    const categories = [
        { name: "sports", img: "/blue.svg", products: 120, id: 1 },
        { name: "fitness", img: "/blue.svg", products: 95, id: 2 },
        { name: "tech", img: "/blue.svg", products: 75, id: 3 },
        { name: "fashion", img: "/blue.svg", products: 200, id: 4 },
        { name: "books", img: "/blue.svg", products: 50, id: 5 },
        { name: "toys", img: "/blue.svg", products: 150, id: 6 },
        { name: "home decor", img: "/blue.svg", products: 85, id: 7 },
        { name: "kitchen", img: "/blue.svg", products: 110, id: 8 },
        { name: "automotive", img: "/blue.svg", products: 60, id: 9 },
        { name: "gaming", img: "/blue.svg", products: 145, id: 10 },
        { name: "music", img: "/blue.svg", products: 90, id: 11 },
        { name: "outdoors", img: "/blue.svg", products: 125, id: 12 },
        { name: "beauty", img: "/blue.svg", products: 130, id: 13 },
        { name: "health", img: "/blue.svg", products: 70, id: 14 },
        { name: "travel", img: "/blue.svg", products: 40, id: 15 },
        { name: "photography", img: "/blue.svg", products: 55, id: 16 },
        { name: "stationery", img: "/blue.svg", products: 30, id: 17 },
        { name: "pet supplies", img: "/blue.svg", products: 100, id: 18 },
        { name: "jewelry", img: "/blue.svg", products: 140, id: 19 },
        { name: "watches", img: "/blue.svg", products: 50, id: 20 },
    ];
    

    const containerRef = useRef<HTMLDivElement>(null);

    const scrollNext = () => {
        if (containerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
    
            if (scrollLeft + clientWidth >= scrollWidth - 10) {
                containerRef.current.scrollTo({
                    left: 0,
                    behavior: "smooth",
                });
            } else {
                containerRef.current.scrollBy({
                    left: clientWidth,
                    behavior: "smooth",
                });
            }
        }
    };
    
    const scrollPrev = () => {
        if (containerRef.current) {
            const { scrollLeft, clientWidth } = containerRef.current;
    
            if (scrollLeft <= 0) {
                containerRef.current.scrollTo({
                    left: containerRef.current.scrollWidth,
                    behavior: "smooth",
                });
            } else {
                containerRef.current.scrollBy({
                    left: -clientWidth,
                    behavior: "smooth",
                });
            }
        }
    };
    

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            const intervalId = setInterval(() => {
                scrollNext(); 
            }, 7000);
            
            return () => clearInterval(intervalId);
        }, 3500);
    
        return () => {
            clearTimeout(timeoutId);
        };
    }, []);


    return (
        <section>
            <div  className="flex pt-4 sm:pt-6 md:pt-8 lg:pt-10 justify-between">
                <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">Categories</h1>
                <Link
                    href="/categories"
                    className="text-gray-700 dark:text-gray-300 flex gap-1 items-center hover:text-black dark:hover:text-white transition-all hover:font-semibold"
                >
                    <div>See all</div>
                    <IoIosArrowForward />
                </Link>
            </div>
            <div className="relative">
                <button 
                    onClick={scrollPrev}
                    className="absolute p-1 text-3xl md:text-4xl rounded-lg left-1 text-black/[0.25] dark:text-white/[0.25] transition-all top-1/2 hover:scale-y-125 active:scale-y-75 lg:p-2 -translate-y-1/2  hover:text-black/[0.75] hover:dark:text-white/[0.75] z-30"
                > 
                    <IoIosArrowBack />
                </button>
                <div
                    ref={containerRef}
                    id="scroll-container"
                    className="flex gap-2 lg:gap-3 py-2 sm:py-3 overflow-x-scroll no-scrollbar "
                    >
                    {categories.map((category) => (
                        <Link
                            href={"/categories/" + category.name}
                            id="category-item"
                            className={`aspect-[5/5] overflow-hidden shrink-0 flex flex-col bg-blue-500 justify-end w-[calc(33%-4px)] sm:w-[calc(25%-6px)] lg:w-[calc(20%-10px)] p-2 sm:p-3 relative rounded-md ${
                                !isBarOpen && "xl:w-[calc(16.6666%-10px)]"
                            }`}
                            key={category.id}
                        >
                            <Image
                                className="object-center object-cover -z-20"
                                fill
                                alt={category.name}
                                src={category.img}
                            />
                            <div className="text-center text-sm hidden sm:block md:text-md text-gray-300">
                                {category.products} products
                            </div>
                            <div className="text-center text-md sm:text-lg capitalize font-semibold">
                                {category.name}
                            </div>
                        </Link>
                    ))}
                </div>
                <button 
                    onClick={scrollNext} 
                    className="absolute text-black/[0.25] dark:text-white/[0.25] transition-all md:text-4xl top-1/2 hover:scale-y-125 active:scale-y-75 -translate-y-1/2 lg:p-2 right-1 hover:text-black/[0.75] hover:dark:text-white/[0.75] text-3xl rounded-lg p-1 z-30"
                >
                    <IoIosArrowForward />
                </button>
            </div>
        </section>
    );
}
