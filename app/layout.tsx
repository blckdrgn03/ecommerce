import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
    variable: "--font-poppins",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"]
});


export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <html lang="en">
        <body
            className={`${poppins.variable} bg-neutral-300 dark:bg-neutral-900 overflow-x-hidden text-black text-sm md:text-md lg:text-lg dark:text-white antialiased`}
        >
            {children}
        </body>
        </html>
    );
}
