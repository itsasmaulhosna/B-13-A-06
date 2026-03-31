import React, { useState } from 'react';

const Card = ({card,carts,setCarts}) => {
    const [isBuy,setBuy]=useState(false)
const handleBuyNow=()=>{
    setCarts([...carts,card])
    setBuy(true)
}
    return (
        <div>
          <div className='bg-white rounded-3xl shadow-sm border border-gray-100 relative'>
            {card.tag && (
        <span
          className={`
            absolute top-5 right-5 text-xs font-semibold px-3 py-1 rounded-full
            ${
              card.tagType === 'best seller'
                ? 'bg-purple-100 text-purple-700'
                : card.tagType === 'popular'
                ? 'bg-blue-100 text-blue-700'
                : card.tagType === 'new'
                ? 'bg-green-100 text-green-700'
                : 'bg-orange-100 text-orange-700'
            }
          `}
        >
          {card.tag}
        </span>
      )}

            <div className='p-6'>
<div className='flex  items-start '>
    <img className='h-15 w-15 rounded-full p-2 ' src={card.icon} alt={card.name} />

    </div>
    <h2 className='text-2xl font-bold text-gray-800 text-left mb-3'>
        {card.name}
      </h2>
<p className='text-gray-500 text-left leading-relaxed mb-6'>
        {card.description}
      </p>

<div className=' mb-6  '>
        <span className='text-4xl font-bold text-gray-900'>${card.price}</span>
        
            <span className='text-gray-500 ml-2'>/{card.period}</span>
        
      </div>
            <ul className='space-y-3 mb-8'>
        {
          card.features.map((feature, index) => (
            <li key={index} className='flex items-center gap-2 text-gray-600'>
              <span className='text-green-500'>✔</span>
              <span>{feature}</span>
            </li>
          ))
        }
      </ul>
      <button onClick={handleBuyNow} className='w-full bg-linear-to-r from-blue-700 to-purple-500 text-white py-3 rounded-full font-semibold hover:scale-105 transition duration-300'>
        {isBuy ? 'Added to Cart' : 'Buy Now'}
      </button>


</div>
            </div>
            </div>  
        
    );
};

export default Card;