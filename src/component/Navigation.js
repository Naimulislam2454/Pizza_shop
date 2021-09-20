import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { cartcon } from '../CartCon'

export default function Navigation() {
 const   carts={
        backgroundColor:'orange',
        display:'flex',
        padding:'5px 10px',
        borderRadius:'50px'
    }
    const {cart}=useContext(cartcon);
    
    return (
        <div>
            <nav className='continer mx-auto flex items-center justify-between py-3'>
                <Link to='/' className='flex items-center'> <h2 className='bg-red-500 px-3 font-bold' style={{fontSize:'30px'}}>joya</h2> <img src="/images/logo.png" alt="" /><h2 className='bg-yellow-400 font-bold px-4'> House</h2>
               </Link>
                <ul className='flex items-center'>
                    <li><Link to='/'>Home</Link></li>
                    <li className='ml-6'><Link to='/products'>Products</Link></li>
                    <li className='ml-6'><Link to='/cart'>
                    <div style={carts}>
                        <span style={{color:'green'}} className='mr-2'>{cart.totalItems}</span>
                        <img src="images/cart.png" alt="" />
                    </div>
                    </Link></li>
                </ul>
            </nav>
        </div>
    )
}
