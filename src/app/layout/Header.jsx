'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { FaFacebookF, FaXTwitter, FaLinkedinIn, FaInstagram, FaYoutube, FaUser, FaBars, FaX, FaXmark } from "react-icons/fa6";
import { ContextProvider } from "../Provider";

export default function Header() {
    const [clickUser, setClickUser] = useState(false);
    const { userInfo } = useContext(ContextProvider);
    const [mobileMenu, setMobileMenu] = useState(false);
    const path = usePathname();

    return (
        <header className="md:w-[87%] w-full mx-auto flex flex-col sm:mt-5 my-font ">

            <div className="w-full flex justify-between items-center px-4 shadow md:shadow-none ">

                <div className="flex items-center py-1 sm:py-0">
                    <img src="/website-logo.png" alt="BDTaxation Logo" className="md:h-24 h-[70px] -mt-3 object-contain" />
                </div>

                <nav className="hidden md:flex space-x-3 font-semibold text-green-800">
                    <Link href="/" className={`${path === '/' ? 'bg-[#17982f] text-white' : ''} hover:bg-[#17982f] hover:text-white px-3 py-2 rounded text-[14px]`}>HOME</Link>
                    <Link href="/components/course" className={`${path.startsWith('/components/course') ? 'bg-[#17982f] text-white' : ''} hover:bg-[#17982f] hover:text-white px-3 py-2 rounded text-[14px]`}>COURSES</Link>
                    <Link href="/components/services" className={`${path === '/components/services' ? 'bg-[#17982f] text-white' : ''} hover:bg-[#17982f] hover:text-white px-3 py-2 rounded text-[14px]`}>SERVICES</Link>
                    <Link href="/components/package" className={`${path === '/components/package' ? 'bg-[#17982f] text-white' : ''} hover:bg-[#17982f] hover:text-white px-3 py-2 rounded text-[14px]`}>PACKAGE</Link>
                    <Link href="" className={`${path === '/rgre' ? 'bg-[#17982f] text-white' : ''} hover:bg-[#17982f] hover:text-white px-3 py-2 rounded text-[14px]`}>BLOG</Link>
                    {!userInfo && <Link href="/components/login" className={`${path === '/components/login' ? 'bg-[#17982f] text-white' : ''} hover:underline px-3 py-2 rounded text-[14px]`}>SIGNIN</Link>}
                    {!userInfo && <Link href="/components/registration" className={`${path === '/components/registration' ? 'bg-[#17982f] text-white' : ''} hover:underline px-3 py-2 rounded text-[14px]`}>REGISTER</Link>}
                    {userInfo && <Link href="/components/user/dashboard" className={`${path === '/components/user/dashboard' ? 'bg-[#17982f] text-white' : ''} hover:bg-[#17982f] hover:text-white px-3 py-2 rounded text-[14px]`}>{userInfo?.role === 'admin' ? 'ADMIN PANEL' : 'DASHBOARD'}</Link>}
                </nav>

                <div className="md:flex justify-center space-x-3 hidden text-gray-700">
                    <Link target="_blank" href='https://www.facebook.com/share/1GzXZFbCGk/' className="p-2 rounded-full bg-gray-100 hover:bg-blue-700 hover:text-white"><FaFacebookF /></Link>
                    <Link target="_blank" href='https://www.linkedin.com/in/taxlinebd' className="p-2 rounded-full bg-gray-100 hover:bg-blue-600 hover:text-white"><FaLinkedinIn /></Link>
                    <Link target="_blank" href='https://x.com/TaxLineBD' className="p-2 rounded-full bg-gray-100 hover:bg-black hover:text-white"><FaXTwitter /></Link>
                    <Link target="_blank" href='https://www.youtube.com/@TaxLineBD' className="p-2 rounded-full bg-gray-100 hover:bg-red-600 hover:text-white"><FaYoutube /></Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center">
                    <button onClick={() => setMobileMenu(!mobileMenu)} className="text-green-800">
                        {mobileMenu ? <FaXmark size={28} /> : <FaBars size={24} />}
                    </button>
                </div>

            </div>

            {/* Mobile Menu */}
            {/* {mobileMenu && (
               
            )} */}

            <div className={`flex flex-col ${mobileMenu ? 'h-[350px]' : 'h-0'} ${(mobileMenu && userInfo) ? 'h-[310px]' : 'h-0'} transition-all duration-300 bg-white mt-2 px-2 overflow-y-hidden shadow-lg rounded-md`}>
                <Link href="/" className="block px-3 py-2 text-green-800 font-semibold hover:bg-[#17982f] hover:text-white rounded" onClick={() => setMobileMenu(false)}>HOME</Link>
                <Link href="/components/course" className="block px-3 py-2 text-green-800 font-semibold hover:bg-[#17982f] hover:text-white rounded" onClick={() => setMobileMenu(false)}>COURSES</Link>
                <Link href="/components/services" className="block px-3 py-2 text-green-800 font-semibold hover:bg-[#17982f] hover:text-white rounded" onClick={() => setMobileMenu(false)}>SERVICES</Link>
                <Link href="/components/package" className="block px-3 py-2 text-green-800 font-semibold hover:bg-[#17982f] hover:text-white rounded" onClick={() => setMobileMenu(false)}>PACKAGE</Link>
                <Link href="" className="block px-3 py-2 text-green-800 font-semibold hover:bg-[#17982f] hover:text-white rounded" onClick={() => setMobileMenu(false)}>BLOG</Link>
                {!userInfo && <Link href="/components/login" className="block px-3 py-2 text-green-800 font-semibold hover:bg-[#17982f] hover:text-white rounded" onClick={() => setMobileMenu(false)}>SIGNIN</Link>}
                {!userInfo && <Link href="/components/registration" className="block px-3 py-2 text-green-800 font-semibold hover:bg-[#17982f] hover:text-white rounded" onClick={() => setMobileMenu(false)}>REGISTER</Link>}
                {userInfo && <Link href="/components/user/dashboard" className="block px-3 py-2 text-green-800 font-semibold hover:bg-[#17982f] hover:text-white rounded" onClick={() => setMobileMenu(false)}>DASHBOARD</Link>}

                {/* Social Icons */}
                <div className="flex justify-center space-x-3 mt-2 text-gray-700 border-t border-t-gray-300 pt-3">
                    <Link href='https://www.facebook.com/share/1GzXZFbCGk/' className="p-2 rounded-full bg-gray-100 hover:bg-blue-700 hover:text-white"><FaFacebookF /></Link>
                    <Link href='' className="p-2 rounded-full bg-gray-100 hover:bg-black hover:text-white"><FaXTwitter /></Link>
                    <Link href='' className="p-2 rounded-full bg-gray-100 hover:bg-blue-600 hover:text-white"><FaLinkedinIn /></Link>
                    <Link href='' className="p-2 rounded-full bg-gray-100 hover:bg-rose-400 hover:text-white"><FaInstagram /></Link>
                    <Link href='https://www.youtube.com/@TaxLineBD' className="p-2 rounded-full bg-gray-100 hover:bg-red-600 hover:text-white"><FaYoutube /></Link>
                </div>
            </div>

        </header>
    );
}
