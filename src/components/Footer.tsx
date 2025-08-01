import Link from "next/link";
import { Mail, Send, Twitter } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Flex wrapper for Brand and Services */}
                <div className="md:flex justify-between gap-8">
                    {/* Brand */}
                    <div className="mb-10 md:mb-0 max-w-md">
                        <Link
                            href="/"
                            className="text-2xl font-bold mb-4 block">
                            XBoost
                        </Link>
                        <p className="text-gray-200">
                            Grow your X presence with authentic retweets from
                            real accounts. Boost engagement, increase
                            visibility, and build credibility.
                        </p>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="font-semibold mb-4">Services</h4>
                        <ul className="space-y-2 text-gray-200">
                            <li>
                                <Link
                                    href="/pricing"
                                    className="hover:text-white transition-colors">
                                    Pricing
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/how-it-works"
                                    className="hover:text-white transition-colors">
                                    How It Works
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/results"
                                    className="hover:text-white transition-colors">
                                    Client Results
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Connect */}
                    <div>
                        <h4 className="font-semibold mb-4">Connect</h4>
                        <ul className="space-y-3 text-gray-200">
                            <li>
                                <a
                                    href="https://t.me/Jim_Njue"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 hover:text-white transition-colors">
                                    <Send size={18} /> @Jim_Njue
                                </a>
                            </li>
                            <li>
                                <a
                                    href="mailto:boostyourx@gmail.com"
                                    className="flex items-center gap-2 hover:text-white transition-colors">
                                    <Mail size={18} /> boostyourx@gmail.com
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://x.com/jimNjue_"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 hover:text-white transition-colors">
                                    <Twitter size={18} /> @jimNjue_
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Footer bottom */}
                <div className="mt-12 pt-8 flex flex-col md:flex-row justify-between items-center border-t border-gray-700">
                    <p className="text-gray-200 text-sm">
                        © {new Date().getFullYear()} XBoost. All rights
                        reserved.
                    </p>
                    <div className="mt-4 md:mt-0">
                        <Link
                            href="/contact"
                            className="text-gray-200 hover:text-white text-sm transition-colors">
                            Support
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
