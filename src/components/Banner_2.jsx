import React from 'react'

const Banner_2 = () => {

  const bannerSection2 = [
    {
      src: "/assets/promo_ipadpro_avail.png",
      alt: "promo_ipadpro_avail",
      phoneName: "MacBook Pro 14″ and 16″",
      description1: "Meet the Mac 16 family",
      button1: "Learn More",
      button2: "Shop iphone",
      description2: "Built for Apple Intelligence",
    },

    {
      src: "/assets/promo_apple_watch.png",
      alt: "promo_apple_watch",
      phoneName: "MacBook Pro 14″ and 16″",
      description1: "Meet the Mac 16 family",
      button1: "Learn More",
      button2: "Shop iphone",
      description2: "Built for Apple Intelligence",
    },

    {
      src: "/assets/promo_macbookpro.png",
      alt: "promo_macbookpro",
      phoneName: "MacBook Pro 14″ and 16″",
      description1: "Meet the Mac 16 family",
      button1: "Learn More",
      button2: "Shop iphone",
      description2: "Built for Apple Intelligence",
    },

    {
      src: "/assets/promo_iphone.png",
      alt: "promo_iphone",
      phoneName: "MacBook Pro 14″ and 16″",
      description1: "Meet the Mac 16 family",
      button1: "Learn More",
      button2: "Shop iphone",
      description2: "Built for Apple Intelligence",
    },
  ]
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-3 m-4">
      {bannerSection2.map((items, index) => (
        <div key={index} className="relative h-[80vh] rounded-lg overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={items.src}
            alt={items.alt}
          />

          {/* Footer Overlay */}
          <div className="absolute top-8 text-center w-full p-4 flex flex-col gap-2 ">
            <h2 className={`text-lg font-bold ${index === 0 || index === 2 ? 'text-white' : 'text-black'
              }`}>
              {items.phoneName}
            </h2>
            <p className={`text-sm font-bold ${index === 0 || index === 2 ? 'text-yellow-200' : 'text-red-500'
              }`}>
              {items.description1}
            </p>

            <div className="absolute top-20 w-full flex justify-center gap-4 px-4">
              <button className="bg-blue-600 px-4 py-2 rounded-full font-semibold hover:bg-blue-700 text-white transition">
                {items.button1}
              </button>
              <button className="bg-white text-black px-4 py-2 rounded-full font-semibold hover:bg-gray-200 transition">
                {items.button2}
              </button>
            </div>

          </div>
        </div>
      ))}
    </section>


  )
}

export default Banner_2