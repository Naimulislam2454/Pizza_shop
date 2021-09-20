import React from 'react'
import Products from './component/Products'


export default function Home() {
    return (
        <>
        <div className='hero py-16'>
          <div className='container mx-auto flex items-center justify-between'>
              <div className='w-1/2'>
                  <h6><em>Are you hangry</em></h6>
                  <h1 className='text-3xl'>Dont Wait</h1>
                  <button className='px-6 py-2 rounded-full text-white font-bold mt-4 bg-yellow-400 hover:bg-yellow-600'>Order Now</button>

              </div>
              <div className='w-1/2'>
                  <img src="/images/pizza.png" alt="" />
              </div>
          </div>
        </div>
        <div className='pb-24'>
            <Products />
        </div>
        </>
    )
}
