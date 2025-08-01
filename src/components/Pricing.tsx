"use client";
import { packages, handlePackageClick } from "@/utils";
import Image from "next/image";
import PricingHowItWorks from "./PricingHowItWorks";

export const Pricing = () => {
    return (
        <section className="relative py-5 lg:py-20  bg-gradient-to-b from-gray-50 to-white">
            <div className="absolute inset-0 z-0 pointer-events-none fade-grid"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Choose Your Growth Package
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Select the perfect retweet package for your goals. All
                        packages include real engagement from verified accounts
                        with fast delivery and guaranteed results.
                    </p>
                </div>

                {/* Packages Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {packages.map((pkg) => (
                        <div
                            key={pkg.id}
                            className={`relative bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer transform hover:scale-105 ${
                                pkg.popular ? "ring-2 ring-black scale-105" : ""
                            }`}
                            onClick={() => handlePackageClick()}>
                            {pkg.popular && (
                                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-black text-white px-6 py-2 rounded-b-lg text-sm font-semibold z-10">
                                    Most Popular
                                </div>
                            )}

                            {/* Package Image */}
                            <div className="relative overflow-hidden">
                                <Image
                                    src={pkg.image}
                                    alt={pkg.name}
                                    className="w-full h-48 object-cover hover:opacity-90 transition-opacity"
                                    width={400}
                                    height={200}
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                            </div>

                            <div className="p-8">
                                {/* Package Info */}
                                <div className="text-center mb-6">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                        {pkg.name}
                                    </h3>
                                    <p className="text-gray-600 mb-4 text-lg">
                                        {pkg.retweets}
                                    </p>

                                    <div className="flex items-center justify-center space-x-2 mb-2">
                                        <span className="text-3xl font-bold text-gray-900">
                                            {pkg.price}
                                        </span>
                                        {pkg.originalPrice && (
                                            <span className="text-lg text-gray-500 line-through">
                                                {pkg.originalPrice}
                                            </span>
                                        )}
                                    </div>

                                    {pkg.originalPrice && (
                                        <div className="text-sm text-green-600 font-medium">
                                            Save{" "}
                                            {Math.round(
                                                ((parseFloat(
                                                    pkg.originalPrice.slice(1)
                                                ) -
                                                    parseFloat(
                                                        pkg.price.slice(1)
                                                    )) /
                                                    parseFloat(
                                                        pkg.originalPrice.slice(
                                                            1
                                                        )
                                                    )) *
                                                    100
                                            )}
                                            %
                                        </div>
                                    )}
                                </div>

                                {/* Features */}
                                <ul className="space-y-3 mb-8">
                                    {pkg.features.map((feature, index) => (
                                        <li
                                            key={index}
                                            className="flex items-center text-gray-600">
                                            <svg
                                                className="w-5 h-5 text-green-500 mr-3 flex-shrink-0"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24">
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M5 13l4 4L19 7"
                                                />
                                            </svg>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA Button */}
                                <button
                                    className={`w-full py-4 px-6 rounded-full font-semibold transition-all duration-200 ${
                                        pkg.popular
                                            ? "bg-black text-white hover:bg-gray-800 shadow-lg"
                                            : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                                    }`}>
                                    Order Now - Message on Telegram
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                {/* How It Works Section */}
                <PricingHowItWorks />
            </div>
        </section>
    );
};
