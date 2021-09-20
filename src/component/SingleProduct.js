import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';
import { useParams,useHistory} from 'react-router-dom'
export default function SingleProduct() {
    const[product,setProduct]=useState({});
    const params=useParams();
    const history=useHistory()
    console.log(params);
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
      .then(response=>response.json())
      .then(products=>{setProduct(products)})
   
   
   },[])
    return (
       <div className='container mx-auto mt-12'>
        <button className='mb-12 font-bold' onClick={()=>{history.goBack()}}>Back</button>
        <div className='flex items-center'>
            <img src="/images/peproni.png" alt="" />
              <div className='ml-16'>
              <h1 className='text-xl font-bold'>{product.name} Pizza</h1> 
              <div className='text-md'>Small</div> 
              <div className='font-bold mt-2'>500</div> 
              <button className='bg-yellow-400 rounded-full font-bold px-4'>Add to cart</button>     
              </div>   
                    </div>
       </div>
    )
}
