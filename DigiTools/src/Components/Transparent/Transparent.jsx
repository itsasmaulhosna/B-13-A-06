import React from 'react';
import { IoMdCheckmark } from "react-icons/io";
 
const Transparent = () => {
    return (
        <div>
            <div className='container mx-auto mt-20 text-center'>
                <h2 className='text-3xl font-bold'>Simple, Transparent Pricing</h2>
                <p>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>
            <div className='container mx-auto mt-10 grid grid-cols-1 md:grid-cols-3 gap-6'>
                <div className='bg-gray-100 rounded-lg shadow-md p-6 text-left'>
                    <h3 className='text-xl font-semibold mb-4'>Starter</h3>
                    <p className='text-gray-400 mb-5'>Perfect for getting started</p>
                    <p className='text-3xl font-bold mb-5'>$0<span className='text-sm text-gray-400'>/month</span></p>
                    <ul className='text-gray-400 mb-6'>
 <li className='flex items-center gap-2'>
    <IoMdCheckmark className='text-green-500' />
  <span>Access to 10 free tools</span>  

        
 </li>
 
<li className='flex items-center gap-2'>
    <IoMdCheckmark className='text-green-500 text-xl' />
    <span>Basic templates</span>
  </li>

  <li className='flex items-center gap-2'>
    <IoMdCheckmark className='text-green-500 text-xl' />
    <span>Community support</span>
  </li>

  <li className='flex items-center gap-2'>
    <IoMdCheckmark className='text-green-500 text-xl' />
    <span>One project per month</span>
  </li>

                    </ul>
                    <button className='bg-purple-600 text-white px-4 py-2 mt-12 rounded-full w-full'>Get Started free</button>
                        
                </div>

                <div className='bg-linear-to-r from-blue-700 to-purple-500 rounded-lg shadow-md p-6 text-left relative'>
                    <div className='absolute -top-2 left-1/2 -translate-x-1/2   text-xs font-semibold px-3 py-1 rounded-full bg-yellow-400 text-yellow-800'>Most Popular</div>
                    <h3 className='text-xl font-semibold mb-4 text-white'>Pro</h3>
                    <p className='text-white mb-5'>Best for professionals</p>
                    <p className='text-3xl font-bold mb-5 text-white'>$29<span className='text-sm text-white'>/month</span></p>
                    <ul className='text-white mb-6'>
 <li className='flex items-center gap-2'>
    <IoMdCheckmark  />
  <span>Access to all premium tools</span>  

        
 </li>
 
<li className='flex items-center gap-2'>
    <IoMdCheckmark  />
    <span>Unlimited templates</span>
  </li>

  <li className='flex items-center gap-2'>
    <IoMdCheckmark  />
    <span>Priority support</span>
  </li>

  <li className='flex items-center gap-2'>
    <IoMdCheckmark  />
    <span>Unlimited projects</span>
  </li>

  <li className='flex items-center gap-2'>
    <IoMdCheckmark  />
    <span>Cloud sync</span>
  </li>

  <li className='flex items-center gap-2'>
    <IoMdCheckmark  />
    <span>Advanced analytics</span>
  </li>

                    </ul>
                    <button className=' text-purple-600 bg-white px-4 py-2 rounded-full w-full'>Start Pro Trial</button>
                        
                </div>

                <div className='bg-gray-100 rounded-lg shadow-md p-6 text-left'>
                    <h3 className='text-xl font-semibold mb-4'>Enterprise</h3>
                    <p className='text-gray-400 mb-5'>For teams and businesses</p>
                    <p className='text-3xl font-bold mb-5'>$99<span className='text-sm text-gray-400'>/month</span></p>
                    <ul className='text-gray-400 mb-6'>
 <li className='flex items-center gap-2'>
    <IoMdCheckmark className='text-green-500' />
  <span>Everything in Pro</span>  

        
 </li>
 
<li className='flex items-center gap-2'>
    <IoMdCheckmark className='text-green-500 text-xl' />
    <span>Team collaboration</span>
  </li>

  <li className='flex items-center gap-2'>
    <IoMdCheckmark className='text-green-500 text-xl' />
    <span>Custom integrations</span>
  </li>

  <li className='flex items-center gap-2'>
    <IoMdCheckmark className='text-green-500 text-xl' />
    <span>Dedicated support</span>
  </li>

  <li className='flex items-center gap-2'>
    <IoMdCheckmark className='text-green-500 text-xl' />
    <span>SLA guarantee</span>
  </li>

  <li className='flex items-center gap-2'>
    <IoMdCheckmark className='text-green-500 text-xl' />
    <span>Custom branding</span>
  </li>

                    </ul>
                    <button className='bg-purple-600 text-white px-4 py-2 rounded-full w-full'>Contact Sales</button>
                        
                </div>
            </div>
        </div>
    );
};

export default Transparent;