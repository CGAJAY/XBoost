"use client";
import { packages } from "@/utils";

export const Pricing = () => {
    const handlePackageClick = (packageData: (typeof packages)[0]) => {
        const subject = encodeURIComponent(
            `X Retweet Package Order - ${packageData.name}`
        );
        const body = encodeURIComponent(`Hi XBoost Team,

I'm interested in ordering the ${packageData.name} package.

Package Details:
- Package: ${packageData.name}
- Retweets: ${packageData.retweets}
- Price: ${packageData.price} (discounted from ${packageData.originalPrice})

My X/Twitter Post URL: [Please paste your tweet link here]

Please send me the payment instructions to complete my order.

Thank you!

Best regards`);

        const mailtoLink = `mailto:hello@xboost.com?subject=${subject}&body=${body}`;
        window.location.href = mailtoLink;
    };

    return (
        <section className="relative py-20 bg-gradient-to-b from-gray-50 to-white">
            <div className="absolute inset-0 z-0 pointer-events-none fade-grid"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center bg-green-50 border border-green-200 rounded-full px-4 py-2 mb-6">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                        <span className="text-green-700 text-sm font-medium">
                            30% OFF
                        </span>
                        <span className="text-gray-600 text-sm ml-2">
                            Limited Time Offer
                        </span>
                    </div>
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
                            onClick={() => handlePackageClick(pkg)}>
                            {pkg.popular && (
                                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-black text-white px-6 py-2 rounded-b-lg text-sm font-semibold z-10">
                                    Most Popular
                                </div>
                            )}

                            {/* Package Image */}
                            <div className="relative overflow-hidden">
                                <img
                                    src={pkg.image || "/placeholder.svg"}
                                    alt={pkg.name}
                                    className="w-full h-48 object-cover hover:opacity-90 transition-opacity"
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
                                        <span className="text-lg text-gray-500 line-through">
                                            {pkg.originalPrice}
                                        </span>
                                    </div>
                                    <div className="text-sm text-green-600 font-medium">
                                        Save{" "}
                                        {Math.round(
                                            ((Number.parseInt(
                                                pkg.originalPrice.slice(1)
                                            ) -
                                                Number.parseInt(
                                                    pkg.price.slice(1)
                                                )) /
                                                Number.parseInt(
                                                    pkg.originalPrice.slice(1)
                                                )) *
                                                100
                                        )}
                                        %
                                    </div>
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
                                    Order Now - Click to Email
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Info */}
                <div className="mt-16 text-center">
                    <div className="bg-gray-50 rounded-2xl p-8 mb-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            How It Works
                        </h3>
                        <div className="grid md:grid-cols-3 gap-6 text-left">
                            <div className="flex items-start">
                                <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1">
                                    1
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-1">
                                        Click Package
                                    </h4>
                                    <p className="text-gray-600 text-sm">
                                        Choose your package and click to open
                                        email
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1">
                                    2
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-1">
                                        Send Tweet Link
                                    </h4>
                                    <p className="text-gray-600 text-sm">
                                        Add your X post URL and send the email
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1">
                                    3
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-1">
                                        Get Payment Info
                                    </h4>
                                    <p className="text-gray-600 text-sm">
                                        Receive secure payment instructions
                                        within 2-4 hours
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-black text-white rounded-2xl p-8">
                        <h3 className="text-2xl font-bold mb-4">
                            Need a Custom Package?
                        </h3>
                        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                            Looking for something specific? We can create a
                            custom package tailored to your exact needs and
                            budget.
                        </p>
                        <a
                            href="mailto:hello@xboost.com?subject=Custom Package Request&body=Hi XBoost Team,%0D%0A%0D%0AI'm interested in a custom retweet package.%0D%0A%0D%0AMy requirements:%0D%0A- Number of retweets needed: [specify]%0D%0A- Timeline: [specify]%0D%0A- Budget range: [specify]%0D%0A- Special requirements: [specify]%0D%0A%0D%0APlease contact me to discuss pricing and details.%0D%0A%0D%0AThank you!"
                            className="inline-flex items-center bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                            Request Custom Quote
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};
