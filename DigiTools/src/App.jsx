

import { useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Cards from './Components/Cards/Cards'
import Footer from './Components/Footer/Footer'
import GetStarted from './Components/GetStarted/GetStarted'

import Navbar from './Components/Navbar/Navbar'
import Transparent from './Components/Transparent/Transparent'

const getApiData =async()=>{
  const res=await fetch('/data.json')
  return res.json()
}

const dataPromise=getApiData()

function App() {
const [carts,setCarts]=useState([])

  return (
    <>
    
      <Navbar carts={carts}></Navbar>
      <Banner></Banner>
      <div className='bg-linear-to-r from-purple-700 to-purple-500 py-12 mt-13'>
        <div className='container mx-auto  grid grid-cols-1 md:grid-cols-3 text-center'>
          <div className='border-r border-white/30 px-6'>
            <h2 className='text-3xl font-bold text-white'>50K</h2>
            <p className='text-gray-300 text-sm mt-2'>Active Users</p>
          </div>
          <div className='border-r border-white/30 px-6'>
          <h2 className='text-3xl font-bold text-white'>120+</h2>
            <p className='text-gray-300 text-sm mt-2'>Premium Tools</p>
          </div>
          <div>
            <h2 className='text-3xl font-bold text-white'>4.9</h2>
            <p className='text-gray-300 text-sm mt-2'>Rating</p>
          </div>
          
          </div>
          
        </div>

        <Cards dataPromise={dataPromise} carts={carts} setCarts={setCarts}></Cards>
        <GetStarted></GetStarted>
        <Transparent></Transparent>

<div className='bg-linear-to-r from-blue-700 to-purple-500 py-6 mt-10'>
        <div className='container mx-auto text-center text-white'>
          <h1 className='text-3xl text-white font-bold mt-8'>Ready to Transform Your Workflow?</h1>
          <p className='text-gray-300 mt-4 text-lg'>Join thousands of professionals who are already using Digitools to work smarter.<br></br> Start your free trial today.</p>
          <div className='flex gap-5 mt-7 justify-center mb-5'>
            <button className='bg-white text-purple-700 font-bold py-2 px-4 rounded-full mt-4'>Explore Products</button>
            <button className='bg-transparent border border-white text-white font-bold py-2 px-4 rounded-full mt-4'>View Pricing</button>
          </div>
          <p>14-day free trial • No credit card required • Cancel anytime</p>
        </div>
</div>
<Footer></Footer>
        
      
    </>
  )
}

export default App
