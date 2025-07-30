export const HowItWorks = () => {
    const steps = [
        {
            number: "01",
            title: "Select Package",
            description:
                "Choose the retweet package that fits your goals and budget from our pricing options.",
        },
        {
            number: "02",
            title: "Get Payment Info",
            description:
                "Receive secure payment instructions via email to complete your order.",
        },
        {
            number: "03",
            title: "Send Tweet Link",
            description:
                "Share the link to your X post that you want to boost with authentic retweets.",
        },
        {
            number: "04",
            title: "We Promote",
            description:
                "Our network of verified accounts starts retweeting your content within 24 hours.",
        },
        {
            number: "05",
            title: "You Get Results",
            description:
                "Watch your engagement soar with real retweets, increased visibility, and follower growth.",
        },
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        How It Works
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Get started in minutes with our simple 5-step process.
                        No complicated setup required.
                    </p>
                </div>

                <div className="grid md:grid-cols-5 gap-8">
                    {steps.map((step, index) => (
                        <div key={index} className="text-center">
                            <div className="relative mb-6">
                                <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                                    {step.number}
                                </div>
                                {index < steps.length - 1 && (
                                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gray-300 -translate-y-0.5"></div>
                                )}
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                {step.title}
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
