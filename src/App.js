import logo from './logo.svg';
import './App.css';
import Nav from './components/nav'
import Product from './components/product'
import Checkout from './components/checkout';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Routes,} from 'react-router-dom'
import Products from './components/products';
import Cart from "./components/checkout";
import Hero from './components/Hero';
import Footer from './components/Footer';
import Review from './components/review/review';
import About from './components/About'
import Order from "./components/order/Order"

function App() {
  return (
  <Router>
      <div className="App ">
      
        <Nav/>
       <Routes>
         
          <Route path='/' element={<Hero/>}>
           
          </Route>

          <Route path='/Products' element={<Products/>}>
                
          </Route>
          <Route path='/cart' element={<Cart/>}/>
          <Route path ='/about' element={<About/>}/>
          <Route path ='/review' element={<Review/>}/>
          <Route path="/order" element={<Order/>}/>
        </Routes>

      
     

        
      
       </div>
       <Footer/>
     </Router>
  );
}

export default App;
