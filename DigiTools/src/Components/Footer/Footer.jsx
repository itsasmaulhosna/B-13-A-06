import React from 'react';
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div>
        <div className='bg-gray-800 py-6'>
        <div className='container mx-auto text-gray-400 grid grid-cols-1 text-center md:grid-cols-5'>
            <div>
                <h2 className='text-2xl font-bold mb-2'>Digitools</h2>
            <p className='text-sm'>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
            </div>
            <div>
                <h3 className='text-white font-semibold'>Product</h3>
                <ul className='mt-2 space-y-1'>
                    <li><a href="#" className='hover:text-white'>Features</a></li>
                    <li><a href="#" className='hover:text-white'>Pricing</a></li>
                    <li><a href="#" className='hover:text-white'>Templates</a></li>
                    <li><a href="#" className='hover:text-white'>Integration</a></li>
                    </ul>
            </div>
            <div>
                <h3 className='text-white font-semibold'>Company</h3>
                <ul className='mt-2 space-y-1'>
                    <li><a href="#" className='hover:text-white'>About Us</a></li>
                    <li><a href="#" className='hover:text-white'>Blog</a></li>
                    <li><a href="#" className='hover:text-white'>Careers</a></li>
                    <li><a href="#" className='hover:text-white'>Press</a></li>
                    </ul>
                
            </div>
            <div>
                <h3 className='text-white font-semibold'>Resource</h3>
                <ul className='mt-2 space-y-1'>
                    <li><a href="#" className='hover:text-white'>Documentation</a></li>
                    <li><a href="#" className='hover:text-white'>Help Center</a></li>
                    <li><a href="#" className='hover:text-white'>Community</a></li>
                    <li><a href="#" className='hover:text-white'>Contact</a></li>
                </ul>
            </div>
<div className='text-white font-semibold'>Social Links
          <div className='flex gap-5 mt-3 text-center justify-center'>
<div className='bg-white rounded-full p-2 text-black cursor-pointer'>
    <AiFillInstagram sizze={20}  />
</div>
<div className='bg-white rounded-full p-2 text-black cursor-pointer'>
    <FaFacebook size={20}  />
</div>
<div className='bg-white rounded-full p-2 text-black cursor-pointer'>
    <FaXTwitter size={18}  />
</div>



            
          </div>
            
</div>
            
            
        
        </div>
        <div className=' container mx-auto text-sm'>
            <div className='border-t border-gray-700 mt-10 pt-6 text-gray-400 flex justify-between items-center '>
                <p className='text-gray-500'>© 2026 Digitools. All rights reserved.</p>
                <div className='flex gap-6'>
                    <a href="#" className='hover:text-white'>Privacy Policy</a>
                    <a href="#" className='hover:text-white'>Terms of Service</a>
                                        <a href="#" className='hover:text-white'>Cookies</a>
                </div>
            </div>
        </div>
        </div>
        </div>
    );
};

export default Footer;