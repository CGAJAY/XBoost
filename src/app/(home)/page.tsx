// pages/index.tsx
import React from "react";
import { Hero } from "@/components/Hero";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { HowItWorks } from "@/components/HowItWorks";
import { ClientResults } from "@/components/ClientResults";
import { FAQ } from "@/components/FAQ";
import { ContactCTA } from "@/components/ContactCTA";

export default function Home() {
    return (
        <>
            <Hero />
            <WhyChooseUs />
            <HowItWorks />
            <ClientResults />
            <FAQ />
            <ContactCTA />
        </>
    );
}
