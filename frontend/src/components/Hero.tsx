import React from 'react';
import hero from '../assets/hero.jpeg';
import shipping from '../assets/shipping.png';


const Hero = () => {
  return (
    <section className='hero'>
      {/* hero Image */}
      <div className='w-full'>
        <img src={hero} alt="hero" className='hero-image' />
      </div>

      {/** overlaping section */}
      <div className="relative z-10 mx-auto flex flex-wrap justify-between -mt-14 w-[80%] rounded-md border border-gray-200 bg-white p-8 shadow-xl">

        <div className='flex items-center gap-3'>
            <img src={shipping} alt="" />
          <div>
            <h3 className="font-bold text-black">Free Shipping</h3>
            <p className='text-gray-600 text-sm'>for order over $50</p>
          </div>
        </div>
          
          <div className='flex items-center gap-3'>
            <i className="ri-secure-payment-fill text-5xl"></i>
          <div>
            <h3 className="font-bold text-black">Secure Payment</h3>
            <p className='text-gray-600 text-sm'>100% secure checkout</p>
          </div>
        </div>

        <div className='flex items-center gap-3'>
          <i className="ri-customer-service-line text-5xl"></i>
          <div>
            <h3 className="font-bold text-black">24/7 Support</h3>
            <p className='text-gray-600 text-sm'>we're here to help</p>
          </div>
        </div>

        <div className='flex items-center gap-3 '>
          <i className="ri-shopping-cart-2-fill text-5xl"></i>
          <div>
            <h3 className="font-bold text-black">Easy Returns</h3>
            <p className='text-gray-600 text-sm'>hassle free process</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;



