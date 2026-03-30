

import './App.css'
import Banner from './Components/Banner/Banner'
import Cards from './Components/Cards/Cards'
import Navbar from './Components/Navbar/Navbar'

const getApiData =async()=>{
  const res=await fetch('/data.json')
  return res.json()
}

const dataPromise=getApiData()

function App() {
  

  return (
    <>
      <Navbar></Navbar>
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

        <Cards dataPromise={dataPromise}></Cards>
        
      
    </>
  )
}

export default App
