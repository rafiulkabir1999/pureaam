import React from 'react';
import {Link} from 'react-router-dom'
function Nav() {


    const toggle=()=>{
        const location=document.getElementById("Menu");
        const Menu=document.getElementById("MenuUI");
        Menu.classList.toggle("Menu")
        location.classList.toggle('open')
    }
    return ( 
        //Nav 
        <div className='w-full shadow bg-white fixed z-10'>
            <nav className=" container mx-auto  ">
            <div className="flex  items-center justify-between">
                <div className="p-2 ">
                    <img className="w-14 h-14"src="./logo192.png" alt="" />
                </div>

                <div className="hidden  space-x-6 md:flex">
                   <Link to='/'>  <p className="p-3 font-semi rounded-full font-semibold hover:text-green-400 cursor-pointer">Home</p></Link>
                    <Link to='/products'><p className="p-3 font-semi rounded-full font-semibold hover:text-green-400 cursor-pointer">Products</p></Link> 
                    
                     <Link to='/about'> <p className="p-3 font-semi rounded-full font-semibold hover:text-green-400 cursor-pointer">About Us</p></Link>
                     <Link to='/review'> <p className="p-3 font-semi rounded-full font-semibold hover:text-green-400 cursor-pointer">Review</p></Link>
                     <Link to='/order'><p className="p-3 font-semi rounded-full font-semibold hover:text-green-400 cursor-pointer">Order</p></Link> 
                </div>

               
                <button className='hidden rounded-full bg-green-300 text-white p-2 pt-2 px-6   md:block'>Buy Now</button>



                <button id="Menu"  class="hamburger mr-4 flex items center text-center block md:hidden" onClick={toggle}>
                       <span className='hamburgar_top'></span>
                       <span className='hamburgar_middle'></span>
                       <span className='hamburgar_bottom'></span>
               </button>


               
            </div>

          
             <div id="MenuUI" className="Menu z-10 bg-white  ease-in duration-500 absolute flex-col justify-center pb-3 shadow-md height p-2 pt-0 w-full transition-transform z-100 md:hidden">
                     <Link to='/'>  <p className="p-3 font-semi rounded-full font-semibold hover:text-green-400 cursor-pointer">Home</p></Link>
                     <Link to='/products'><p className="p-3 font-semi rounded-full font-semibold hover:text-green-400 cursor-pointer">Products</p></Link> 
                     <Link to='/about'> <p className="p-3 font-semi rounded-full font-semibold hover:text-green-400 cursor-pointer">About Us</p></Link>
                     <Link to='/review'> <p className="p-3 font-semi rounded-full font-semibold hover:text-green-400 cursor-pointer">Review</p></Link>
                     <Link to='/order'><p className="p-3 font-semi rounded-full font-semibold hover:text-green-400 cursor-pointer">Order</p></Link> 
                </div>
                

        </nav>

        </div>
     );
}

export
 default Nav;