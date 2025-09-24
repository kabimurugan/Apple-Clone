import React from 'react'

const Navbar = () => {

       
    return (
        <nav className='flex justify-around md:justify-around p-3 bg-gray-100 items-center'>
            <div>
                <img className='w-7' src="assets/apple_logo.png" alt="" />
            </div>

            <div>
                <ul className='hidden md:flex gap-6  text-gray-400 text-xs'>
                    <li><a href="#" className='px-2 py-1 text-xs relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-[#1d1d1f] after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300'>Store</a></li>
                    <li><a href="#" className='px-2 py-1 text-xs relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-[#1d1d1f] after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300'>Mac</a></li>
                    <li><a href="#" className='relative after:absolute after:bg-black after:w-full after:h-0.5 after:left-0 after:bottom-0 py-1 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left after:duration-300'>iPad</a></li>
                    <li><a href="#" className='relative after:absolute after:bg-black after:h-0.5 after:w-full after:bottom-0 after:left-0 py-1 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left '>iPhone</a></li>
                    <li><a href="#" className='relative after:absolute after:bg-black after:w-full after:h-0.5 after:left-0 after:bottom-0 py-1 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left after:duration-300'>Watch</a></li>
                    <li><a href="#" className='relative after:absolute after:bg-black after:w-full after:h-0.5 after:left-0 after:bottom-0 py-1 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left after:duration-300'>AirPods</a></li>
                    <li><a href="#" className='relative after:absolute after:bg-black after:w-full after:h-0.5 after:left-0 after:bottom-0 py-1 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left after:duration-300'>TV & Home</a></li>
                    <li><a href="#" className='relative after:absolute after:bg-black after:w-full after:h-0.5 after:left-0 after:bottom-0 py-1 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left after:duration-300'>Entertainment</a></li>
                    <li><a href="#" className='relative after:absolute after:bg-black after:w-full after:h-0.5 after:left-0 after:bottom-0 py-1 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left after:duration-300'>Accessories</a></li>
                    <li><a href="#" className='relative after:absolute after:bg-black after:w-full after:h-0.5 after:left-0 after:bottom-0 py-1 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left after:duration-300'>Support</a></li>
                </ul>
            </div>

            <div className='md:hidden w-full mx-12 border-2 border-black/20 rounded-full hover:border-black/50 flex'>
                <input className='outline-none bg-transparent  w-full py-1.5 pl-4' type="text" placeholder='Search...'/>

                {/* Search icon by hero-icon */}

                <span className='hover:bg-black/15 rounded-full p-2 cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
                </span>
            </div>

            <div className='flex gap-5'>

                {/* Search icon by hero-icon */}

                <span className='hidden md:block hover:bg-black/15 rounded-full p-2 cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
                </span>

                {/* cart icon by hero-icon */}
                <span className='hover:bg-black/15 rounded-full px-2 py-2 cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                    </svg>
                </span>

            </div>
        </nav>
    )
}


export default Navbar