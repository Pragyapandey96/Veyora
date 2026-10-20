import React from 'react';
import logo from '../assets/logo.png';


const Navbar = () => {
  return (
    <div>
        <nav className='flex items-center justify-between bg-white px-8 py-4'>
        {/* logo */}
        <div className='flex items-center'>
            <img src={logo} alt="" />
        </div>

          {/* search bar */}
        <div className='relative items-center gap-2 border border-gray-300 rounded-full px-4 py-2 w-150'>
            <input type="text" placeholder="Search..." />
            <i className="ri-search-line absolute right-4"></i>
        </div>

        {/* navigation links */}
        <ul className='flex items-center gap-10 font-bold'>
            <li><a href="/">Home</a></li>
            <li><a href="/shop">Shop</a></li>
            <li><a href="/collections">Collections</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/contact">Contact</a></li>
        </ul>
      
        {/* cart icon */}
        <div className='flex items-center gap-2 '>
            <i className="ri-shopping-bag-line text-3xl"></i>
        </div>

        {/* user icon */}
        <div className='flex border border-gray-400 rounded-full px-2 py-1'>
            <i className="ri-user-3-fill text-2xl"></i>
        </div>
        </nav>
    </div>
  );
}

export default Navbar;




