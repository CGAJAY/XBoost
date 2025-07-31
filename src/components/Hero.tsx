"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export const Hero = () => {
    return (
        <section className="relative bg-white  pb-20 lg:pb-32 overflow-hidden">
            {/* ✅ Grid Background that fades down */}
            <div className="absolute inset-0 z-0 pointer-events-none fade-grid"></div>

            {/* ✅ Foreground content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Discount Banner */}
                <div className="flex justify-center lg:mb-8 ">
                    <Image
                        src="/twitter.png"
                        alt="30% OFF"
                        width={400}
                        height={100}
                    />
                </div>

                {/* Headline */}
                <div className="text-center">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                        Boost your growth on X
                        <span className="block">Real Retweets from</span>
                        <span className="block">Real Accounts</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                        Get more visibility, followers, and credibility with our
                        proven retweet services.
                    </p>
                    <Link
                        href="/pricing"
                        className="inline-block bg-black text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 transition-colors shadow-lg">
                        View Packages
                    </Link>
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

                {/* Image Section */}
                <div className="mt-20">
                    <Image
                        src="/hero.jpg"
                        alt="Descriptive Alt Text"
                        className="w-full"
                        width={800}
                        height={450}
                        priority
                    />
                </div>
            </div>
        </section>
    );
};
