import React from 'react'
import Product from './Product'
import { cartcon } from '../CartCon'
import { useContext } from 'react'
import { useState,useEffect } from 'react'
const Products = () => {
    const[data,setData]=useState([]);
 useEffect(()=>{
     fetch('https://jsonplaceholder.typicode.com/users')
   .then(response=>response.json())
   .then(products=>{setData(products)})


},[])
// const nam=useContext(cartcon)
    return (
        <div className='container mx-auto pb-24'>
            <h2 className='text-lg font-bold my-8'>Product</h2>
            <div className='grid grid-cols-5 my-8 gap-24'>
            {
                data.map(val=>
                    <Product key={val.id} value={val}/>
                )
            }
            </div>
        </div>
    )
}

export default Products
