import React from 'react'

const Header = () => {

    const headerSection = [
        {
            phoneName: "iPhone 17 Pro",
            description1: "All out Pro",
            description2: "Available from 19 Sep",
            button1: "Learn More",
            button2: "Pro Order",
            src: "/assets/Header.png",
            alt: "iPhone 17 Pro",
        },

        {
            phoneName: "iPhone 17",
            description1: "Magichromatic",
            description2: "Available from 19 Sep",
            button1: "Learn More",
            button2: "Pro Order",
            src: "/assets/Header2.png",
            alt: "iPhone 17",
        },

    ];

    return (
        <div className="bg-gray-200 p-4 md:p-8">
            <div className="relative">
                {/* Video */}
                <video

                    src="https://res.cloudinary.com/<your-cloud-name>/video/upload/v123456/iphone17pro.mp4"
                    controls
                    autoPlay
                    muted
                    playsInline
                    loop
                    className="w-full rounded-2xl"
                >
                    <source src="/assets/iphone17pro.mp4" type="video/mp4" />
                </video>

                {/* Overlay Content */}
                <div className=" flex flex-col pt-3  justify-between items-center md:relative md:h-0  md:flex-row px-8 bottom-24">
                    {/* Left Text */}
                    <div className="text-black space-y-2 md:space-y-3 text-center md:text-left md:text-white ">
                        <h1 className="text-3xl md:text-6xl font-bold">iPhone 17 Pro</h1>
                        <p className="text-sm md:text-2xl">New Launch, Pre Order Now</p>
                    </div>

                    {/* Right Buttons */}
                    <div className="flex md:flex-row gap-3 mt-4 md:mt-0">
                        <button className="bg-blue-700 text-white py-2 px-6 rounded-full text-sm font-bold hover:bg-white hover:border-blue-900 hover:text-blue-600">
                            Learn More
                        </button>
                        <button className="bg-white text-black  px-6 text-center rounded-full text-sm font-bold">
                            Pre Order
                        </button>
                    </div>
                </div>
            </div>
        </div >

    )
}

export default Header