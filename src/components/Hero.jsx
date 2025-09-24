import React from 'react'
import './Hero.css'

const Hero = () => {

    const itemsList = [
        {
            src: "/assets/iphone17pro.png",
            alt: "iphone17pro",
            itemName: "iPhone 17 Pro",
            variant: "New"
        },

        {
            src: "/assets/iphone17.png",
            alt: "iPhone 17",
            itemName: "iPhone 17",
            variant: "New"
        },

        {
            src: "/assets/iphoneAir.png",
            alt: "iPhone Air",
            itemName: "iPhone Air",
            variant: "New"
        },

        {
            src: "/assets/iphone16.png",
            alt: "iPhone 16",
            itemName: "iPhone 16",
        },

        {
            src: "/assets/iphone16e.png",
            alt: "iPhone 16e",
            itemName: "iPhone 16e",
        },

        {
            src: "/assets/compare.png",
            alt: "Compare",
            itemName: "Compare",
        },

        {
            src: "/assets/accessories.png",
            alt: "Accessories",
            itemName: "Accessories",
        },

        {
            src: "/assets/shop.png",
            alt: "Shop",
            itemName: "Shop",
        },

        {
            src: "/assets/airpods.png",
            alt: "Air Pods",
            itemName: "Air Pods",
        },

        {
            src: "/assets/watch.png",
            alt: "Watch",
            itemName: "Watch",
        },

        {
            src: "/assets/iOS.png",
            alt: "iOS",
            itemName: "iOS",
        },
    ];

    return (
        <section>
            <div className="p-6">
                <h1 className="text-4xl font-bold pl-2">iPhone</h1>
                <div className="overflow-hidden">
                    <div className="flex w-max gap-20 animate-slide p-6 px-8 md:animate-none">
                        {itemsList.concat(itemsList).map((items, index) => (
                            <div key={index} className="flex-shrink-0 flex flex-col items-center gap-2 w-26">
                                <img className="h-24" src={items.src} alt={items.alt} />
                                <p>{items.itemName}</p>
                                <p className="text-red-500 font-semibold">{items.variant}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>




    )
}

export default Hero