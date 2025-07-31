"use client";

import { useState } from "react";

export const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            question: "How many accounts to retweet my posts?",
            answer: "Multiple verified accounts with a huge following will retweet your posts to ensure maximum reach and engagement.",
        },
        {
            question: "Do you use real accounts for retweets?",
            answer: "Yes, absolutely! All our retweets come from genuine, active X accounts with real followers. We have a network of verified users who engage with content naturally. No bots or fake accounts are ever used.",
        },
        {
            question: "What's your refund policy?",
            answer: "We offer a 100% satisfaction guarantee. If you're not happy with the results within 7 days of delivery completion, we'll provide a full refund. We're confident in our service quality and stand behind our work.",
        },
        {
            question: "How fast is delivery?",
            answer: "Most orders begin processing within 24 hours and complete within 48-72 hours depending on package size. Smaller packages (50-100 retweets) typically complete faster, while larger packages may take up to 5 days for natural distribution.",
        },
        {
            question: "Is this service safe for my account?",
            answer: "Completely safe! Our retweets come from real accounts and follow X's terms of service. The engagement appears natural and organic, so there's no risk to your account. We've been operating safely for over 3 years.",
        },
        {
            question: "Can I track the progress of my order?",
            answer: "Yes! Once your order starts, you'll receive updates via email. You can also monitor your post's engagement directly on X to see the retweets coming in real-time. We provide detailed completion reports for larger orders.",
        },
        {
            question: "What types of content work best?",
            answer: "Any public X post can be retweeted! However, engaging content like industry insights, tips, news, or entertaining posts tend to generate additional organic engagement beyond our service. We work with all content types and niches.",
        },
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-xl text-gray-600">
                        Everything you need to know about our X retweet service.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-sm">
                            <button
                                className="w-full px-6 py-6 text-left flex justify-between items-center hover:bg-gray-50 rounded-2xl transition-colors"
                                onClick={() =>
                                    setOpenIndex(
                                        openIndex === index ? null : index
                                    )
                                }>
                                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                                    {faq.question}
                                </h3>
                                <svg
                                    className={`w-5 h-5 text-gray-500 transition-transform ${
                                        openIndex === index ? "rotate-180" : ""
                                    }`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </button>
                            {openIndex === index && (
                                <div className="px-6 pb-6">
                                    <p className="text-gray-600 leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
