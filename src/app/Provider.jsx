'use client'
import { createContext, useEffect, useState } from "react";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import { usePathname } from "next/navigation";
import { FaFacebook, FaYoutube } from "react-icons/fa";
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
                    bg-gray-300
                `}
            >
                {path !== '/components/admin' && <Header />}
                {children}
                {path !== '/components/admin' && <Footer />}
                {/* <div className="w-full h-screen flex items-center justify-center">
                    <img src="/update/update.png" alt="" />
                </div> */}

                <div className="fixed top-1/2 -translate-y-1/2 left-10 bg-red-600/20 hidden sm:block p-2 rounded-2xl">
                    <div className="size-14 cursor-pointer bg-blue-600/20 rounded-full group flex items-center justify-center relative before:content('') before:absolute before:w-12 before:h-12 before:bg-blue-600/40 before:rounded-full hover:before:translate-x-2 hover:before:-translate-y-2 before:transition-all before:duration-300 after:content('') after:absolute after:w-10 after:h-10 after:bg-blue-600/60 after:rounded-full hover:after:translate-x-4 hover:after:-translate-y-4 after:transition-all after:duration-300">
                        <Link href="https://www.facebook.com/share/1GzXZFbCGk/" className="z-20 group-hover:translate-x-6 size-8 text-2xl bg-blue-600/80 rounded-full flex items-center justify-center group-hover:-translate-y-6 transition-all duration-300 text-white"></Link>
                    </div>
                    <div className="size-14 cursor-pointer bg-blue-600/20 rounded-full group flex items-center justify-center relative before:content('') before:absolute before:w-12 before:h-12 before:bg-blue-600/40 before:rounded-full hover:before:translate-x-2 hover:before:-translate-y-2 before:transition-all before:duration-300 after:content('') after:absolute after:w-10 after:h-10 after:bg-blue-600/60 after:rounded-full hover:after:translate-x-4 hover:after:-translate-y-4 after:transition-all after:duration-300">
                        <Link href="https://www.youtube.com/@TaxLineBD" className="z-20 group-hover:translate-x-6 size-8 text-2xl bg-blue-600/80 rounded-full flex items-center justify-center group-hover:-translate-y-6 transition-all duration-300 text-white"><FaYoutube /></Link>
                    </div>
                    <div className="size-14 cursor-pointer bg-blue-600/20 rounded-full group flex items-center justify-center relative before:content('') before:absolute before:w-12 before:h-12 before:bg-blue-600/40 before:rounded-full hover:before:translate-x-2 hover:before:-translate-y-2 before:transition-all before:duration-300 after:content('') after:absolute after:w-10 after:h-10 after:bg-blue-600/60 after:rounded-full hover:after:translate-x-4 hover:after:-translate-y-4 after:transition-all after:duration-300">
                        <Link href="https://x.com/TaxLineBD" className="z-20 group-hover:translate-x-6 size-8 text-2xl bg-blue-600/80 rounded-full flex items-center justify-center group-hover:-translate-y-6 transition-all duration-300 text-white"><FaXTwitter /></Link>
                    </div>
                </div>
            </div>
        </ContextProvider.Provider>
    );
};

export default Provider;
