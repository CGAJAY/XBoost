"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    // Navigation links
    const navLinks = [
        { label: "Home", href: "/" },
        { label: "Pricing", href: "/pricing" },
        { label: "How It Works", href: "/how-it-works" },
        { label: "Results", href: "/results" },
        { label: "About", href: "/about" },
        { label: "Contact", href: "/contact" },
    ];

    const isActive = (href: string) => pathname === href;

    return (
        <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link
                            href="/"
                            className="text-2xl font-bold text-gray-900">
                            XBoost
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`transition-colors ${
                                    isActive(link.href)
                                        ? "text-black font-semibold border-b-2 border-black"
                                        : "text-gray-700 hover:text-gray-900"
                                }`}>
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <Link
                            href="/pricing"
                            className="block mx-3 mt-4 text-black bg-white px-6 py-2 rounded-full text-center border-2 transition-colors">
                            Get Started
                        </Link>
                    </div>

                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-gray-700 hover:text-gray-900">
                            {isMenuOpen ? (
                                // X icon
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                // Hamburger icon
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-100">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={`block px-3 py-2 rounded-md ${
                                        isActive(link.href)
                                            ? "text-black font-semibold bg-gray-100"
                                            : "text-gray-700 hover:text-gray-900"
                                    }`}>
                                    {link.label}
                                </Link>
                            ))}
                            <Link
                                href="/pricing"
                                onClick={() => setIsMenuOpen(false)}
                                className="block mx-3 mt-4 text-black bg-white px-6 py-2 rounded-full text-center border-2 transition-colors">
                                Get Started
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};
