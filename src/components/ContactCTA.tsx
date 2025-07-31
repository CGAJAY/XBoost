import { ArrowRight } from "lucide-react";
export const ContactCTA = () => {
    return (
        <section id="pricing" className="py-20 bg-[#F1F5F9] text-black">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Ready to Grow Your X Presence?
                </h2>
                <p className="text-xl text-black mb-8 max-w-2xl mx-auto">
                    Join thousands of creators and businesses who have boosted
                    their X engagement with our authentic retweet service.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                        href="/pricing"
                        className="text-white bg-black px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black hover:border-2  transition-colors">
                        View Packages
                    </a>
                    <a
                        href="/contact"
                        className="border-2 bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-black hover:text-white transition-colors">
                        Contact Us
                    </a>
                </div>

                <div className="mt-12 pt-8  ">
                    <p className="text-black mb-4">Still have questions?</p>
                    <a
                        href="mailto:hello@xboost.com"
                        className="text-black transition-colors font-medium">
                        Get in touch with our team
                        <ArrowRight className="inline-block ml-1" />
                    </a>
                </div>
            </div>
        </section>
    );
};
