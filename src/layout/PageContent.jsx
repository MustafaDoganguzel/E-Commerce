import React, { useState } from 'react';

const slides = [
    {
        id: 1,
        bg: '#52B9DE',
        image: '##',
        subtitle: 'SUMMER 2024',
        title: 'NEW COLLECTION',
        desc: 'We know how large objects will act, but things on a small scale.',
        cta: 'SHOP NOW',
        ctaLink: '/shop'
    },

];

export default function PageContent() {
    const [current, setCurrent] = useState(0);

    const prevSlide = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    const nextSlide = () => setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

    return (
        <section className="relative w-full h-[400px] sm:h-[520px] overflow-hidden">
            {slides.map((slide, idx) => (
                <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-700 ${idx === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                    style={{ background: slide.bg }}
                >
                    <div className="w-full h-full flex flex-col-reverse sm:flex-row items-center justify-between px-5 sm:px-20 py-6 sm:py-0">
                        {/* Left: Text */}
                        <div className="flex-1 flex flex-col justify-center items-start sm:items-start z-20 max-w-[420px]">
                            <div className="uppercase text-xs sm:text-sm text-white tracking-wider mb-2">{slide.subtitle}</div>
                            <h2 className="text-white text-3xl sm:text-5xl font-bold mb-3 leading-tight">
                                <span className="text-white">{slide.title.split(' ')[0]}</span>{' '}
                                <span className="text-white">{slide.title.split(' ').slice(1).join(' ')}</span>
                            </h2>
                            <p className="text-white text-sm sm:text-base mb-6">{slide.desc}</p>
                            <a
                                href={slide.ctaLink}
                                className="bg-[#8BC441] hover:bg-[#6fa92c] transition text-white font-bold py-2 px-7 rounded text-base"
                            >
                                {slide.cta}
                            </a>
                        </div>
                        {/* Right: Image */}
                        <div className="flex-1 flex justify-center items-center relative w-full h-[250px] sm:h-[420px]">
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
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/60 text-white rounded-full p-2 backdrop-blur z-20"
                onClick={prevSlide}
                aria-label="Previous Slide"
            >
                <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth={3}><path d="M20 8l-8 8 8 8" /></svg>
            </button>
            <button
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/60 text-white rounded-full p-2 backdrop-blur z-20"
                onClick={nextSlide}
                aria-label="Next Slide"
            >
                <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth={3}><path d="M12 8l8 8-8 8" /></svg>
            </button>
            {/* Slider Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {slides.map((_, idx) => (
                    <span
                        key={idx}
                        className={`block h-1.5 rounded-sm transition-all duration-300 ${idx === current ? 'w-10 bg-white/90' : 'w-4 bg-white/50'}`}
                    />
                ))}
            </div>
        </section>
    );
}