import React from "react";

const Footer = () => {
    // Single data structure for everything
    //   const footerContent = {
    //     columns: [
    //       {
    //         title: "Shop and Learn",
    //         links: ["Store", "Mac", "iPad", "iPhone", "Watch", "AirPods", "TV & Home", "AirTag", "Accessories", "Gift Cards"],
    //       },
    //       { title: "Apple Wallet", links: ["Wallet"] },
    //       { title: "Account", links: ["Manage Your Apple Account", "Apple Store Account", "iCloud.com"] },
    //       { title: "Entertainment", links: ["Apple One", "Apple TV+", "Apple Music", "Apple Arcade", "Apple Podcasts", "Apple Books", "App Store"] },
    //       { title: "Apple Store", links: ["Find a Store", "Genius Bar", "Today at Apple", "Group Reservation", "Apple Camp", "Apple Trade In", "Ways to Buy", "Recycling Programme", "Order Status", "Shopping Help"] },
    //       { title: "For Business", links: ["Apple and Business", "Shop for Business"] },
    //       { title: "For Education", links: ["Apple and Education", "Shop for Education", "Shop for University"] },
    //       { title: "For Healthcare", links: ["Apple and Healthcare"] },
    //       { title: "For Government", links: ["Apple and Government"] },
    //     ],
    //   };

    const footerContent = [
        {
            title: "Shop and Learn",
            links: ["Store", "Mac", "iPad", "iPhone", "Watch", "AirPods",],
        },
        {
            title: "Apple Wallet",
            links: ["Wallet", "Group Reservation", "Apple Camp", "Apple Trade In", "Ways to Buy",],
        },
        {
            title: "Apple Wallet",
            links: ["Wallet", "Group Reservation", "Apple Camp", "Apple Trade In", "Ways to Buy",],
        },
        {
            title: "Account",
            links: ["Manage Your Apple Account", "Apple Store Account", "iCloud.com"],
        },
        {
            title: "Entertainment",
            links: ["Apple One", "Apple TV+", "Apple Music", "Apple Arcade", "Apple Podcasts", "Apple Books", "App Store"],
        },
        {
            title: "Apple Store",
            links: ["Find a Store", "Genius Bar", "Today at Apple", "Group Reservation", "Apple Camp", "Apple Trade In",],
        },
        {
            title: "For Business",
            links: ["Apple and Business", "Shop for Business"],
        },
        {
            title: "For Education",
            links: ["Apple and Education", "Shop for Education", "Shop for University"],
        },
        {
            title: "For Healthcare",
            links: ["Apple and Healthcare", "Ways to Buy", "Recycling Programme", "Order Status", "Shopping Help"],
        },
        {
            title: ["For Government", "Air-Pods", ],
            links: ["AirPods", "TV & Home", "Accessories", "Gift Cards"],
        },
    ];

    return (
        <footer className=" md:p-5 mg:bg-gray-100">

            <p className="text-xs p-4 text-gray-500 hidden md:block">
                No Cost EMI is available with the purchase of an eligible product made using qualifying cards on 3-, 6-, 9- or 12-month tenures from most leading card issuers. Eligible AirPods, HomePod and Beats products are available with No Cost EMI on 3- and 6-month tenures only. Monthly pricing is rounded to the nearest rupee. Exact pricing will be provided by your card issuer, subject to your card issuer’s terms and conditions. Minimum order spend applies as per your card issuer’s threshold. No Cost EMI is not available to business customers and cannot be combined with Apple Store for Education or Corporate Employee Purchase Plan pricing. Card eligibility is subject to terms and conditions between you and your card issuer. Offer may be revised or withdrawn at any time without any prior notice. Terms apply. <br /><br />

                A purchase of ₹79900.00 repaid over 12 months with an interest rate of 15.99% p.a. and No Cost EMI savings of ₹6514.00 requires monthly payments of ₹6658.00. Total amount payable: ₹79900.00. <br /><br />

                ‡Instant cashback is available with the purchase of an eligible product with qualifying American Express, Axis Bank and ICICI Bank cards only. Minimum transaction value of ₹10001.00 applies. Click here to see instant cashback amounts and eligible devices. Instant cashback is available for up to two orders per rolling 90-day period with an eligible card. Card eligibility is subject to terms and conditions between you and your card issuer. Total transaction value is calculated after any trade-in credit or eligible discount is applied. Any subsequent order adjustment(s) or cancellation(s) may result in instant cashback being recalculated, and any refund may be adjusted to account for instant cashback clawback; this may result in no refund being made to you. Offer may be revised or withdrawn at any time without any prior notice. Additional terms apply. Instant cashback is not available to Business customers and cannot be combined with Apple Store for Education or Corporate Employee Purchase Plan pricing. Multiple separate orders cannot be combined for instant cashback. <br /><br />

                *Apple Education Pricing is available to current and newly accepted college students and their parents, as well as teachers and staff at all levels. For more information, visit apple.com/in-edu/store. <br /><br />

                1. Qualified Purchasers can receive Promotion Savings when they purchase an eligible Mac or iPad with their choice of a Promotion Product at a Qualifying Location. Customers will be charged for all items in their cart, including the Promotion Product. Only one Promotion Product can be obtained per eligible Mac or iPad per Qualified Purchaser. The offer is subject to availability, while supplies last. View full terms and conditions of offer here. <br /><br />

                2. Available in two models: AirPods 4 and AirPods 4 with Active Noise Cancellation. <br /><br />

                Apple Intelligence is available in beta on all iPhone 16 models, iPhone 15 Pro, iPhone 15 Pro Max, iPad mini (A17 Pro), and iPad and Mac models with M1 and later, with Siri and device language set to the same supported language, as part of an iOS 18, iPadOS 18 and macOS Sequoia software update. Supported languages include English, French, German, Italian, Portuguese (Brazil), Spanish, Japanese, Korean and Chinese (Simplified). More languages are coming over the course of the year, including Vietnamese. Some features may not be available in all regions or languages. <br /><br />
            </p>


            <hr />

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-10  gap-6 p-5">
                {footerContent.map((col, index) => (

                    <div key={index}>

                        <h3 className="font-semibold mb-2">{col.title}</h3>


                        <ul className="text-sm space-y-1">
                            {col.links.map((link, i) => (
                                <li key={i} className="text-gray-500 hover:underline">
                                    {link}
                                </li>
                                  ))}
                        </ul>

                    </div>

                ))}
            </div>

            <hr />

                <div className="justify-center flex flex-col items-center">
                    <p className="text-center p-3 pt-3 justify-center items-center flex flex-col">© 2025 Apple Inc. All rights reserved.</p>
                    <p className="font-semibold">Created By Kabilan.</p>
                </div>

        </footer>
    );
};

export default Footer