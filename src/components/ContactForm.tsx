"use client";

import type React from "react";

import { useState } from "react";

export const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "General Inquiry",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Create mailto link with all form data
        const subject = encodeURIComponent(`Contact Form: ${formData.subject}`);
        const body = encodeURIComponent(`Hi XBoost Team,

Contact Details:
Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}

Message:
${formData.message}

---
Please respond to this inquiry at your earliest convenience.

Thank you!`);

        const mailtoLink = `mailto:boostyourx@gmail.com?subject=${subject}&body=${body}`;
        window.location.href = mailtoLink;
    };

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const quickEmailLinks = [
        {
            title: "General Questions",
            description: "Ask about our services, pricing, or process",
            subject: "General Questions",
            body: "Hi XBoost Team,%0D%0A%0D%0AI have some questions about your X retweet service:%0D%0A%0D%0A[Your questions here]%0D%0A%0D%0AThank you!",
        },
        {
            title: "Custom Package",
            description: "Request a tailored package for your needs",
            subject: "Custom Package Request",
            body: "Hi XBoost Team,%0D%0A%0D%0AI'm interested in a custom retweet package.%0D%0A%0D%0AMy requirements:%0D%0A- Number of retweets: [specify]%0D%0A- Timeline: [specify]%0D%0A- Budget: [specify]%0D%0A- Special needs: [specify]%0D%0A%0D%0APlease contact me with pricing and details.%0D%0A%0D%0AThank you!",
        },
        {
            title: "Support Request",
            description: "Get help with an existing order",
            subject: "Support Request",
            body: "Hi XBoost Team,%0D%0A%0D%0AI need assistance with:%0D%0A%0D%0AOrder details: [if applicable]%0D%0AIssue description: [describe your issue]%0D%0A%0D%0APlease help me resolve this.%0D%0A%0D%0AThank you!",
        },
    ];

    return (
        <div className="py-20">
            {/* Hero Section */}
            <section className="bg-gradient-to-b from-gray-50 to-white py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Get in Touch
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Have questions about our X retweet service? Need a
                        custom package? We&apos;re here to help you grow your
                        presence authentically.
                    </p>
                </div>
            </section>

            {/* Quick Contact Options */}
            <section className="py-12 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            Quick Contact Options
                        </h2>
                        <p className="text-gray-600">
                            Click any option below to send a pre-filled email
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 mb-16">
                        {quickEmailLinks.map((link, index) => (
                            <a
                                key={index}
                                href={`mailto:hello@xboost.com?subject=${encodeURIComponent(
                                    link.subject
                                )}&body=${link.body}`}
                                className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors cursor-pointer group">
                                <div className="text-center">
                                    <div className="w-12 h-12 bg-black text-white rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-800 transition-colors">
                                        <svg
                                            className="w-6 h-6"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                            />
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                        {link.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm">
                                        {link.description}
                                    </p>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Main Contact Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16">
                        {/* Contact Information */}
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                                Ways to Reach Us
                            </h2>

                            <div className="space-y-8">
                                {/* Email */}
                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                                        <svg
                                            className="w-6 h-6 text-gray-600"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-2">
                                            Email
                                        </h3>
                                        <p className="text-gray-600 mb-2">
                                            For all inquiries and support
                                        </p>
                                        <a
                                            href="mailto:boostyourx@gmail.com"
                                            className="text-black font-medium hover:underline">
                                            boostyourx@gmail.com
                                        </a>
                                    </div>
                                </div>

                                {/* X/Twitter */}
                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                                        <svg
                                            className="w-6 h-6 text-gray-600"
                                            fill="currentColor"
                                            viewBox="0 0 24 24">
                                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-2">
                                            X (Twitter) DM
                                        </h3>
                                        <p className="text-gray-600 mb-2">
                                            Quick questions and real-time
                                            support
                                        </p>
                                        <a
                                            href="https://x.com/jimNjue_"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-black font-medium hover:underline">
                                            @jimNjue_
                                        </a>
                                    </div>
                                </div>

                                {/* Telegram */}
                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                                        <svg
                                            className="w-6 h-6 text-gray-600"
                                            fill="currentColor"
                                            viewBox="0 0 24 24">
                                            <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-2">
                                            Telegram
                                        </h3>
                                        <p className="text-gray-600 mb-2">
                                            Secure messaging and file sharing
                                        </p>
                                        <a
                                            href="https://t.me/Jim_Njue"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-black font-medium hover:underline">
                                            @Jim_Njue
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Response Time Info */}
                            <div className="mt-12 p-6 bg-gray-50 rounded-2xl">
                                <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                                    <svg
                                        className="w-5 h-5 text-green-500 mr-2"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                    Response Time
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    We typically respond to all inquiries within{" "}
                                    <strong>instantly</strong> . For urgent
                                    matters, please use Telegram for faster
                                    response.
                                </p>
                            </div>

                            {/* Guarantee */}
                            <div className="mt-6 p-6 bg-black text-white rounded-2xl">
                                <h3 className="font-semibold mb-3 flex items-center">
                                    <svg
                                        className="w-5 h-5 text-green-400 mr-2"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                    100% Satisfaction Guarantee
                                </h3>
                                <p className="text-gray-300 text-sm">
                                    Not happy with your results? We offer a full
                                    refund within 7 days of order completion.
                                    Your success is our priority.
                                </p>
                            </div>
                        </div>
                        {/* Contact Form */}
                        <div className="bg-white rounded-3xl p-8 shadow-lg">
                            <h2 className="text-3xl font-bold text-gray-900 mb-2">
                                Send us a Message
                            </h2>
                            <p className="text-gray-600 mb-8">
                                Fill out the form below and we&apos;ll open your
                                email client with all details pre-filled
                            </p>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label
                                            htmlFor="name"
                                            className="block text-sm font-medium text-gray-700 mb-2">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-colors"
                                            placeholder="Your full name"
                                        />
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="block text-sm font-medium text-gray-700 mb-2">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-colors"
                                            placeholder="your@email.com"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label
                                        htmlFor="subject"
                                        className="block text-sm font-medium text-gray-700 mb-2">
                                        Subject *
                                    </label>
                                    <select
                                        id="subject"
                                        name="subject"
                                        required
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-colors">
                                        <option value="General Inquiry">
                                            General Inquiry
                                        </option>
                                        <option value="Package Question">
                                            Package Question
                                        </option>
                                        <option value="Custom Package Request">
                                            Custom Package Request
                                        </option>
                                        <option value="Order Support">
                                            Order Support
                                        </option>
                                        <option value="Technical Issue">
                                            Technical Issue
                                        </option>
                                        <option value="Partnership Inquiry">
                                            Partnership Inquiry
                                        </option>
                                        <option value="Refund Request">
                                            Refund Request
                                        </option>
                                        <option value="Billing Question">
                                            Billing Question
                                        </option>
                                    </select>
                                </div>

                                <div>
                                    <label
                                        htmlFor="message"
                                        className="block text-sm font-medium text-gray-700 mb-2">
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={6}
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-colors resize-none"
                                        placeholder="Tell us about your goals, questions, or requirements..."
                                    />
                                </div>

                                {/* Form Preview */}
                                {(formData.name ||
                                    formData.email ||
                                    formData.message) && (
                                    <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-black">
                                        <h4 className="font-semibold text-gray-900 mb-2 text-sm">
                                            Email Preview:
                                        </h4>
                                        <div className="text-sm text-gray-600 space-y-1">
                                            <p>
                                                <strong>To:</strong>{" "}
                                                hello@xboost.com
                                            </p>
                                            <p>
                                                <strong>Subject:</strong>{" "}
                                                Contact Form: {formData.subject}
                                            </p>
                                            <p>
                                                <strong>From:</strong>{" "}
                                                {formData.name} (
                                                {formData.email})
                                            </p>
                                            {formData.message && (
                                                <p>
                                                    <strong>Message:</strong>{" "}
                                                    {formData.message.substring(
                                                        0,
                                                        100
                                                    )}
                                                    {formData.message.length >
                                                    100
                                                        ? "..."
                                                        : ""}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={
                                        !formData.name ||
                                        !formData.email ||
                                        !formData.message
                                    }
                                    className="w-full bg-black text-white py-4 px-6 rounded-lg font-semibold hover:bg-gray-800 transition-colors shadow-lg disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center">
                                    <svg
                                        className="w-5 h-5 mr-2"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                        />
                                    </svg>
                                    Open Email Client with Details
                                </button>

                                <p className="text-xs text-gray-500 text-center">
                                    Clicking the button above will open your
                                    default email client with all your details
                                    pre-filled. You can then review and send the
                                    email.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
