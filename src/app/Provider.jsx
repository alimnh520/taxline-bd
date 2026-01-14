'use client'
import { createContext, useEffect, useState } from "react";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import { usePathname } from "next/navigation";

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

                <div className="fixed top-1/2 -translate-y-1/2 left-10">
                    <div className="size-16 bg-red-600 rounded-full flex items-center justify-center relative before:content('') before:absolute before:w-14 before:h-14 before:bg-blue-600 before:rounded-full">
                    </div>
                </div>

            </div>
        </ContextProvider.Provider>
    );
};

export default Provider;
