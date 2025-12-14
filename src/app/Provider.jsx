'use client'
import { useEffect, useRef, useState } from "react";
import Footer from "./layout/Footer";
import Header from "./layout/Header";

const Provider = ({ children }) => {
    const ballRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (evt) => {
            const container = containerRef.current;
            const rect = container.getBoundingClientRect();

            let x = (evt.clientX - 10) - rect.left;
            let y = (evt.clientY - 15) - rect.top;

            x = Math.max(0, Math.min(x, rect.width - 21));
            y = Math.max(0, Math.min(y, rect.height - 21));

            ballRef.current.style.transform = `translate(${x}px, ${y}px)`;
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div
            ref={containerRef}
            className="sm:w-[72%] bg-white w-full shadow-2xl mx-auto relative overflow-hidden"
        >
            {/* Cursor Ball */}
            <div
                ref={ballRef}
                className="pointer-events-none absolute left-0 top-0 h-5 w-5 rounded-full bg-green-600 shadow-[0_0_30px_rgba(0,255,0,0.9)] transition-transform duration-200 ease-out z-50"
            />

            <Header />
            {children}
            <Footer />
        </div>
    );
};

export default Provider;
