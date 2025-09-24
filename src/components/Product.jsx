import React from 'react'

const Product = () => {

    const itemsList = [
        {
            src: "/assets/iphoneseventeenpro.png",
            alt: "iphoneseventeenpro",
            variantName: "New",
            phoneName: "iPhone 17 pro",
            description: "Innovative design for ultimate performance and battery life.",
            button1: "Learn More",
            button2: "Buy ›"
        },

        {
            src: "/assets/iphone_air.png",
            alt: "iphone_air",
            variantName: "New",
            phoneName: "iPhone Air",
            description: "The thinnest iPhone ever.With the power of pro inside.",
            button1: "Learn More",
            button2: "Buy ›"
        },

        {
            src: "/assets/iphone_seventeen.png",
            alt: "iphone_seventeen",
            variantName: "New",
            phoneName: "iPhone 17",
            description: "Amazing performance.Durable design.Make it yours.",
            button1: "Learn More",
            button2: "Buy ›"
        },

        {
            src: "/assets/iphone_sixteen.png",
            alt: "iphone_sixteen",
            variantName: "Best Seller",
            phoneName: "iPhone 16",
            description: "Everything you love.Including the price.Cutting-Edge Cameras.",
            button1: "Learn More",
            button2: "Buy ›",
        },

        {
            src: "/assets/iphone_sixteen_e.png",
            alt: "iphone_sixteen_e",
            variantName: "Compact",
            phoneName: "iPhone 16e",
            description: "Innovative design for ultimate performance and battery life.",
            button1: "Learn More",
            button2: "Buy ›",
        },
    ]
    return (
        <section>
            <div className='container p-8 my-12 mx-auto'>
 
                {/* Product Headings  */}

                <div className='productHeading justify-between flex flex-col gap-3 md:flex md:flex-row md:justify-between md:pb-7'>
                    <h1 className='text-2xl font-bold md:text-4xl'>Explore the line-up</h1>
                    <a className='text-lg text-blue-700 underline underline-offset-8' href="/">Compare All models ›</a>
                </div>



                {/* Product list */}


                <div className='flex gap-4 overflow-auto scrollbar-hide justify-around flex-shrink-0 py-8 px-4'>
                    {itemsList.map((items, index) => (
                        <div key={index} className="bg-white shadow-xl p-2 flex-shrink-0 w-72 rounded-xl duration-300 hover:scale-105">
                            <img className='h-80 rounded-lg' src={items.src} alt={items.alt} />
                            <div className=''>
                                <p className='text-red-700 font-semibold'>{items.variantName}</p>
                                <h2 className='text-xl font-bold'>{items.phoneName}</h2>
                                <p className='text-sm text-gray-500'>{items.description}</p>
                                <div className='pt-2 flex gap-2'>
                                    <button className='text-sm font-semibold text-blue-700'>{items.button1}</button>
                                    <button className='bg-blue-600 text-sm font-bold px-3 py-1 text-white rounded-full hover:bg-white hover:text-blue-700 hover:border hover:border-blue-700'>
                                        {items.button2}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Product