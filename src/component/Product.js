import React from 'react'
import { useState } from 'react';
import {Link} from 'react-router-dom'
import { cartcon } from '../CartCon';
import { useContext } from 'react';

export default function Product(props) {
    const[isadding,setisadding]=useState(false)
    const {cart,setcart}=useContext(cartcon);
   
    const addtocart=(e,product)=>{
        e.preventDefault();
     
        let _cart={...cart};
        if(!_cart.items){
            _cart.items={}
        }
        if(_cart.items[product.id]){
        _cart.items[product.id]=_cart.items[product.id]+1
    }
    else{
        _cart.items[product.id]=1;
    }
    if(!_cart.totalItems){
        _cart.totalItems=0
    }
_cart.totalItems+=1
    setcart(_cart)
    setisadding(true)

    setTimeout(()=>{
        setisadding(false)
    },1000)

}

    return (
        
      <Link to={`/products/${props.value.id}`}>
      <div>
            <img src='/images/peproni.png' alt="pizza" />
            <div className="text-center">
                <h2 className="text-lg font-bold py-2">{props.value.name}</h2>
                <span className="bg-gray-200 py-1 rounded-full text-sm px-r"> special</span>
            </div>
            <div className="flex justify-between items-center mt-4">
                <span>500</span>
                <button onClick={(e)=>{addtocart(e,props.value)}} disabled={isadding} className={`${isadding ? 'bg-green-500' : 'bg-yellow-500'}  py-1 px-4 rounded-full font-bold`}>ADD{isadding?'ED':''}</button>
            </div>
        </div>
      </Link>    
          
        
    )
}

