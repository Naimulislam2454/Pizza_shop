import React from 'react'
import { useContext } from 'react'
import { cartcon } from '../CartCon'

export default function Cart() {
    const{cart,setcart}=useContext(cartcon);
    return (
        <div className='container mx-auto lg:w-1/2'>

            <h1>Cart Items</h1>
            <ul>
                <li>
                <div className='flex items-center justify-between'>
                    <div className="flex items-center mt-4">
                        <img className='h-16' src="/images/peproni.png" alt="" />
                        <span className='font-bold ml-4 w-48'>Double pepronis</span>

                    </div>
                    <div>
                        <button className='bg-yellow-500 px-4 py-2 rounded-full leading-none'>-</button> 
                        <b className='px-4'>0</b>
                        <button className='bg-yellow-500 px-4 py-2 rounded-full leading-none'>+</button>
                    
                    </div>
                    <span>500</span>
                    <button className='bg-red-500  px-4 py-2 rounded-full leading-none'>deleted</button>
                </div>



                </li>
            </ul>
            <hr className='my-6' />
            <div className='text-right'>
               <b> Grand Total</b>
            </div>
            <div className='text-right my-3'>
                <button className='bg-yellow-500 px-4 py-2 rounded-full leading-none'>Order Now</button>
            </div>
           </div>
    )
}
