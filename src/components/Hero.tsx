"use client";

import React from "react";

const scrollToPricing = () => {
    const pricingSection = document.getElementById("pricing");
    if (pricingSection) {
        pricingSection.scrollIntoView({ behavior: "smooth" });
    }
};

export const Hero = () => {
    return (
        <section className="relative bg-white py-20 lg:py-32 overflow-hidden">
            {/* ✅ Grid Background that fades down */}
            <div className="absolute inset-0 z-0 pointer-events-none fade-grid"></div>

            {/* ✅ Foreground content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Discount Banner */}
                <div className="flex justify-center mb-8">
                    <div className="bg-green-50 border border-green-200 rounded-full px-6 py-2 flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-green-700 text-sm font-medium">
                            30% OFF
                        </span>
                        <span className="text-gray-600 text-sm">
                            For newly joined customers
                        </span>
                        <svg
                            className="w-4 h-4 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </div>
                </div>

                {/* Headline */}
                <div className="text-center">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                        Grow Fast on X —{" "}
                        <span className="block">Real Retweets from</span>
                        <span className="block">Real Accounts</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                        Boost your X presence with authentic engagement from
                        verified accounts. Get more visibility, followers, and
                        credibility with our proven retweet services.
                    </p>

                    <button
                        onClick={scrollToPricing}
                        className="bg-black text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 transition-colors shadow-lg">
                        View Packages
                    </button>
                </div>

                {/* Client Logos */}
                <div className="mt-20 relative overflow-hidden">
                    <p className="text-center text-gray-500 text-sm mb-8">
                        Trusted by creators and businesses worldwide
                    </p>

                    <div className="relative h-12">
                        <div className="animate-scroll flex space-x-16 absolute whitespace-nowrap will-change-transform">
                            <div className="text-2xl font-bold text-gray-400">
                                TechCorp
                            </div>
                            <div className="text-2xl font-bold text-gray-400">
                                StartupX
                            </div>
                            <div className="text-2xl font-bold text-gray-400">
                                CreatorHub
                            </div>
                            <div className="text-2xl font-bold text-gray-400">
                                BrandFlow
                            </div>
                            <div className="text-2xl font-bold text-gray-400">
                                SocialPro
                            </div>

                            {/* Duplicate for seamless loop */}
                            <div className="text-2xl font-bold text-gray-400">
                                TechCorp
                            </div>
                            <div className="text-2xl font-bold text-gray-400">
                                StartupX
                            </div>
                            <div className="text-2xl font-bold text-gray-400">
                                CreatorHub
                            </div>
                            <div className="text-2xl font-bold text-gray-400">
                                BrandFlow
                            </div>
                            <div className="text-2xl font-bold text-gray-400">
                                SocialPro
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
