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
            </div>
        </ContextProvider.Provider>
    );
};

export default Provider;
