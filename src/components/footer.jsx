"use client";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-10 pt-10">
            <div className="container mx-auto px-5 grid grid-cols-1 md:grid-cols-4 gap-8">

                {/* Brand */}
                <div>
                    <h2 className="text-2xl font-bold text-white">ShopEase</h2>
                    <p className="mt-3 text-sm">
                        Your one-stop e-commerce platform for quality products at affordable prices.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><a href="/" className="hover:text-white">Home</a></li>
                        <li><a href="/products" className="hover:text-white">Products</a></li>
                        <li><a href="/dashboard" className="hover:text-white">Dashboard</a></li>
                        <li><a href="/login" className="hover:text-white">Login</a></li>
                    </ul>
                </div>

                {/* Customer Support */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Customer Support</h3>
                    <ul className="space-y-2">
                        <li><a href="/faq" className="hover:text-white">FAQ</a></li>
                        <li><a href="/contact" className="hover:text-white">Contact Us</a></li>
                        <li><a href="/shipping" className="hover:text-white">Shipping Info</a></li>
                        <li><a href="/returns" className="hover:text-white">Returns & Refunds</a></li>
                    </ul>
                </div>

                {/* Social Media */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
                    <div className="flex space-x-4">
                        <a href="#" className="hover:text-white"><FaFacebookF /></a>
                        <a href="#" className="hover:text-white"><FaTwitter /></a>
                        <a href="#" className="hover:text-white"><FaInstagram /></a>
                        <a href="#" className="hover:text-white"><FaLinkedinIn /></a>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-gray-700 mt-8 pt-5 text-center text-sm">
                © {new Date().getFullYear()} ShopEase. All rights reserved.
            </div>
        </footer>
    );
}
