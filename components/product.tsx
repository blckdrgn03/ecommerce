import Image from "next/image";
import { ImStarFull } from "react-icons/im";
import { ImStarEmpty } from "react-icons/im";
import Link from "next/link";

type ProductType = {
    name: string,
    price: number,
    discount: number,
    img: string, 
    sold: number,
    rating: number,
    ratingCount: number,
    id: number,
}

export default function Product({ name, img, price, discount, rating, ratingCount, id } : ProductType) {
    return (
        <Link href={"/products/" + id} className="overflow-hidden pb-2 rounded-md bg-neutral-50 dark:bg-neutral-950 flex flex-col  ">
            <div className="w-full aspect-square relative">
                <Image fill src={img} alt={name} className="absolute bg-blue-500" />
            </div>

            

            <div className="py-2">
                <h3 className="line-clamp-2 px-3 h-[40px] lg:h-[48px] text-sm lg:text-base text-center">{name}</h3>

                <div className="flex justify-center items-center px-3 md:pt-1 lg:py-1 lg:px-4 gap-2  ">
                    <h3 className=" text-lg lg:text-xl  ">${Math.round(price - price * discount / 100)} </h3>
                    <p className="">
                        <span className="text-xs text-slate-500 dark:text-slate-500">-%{discount}</span>
                    </p>
                </div>
                
                <div className="flex gap-2 flex-row-reverse px-3 justify-center text-xs lg:text-base text-slate-500 dark:text-slate-500  items-center">
                    <div className="text-xs pt-[3px]">
                        {ratingCount}
                    </div>
                    <div className="relative bg-transparent  flex items-center gap-1 text-yellow-300">
                        <ImStarEmpty />
                        <ImStarEmpty />
                        <ImStarEmpty />
                        <ImStarEmpty />
                        <ImStarEmpty />    

                        <div className="absolute top-0 left-0 w-full h-full overflow-hidden flex gap-1 ">
                            {rating >= 4 && <ImStarFull />}
                            {rating >= 3 && <ImStarFull />}
                            {rating >= 2 && <ImStarFull />}
                            {rating >= 1 && <ImStarFull />}
                            {rating >= 0 && <ImStarFull style={{
                                clipPath: `inset(0 ${(100 - ((rating % 1) * 100))}% 0 0)`
                            }} />}
                        
                        </div>
                    </div>
                </div>
            </div>


        </Link>
    );
}
