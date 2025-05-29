import React from "react";
import { Link } from "react-router-dom";

const products = [
    {
        id: 1,
        image: "/best-seller/bestseller-1.jpg",
        title: "Graphic Design",
        department: "English Department",
        oldPrice: "$16.48",
        newPrice: "$6.48",
        colors: ["#5CA7FF", "#F1B94D", "#2A9D8F", "#22223B"]
    },
    {
        id: 2,
        image: "/best-seller/bestseller-2.jpg",
        title: "Graphic Design",
        department: "English Department",
        oldPrice: "$16.48",
        newPrice: "$6.48",
        colors: ["#5CA7FF", "#F1B94D", "#2A9D8F", "#22223B"]
    },
    {
        id: 3,
        image: "/best-seller/bestseller-3.jpg",
        title: "Graphic Design",
        department: "English Department",
        oldPrice: "$16.48",
        newPrice: "$6.48",
        colors: ["#5CA7FF", "#F1B94D", "#2A9D8F", "#22223B"]
    },
    {
        id: 4,
        image: "/best-seller/bestseller-4.jpg",
        title: "Graphic Design",
        department: "English Department",
        oldPrice: "$16.48",
        newPrice: "$6.48",
        colors: ["#5CA7FF", "#F1B94D", "#2A9D8F", "#22223B"]
    },
    {
        id: 5,
        image: "/best-seller/bestseller-5.jpg",
        title: "Graphic Design",
        department: "English Department",
        oldPrice: "$16.48",
        newPrice: "$6.48",
        colors: ["#5CA7FF", "#F1B94D", "#2A9D8F", "#22223B"]
    },
    {
        id: 6,
        image: "/best-seller/bestseller-6.jpg",
        title: "Graphic Design",
        department: "English Department",
        oldPrice: "$16.48",
        newPrice: "$6.48",
        colors: ["#5CA7FF", "#F1B94D", "#2A9D8F", "#22223B"]
    },
    {
        id: 7,
        image: "/best-seller/bestseller-7.jpg",
        title: "Graphic Design",
        department: "English Department",
        oldPrice: "$16.48",
        newPrice: "$6.48",
        colors: ["#5CA7FF", "#F1B94D", "#2A9D8F", "#22223B"]
    },
    {
        id: 8,
        image: "/best-seller/bestseller-8.jpg",
        title: "Graphic Design",
        department: "English Department",
        oldPrice: "$16.48",
        newPrice: "$6.48",
        colors: ["#5CA7FF", "#F1B94D", "#2A9D8F", "#22223B"]
    }
];

export default function BestSeller() {
    return (
        <section className="py-12 w-full">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product, idx) => (
                        <Link
                            key={product.id}
                            to={`/product/${product.id}`}
                            className="flex flex-col items-center group cursor-pointer"
                            tabIndex={0}
                        >
                            <div className="w-full aspect-[3/4] bg-gray-100 rounded overflow-hidden mb-5 relative">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105 group-hover:rotate-1 group-hover:brightness-90"
                                    draggable={false}
                                />
                                {/* Fancy overlay animation */}
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                    <span className="opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-500 bg-white/90 px-6 py-2 rounded-full text-[#252B42] font-semibold shadow-lg tracking-wide">
                                        View Details
                                    </span>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-[#2DC071]/30 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>
                            <div className="font-bold text-lg text-[#252B42] mb-1 group-hover:text-[#2DC071] transition-colors duration-200">
                                {product.title}
                            </div>
                            <div className="text-[#737373] mb-2">{product.department}</div>
                            <div className="mb-2">
                                <span className="text-[#BDBDBD] font-semibold mr-2">{product.oldPrice}</span>
                                <span className="text-[#2DC071] font-semibold">{product.newPrice}</span>
                            </div>
                            <div className="flex gap-2 mt-1">
                                {product.colors.map((color, idx) => (
                                    <span
                                        key={idx}
                                        className="inline-block w-4 h-4 rounded-full border border-gray-200"
                                        style={{ background: color }}
                                    />
                                ))}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}