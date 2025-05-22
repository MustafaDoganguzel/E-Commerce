import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
    {
        id: 1,
        image: '/productSlider/1.png',
        subtitle: 'SUMMER 2024',
        title: 'SUMMER COLLECTION',
        desc: 'We know how large objects will act, but things on a small scale.',
        cta: 'SHOP NOW',
        ctaLink: '/shop'
    },
    {
        id: 2,
        image: '/productSlider/6.png',
        subtitle: 'SUMMER 2024',
        title: 'NEW COLLECTION',
        desc: 'We know how large objects will act, but things on a small scale.',
        cta: 'SHOP NOW',
        ctaLink: '/shop'
    },
    {
        id: 3,
        image: '/productSlider/5.png',
        subtitle: 'SPRING 2024',
        title: 'SPRING COLLECTION',
        desc: 'We know how large objects will act, but things on a small scale.',
        cta: 'SHOP NOW',
        ctaLink: '/shop'
    },

];

export default function PageContent() {
    const [current, setCurrent] = useState(0);

    const prevSlide = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    const nextSlide = () => setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

    const slide = slides[current];

    return (
        <section className="relative w-full h-[400px] sm:h-[520px] overflow-hidden">
            {/* Arka plan olarak fotoğraf */}
            <div
                className="absolute inset-0 w-full h-full z-0 bg-black/60"
                style={{
                    backgroundImage: `url(${slide.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'brightness(1) ',
                }}
            />

            <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none" />

            <div className="relative z-20 w-full h-full flex flex-col justify-center">
                <div className="w-full h-full flex flex-col items-start justify-center px-5 sm:px-20 py-6 sm:py-0 max-w-[600px]">
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
            </div>
            {/* Navigasyon Okları */}
            <button
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/40 hover:bg-white/80 text-black rounded-full p-2 backdrop-blur z-30"
                onClick={prevSlide}
                aria-label="Previous Slide"
                type="button"
            >
                <ChevronLeft size={32} strokeWidth={2} />
            </button>
            <button
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/40 hover:bg-white/80 text-black rounded-full p-2 backdrop-blur z-30"
                onClick={nextSlide}
                aria-label="Next Slide"
                type="button"
            >
                <ChevronRight size={32} strokeWidth={2} />
            </button>
            {/* Slider Göstergesi */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-30">
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