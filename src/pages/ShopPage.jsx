import React, { useState } from "react";
import { Link } from "react-router-dom";

// Dummy product data, you can expand this as needed
const products = [
    {
        id: 15,
        image: "https://picsum.photos/800/00",
        title: "Graphic Design",
        department: "English Department",
        oldPrice: "$16.48",
        newPrice: "$6.48",
        colors: ["#5CA7FF", "#F1B94D", "#2A9D8F", "#22223B"]
    },
    {
        id: 14,
        image: "https://picsum.photos/800/00",
        title: "Graphic Design",
        department: "English Department",
        oldPrice: "$16.48",
        newPrice: "$6.48",
        colors: ["#5CA7FF", "#F1B94D", "#2A9D8F", "#22223B"]
    },
    {
        id: 13,
        image: "https://picsum.photos/800/00",
        title: "Graphic Design",
        department: "English Department",
        oldPrice: "$16.48",
        newPrice: "$6.48",
        colors: ["#5CA7FF", "#F1B94D", "#2A9D8F", "#22223B"]
    },
    {
        id: 12,
        image: "https://picsum.photos/800/00",
        title: "Graphic Design",
        department: "English Department",
        oldPrice: "$16.48",
        newPrice: "$6.48",
        colors: ["#5CA7FF", "#F1B94D", "#2A9D8F", "#22223B"]
    },
    {
        id: 1,
        image: "https://picsum.photos/800/00",
        title: "Graphic Design",
        department: "English Department",
        oldPrice: "$16.48",
        newPrice: "$6.48",
        colors: ["#5CA7FF", "#F1B94D", "#2A9D8F", "#22223B"]
    },
    {
        id: 2,
        image: "https://picsum.photos/800/200",
        title: "Graphic Design",
        department: "English Department",
        oldPrice: "$16.48",
        newPrice: "$6.48",
        colors: ["#5CA7FF", "#F1B94D", "#2A9D8F", "#22223B"]
    },
    {
        id: 3,
        image: "https://picsum.photos/800/300",
        title: "Graphic Design",
        department: "English Department",
        oldPrice: "$16.48",
        newPrice: "$6.48",
        colors: ["#5CA7FF", "#F1B94D", "#2A9D8F", "#22223B"]
    },
    {
        id: 4,
        image: "https://picsum.photos/800/400",
        title: "Graphic Design",
        department: "English Department",
        oldPrice: "$16.48",
        newPrice: "$6.48",
        colors: ["#5CA7FF", "#F1B94D", "#2A9D8F", "#22223B"]
    },
    {
        id: 5,
        image: "https://picsum.photos/800/500",
        title: "Graphic Design",
        department: "English Department",
        oldPrice: "$16.48",
        newPrice: "$6.48",
        colors: ["#5CA7FF", "#F1B94D", "#2A9D8F", "#22223B"]
    },
    {
        id: 6,
        image: "https://picsum.photos/800/600",
        title: "Graphic Design",
        department: "English Department",
        oldPrice: "$16.48",
        newPrice: "$6.48",
        colors: ["#5CA7FF", "#F1B94D", "#2A9D8F", "#22223B"]
    },
    {
        id: 7,
        image: "https://picsum.photos/800/700",
        title: "Graphic Design",
        department: "English Department",
        oldPrice: "$16.48",
        newPrice: "$6.48",
        colors: ["#5CA7FF", "#F1B94D", "#2A9D8F", "#22223B"]
    },
    {
        id: 8,
        image: "https://picsum.photos/800/800",
        title: "Graphic Design",
        department: "English Department",
        oldPrice: "$16.48",
        newPrice: "$6.48",
        colors: ["#5CA7FF", "#F1B94D", "#2A9D8F", "#22223B"]
    },
    {
        id: 9,
        image: "https://picsum.photos/800/900",
        title: "Graphic Design",
        department: "English Department",
        oldPrice: "$16.48",
        newPrice: "$6.48",
        colors: ["#5CA7FF", "#F1B94D", "#2A9D8F", "#22223B"]
    },
    {
        id: 10,
        image: "https://picsum.photos/800/1000",
        title: "Graphic Design",
        department: "English Department",
        oldPrice: "$16.48",
        newPrice: "$6.48",
        colors: ["#5CA7FF", "#F1B94D", "#2A9D8F", "#22223B"]
    },
    {
        id: 11,
        image: "https://picsum.photos/800/1100",
        title: "Graphic Design",
        department: "English Department",
        oldPrice: "$16.48",
        newPrice: "$6.48",
        colors: ["#5CA7FF", "#F1B94D", "#2A9D8F", "#22223B"]
    },
    {
        id: 12,
        image: "https://picsum.photos/800/120",
        title: "Graphic Design",
        department: "English Department",
        oldPrice: "$16.48",
        newPrice: "$6.48",
        colors: ["#5CA7FF", "#F1B94D", "#2A9D8F", "#22223B"]
    }
];

