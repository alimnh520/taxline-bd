import { NextResponse } from "next/server";

import piprapay from "@api/piprapay";

piprapay.auth(process.env.PIPRAPAY_API_KEY);

export async function POST(req) {
    const { amount, userId, packageType } = await req.json();

    try {
        const response = await piprapay.createCharge({
            amount: amount,
            currency: "BDT",
            customer: {
                id: userId
            },
            metadata: {
                packageType: packageType
            },
            callback_url: "https://yourdomain.com/api/piprapay/callback"
        });

        return NextResponse.json({
            payment_url: response.data.payment_url
        });

    } catch (err) {
        console.error(err);
        return NextResponse.json(
            { error: "Failed to create charge" },
            { status: 500 }
        );
    }
}
