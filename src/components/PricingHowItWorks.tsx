import React from "react";

const PricingHowItWorks = () => {
    return (
        <div>
            {/* Bottom Info */}
            <div className="mt-16 text-center">
                <div className="bg-gray-50 rounded-2xl p-8 mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        How It Works
                    </h3>
                    <div className="grid md:grid-cols-3 gap-6 text-left">
                        {[
                            {
                                step: 1,
                                title: "Click Package",
                                desc: "Choose your package and open Telegram chat",
                            },

                            {
                                step: 3,
                                title: "Get Payment Info",
                                desc: "Receive payment instructions in instantly",
                            },
                            {
                                step: 2,
                                title: "Send Tweet Link",
                                desc: "Paste your X post link in the chat",
                            },
                        ].map((step) => (
                            <div className="flex items-start" key={step.step}>
                                <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1">
                                    {step.step}
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-1">
                                        {step.title}
                                    </h4>
                                    <p className="text-gray-600 text-sm">
                                        {step.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-black text-white rounded-2xl p-8">
                    <h3 className="text-2xl font-bold mb-4">
                        Need a Custom Package?
                    </h3>
                    <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                        Looking for something specific? We can create a custom
                        package tailored to your exact needs and budget.
                    </p>
                    <a
                        href="https://t.me/Jim_Njue"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                        Request on Telegram
                    </a>
                </div>
            </div>
        </div>
    );
};

export default PricingHowItWorks;
