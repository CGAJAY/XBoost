export const ContactCTA = () => {
    return (
        <section id="pricing" className="py-20 bg-black text-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Ready to Grow Your X Presence?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                    Join thousands of creators and businesses who have boosted
                    their X engagement with our authentic retweet service.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                        href="/pricing"
                        className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                        View Packages
                    </a>
                    <a
                        href="/contact"
                        className="border border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition-colors">
                        Contact Us
                    </a>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-800">
                    <p className="text-gray-400 mb-4">Still have questions?</p>
                    <a
                        href="mailto:hello@xboost.com"
                        className="text-white hover:text-gray-300 transition-colors font-medium">
                        Get in touch with our team →
                    </a>
                </div>
            </div>
        </section>
    );
};
