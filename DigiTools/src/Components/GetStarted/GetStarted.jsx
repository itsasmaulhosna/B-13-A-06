import React from 'react';
import userImg from '/assets/user.png'
 import packageImg from '/assets/package.png'
 import rokcketImg from '/assets/rocket.png'
const GetStarted = () => {
    return (
        <div className='bg-gray-200 pb-10'>
            <div className='container mx-auto mt-20 '>
                <div className='text-center '>
                    <h2 className='text-3xl font-bold text-gray-800 pt-10 '>Get Started In 3 Steps</h2>
                    <p className='text-sm text-gray-500'>Start using premium digital tools in minutes, not hours.</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 '>
                    <div className='text-center p-5 bg-white rounded-xl w-90 h-80 flex flex-col justify-center items-center mx-auto mt-10 relative'>
                        <div className='absolute top-3 right-4 w-10 h-10  rounded-full  bg-purple-600 text-white flex justify-center items-center font-bold'>
                            01
                        </div>
                        <div className='text-center p-5 rounded-xl  flex justify-center items-center'>
                        <img src={userImg} className='h-20 w-20 rounded-full bg-purple-200 p-2 mx-auto' />
                          </div>
                        <h2 className='text-2xl font-bold'>Creat Account</h2>
                        <p className='text-gray-400'>Sign up for free in seconds. No credit card required  to get started.</p>
                    </div>

                    <div className='text-center p-5 bg-white rounded-xl w-90 h-80 flex flex-col justify-center items-center mx-auto mt-10 relative'>
                        <div className='absolute top-3 right-4 w-10 h-10  rounded-full  bg-purple-600 text-white flex justify-center items-center font-bold'>
                            02
                        </div>
                        <div className='text-center p-5 rounded-xl  flex justify-center items-center'>
                        <img src={packageImg} className='h-20 w-20 rounded-full bg-purple-200 p-2 mx-auto' />
                          </div>
                        <h2 className='text-2xl font-bold'>Choose Products</h2>
                        <p className='text-gray-400'>Browse our catalog and select the tools that fit your needs.</p>
                    </div>
                    <div className='text-center p-5 bg-white rounded-xl w-90 h-80 flex flex-col justify-center items-center mx-auto mt-10 relative'>
                        <div className='absolute top-3 right-4 w-10 h-10  rounded-full  bg-purple-600 text-white flex justify-center items-center font-bold'>
                            03
                        </div>
                        <div className='text-center p-5 rounded-xl  flex justify-center items-center'>
                        <img src={rokcketImg} className='h-20 w-20 rounded-full bg-purple-200 p-2 mx-auto' />
                          </div>
                        <h2 className='text-2xl font-bold'>Start Creating</h2>
                        <p className='text-gray-400'>Download and start using your premium tools immediately.</p>
                    </div>
                    
                </div>
            </div>
            
        </div>
    );
};

export default GetStarted;