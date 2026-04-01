import React from 'react';
import Card from '../Cards/Card/Card';
import { toast } from 'react-toastify';

const Carts = ({carts,setCarts}) => {
    const totalPrice=carts.reduce((sum,cart)=>sum+cart.price,0)
const handlePayment=()=>{
        setCarts([])
        toast.success('Payment successful!')
}
const handleDelete=(cart)=>{
    const filteredArr=carts.filter(c=>c.id!==cart.id)
    setCarts(filteredArr)
    toast.error('Subscription removed!')
}
    return (
        <div className='container mx-auto mt-10 text-left px-5 pt-5 bg-gray-200 pb-5' >
            <div className='space-y-5'>
                <h2 className='text-2xl font-bold' >Your Cart</h2>
                {
                    carts.length===0? (<p className='text-center text-4xl font-bold'>Cart is empty</p>) :
                    <>
                    <div>
                    {carts.map(cart=><div className='flex justify-between items-center p-5 border rounded-xl mt-5'>
                        <div className='flex items-center   gap-3  '>
                            <div>
                                <img className='h-15 w-15 rounded-full p-2 border-white bg-amber-50' src={cart.icon}/>
                            </div>
                            <div>
                                <h2 className='text-xl font-bold'>{cart.name}</h2>
                                <div className='text-2xl font-bold '>${cart.price}</div>

                            </div>
                            
                        </div>
                        <div onClick={()=>handleDelete(cart)} className='cursor-pointer'>
                            <h2 className='text-red-500'>Remove</h2>
                        </div>
                    </div>)}
                    <div className='flex justify-between items-center rounded-xl bg-black text-white p-10 mt-5'>
            <h2 className='text-2xl font-bold'>Total</h2>
            <p>{totalPrice}</p>
           </div>
           <button onClick={handlePayment} className='btn bg-red-500 rounded-xl text-white w-full mt-4 p-8 text-2xl'>Proced to Checkout</button>
                </div>
                    </>
                }
                {/* <div>
                    {carts.map(cart=><div className='flex justify-between items-center p-5 border rounded-xl mt-5'>
                        <div className='flex items-center   gap-3  '>
                            <div>
                                <img className='h-15 w-15 rounded-full p-2 border-white bg-amber-50' src={cart.icon}/>
                            </div>
                            <div>
                                <h2 className='text-xl font-bold'>{cart.name}</h2>
                                <div className='text-2xl font-bold '>${cart.price}</div>

                            </div>
                            
                        </div>
                        <div onClick={()=>handleDelete(cart)} className='cursor-pointer'>
                            <h2 className='text-red-500'>Remove</h2>
                        </div>
                    </div>)}
                    <div className='flex justify-between items-center rounded-xl bg-black text-white p-10 mt-5'>
            <h2 className='text-2xl font-bold'>Total</h2>
            <p>{totalPrice}</p>
           </div>
           <button onClick={handlePayment} className='btn bg-red-500 rounded-xl text-white w-full mt-4 p-8 text-2xl'>Proced to Checkout</button>
                </div> */}
            </div>
        </div>
        
    );
};


export default Carts;