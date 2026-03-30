import React, { use, useState } from 'react';
import Card from './Card/Card';


const Cards = ({ dataPromise }) => {
    const cards=use(dataPromise)
    const [activeTab,setActiveTab]=useState('Products')
    return (
        <div>
            <div className='container mx-auto mt-10 text-center'>
                <h2 className='text-3xl font-bold text-gray-800 mb-5'>Perimum Degital Tools</h2>
            <p>Choose from our curated collection of premium digital products designed <br></br> to boost your productivity and creativity.</p>
            </div>
        <div className='flex justify-center mt-10 gap-5'>
            <button onClick={()=>setActiveTab('Products')} className={`px-4 py-2 rounded-full ${activeTab==='Products'? 'bg-purple-500 text-white': 'bg-gray-200'}`}
>Products</button>
<button onClick={()=>setActiveTab('Carts')} className={`px-4 py-2 rounded-full ${activeTab==='Carts'? 'bg-purple-500 text-white': 'bg-gray-200'}`}
>Carts</button>
</div>
            <div className='grid md:grid-cols-3 gap-5 container mx-auto mt-10'>
              { cards.map(card=><Card card={card}
>
                
              </Card>)} 
            </div>
        </div>
    );
};

export default Cards;