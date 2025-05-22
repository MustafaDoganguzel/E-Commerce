import React from "react";

const PromoCard = () => (
    <div className="py-10 md:py-40">

        <div className="flex flex-col md:flex-row bg-white rounded-lg overflow-hidden shadow max-w-[1100px] mx-auto items-stretch min-h-[380px]">
            <div className="w-full md:w-[60%] bg-gray-50 flex items-center justify-center">
                <img
                    src="/promo-card.png"
                    alt="People under a plaid blanket"
                    className="w-full h-auto max-h-[380px] object-cover"
                />
            </div>
            <div className="w-full md:flex-1 px-6 py-8 md:px-10 md:py-16 flex flex-col justify-center bg-white">
                <div className="text-gray-400 text-sm mb-2">
                    SUMMER 2020
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-4 leading-tight">
                    Part of the Neural Universe
                </div>
                <div className="text-gray-500 text-base mb-8">
                    We know how large objects will act, but things on a small scale.
                </div>
                <div>
                    <a
                        href="#"
                        className="bg-green-500 text-white rounded px-7 py-3 font-semibold text-base mr-3 hover:bg-green-600 transition inline-block"
                    >
                        BUY NOW
                    </a>
                    <a
                        href="#"
                        className="bg-white text-green-500 border border-green-500 rounded px-7 py-3 font-semibold text-base hover:bg-green-50 transition inline-block"
                    >
                        READ MORE
                    </a>
                </div>
            </div>
        </div>
    </div>
);

export default PromoCard;