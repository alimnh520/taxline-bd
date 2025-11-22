'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaFacebookF, FaXTwitter, FaLinkedinIn, FaInstagram, FaYoutube, FaUser, FaBars, FaX, FaXmark } from "react-icons/fa6";

export default function Header() {
    const [clickUser, setClickUser] = useState(false);
    const [userInfo, setUserInfo] = useState("");
    const [mobileMenu, setMobileMenu] = useState(false);
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
        <header className="md:w-[87%] w-full mx-auto flex flex-col sm:mt-5 my-font">
            <div className="w-full flex justify-between items-center px-4 shadow md:shadow-none ">

                {/* Logo */}
                <div className="flex items-center">
                    <img src="/logo.jpg" alt="BDTaxation Logo" className="md:h-28 h-[70px] object-contain" />
                </div>

                {/* Desktop Menu */}
                <nav className="hidden md:flex space-x-3 font-semibold text-green-800">
                    <Link href="/" className={`${path === '/' ? 'bg-[#172d13] text-white' : ''} hover:bg-[#172d13] hover:text-white px-3 py-2 rounded text-[14px]`}>HOME</Link>
                    <Link href="/components/course" className={`${path.startsWith('/components/course') ? 'bg-[#172d13] text-white' : ''} hover:bg-[#172d13] hover:text-white px-3 py-2 rounded text-[14px]`}>COURSES</Link>
                    <Link href="/components/services" className={`${path === '/components/services' ? 'bg-[#172d13] text-white' : ''} hover:bg-[#172d13] hover:text-white px-3 py-2 rounded text-[14px]`}>SERVICES</Link>
                    <Link href="/components/package" className={`${path === '/components/package' ? 'bg-[#172d13] text-white' : ''} hover:bg-[#172d13] hover:text-white px-3 py-2 rounded text-[14px]`}>PACKAGE</Link>
                    <Link href="" className={`${path === '/rgre' ? 'bg-[#172d13] text-white' : ''} hover:bg-[#172d13] hover:text-white px-3 py-2 rounded text-[14px]`}>BLOG</Link>
                    {!userInfo && <Link href="/components/login" className={`${path === '/components/login' ? 'bg-[#172d13] text-white' : ''} hover:underline px-3 py-2 rounded text-[14px]`}>SIGNIN</Link>}
                    {!userInfo && <Link href="/components/registration" className={`${path === '/components/registration' ? 'bg-[#172d13] text-white' : ''} hover:underline px-3 py-2 rounded text-[14px]`}>REGISTER</Link>}
                    {userInfo && <Link href="/components/user/dashboard" className={`${path === '/components/user/dashboard' ? 'bg-[#172d13] text-white' : ''} hover:bg-[#172d13] hover:text-white px-3 py-2 rounded text-[14px]`}>DASHBOARD</Link>}
                </nav>

                <div className="md:flex justify-center space-x-3 hidden text-gray-700">
                    <Link href='https://www.facebook.com/share/1GzXZFbCGk/' className="p-2 rounded-full bg-gray-100 hover:bg-blue-700 hover:text-white"><FaFacebookF /></Link>
                    <Link href='' className="p-2 rounded-full bg-gray-100 hover:bg-black hover:text-white"><FaXTwitter /></Link>
                    <Link href='' className="p-2 rounded-full bg-gray-100 hover:bg-blue-600 hover:text-white"><FaLinkedinIn /></Link>
                    <Link href='' className="p-2 rounded-full bg-gray-100 hover:bg-rose-400 hover:text-white"><FaInstagram /></Link>
                    <Link href='https://www.youtube.com/@TaxLineBD' className="p-2 rounded-full bg-gray-100 hover:bg-red-600 hover:text-white"><FaYoutube /></Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center">
                    <button onClick={() => setMobileMenu(!mobileMenu)} className="text-green-800">
                        {mobileMenu ? <FaXmark size={28}/> : <FaBars size={24} />}
                    </button>
                </div>

            </div>

            {/* Mobile Menu */}
            {/* {mobileMenu && (
               
            )} */}

            <div className={`flex flex-col ${mobileMenu ? 'h-[300px]' : 'h-0'} ${(mobileMenu && userInfo) ? 'h-[310px]' : 'h-0'} transition-all duration-300 bg-white mt-2 px-2 overflow-y-hidden shadow-lg rounded-md`}>
                <Link href="/" className="block px-3 py-2 text-green-800 font-semibold hover:bg-[#172d13] hover:text-white rounded" onClick={() => setMobileMenu(false)}>HOME</Link>
                <Link href="/components/course" className="block px-3 py-2 text-green-800 font-semibold hover:bg-[#172d13] hover:text-white rounded" onClick={() => setMobileMenu(false)}>COURSES</Link>
                <Link href="/components/services" className="block px-3 py-2 text-green-800 font-semibold hover:bg-[#172d13] hover:text-white rounded" onClick={() => setMobileMenu(false)}>SERVICES</Link>
                <Link href="/components/package" className="block px-3 py-2 text-green-800 font-semibold hover:bg-[#172d13] hover:text-white rounded" onClick={() => setMobileMenu(false)}>PACKAGE</Link>
                <Link href="" className="block px-3 py-2 text-green-800 font-semibold hover:bg-[#172d13] hover:text-white rounded" onClick={() => setMobileMenu(false)}>BLOG</Link>
                {!userInfo && <Link href="/components/login" className="block px-3 py-2 text-green-800 font-semibold hover:bg-[#172d13] hover:text-white rounded" onClick={() => setMobileMenu(false)}>SIGNIN</Link>}
                {!userInfo && <Link href="/components/registration" className="block px-3 py-2 text-green-800 font-semibold hover:bg-[#172d13] hover:text-white rounded" onClick={() => setMobileMenu(false)}>REGISTER</Link>}
                {userInfo && <Link href="/components/user/dashboard" className="block px-3 py-2 text-green-800 font-semibold hover:bg-[#172d13] hover:text-white rounded" onClick={() => setMobileMenu(false)}>DASHBOARD</Link>}

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
