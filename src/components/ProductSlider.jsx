import React, { useState } from "react";

const slides = [
    {
        id: 1,
        bg: "#44856C",
        image: "/classic-product-1.jpg", // Görselinizi public klasörüne ekleyin
        subtitle: "SUMMER 2020",
        title: "Vita Classic Product",
        desc:
            "We know how large objects will act, We know how are objects will act, We know",
        price: "$16.48",
        cta: "ADD TO CART",
        ctaLink: "#"
    },
    // Ekstra slider eklemek isterseniz buraya ekleyin
];

export default function ProductSlider() {
    const [current, setCurrent] = useState(0);

    const prevSlide = () =>
        setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    const nextSlide = () =>
        setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

    return (
        <section className="relative w-full h-[410px] sm:h-[600px] overflow-hidden">
            {slides.map((slide, idx) => (
                <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-700 ${idx === current ? "opacity-100 z-10" : "opacity-0 z-0"
                        }`}
                    style={{ background: slide.bg }}
                >
                    <div className="flex flex-col-reverse sm:flex-row items-center justify-between h-full px-5 sm:px-24 py-8">
                        {/* Left: Text */}
                        <div className="flex-1 flex flex-col justify-center items-start z-20 max-w-[440px]">
                            <div className="uppercase text-xs sm:text-sm text-white tracking-wider mb-3">
                                {slide.subtitle}
                            </div>
                            <h2 className="text-white text-3xl sm:text-5xl font-bold mb-5 leading-tight">
                                {slide.title.split(" ").slice(0, 2).join(" ")} <br />
                                {slide.title.split(" ").slice(2).join(" ")}
                            </h2>
                            <p className="text-white text-base mb-6">{slide.desc}</p>
                            <div className="flex items-center gap-4">
                                <span className="text-white font-bold text-lg">
                                    {slide.price}
                                </span>
                                <a
                                    href={slide.ctaLink}
                                    className="bg-[#7DD97B] hover:bg-[#5EA35B] transition text-white font-bold py-2 px-8 rounded text-base"
                                >
                                    {slide.cta}
                                </a>
                            </div>
                        </div>
                        {/* Right: Image */}
                        <div className="flex-1 flex justify-center items-center relative w-full h-[260px] sm:h-[480px]">
                            <img
                                src={slide.image}
                                alt="Slider main"
                                className="object-contain h-full w-auto select-none pointer-events-none"
                                draggable={false}
                            />
                        </div>
                    </div>
                </div>
            ))}
            {/* Navigation Arrows */}
            <button
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-transparent text-white rounded-full p-2 z-20"
                onClick={prevSlide}
                aria-label="Previous Slide"
            >
                <svg width="36" height="36" fill="none" stroke="currentColor" strokeWidth={3}>
                    <path d="M22 10l-8 8 8 8" />
                </svg>
            </button>
            <button
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-transparent text-white rounded-full p-2 z-20"
                onClick={nextSlide}
                aria-label="Next Slide"
            >
                <svg width="36" height="36" fill="none" stroke="currentColor" strokeWidth={3}>
                    <path d="M14 10l8 8-8 8" />
                </svg>
            </button>
            {/* Slider Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {slides.map((_, idx) => (
                    <span
                        key={idx}
                        className={`block h-1.5 rounded-sm transition-all duration-300 ${idx === current ? "w-12 bg-white/90" : "w-6 bg-white/50"
                            }`}
                    />
                ))}
            </div>
        </section>
    );
}