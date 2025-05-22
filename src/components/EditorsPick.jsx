import React from "react";

const data = [
    {
        label: "MEN",
        image: "/editors-pick/editors-pick-men.png",
        link: "/category/men",
        className: "row-span-2"
    },
    {
        label: "WOMEN",
        image: "/editors-pick/editors-pick-women.png",
        link: "/category/women",
        className: ""
    },
    {
        label: "ACCESSORIES",
        image: "/editors-pick/editors-pick-accessories.jpg",
        link: "/category/accessories",
        className: ""
    },
    {
        label: "KIDS",
        image: "/editors-pick/editors-pick-kids.jpg",
        link: "/category/kids",
        className: ""
    }
];

export default function EditorsPick() {
    return (
        <section className="py-12 bg-white w-full">
            <div className="max-w-5xl mx-auto text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-2">EDITOR'S PICK</h2>
                <p className="text-[#737373] text-sm md:text-base">
                    Problems trying to resolve the conflict between
                </p>
            </div>

            <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 px-4">
                {/* Men large box */}
                <a
                    href={data[0].link}
                    className="relative group col-span-2 md:col-span-2 row-span-2 rounded overflow-hidden min-h-[260px] md:min-h-[360px] flex"
                >
                    <img
                        src={data[0].image}
                        alt={data[0].label}
                        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                        draggable={false}
                    />
                    <span className="absolute bottom-6 left-6 bg-white/90 text-[#252B42] font-bold px-8 py-2 text-base rounded shadow">
                        {data[0].label}
                    </span>
                </a>
                {/* Women */}
                <a
                    href={data[1].link}
                    className="relative group col-span-2 md:col-span-2 row-span-1 rounded overflow-hidden min-h-[140px] md:min-h-[172px] flex"
                >
                    <img
                        src={data[1].image}
                        alt={data[1].label}
                        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                        draggable={false}
                    />
                    <span className="absolute bottom-6 left-6 bg-white/90 text-[#252B42] font-bold px-8 py-2 text-base rounded shadow">
                        {data[1].label}
                    </span>
                </a>
                {/* Accessories */}
                <a
                    href={data[2].link}
                    className="relative group col-span-1 md:col-span-1 row-span-1 rounded overflow-hidden min-h-[140px] md:min-h-[172px] flex"
                >
                    <img
                        src={data[2].image}
                        alt={data[2].label}
                        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                        draggable={false}
                    />
                    <span className="absolute bottom-6 left-6 bg-white/90 text-[#252B42] font-bold px-5 py-2 text-sm rounded shadow">
                        {data[2].label}
                    </span>
                </a>
                {/* Kids */}
                <a
                    href={data[3].link}
                    className="relative group col-span-1 md:col-span-1 row-span-1 rounded overflow-hidden min-h-[140px] md:min-h-[172px] flex"
                >
                    <img
                        src={data[3].image}
                        alt={data[3].label}
                        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                        draggable={false}
                    />
                    <span className="absolute bottom-6 left-6 bg-white/90 text-[#252B42] font-bold px-8 py-2 text-base rounded shadow">
                        {data[3].label}
                    </span>
                </a>
            </div>
        </section>
    );
}