'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaFacebookF, FaXTwitter, FaLinkedinIn, FaInstagram, FaYoutube, FaUser } from "react-icons/fa6";
import { Feature } from "../components/Feature";
import { Animations } from "../components/Animations";

export default function Header() {
    const [clickUser, setClickUser] = useState(false);
    const [userInfo, setUserInfo] = useState("");
    const path = usePathname();

    useEffect(() => {
        async function userInfoData() {
            try {
                const res = await fetch("/api/user/user-info", { method: 'GET' });
                const data = await res.json();
                if (data.success) setUserInfo(data.data);
            } catch (error) {
                console.log(error);
            }
        }
        userInfoData();
    }, []);

    return (
        <header className="w-[87%] mx-auto flex flex-col mt-5 ">
            <div className="w-full flex justify-between items-center px-4 my-font">

                {/* Menu Section */}
                <div className="flex items-center justify-center gap-x-3">
                    <nav className="hidden md:flex space-x-3 font-semibold text-green-800">
                        <Link href="/" className={`hover:bg-[#172d13] ${path === '/' ? 'bg-[#172d13] text-white' : ''} hover:text-white px-3 py-2 rounded hover:rounded-none hover:rounded-tl-md hover:rounded-tr-md text-[14px]`}>HOME</Link>
                        <Link href="/components/course" className={`hover:bg-[#172d13] ${path === '/components/course' ? 'bg-[#172d13] text-white' : ''} ${path === '/components/course/course-details' ? 'bg-[#172d13] text-white' : ''} hover:text-white px-3 py-2 rounded hover:rounded-none hover:rounded-tl-md hover:rounded-tr-md text-[14px]`}>COURSES</Link>
                        <Link href="/components/services" className={`hover:bg-[#172d13] ${path === '/components/services' ? 'bg-[#172d13] text-white' : ''} hover:text-white px-3 py-2 rounded hover:rounded-none hover:rounded-tl-md hover:rounded-tr-md text-[14px]`}>SERVICES</Link>
                        <Link href="/components/package" className={`hover:bg-[#172d13] ${path === '/components/package' ? 'bg-[#172d13] text-white' : ''} hover:text-white px-3 py-2 rounded hover:rounded-none hover:rounded-tl-md hover:rounded-tr-md text-[14px]`}>PACKAGE</Link>
                        <Link href="" className={`hover:bg-[#172d13] ${path === '/rgre' ? 'bg-[#172d13] text-white' : ''} hover:text-white px-3 py-2 rounded hover:rounded-none hover:rounded-tl-md hover:rounded-tr-md text-[14px]`}>BLOG</Link>
                        {!userInfo && (<Link href="/components/login" className={`hover:bg-[#172d13] ${path === '/components/login' ? 'bg-[#172d13] text-white' : ''} hover:text-white px-3 py-2 underline rounded hover:rounded-none hover:rounded-tl-md hover:rounded-tr-md text-[14px]`}>SIGNIN</Link>)}
                        {!userInfo && (<Link href="/components/registration" className={`hover:bg-[#172d13] ${path === '/components/registration' ? 'bg-[#172d13] text-white' : ''} hover:text-white px-3 py-2 underline rounded hover:rounded-none hover:rounded-tl-md hover:rounded-tr-md text-[14px]`}>REGISTER</Link>)}
                        {userInfo && (<Link href="/components/user/dashboard" className={`hover:bg-[#172d13] ${path === '/components/user/dashboard' ? 'bg-[#172d13] text-white' : ''} hover:text-white px-3 py-2 rounded hover:rounded-none hover:rounded-tl-md hover:rounded-tr-md text-[14px]`}>DASHBOARD</Link>)}

                    </nav>

                    {/* Right Side Section */}
                    <div className="hidden md:flex items-center space-x-3 text-sm">


                        {/* Social Icons */}
                        <div className="flex space-x-4 text-gray-700 ">
                            <Link href='https://www.facebook.com/share/1GzXZFbCGk/' className="shadow-sm shadow-gray-500 hover:bg-blue-700 hover:text-white transition-all duration-200 p-2 rounded-full">
                                <FaFacebookF />
                            </Link>
                            <Link href='' className="shadow-sm shadow-gray-500 hover:bg-black hover:text-white transition-all duration-200 p-2 rounded-full">
                                <FaXTwitter />
                            </Link>
                            <Link href='' className="shadow-sm shadow-gray-500 hover:bg-blue-600 hover:text-white transition-all duration-200 p-2 rounded-full">
                                <FaLinkedinIn />
                            </Link>
                            <Link href='' className="shadow-sm shadow-gray-500 hover:bg-rose-400 hover:text-white transition-all duration-200 p-2 rounded-full">
                                <FaInstagram />
                            </Link>
                            <Link href='https://www.youtube.com/@TaxLineBD' className="shadow-sm shadow-gray-500 hover:bg-red-600 hover:text-white transition-all duration-200 p-2 rounded-full">
                                <FaYoutube />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="">
                    <img src="/logo.jpg" alt="BDTaxation Logo" className="h-28 w-32 bg-contain" />
                </div>

            </div>
            {/* <Animations />
            <Feature /> */}
        </header>
    );
}
