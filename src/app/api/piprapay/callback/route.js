import { NextResponse } from "next/server";

export async function POST(req) {
    const data = await req.json();

    if (data.status === "success") {
        console.log("Payment success for:", data.customer.id);
    }

    return NextResponse.json({ received: true });
}

