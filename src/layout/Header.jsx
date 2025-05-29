import React from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, CircleUser, Facebook, Heart, Instagram, Mail, Menu, Phone, Search, ShoppingCart, Twitter, User, Youtube } from 'lucide-react'

export default function Header() {
    return (
        <>
            {/* Top Bar */}
            <div className="hidden sm:flex h-[50px] bg-[#252B42] text-white justify-between items-center px-10 text-sm">
                <div className="flex items-center gap-6">
                    <span className="flex items-center gap-1"><Phone size={16} /> (212) 323 322 33 22</span>
                    <span className="flex items-center gap-1"><Mail size={16} /> example@example.com</span>
                </div>
                <div>Follow Us and get a chance to win 80% off</div>
                <div className="flex items-center gap-2">
                    <span>Follow Us :</span>
                    <Instagram size={16} />
                    <Youtube size={16} />
                    <Facebook size={16} />
                    <Twitter size={16} />
                </div>
            </div>

            {/* Main Header */}
            <div className="flex items-center justify-between  px-6 sm:px-12">
                {/* Logo */}
                <Link to="/" className="text-[#252B42] text-xl font-bold tracking-wide">
                    <div className='flex items-center '>

                        <img src="/Logo1.png" alt="" className='w-[90px] h-[90px]' />PERI SHOP
                    </div>
                </Link>

                {/* Mobile Icons */}
                <div className="flex gap-4 sm:hidden">
                    <CircleUser />
                    <Search />
                    <ShoppingCart />
                    <Menu />
                </div>

                {/* Desktop Menu */}
                <div className="hidden sm:flex gap-8 items-center">
                    <Link to="/" className="hover:text-[#252B42] cursor-pointer">Home</Link>
                    <div className="relative group cursor-pointer">
                        <div className="flex items-center hover:text-[#252B42]">
                            <Link to="/shop" className="hover:text-[#252B42] cursor-pointer">Shop</Link>
                            <ChevronDown className="ml-1 w-4 h-4" />
                        </div>
                        <div className="absolute left-0 mt-2 hidden group-hover:flex group-focus-within:flex flex-col bg-white shadow-lg rounded z-10 min-w-[120px]">
                            <Link
                                to="/shop?category=kadin"
                                className="px-4 py-2 hover:bg-gray-100 text-[#252B42] focus:bg-gray-100"
                            >
                                KADIN
                            </Link>
                            <Link
                                to="/shop?category=erkek"
                                className="px-4 py-2 hover:bg-gray-100 text-[#252B42] focus:bg-gray-100"
                            >
                                ERKEK
                            </Link>
                        </div>
                    </div>
                    <Link to="/about" className="hover:text-[#252B42] cursor-pointer">About</Link>
                    <Link to="/contact" className="hover:text-[#252B42] cursor-pointer">Contact</Link>
                    <Link to="/pages" className="hover:text-[#252B42] cursor-pointer">Pages</Link>
                </div>

                {/* Desktop User/Cart */}
                <div className="hidden sm:flex gap-8 items-center">
                    <div className="flex items-center gap-1 cursor-pointer hover:text-[#252B42]">
                        <User /> <span className="ml-1">Login / Register</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1"><Search /></span>
                        <span className="flex items-center gap-1"><ShoppingCart /> (STATE)</span>
                        <span className="flex items-center gap-1"><Heart /> (STATE)</span>
                    </div>
                </div>
            </div>

            {/* Mobile Nav */}
            <div className="sm:hidden flex flex-col items-center gap-2 text-[#737373] text-base pb-3">
                <Link to="/" className="cursor-pointer">Home</Link>
                <Link to="/shop" className="cursor-pointer">Shop</Link>
                <Link to="/about" className="cursor-pointer">About</Link>
                <Link to="/contact" className="cursor-pointer">Contact</Link>
                <Link to="/pages" className="cursor-pointer">Pages</Link>
            </div>
        </>
    )
}