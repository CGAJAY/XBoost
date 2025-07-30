import Image from "next/image";
import { UserCircle } from "lucide-react";

export const ClientResults = () => {
    const testimonials = [
        {
            name: "Sarah Chen",
            handle: "@sarahbuilds",
            content:
                "Went from 500 to 5K followers in 2 months! The retweets felt completely natural and brought real engagement to my content.",

            verified: true,
            stats: "2,847 retweets • 156K impressions",
        },
        {
            name: "Marcus Rodriguez",
            handle: "@techfounder",
            content:
                "Best investment for my startup's social presence. The quality of accounts that retweeted was impressive - real people, not bots.",

            verified: true,
            stats: "1,923 retweets • 89K impressions",
        },
        {
            name: "Emma Thompson",
            handle: "@creativemind",
            content:
                "Finally found a service that delivers what it promises. My posts now regularly get 10x more engagement than before.",

            verified: false,
            stats: "3,156 retweets • 203K impressions",
        },
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Client Results & Testimonials
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        See how our clients have transformed their X presence
                        with authentic engagement.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                            {/* Tweet-style header */}
                            <div className="flex items-center mb-4">
                                <UserCircle className="w-12 h-12 text-gray-400 mr-3" />

                                <div className="flex-1">
                                    <div className="flex items-center">
                                        <h4 className="font-semibold text-gray-900">
                                            {testimonial.name}
                                        </h4>
                                        {testimonial.verified && (
                                            <svg
                                                className="w-5 h-5 text-blue-500 ml-1"
                                                fill="currentColor"
                                                viewBox="0 0 20 20">
                                                <path
                                                    fillRule="evenodd"
                                                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        )}
                                    </div>
                                    <p className="text-gray-500 text-sm">
                                        {testimonial.handle}
                                    </p>
                                </div>
                            </div>

                            {/* Tweet content */}
                            <p className="text-gray-800 mb-4 leading-relaxed">
                                {testimonial.content}
                            </p>

                            {/* Stats */}
                            <div className="text-sm text-gray-500 border-t border-gray-200 pt-4">
                                {testimonial.stats}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
