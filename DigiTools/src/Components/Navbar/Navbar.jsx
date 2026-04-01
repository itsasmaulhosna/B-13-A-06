import React from 'react';
import cartImg from '/products/shopping-cart.png';
const Navbar = ({carts}) => {
    return (
        <div className='border-b-2 border-gray-300 w-full mt-5 pb-4'>
            <div className='container mx-auto'>
            <div className='flex flex-col lg:flex-row justify-between items-center gap-4  '>
            <div>
                
                <h1 className='text-4xl text-purple-700'>DigiTools</h1>
            </div>
            <div>
                <ul className='flex flex-col md:flex-row justify-center items-center gap-5 text-xl'>
                    <li>Products</li>
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>Testimonials</li>
                    <li>FAQ</li>
                </ul>
            </div>
            <div className='flex justify-center items-center gap-4 text-base '>
            <div className='cursor-pointer relative '>
                <img src={cartImg} className='w-6'/>
                <span className='absolute -top-2 -right-2 bg-purple-600 text-white text-xs w-5 h-5  flex items-center justify-center  rounded-full'>
                {carts.length}
              </span>
</div>
                <p >Login</p>
                <button className='btn btn-primary  rounded-full bg-[linear-gradient(90deg,#7C3AED_0%,#9333EA_50%,#C026D3_100%)] '>Get Started</button>
            </div>
        </div>
        </div>
        </div>
    );
};

export default Navbar;