"use client";

import { useState } from "react";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white dark:bg-gray-900 shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo / Brand */}
                    <div className="flex-shrink-0">
                        <Link href="/">
                            <h1 className="text-2xl font-bold font-federant">Brand</h1>
                        </Link>
                    </div>

                    {/* Desktop Links */}
                    <div className="hidden md:flex space-x-6 font-mozillaHeadline">
                        <Link href="/" className="hover:text-blue-600">
                            Home
                        </Link>
                        <Link href="/products" className="hover:text-blue-600">
                            Products
                        </Link>
                        <Link href="/dashboard" className="hover:text-blue-600">
                            Dashboard
                        </Link>
                        <Link href="/login" className="hover:text-blue-600">
                            Login
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-800 dark:text-white focus:outline-none"
                        >
                            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white dark:bg-gray-900 px-2 pt-2 pb-3 space-y-1 font-mozillaHeadline">
                    <Link href="/" className="block px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800">
                        Home
                    </Link>
                    <Link href="/products" className="block px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800">
                        Products
                    </Link>
                    <Link href="/dashboard" className="block px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800">
                        Dashboard / Add Product
                    </Link>
                    <Link href="/login" className="block px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800">
                        Login
                    </Link>
                </div>
            )}
        </nav>
    );
}

