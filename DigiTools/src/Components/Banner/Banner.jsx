import React from 'react';
import playImg from '../../assets/assets/Play.png'
import bannerImg from '../../assets/assets/banner.png'
const Banner = () => {
    return (
        <div className='container mx-auto mt-10'>
            <div className='flex flex-col md:flex-row justify-center items-center gap-10'>
                <div className='space-y-5'>
                    <p className=' inline-flex p-2 rounded-full items-center gap-2 text-sm text-purple-500 bg-gray-300  '>
                        <span className='w-2 h-2 bg-purple-600 rounded-full'></span>
                        New:AI-Powered Tools Available</p>
                <h1 className='text-5xl font-bold text-gray-800'>Supercharge Your <br></br>Digital Workflow</h1>
                <p>Access premium AI tools, design assets, templates, and productivity<br></br>
software—all in one place. Start creating faster today.<br></br>

Explore Products
</p>
<div className='flex gap-5 items-center'>
    <button className='btn btn-primary text-white rounded-full bg-[linear-gradient(90deg,#7C3AED_0%,#9333EA_50%,#C026D3_100%)] '>Explore Products</button>
<button className='btn btn-outline rounded-full border-purple-400 text-purple-800'><img src={playImg} className='w-5 mr-2'/>Watch Demo</button>
</div>
            </div>
            <div>
                <img src={bannerImg} className='w-full '/>
            </div>
            </div>
            
        </div>
    );
};

export default Banner;