import React from "react";

const cities = [
    {
        city: "Paris",
        address: "1901 Thorn ridge Cir.",
        postal: "75000 Paris",
        phone: "+451 215 215",
        fax: "+451 215 215",
    },
    {
        city: "Berlin",
        address: "4140 Parker Rd.",
        postal: "75000 Paris",
        phone: "+451 215 215",
        fax: "+451 215 215",
    },
    {
        city: "New York",
        address: "2715 Ash Dr. San Jose,",
        postal: "75000 Paris",
        phone: "+451 215 215",
        fax: "+451 215 215",
    },
    {
        city: "London",
        address: "3517 W. Gray St. Utica,",
        postal: "75000 Paris",
        phone: "+451 215 215",
        fax: "+451 215 215",
    },
];

export default function Contact() {
    return (
        <section
            className="fixed inset-0 w-full h-full bg-[#236781] flex items-center justify-center p-0 overflow-hidden"
            style={{
                minHeight: "100vh",
                height: "100vh",
                width: "100vw",
            }}
        >
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src="/golden.png"
                    alt=""
                    className="object-cover object-right h-full w-full opacity-95 scale-105 transition-transform duration-500 will-change-transform"
                    style={{
                        animation: "floatIn 2.5s cubic-bezier(0.23, 1, 0.32, 1) 0.1s both",
                    }}
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#236781]/90 via-[#236781]/70 to-[#236781]/30" />
            </div>

            <div className="relative z-20 w-full max-w-7xl flex items-center min-h-[450px] px-6 py-12 justify-between">
                <div className="flex-1 flex flex-col justify-center items-start animate-fadein-left">
                    <h2 className="text-white text-3xl font-bold mb-6 tracking-wide">CONTACT US</h2>
                    <p className="text-white/90 mb-8 max-w-xs leading-relaxed">
                        Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
                    </p>
                    <button className="bg-[#4CB4E7] hover:bg-[#329ed0] text-white font-semibold px-7 py-2 rounded transition-all duration-300 shadow-lg animate-bounce-in">
                        CONTACT US
                    </button>
                </div>
                <div className="flex-[1.6] grid grid-cols-2 gap-y-8 gap-x-12 animate-fadein-right">
                    {cities.map((c, i) => (
                        <div
                            key={c.city}
                            className="mb-2"
                            style={{
                                animation: `fadeInUp 0.9s ${0.2 + i * 0.13}s both`,
                            }}
                        >
                            <h3 className="text-white text-lg font-bold mb-1 tracking-wide">{c.city}</h3>
                            <div className="text-white/90 mb-1 font-medium">{c.address}</div>
                            <div className="text-white/70 text-sm">{c.postal}</div>
                            <div className="text-white/80 text-sm mt-1">
                                <span className="font-semibold">Phone</span> : {c.phone}
                            </div>
                            <div className="text-white/80 text-sm">
                                <span className="font-semibold">Fax</span> : {c.fax}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
}