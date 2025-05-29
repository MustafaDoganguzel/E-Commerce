import { Bone, Dog, Github, Instagram, PawPrint, Play, Twitter } from "lucide-react";
import React from "react";

export default function About() {
    return (
        <>
            <div className=" font-sans bg-[#f9f9fb]">
                {/* ABOUT US SECTION */}
                <section className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto py-12 md:py-16">
                    <div className="flex-1 min-w-[320px]">
                        <h5 className="text-[#7c8db5] uppercase  s mb-2 tracking-wide text-sm">About Company</h5>
                        <h1 className="text-4xl md:text-5xl mb-4">ABOUT US</h1>
                        <p className="text-[#7c8db5] mb-6">
                            We know how large objects will act, but things on a small scale
                        </p>
                        <button className="bg-blue-600 text-white rounded-md px-7 py-3   hover:bg-blue-700 transition-colors">
                            Get Quote Now
                        </button>
                    </div>
                    <div className="relative w-[320px] md:w-[360px] h-[320px] md:h-[360px] mt-10 md:mt-0 md:ml-8 flex-shrink-0">
                        <img
                            src="/technology.png"
                            alt="About us shopping"
                            className="w-full h-full object-cover "
                        />

                    </div>
                </section>
                <section className="max-w-6xl mx-auto pb-12 px-4">
                    <div className="flex flex-col md:flex-row justify-between items-start mb-10 gap-6">
                        <div>
                            <span className="text-[#eb5757]   text-xs">Problems trying</span>
                            <h3 className="  mt-3 mb-2 text-lg">
                                Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
                            </h3>
                        </div>
                        <div className="flex-1 text-[#7c8db5] md:ml-10 mt-2 md:mt-4">
                            Problems trying to resolve the conflict between the two major realms of Classical physics. Newtonian mechanics.
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-around text-center gap-y-8">
                        <div>
                            <h2 className="text-3xl font-extrabold mb-1">15K</h2>
                            <span className="text-[#7c8db5]">Happy Customers</span>
                        </div>
                        <div>
                            <h2 className="text-3xl font-extrabold mb-1">150K</h2>
                            <span className="text-[#7c8db5]">Monthly Visitors</span>
                        </div>
                        <div>
                            <h2 className="text-3xl font-extrabold mb-1">15</h2>
                            <span className="text-[#7c8db5]">Countries Worldwide</span>
                        </div>
                        <div>
                            <h2 className="text-3xl font-extrabold mb-1">100+</h2>
                            <span className="text-[#7c8db5]">Top Partners</span>
                        </div>
                    </div>
                </section>

                <div className="flex justify-center items-center py-8 bg-white">
                    <div className="relative w-full max-w-2xl">
                        <img
                            src="peri11.png"
                            alt="Video thumbnail"
                            className="w-full rounded-xl object-cover"
                        />
                        <button
                            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-400 rounded-full w-16 h-16 flex items-center justify-center shadow-lg hover:bg-blue-600 transition-colors"
                            aria-label="Play video"
                        >
                            <span className="bone-spin">
                                <PawPrint size={35} className="text-white" fill="currentColor" />
                            </span>
                        </button>
                    </div>
                    <style>{`
        .bone-spin {
          display: inline-flex;
          animation: bone-spin 1.2s linear infinite;
          transform-origin: 50% 50%;
        }
        @keyframes bone-spin {
          100% { transform: rotate(360deg);}
        }
      `}</style>
                </div>

                {/* TEAM SECTION */}
                <section className="bg-[#f9f9fb] py-16 px-4">
                    <h2 className="text-center font-extrabold text-3xl md:text-4xl mb-2">Meet Our Team</h2>
                    <p className="text-center text-[#7c8db5] max-w-xl mx-auto mb-10">
                        Problems trying to resolve the conflict between the two major realms of Classical physics. Newtonian mechanics
                    </p>
                    <div className="flex flex-col md:flex-row justify-center gap-8">
                        {/* Team Member 1 */}
                        <div className="bg-white rounded-xl p-3 shadow text-center w-[320px] mx-auto">
                            <img
                                src="/peri.jpg"
                                alt="Team member 1"
                                className="w-full h-90 object-cover rounded-lg mb-4"

                            />
                            <div className="  text-lg mb-1">Peri Dev</div>
                            <div className="text-[#7c8db5] text-sm mb-3">Full Stack Developer
                                <span className=" cursor-pointer flex justify-center space-x-3 text-[#3183ff] mt-2">
                                    <Instagram className="hover:text-orange-300" /><Twitter className="hover:text-blue-300" /><Dog className="hover:text-red-500" />
                                </span>
                            </div>

                        </div>
                        {/* Team Member 2 */}
                        <div className="bg-white rounded-xl p-3 shadow text-center w-[320px] mx-auto">
                            <img
                                src="/peri6.png "
                                alt="Team member 2"
                                className="w-full h-90 object-cover rounded-lg mb-4"
                            />
                            <div className="  text-lg mb-1">Peri Baller</div>
                            <div className="text-[#7c8db5] text-sm mb-3">HR Partner</div>
                            <span className=" cursor-pointer flex justify-center space-x-3 text-[#3183ff] mt-2">
                                <Instagram className="hover:text-orange-300" /><Twitter className="hover:text-blue-300" /><Dog className="hover:text-red-500" />
                            </span>
                        </div>
                        {/* Team Member 3 */}
                        <div className="bg-white rounded-xl p-3 shadow text-center w-[320px] mx-auto">
                            <img
                                src="/peri3.png"
                                alt="Team member 3"
                                className="w-full h-90 object-cover rounded-lg mb-4"
                                style={{ objectPosition: "right" }}
                            />
                            <div className="  text-lg mb-1">Peri Smile</div>
                            <div className="text-[#7c8db5] text-sm mb-3">Marketing Manager</div>
                            <span className=" cursor-pointer flex justify-center space-x-3 text-[#3183ff] mt-2">
                                <Instagram className="hover:text-orange-300" /><Twitter className="hover:text-blue-300" /><Dog className="hover:text-red-500" />
                            </span>
                        </div>
                    </div>
                </section>

            </div>
            <div className="flex justify-between bg-white">
                <div className="w-1/2 flex flex-col justify-center items-start px-12 bg-amber-200">
                    <span className=" text-sm font-semibold mb-4">WORK WITH US</span>
                    <h2 className=" text-3xl md:text-4xl font-extrabold mb-4">Now Let’s grow Yours</h2>
                    <p className=" text-base mb-6 max-w-md">
                        The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th
                    </p>
                    <button className="px-6 py-2 border  rounded  font-semibold bg-transparent hover:bg-white hover:text-[#4277ba] transition">
                        Button
                    </button>
                </div>

                <img
                    src="/workwus.png"
                    alt="Model"
                    className="h-[100%] object-cover"

                />
            </div>


        </>
    );
}