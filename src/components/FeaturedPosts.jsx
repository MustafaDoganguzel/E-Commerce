import React from "react";


const images = [
    "/featured/featured-1.jpg",
    "/featured/featured-2.jpg",
    "/featured/featured-3.jpg",
];

const FeaturedPosts = () => (
    <div className="bg-gray-50 min-h-screen py-12">
        <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="text-blue-500 font-semibold mb-2">Practice Advice</div>
            <h2 className="text-4xl font-bold mb-4">Featured Posts</h2>
            <div className="text-gray-500 max-w-2xl mx-auto">
                Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Card 1 */}
            <div className="bg-white rounded-lg shadow flex flex-col overflow-hidden">
                <div className="relative">
                    <img src={images[0]} alt="Colorful houses" className="w-full h-48 object-cover" />
                    <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded">NEW</span>
                </div>
                <div className="p-5 flex-1 flex flex-col">
                    <div className="text-xs text-gray-400 mb-2 space-x-2">
                        <span className="text-blue-500 font-semibold">Google</span>
                        <span>Trending</span>
                        <span>New</span>
                    </div>
                    <h3 className="font-bold text-lg mb-2 leading-snug">
                        Loudest à la Madison #1<br />(L’intégral)
                    </h3>
                    <div className="text-gray-500 text-sm mb-4 flex-1">
                        We focus on ergonomics and meeting you where you work. It's only a keystroke away.
                    </div>
                    <div className="flex items-center text-xs text-gray-400 mb-2">
                        <span className="mr-3 flex items-center">
                            <svg className="w-4 h-4 mr-1 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M8 7V3M16 7V3M4 11H20M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z" /></svg>
                            29 April 2025
                        </span>
                        <span className="flex items-center">
                            <svg className="w-4 h-4 mr-1 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 8h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h2"></path><circle cx="12" cy="15" r="2"></circle></svg>
                            16 comments
                        </span>
                    </div>
                    <a href="#" className="text-blue-500 font-semibold mt-auto text-sm hover:underline flex items-center">
                        Learn More <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" /></svg>
                    </a>
                </div>
            </div>
            {/* Card 2 */}
            <div className="bg-white rounded-lg shadow  flex flex-col overflow-hidden">
                <div className="relative">
                    <img src={images[1]} alt="Pink car and blue wall" className="w-full h-48 object-cover" />
                    <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded">NEW</span>
                </div>
                <div className="p-5 flex-1 flex flex-col">
                    <div className="text-xs text-gray-400 mb-2 space-x-2">
                        <span className="text-blue-500 font-semibold">Google</span>
                        <span>Trending</span>
                        <span>New</span>
                    </div>
                    <h3 className="font-bold text-lg mb-2 leading-snug">
                        Loudest à la Madison #1<br />(L’intégral)
                    </h3>
                    <div className="text-gray-500 text-sm mb-4 flex-1">
                        We focus on ergonomics and meeting you where you work. It's only a keystroke away.
                    </div>
                    <div className="flex items-center text-xs text-gray-400 mb-2">
                        <span className="mr-3 flex items-center">
                            <svg className="w-4 h-4 mr-1 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M8 7V3M16 7V3M4 11H20M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z" /></svg>
                            29 April 2025
                        </span>
                        <span className="flex items-center">
                            <svg className="w-4 h-4 mr-1 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 8h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h2"></path><circle cx="12" cy="15" r="2"></circle></svg>
                            13 comments
                        </span>
                    </div>
                    <a href="#" className="text-blue-500 font-semibold mt-auto text-sm hover:underline flex items-center">
                        Learn More <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" /></svg>
                    </a>
                </div>
            </div>
            {/* Card 3 */}
            <div className="bg-white rounded-lg shadow  flex flex-col overflow-hidden">
                <div className="relative">
                    <img src={images[2]} alt="Colorful umbrellas" className="w-full h-48 object-cover" />
                    <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded">NEW</span>
                </div>
                <div className="p-5 flex-1 flex flex-col">
                    <div className="text-xs text-gray-400 mb-2 space-x-2">
                        <span className="text-blue-500 font-semibold">Google</span>
                        <span>Trending</span>
                        <span>New</span>
                    </div>
                    <h3 className="font-bold text-lg mb-2 leading-snug">
                        Loudest à la Madison #1<br />(L’intégral)
                    </h3>
                    <div className="text-gray-500 text-sm mb-4 flex-1">
                        We focus on ergonomics and meeting you where you work. It's only a keystroke away.
                    </div>
                    <div className="flex items-center text-xs text-gray-400 mb-2">
                        <span className="mr-3 flex items-center">
                            <svg className="w-4 h-4 mr-1 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M8 7V3M16 7V3M4 11H20M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z" /></svg>
                            29 April 2025
                        </span>
                        <span className="flex items-center">
                            <svg className="w-4 h-4 mr-1 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 8h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h2"></path><circle cx="12" cy="15" r="2"></circle></svg>
                            13 comments
                        </span>
                    </div>
                    <a href="#" className="text-blue-500 font-semibold mt-auto text-sm hover:underline flex items-center">
                        Learn More <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" /></svg>
                    </a>
                </div>
            </div>
        </div>
    </div>
);

export default FeaturedPosts;