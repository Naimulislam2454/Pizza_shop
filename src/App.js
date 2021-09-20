import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
// import About from './pages/About';
import { useEffect,useState } from 'react';
import Products from './component/Products';
import SingleProduct from './component/SingleProduct';
import Cart from './component/Cart';
import Navigation from './component/Navigation';
import {cartcon} from'./CartCon'

const App = () => {
 const[cart,setcart]=useState({})
 useEffect(() => {
     const cart=window.localStorage.getItem('cart');
     setcart(JSON.parse(cart))
     },[]
    )
    useEffect(() => {
        window.localStorage.setItem('cart',JSON.stringify(cart));
    },
    [cart]
       )


    return (
        <>
            <Router>
            <cartcon.Provider value={ {cart,setcart }}>
                
                    <Navigation />
                    <Switch>
                            <Route path="/" component={Home} exact></Route>
                            {/* <Route path="/about" component={About}></Route> */}
                            <Route path="/products" exact component={Products}></Route>
                            <Route path="/products/:id" component={SingleProduct}></Route>
                            <Route path="/cart" component={Cart}></Route>
                    </Switch>
                   </cartcon.Provider>
              
            </Router>
        </>
    )
}

export default App;