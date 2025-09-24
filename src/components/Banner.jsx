import React from 'react'

const Banner = () => {

    const bannerSection = [
        {
            src: "/assets/hero_macbook_air.png",
            alt: "hero_macbook_air",
            phoneName: "MacBook Pro 14″ and 16″",
            description1: "Meet the Mac 16 family",
            button1: "Learn More",
            button2: "Shop iphone",
            description2: "Built for Apple Intelligence",
        }
    ]
    return (
        <section>
            {bannerSection.map((items, index) => (
                <div key={index} className="relative rounded-xl overflow-hidden mb-8">

                    {/* Image */}
                    <img className="w-full h-96 object-cover" src={items.src} alt={items.alt} />
                    {/* Overlay */}
                    <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/40 text-white p-6 md:p-12">
                        <h2 className="text-2xl md:text-5xl font-bold mb-2">{items.phoneName}</h2>
                        <p className="text-sm md:text-lg mb-4">{items.description1}</p>
                        <div className="flex gap-4 mb-4">
                            <button className="bg-blue-600 px-4 py-2 rounded-full font-semibold hover:bg-blue-700 transition">
                                {items.button1}
                            </button>
                            <button className="bg-white text-black px-4 py-2 rounded-full font-semibold hover:bg-gray-200 transition">
                                {items.button2}
                            </button>
                        </div>
                        <h2 className="text-sm md:text-base font-bold">{items.description2}</h2>
                    </div>
                </div>
            ))}
        </section>

    )
}

export default Banner