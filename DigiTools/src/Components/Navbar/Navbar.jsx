import React from 'react';
import cartImg from '../../assets/assets/products/shopping-cart.png';
const Navbar = () => {
    return (
        <div className='border-b-2 border-gray-300 w-full'>
            <div className='container mx-auto'>
            <div className='flex justify-between items-center p-5 '>
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
            <div className='flex gap-3 items-center text-xl '>
                <img src={cartImg} className='w-6'/>
                <p >Login</p>
                <button className='btn btn-primary  rounded-full bg-[linear-gradient(90deg,#7C3AED_0%,#9333EA_50%,#C026D3_100%)] '>Get Started</button>
            </div>
        </div>
        </div>
        </div>
    );
};

export default Navbar;