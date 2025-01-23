import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import Product from "./product";

const products = [
    { name: "Wireless Mouse", price: 15.99, discount: 10, img: "/blue.svg", sold: 120, rating: 4.5, ratingCount: 250, id: 1 },
    { name: "Bluetooth Headphones", price: 29.99, discount: 20, img: "/blue.svg", sold: 300, rating: 3.7, ratingCount: 430, id: 2 },
    { name: "Laptop Stand", price: 22.49, discount: 15, img: "/blue.svg", sold: 90, rating: 4.4, ratingCount: 180, id: 3 },
    { name: "Phone Case", price: 12.99, discount: 5, img: "/blue.svg", sold: 500, rating: 3.6, ratingCount: 320, id: 4 },
    { name: "Portable Charger", price: 18.99, discount: 10, img: "/blue.svg", sold: 250, rating: 4.3, ratingCount: 270, id: 5 },
    { name: "Smart Watch", price: 59.99, discount: 25, img: "/blue.svg", sold: 200, rating: 3.8, ratingCount: 310, id: 6 },
    { name: "Keyboard", price: 35.49, discount: 20, img: "/blue.svg", sold: 130, rating: 3.0, ratingCount: 150, id: 7 },
    { name: "USB Cable", price: 7.99, discount: 10, img: "/blue.svg", sold: 800, rating: 4.5, ratingCount: 420, id: 8 },
    { name: "HDMI Cable", price: 14.99, discount: 5, img: "/blue.svg", sold: 320, rating: 4.6, ratingCount: 210, id: 9 },
    { name: "Bluetooth Headphones", price: 29.99, discount: 20, img: "/blue.svg", sold: 300, rating: 3.7, ratingCount: 100, id: 10},
]

export default function JustForYou() {
    return (
        <section>
            <div className="flex pt-4 sm:pt-6 md:pt-8 lg:pt-10 justify-between">
                <h1 className="text-xl lg:text-3xl md:text-2xl font-bold">Just For You</h1>
                <Link
                    href="/products"
                    className="text-gray-700 dark:text-gray-300 flex gap-1 items-center hover:text-black dark:hover:text-white transition-all hover:font-semibold"
                >
                    <div>See all</div>
                    <IoIosArrowForward />
                </Link>
            </div>

            <div className="grid-cols-2 sm:grid-cols-3 md:grid-cols-4 grid gap-2 lg:gap-3 py-2 sm:py-3">
                {products.map(product => (
                    <Product name={product.name} price={product.price} discount={product.discount} sold={product.sold} rating={product.rating} id={product.id} img={product.img} ratingCount={product.ratingCount} key={product.id} />
                ))}
            </div>
        </section>
    );
}