// Dummy categories
const categories = [
    {
        id: 1,
        title: "Clothes",
        image: "/shop/clothes.jpg"
    },
    {
        id: 2,
        title: "Bag",
        image: "/shop/bag.jpg"
    },
    {
        id: 3,
        title: "Shoes",
        image: "/shop/shoes11.jpg"
    },
    {
        id: 4,
        title: "Cosmetics",
        image: "/shop/cosmetics1.jpg"
    }
];

export default function ShopPage() {
    // Pagination state  
    const [page, setPage] = useState(1);
    const perPage = 8;
    const pageCount = Math.ceil(products.length / perPage);
    const paginatedProducts = products.slice((page - 1) * perPage, page * perPage);

    return (
        <div className="bg-[#F9F9F9] min-h-screen pb-10">
            {/* Topbar/Breadcrumb */}
            <div className="w-full bg-[#FAFAFA] py-6 px-4 md:px-0 border-b border-[#F0F0F0]">
                <div className="max-w-6xl mx-auto flex items-center justify-between">
                    <h1 className="text-2xl font-bold text-[#252B42]">Shop</h1>
                    <nav className="flex items-center space-x-2">
                        <Link
                            to="/"
                            className="font-bold text-[#252B42] hover:underline transition"
                        >
                            Home
                        </Link>
                        <span className="text-[#BDBDBD]">&#8250;</span>
                        <span className="text-[#BDBDBD] font-bold">Shop</span>
                    </nav>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4">
                {/* Categories */}
                <div className="flex gap-4 mb-8 mt-6">
                    {categories.map(cat => (
                        <div key={cat.id} className="flex-1 rounded-lg overflow-hidden relative group cursor-pointer">
                            <img src={cat.image} alt={cat.title} className="w-full h-[110px] object-cover" />
                            <div className="absolute inset-0  bg-opacity-20 group-hover:bg-opacity-40 transition-all duration-300" />
                            <span className="absolute bottom-3 left-4 text-white text-lg font-bold">{cat.title}</span>
                        </div>
                    ))}
                </div>

                {/* Filter & View Controls */}
                <div className="flex flex-wrap items-center justify-between bg-white px-4 py-3 rounded-lg mb-5 shadow-sm">
                    <span className="text-[#737373] text-sm">Showing all {products.length} results</span>
                    <div className="flex items-center gap-4">
                        <span className="text-[#737373] text-sm">View:</span>
                        <button className="p-2 rounded hover:bg-[#F1F1F1] border border-gray-200 text-[#737373]">
                            <svg width="18" height="18" fill="none" stroke="currentColor"><rect x="2" y="2" width="5" height="5" /><rect x="11" y="2" width="5" height="5" /><rect x="2" y="11" width="5" height="5" /><rect x="11" y="11" width="5" height="5" /></svg>
                        </button>
                        <button className="p-2 rounded hover:bg-[#F1F1F1] border border-gray-200 text-[#737373]">
                            <svg width="18" height="18" fill="none" stroke="currentColor"><rect x="2" y="2" width="14" height="5" /><rect x="2" y="11" width="14" height="5" /></svg>
                        </button>
                        <select className="ml-2 border border-gray-200 rounded px-2 py-1 text-[#737373] text-sm focus:outline-none">
                            <option>Popular</option>
                            <option>Newest</option>
                            <option>Low Price</option>
                            <option>High Price</option>
                        </select>
                        <button className="ml-2 px-4 py-1 rounded bg-[#2DC071] text-white font-semibold text-sm hover:bg-[#26a25b] transition">Filter</button>
                    </div>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-7 mb-8">
                    {paginatedProducts.slice(0, 16).map(product => (
                        <a
                            key={product.id}
                            href="#"
                            className="flex flex-col items-center bg-white rounded-lg overflow-hidden group shadow hover:shadow-lg transition-shadow"
                        >
                            <div className="w-full aspect-[3/4] bg-gray-100 rounded-t-lg overflow-hidden relative">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105 group-hover:rotate-1"
                                    draggable={false}

                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#2DC071]/30 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                            <div className="flex-1 flex flex-col justify-center items-center p-3 sm:p-4">
                                <div className="font-bold text-base text-[#252B42] mb-1 group-hover:text-[#2DC071] transition-colors duration-200 text-center">
                                    {product.title}
                                </div>
                                <div className="text-[#737373] text-xs sm:text-sm mb-2 text-center">{product.department}</div>
                                <div className="mb-2">
                                    <span className="text-[#BDBDBD] font-semibold mr-2 line-through">{product.oldPrice}</span>
                                    <span className="text-[#2DC071] font-semibold">{product.newPrice}</span>
                                </div>
                                <div className="flex gap-2">
                                    {product.colors.map((color, idx) => (
                                        <span
                                            key={idx}
                                            className="inline-block w-4 h-4 rounded-full border border-gray-200"
                                            style={{ background: color }}
                                        />
                                    ))}
                                </div>
                            </div>
                        </a>
                    ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-center items-center gap-1 mb-10 h">
                    <button
                        className="h-15 px-3 py-1 rounded border border-gray-200 bg-white text-[#737373] text-sm hover:bg-[#F1F1F1] disabled:opacity-50"
                        onClick={() => setPage(page - 1)}
                        disabled={page === 1}
                    >
                        First
                    </button>
                    {[...Array(pageCount)].map((_, i) => (
                        <button
                            key={i}
                            className={`h-15 w-10 px-3 py-1 rounded border border-gray-200 text-sm font-semibold ${page === i + 1 ? "bg-[#23A6F0] text-white" : "bg-white text-[#737373] hover:bg-[#F1F1F1]"}`}
                            onClick={() => setPage(i + 1)}
                        >
                            {i + 1}
                        </button>
                    ))}
                    <button
                        className=" h-15 w-10 px-3 py-1 rounded border border-gray-200 bg-white text-[#737373] text-sm hover:bg-[#F1F1F1] disabled:opacity-50"
                        onClick={() => setPage(page + 1)}
                        disabled={page === pageCount}
                    >
                        Next
                    </button>
                </div>
            </div>

            {/* Footer logos */}
            <div className="w-full bg-white py-7 flex justify-center gap-20 border-t border-gray-100">
                <img src="/logo/logo1.png" alt="logo1" className="h-15" />
                <img src="/logo/logo3.png" alt="logo3" className="h-15 " />
                <img src="/logo/logo4.png" alt="logo4" className="h-15" />
                <img src="/logo/logo5.png" alt="logo5" className="h-15" />
                <img src="/logo/logo6.png" alt="logo5" className="h-15" />
                <img src="/logo/logo7.png" alt="logo5" className="h-15" />
            </div>

        </div >
    );
}