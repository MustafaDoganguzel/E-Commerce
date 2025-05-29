import { ChevronLeft, ChevronRight, Eye, Heart, ShoppingCart, Star } from "lucide-react";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import FooterLogos from "./FooterLogos";

// Ürün datası (gerçekte API'den veya context'ten gelebilir)
const allProducts = [
    {
        id: "1",
        img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?fit=crop&w=400&q=80",
        title: "Floating Phone",
        author: "English Department",
        price: "$16.48",
        sale: "$6.48",
        images: [
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb?fit=crop&w=400&q=80",
            "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?fit=crop&w=400&q=80"
        ]
    },
    {
        id: "2",
        img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?fit=crop&w=400&q=80",
        title: "Graphic Design",
        author: "English Department",
        price: "$16.48",
        sale: "$6.48",
        images: [
            "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?fit=crop&w=400&q=80",
            "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?fit=crop&w=400&q=80"
        ]
    },
    {
        id: "3",
        img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?fit=crop&w=400&q=80",
        title: "Modern Chair",
        author: "Design Studio",
        price: "$19.99",
        sale: "$8.99",
        images: [
            "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?fit=crop&w=400&q=80",
            "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?fit=crop&w=400&q=80"
        ]
    },
    {
        id: "4",
        img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?fit=crop&w=400&q=80",
        title: "Artistic Bowl",
        author: "Ceramic Arts",
        price: "$25.99",
        sale: "$12.99",
        images: [
            "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?fit=crop&w=400&q=80",
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb?fit=crop&w=400&q=80"
        ]
    },
    {
        id: "5",
        img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?fit=crop&w=400&q=80",
        title: "Graphic Design",
        author: "English Department",
        price: "$16.48",
        sale: "$6.48",
        images: [
            "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?fit=crop&w=400&q=80",
            "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?fit=crop&w=400&q=80"
        ]
    },
    {
        id: "6",
        img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?fit=crop&w=400&q=80",
        title: "Graphic Design",
        author: "English Department",
        price: "$16.48",
        sale: "$6.48",
        images: [
            "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?fit=crop&w=400&q=80",
            "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?fit=crop&w=400&q=80"
        ]
    },
    {
        id: "7",
        img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?fit=crop&w=400&q=80",
        title: "Graphic Design",
        author: "English Department",
        price: "$16.48",
        sale: "$6.48",
        images: [
            "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?fit=crop&w=400&q=80",
            "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?fit=crop&w=400&q=80"
        ]
    },
    {
        id: "8",
        img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?fit=crop&w=400&q=80",
        title: "Graphic Design",
        author: "English Department",
        price: "$16.48",
        sale: "$6.48",
        images: [
            "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?fit=crop&w=400&q=80",
            "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?fit=crop&w=400&q=80"
        ]
    },

];

const colors = [
    { name: "blue", class: "bg-blue-500" },
    { name: "green", class: "bg-green-500" },
    { name: "orange", class: "bg-orange-500" },
    { name: "red", class: "bg-red-500" },
    { name: "navy", class: "bg-gray-900" },
];

