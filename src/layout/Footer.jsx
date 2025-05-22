import React from 'react'
import { Facebook, Instagram, Twitter } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="bg-[#FAFAFA] pt-8">
            <div className="max-w-6xl mx-auto px-4 sm:px-8">
                {/* Logo & Socials */}
                <div className="flex justify-between items-center mb-8">
                    <div className="text-[#252B42] font-bold text-2xl">Bandage</div>
                    <div className="flex gap-3">
                        <a href="#" aria-label="Facebook" className="text-[#252B42] hover:text-blue-600"><Facebook size={20} /></a>
                        <a href="#" aria-label="Instagram" className="text-[#252B42] hover:text-pink-600"><Instagram size={20} /></a>
                        <a href="#" aria-label="Twitter" className="text-[#252B42] hover:text-blue-400"><Twitter size={20} /></a>
                    </div>
                </div>
                <hr className="mb-8 border-gray-200" />
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8 pb-8">
                    {/* Company Info */}
                    <div>
                        <div className="font-bold text-[#252B42] mb-4">Company Info</div>
                        <ul className="space-y-2 text-[#737373]">
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Carrier</a></li>
                            <li><a href="#">We are hiring</a></li>
                            <li><a href="#">Blog</a></li>
                        </ul>
                    </div>
                    {/* Legal */}
                    <div>
                        <div className="font-bold text-[#252B42] mb-4">Legal</div>
                        <ul className="space-y-2 text-[#737373]">
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Carrier</a></li>
                            <li><a href="#">We are hiring</a></li>
                            <li><a href="#">Blog</a></li>
                        </ul>
                    </div>
                    {/* Features */}
                    <div>
                        <div className="font-bold text-[#252B42] mb-4">Features</div>
                        <ul className="space-y-2 text-[#737373]">
                            <li><a href="#">Business Marketing</a></li>
                            <li><a href="#">User Analytic</a></li>
                            <li><a href="#">Live Chat</a></li>
                            <li><a href="#">Unlimited Support</a></li>
                        </ul>
                    </div>
                    {/* Resources */}
                    <div>
                        <div className="font-bold text-[#252B42] mb-4">Resources</div>
                        <ul className="space-y-2 text-[#737373]">
                            <li><a href="#">IOS &amp; Android</a></li>
                            <li><a href="#">Watch a Demo</a></li>
                            <li><a href="#">Customers</a></li>
                            <li><a href="#">API</a></li>
                        </ul>
                    </div>
                    {/* Get In Touch */}
                    <div>
                        <div className="font-bold text-[#252B42] mb-4">Get In Touch</div>
                        <form className="flex mb-2">
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none"
                            />
                            <button
                                type="submit"
                                className="bg-[#23A6F0] text-white px-5 py-2 rounded-r-md font-medium hover:bg-[#1681bf] transition"
                            >
                                Subscribe
                            </button>
                        </form>
                        <div className="text-xs text-[#737373]">Lore imp sum dolor Amit</div>
                    </div>
                </div>
            </div>
            <div className="bg-[#F3F3F3] py-4">
                <div className="text-xs text-[#737373] text-center">
                    Made With Love By Turkey All Right Reserved
                </div>
            </div>
        </footer>
    )
}