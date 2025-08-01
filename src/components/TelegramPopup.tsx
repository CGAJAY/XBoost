// components/TelegramPopup.tsx
"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import Image from "next/image";

const TELEGRAM_GROUP_LINK = "https://t.me/+Vtjyk725OwIwMTc0";

export const TelegramPopup = () => {
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowPopup(true);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    if (!showPopup) return null;

    return (
        <div className="fixed inset-0 z-50 bg-black/40 bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded-2xl shadow-xl p-6 max-w-sm w-full relative animate-fade-in">
                {/* Close Icon */}
                <button
                    className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
                    onClick={() => setShowPopup(false)}
                    aria-label="Close">
                    <X size={20} />
                </button>

                {/* Telegram Icon */}
                <div className="flex flex-col items-center text-center space-y-4">
                    <Image
                        src="/telegram.png"
                        alt="Telegram"
                        width={64}
                        height={64}
                        className="rounded-full shadow-md"
                    />
                    <h2 className="text-lg font-semibold text-gray-800">
                        Join Our Telegram Group
                    </h2>
                    <p className="text-sm text-gray-600">
                        Be the first to know about updates, exclusive offers,
                        and retweet boosts.
                    </p>

                    <a
                        href={TELEGRAM_GROUP_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-block bg-[#0088cc] text-white px-5 py-2 rounded-full font-medium hover:bg-[#007ab8] transition">
                        Join Now
                    </a>
                </div>
            </div>
        </div>
    );
};
