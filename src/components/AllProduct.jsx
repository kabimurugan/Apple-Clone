import React from 'react'

const AllProduct = () => {

    const allProductList = [
        {
            src: "/assets/macbook.png",
            alt: "macbook",
            productName: "Macbook",
            button: "Check Out",
        },

        {
            src: "/assets/ipad-air.png",
            alt: "macbook",
            productName: "Macbook",
            button: "Check Out",
        },

        {
            src: "/assets/monitor.png",
            alt: "moniter",
            productName: "Moniter",
            button: "Check Out",
        },

        {
            src: "/assets/mac-studio.png",
            alt: "mac-studio",
            productName: "Mac-studio",
            button: "Check Out",
        },

        {
            src: "/assets/airpods.png",
            alt: "airpods",
            productName: "Airpods",
            button: "Check Out",
        },

        {
            src: "/assets/watch-1.png",
            alt: "watch-1",
            productName: "watch",
            button: "Check Out",
        },

        {
            src: "/assets/apple_tv.png",
            alt: "apple_tv",
            productName: "Apple TV",
            button: "Check Out",
        },

        {
            src: "/assets/homepod_mini.png",
            alt: "homepod_mini",
            productName: "Speakers",
            button: "Check Out",
        },
    ]

    return (
        <section className='bg-gray-200 p-5 mx-auto'>
            <h1 className='font-bold text-3xl mb-6'>Explore more products</h1>

            <div className='grid grid-cols-2 md:grid-cols-4 gap-5'>
                {allProductList.map((items, index) => (

                    <div key={index} className='relative group overflow-hidden rounded-lg shadow-lg '>
                        <img className='w-full h-44 md:h-60 object-cover' src={items.src} alt={items.alt} />

                        <div className="absolute flex justify-between items-center bottom-0 w-full translate-y-full bg-gray-300 p-4 duration-300 group-hover:translate-y-0 text-sm font-bold">
                            <p>{items.productName}</p>
                            <button className="px-4 py-2 rounded-full font-semibold duration-300 bg-yellow-500 hover:text-gray-800">
                                {items.button}
                            </button>
                        </div>

                    </div>

                ))}
            </div>
        </section>
    )
}

export default AllProduct