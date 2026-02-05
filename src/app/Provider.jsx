'use client'
import { createContext, useEffect, useState } from "react";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import { usePathname } from "next/navigation";
import { FaFacebook, FaYoutube, FaFacebookMessenger } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaX, FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

export const ContextProvider = createContext(null);

const Provider = ({ children }) => {
    const [userInfo, setUserInfo] = useState(null);
    const [loading, setLoading] = useState(true);
    const path = usePathname();

    useEffect(() => {
        async function userInfoData() {
            try {
                const res = await fetch("/api/user/user-info", { method: 'GET' });
                const data = await res.json();
                if (data.success) {
                    setUserInfo(data.message);
                }
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }
        userInfoData();
    }, []);

    return (
        <ContextProvider.Provider value={{ userInfo, setUserInfo, loading }}>
            <div
                className={`
                    w-full
                    shadow-2xl
                    mx-auto
                    relative
                    overflow-hidden 
                     
                    ${path === '/components/admin' ? 'lg:max-w-full' : 'lg:max-w-[72%]'}
                    bg-gray-100
                `}
            >
                {path !== '/components/admin' && <Header />}
                {children}
                {path !== '/components/admin' && <Footer />}
                {/* <div className="w-full h-screen flex items-center justify-center">
                    <img src="/update/update.png" alt="" />
                </div> */}

                <div className="fixed top-1/2 flex-col gap-y-1 -translate-y-1/2 left-10 bg-gray-300 hidden sm:flex p-2 rounded-2xl">
                    <Link href="https://m.me/TaxLineBD/" >
                        <div className="size-14 cursor-pointer hover:bg-blue-600/20 bg-blue-600 transition-all duration-300 rounded-full group flex items-center justify-center relative before:content('') before:absolute before:w-12 before:h-12 hover:before:bg-blue-600/40 before:bg-blue-600 before:rounded-full hover:before:translate-x-2 hover:before:-translate-y-2 before:transition-all before:duration-300 after:content('') after:absolute after:w-10 after:h-10 hover:after:bg-blue-600/60 after:bg-blue-600 after:rounded-full hover:after:translate-x-4 hover:after:-translate-y-4 after:transition-all after:duration-300">
                            <button className="z-20 group-hover:translate-x-6 size-8 text-3xl bg-blue-600/80 rounded-full flex items-center justify-center group-hover:-translate-y-6 transition-all duration-300 text-white"><FaFacebookMessenger /></button>
                        </div>
                    </Link>
                    <Link href="https://wa.me/8801737263347" >
                        <div className="size-14 cursor-pointer hover:bg-green-600/20 bg-green-600 transition-all duration-300 rounded-full group flex items-center justify-center relative before:content('') before:absolute before:w-12 before:h-12 hover:before:bg-green-600/40 before:bg-green-600 before:rounded-full hover:before:translate-x-2 hover:before:-translate-y-2 before:transition-all before:duration-300 after:content('') after:absolute after:w-10 after:h-10 hover:after:bg-green-600/60 after:bg-green-600 after:rounded-full hover:after:translate-x-4 hover:after:-translate-y-4 after:transition-all after:duration-300">
                            <button className="z-20 group-hover:translate-x-6 size-8 text-3xl bg-green-600/80 rounded-full flex items-center justify-center group-hover:-translate-y-6 transition-all duration-300 text-white"><IoLogoWhatsapp /></button>
                        </div>
                    </Link>
                    {/* <Link href="https://www.youtube.com/@TaxLineBD" >
                        <div className="size-14 cursor-pointer hover:bg-red-600/20 bg-red-600 transition-all duration-300 rounded-full group flex items-center justify-center relative before:content('') before:absolute before:w-12 before:h-12 hover:before:bg-red-600/40 before:bg-red-600 before:rounded-full hover:before:translate-x-2 hover:before:-translate-y-2 before:transition-all before:duration-300 after:content('') after:absolute after:w-10 after:h-10 hover:after:bg-red-600/60 after:bg-red-600 after:rounded-full hover:after:translate-x-4 hover:after:-translate-y-4 after:transition-all after:duration-300">
                            <button className="z-20 group-hover:translate-x-6 size-8 text-3xl bg-red-600/80 rounded-full flex items-center justify-center group-hover:-translate-y-6 transition-all duration-300 text-white"><FaYoutube /></button>
                        </div>
                    </Link> */}

                    {/* <Link href="https://x.com/TaxLineBD" >
                        <div className="size-14 cursor-pointer hover:bg-gray-900/20 bg-gray-900 transition-all duration-300 rounded-full group flex items-center justify-center relative before:content('') before:absolute before:w-12 before:h-12 hover:before:bg-gray-900/40 before:bg-gray-900 before:rounded-full hover:before:translate-x-2 hover:before:-translate-y-2 before:transition-all before:duration-300 after:content('') after:absolute after:w-10 after:h-10 hover:after:bg-gray-900/60 after:bg-gray-900 after:rounded-full hover:after:translate-x-4 hover:after:-translate-y-4 after:transition-all after:duration-300">
                            <button className="z-20 group-hover:translate-x-6 size-8 text-3xl bg-gray-900/80 rounded-full flex items-center justify-center group-hover:-translate-y-6 transition-all duration-300 text-white"><FaXTwitter /></button>
                        </div>
                    </Link> */}


                </div>
            </div>
        </ContextProvider.Provider>
    );
};

export default Provider;