export default function ProductDetails() {
    const { id } = useParams();
    const product = allProducts.find((p) => p.id === id) || allProducts[0]; // yedekli
    const [currentImg, setCurrentImg] = useState(0);

    const prevImg = () => setCurrentImg((prev) => (prev === 0 ? product.images.length - 1 : prev - 1));
    const nextImg = () => setCurrentImg((prev) => (prev === product.images.length - 1 ? 0 : prev + 1));
    const setImg = (i) => setCurrentImg(i);

    // Şu anki ürünü bestsellerdan çıkar, kalanları göster
    const bestsellers = allProducts.filter((p) => p.id !== product.id);

    return (
        <>
            <div className="bg-gray-50 min-h-screen flex flex-col items-center pb-10">
                {/* Product Top Section */}
                <div className="w-full max-w-5xl flex gap-8 mt-8">
                    {/* Left: Image Slider */}
                    <div className="flex flex-col w-[370px]">
                        <div className="relative w-full h-[260px] rounded overflow-hidden">
                            <img
                                src={product.images[currentImg]}
                                alt={product.title}
                                className="w-full h-full object-cover transition-all duration-300"
                            />
                            <button
                                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full w-8 h-8 flex items-center justify-center text-xl shadow"
                                onClick={prevImg}
                                aria-label="Previous image"
                            >
                                <ChevronLeft />
                            </button>
                            <button
                                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full w-8 h-8 flex items-center justify-center text-xl shadow"
                                onClick={nextImg}
                                aria-label="Next image"
                            >
                                <ChevronRight />
                            </button>
                        </div>
                        <div className="flex mt-4 gap-3">
                            {product.images.map((img, i) => (
                                <img
                                    key={i}
                                    src={img}
                                    alt={`thumbnail-${i}`}
                                    onClick={() => setImg(i)}
                                    className={`w-16 h-16 object-cover rounded border cursor-pointer transition-all ${currentImg === i
                                        ? "border-2 border-blue-400 ring-2 ring-blue-200"
                                        : "border-gray-200"
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                    {/* Right: Product Info */}
                    <div className="flex-1 pt-2">
                        <h2 className="text-lg font-semibold">{product.title}</h2>
                        <div className="flex items-center space-x-2 mt-2">
                            <div className="flex text-yellow-400">
                                <Star fill="currentColor" className="w-5 h-5" />
                                <Star fill="currentColor" className="w-5 h-5" />
                                <Star fill="currentColor" className="w-5 h-5" />
                                <Star fill="currentColor" className="w-5 h-5" />
                                <Star fill="none" className="w-5 h-5" />
                            </div>
                            <span className="text-sm text-gray-500 ml-1">10 Reviews</span>
                        </div>
                        <div className="text-2xl font-semibold mt-2">{product.price}</div>
                        <div className="mt-1 text-gray-700 text-sm">
                            Availability : <span className="text-green-600 font-semibold">In Stock</span>
                        </div>
                        <p className="mt-3 text-gray-600 text-sm max-w-[450px]">
                            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                        </p>
                        <div className="mt-4 flex space-x-3">
                            {colors.map((c) => (
                                <button
                                    key={c.name}
                                    className={`${c.class} w-6 h-6 rounded-full border-2 border-white shadow cursor-pointer hover:scale-110 transition`}
                                    aria-label={c.name}
                                />
                            ))}
                        </div>
                        <div className="flex items-center gap-2 mt-6">
                            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded transition shadow">
                                Select Options
                            </button>
                            <button className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center hover:bg-white ">
                                <Heart className="text-gray-600 hover:text-red-600 hover:fill-red-600" />
                            </button>
                            <button className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center">
                                <ShoppingCart className="text-gray-600  hover:text-green-600 hover:fill-green-600" />
                            </button>
                            <button className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center">
                                <Eye className="text-gray-600  hover:text-black-600 hover:fill-red-200" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Tabs Navigation */}
                <div className="w-full max-w-5xl border-b border-gray-200 mt-12 mb-6 flex space-x-8 px-2">
                    <button className="py-4 px-2 text-gray-600 font-medium border-b-2 border-transparent hover:border-gray-300 transition">Description</button>
                    <button className="py-4 px-2 text-gray-600 font-medium border-b-2 border-transparent hover:border-gray-300 transition">Additional Information</button>
                    <button className="py-4 px-2 text-gray-900 font-semibold border-b-2 border-gray-300 transition focus:outline-none">
                        Reviews <span className="text-green-600">(0)</span>
                    </button>
                </div>

                {/* Product Details/Reviews Section */}
                <div className="w-full max-w-5xl flex gap-8 px-2">
                    {/* Left: Image */}
                    <div className="w-[300px] flex-shrink-0">
                        <img
                            src={product.images[0]}
                            alt="Review"
                            className="rounded-lg shadow-lg object-cover w-full h-[300px]"
                        />
                    </div>
                    {/* Middle: Main Review */}
                    <div className="flex-1">
                        <h2 className="text-xl font-bold mb-2">the quick fox jumps over</h2>
                        <div className="text-gray-600 text-sm space-y-5">
                            <p>
                                Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                            </p>
                            <p>
                                Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                            </p>
                            <p>
                                Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                            </p>
                        </div>
                    </div>
                    {/* Right: Side Review List */}
                    <div className="w-[340px] flex-shrink-0">
                        <div>
                            <h2 className="text-xl font-bold mb-3">the quick fox jumps over</h2>
                            <ul className="mb-6 space-y-2">
                                {Array.from({ length: 4 }).map((_, i) => (
                                    <li key={i} className="flex items-center text-gray-700 text-sm">
                                        <span className="mr-2 text-gray-400">
                                            <ChevronRight />
                                        </span>
                                        the quick fox jumps over the lazy dog
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold mb-3">the quick fox jumps over</h2>
                            <ul className="space-y-2">
                                {Array.from({ length: 3 }).map((_, i) => (
                                    <li key={i} className="flex items-center text-gray-700 text-sm">
                                        <span className="mr-2 text-gray-400">
                                            <ChevronRight />
                                        </span>
                                        the quick fox jumps over the lazy dog
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bestseller Products Section (dinamik Link ile) */}
                <div className="w-full max-w-6xl mt-14">
                    <h3 className="text-lg font-semibold mb-4 pl-2">BESTSELLER PRODUCTS</h3>
                    <div className="grid grid-cols-4 gap-7">
                        {bestsellers.map((p) => (
                            <Link
                                to={`/product/${p.id}`}
                                key={p.id}
                                className="bg-white rounded-lg shadow p-3 flex flex-col cursor-pointer hover:shadow-lg transition"
                            >
                                <img src={p.img} alt={p.title} className="w-full h-[154px] object-cover rounded" />
                                <div className="mt-3">
                                    <h4 className="text-base font-medium">{p.title}</h4>
                                    <div className="text-xs text-gray-500 mb-2">{p.author}</div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-gray-400 line-through text-sm">{p.price}</span>
                                        <span className="text-green-600 font-semibold text-base">{p.sale}</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
            <FooterLogos />
        </>
    );
}