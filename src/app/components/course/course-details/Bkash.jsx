import { ContextProvider } from "@/app/Provider";
import { useContext } from "react";

export default function Bkash({ setIsPay }) {
    const { userInfo } = useContext(ContextProvider);

    const handleSubscribe = async () => {
        try {
            const res = await fetch('/api/user/subscribe/course', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ type: 'bkash' })
            });
            const data = await res.json();
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="w-full min-h-screen left-0 bg-gray-900/90 z-10 fixed top-0 flex items-center justify-center">
            <div className="size-96 bg-red-600 text-white rounded-md">
                <h1>Bkash</h1>
                <button onClick={() => setIsPay(false)}>Cancel</button>
                <button className="bg-green-700 rounded-xl px-2 py-1" onClick={handleSubscribe}>Subscribe</button>
            </div>
        </div>
    )
}