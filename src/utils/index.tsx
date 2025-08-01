export const packages = [
    {
        id: "micro-boost",
        name: "Micro Boost",
        retweets: "90 RTs",
        price: "$50",
        image: "/rocket.jpg",
        features: [
            "90 Real Retweets",
            "Instant Delivery",
            "Telegram Support",
            "Verified Accounts",
            "3 RTs a day",
            "30 days Subscription",
        ],
        popular: false,
    },
    {
        id: "starter-buzz",
        name: "Starter Buzz",
        retweets: "150 RTs",
        price: "$70",
        image: "/bee.jpg",
        features: [
            "150 Real Retweets",
            "Instant Delivery",
            "Telegram Support",
            "Verified Accounts",
            "5 RTs a day",
            "30 days Subscription",
        ],
        popular: true,
    },
    {
        id: "viral-shot",
        name: "Viral Shot",
        retweets: "250 RTs",
        price: "$90",
        originalPrice: "$86",
        image: "/viral.jpg",
        features: [
            "300 Real Retweets",
            "Instant Delivery",
            "Telegram Support",
            "Verified Accounts",
            "10 RTs a day",
            "30 days Subscription",
        ],
        popular: false,
    },
];

export const handlePackageClick = () => {
    const telegramLink = "https://t.me/Jim_Njue";
    window.open(telegramLink, "_blank");
};
