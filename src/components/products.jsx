import React, { useState } from "react";
import Product from "./product";

function Products() {

  const [product,setproduct]=useState([
    {Name:"Fojli",Quantity:10,Price:1200,img:"./41jpqNMg-kL._SY355_.jpg"},
    {Name:"Fojli",Quantity:10,Price:1200,img:"./41jpqNMg-kL._SY355_.jpg"},
    {Name:"Fojli",Quantity:10,Price:1200,img:"./41jpqNMg-kL._SY355_.jpg"},
    {Name:"Fojli",Quantity:10,Price:1200,img:"./41jpqNMg-kL._SY355_.jpg"},
    {Name:"Fojli",Quantity:10,Price:1200,img:"./41jpqNMg-kL._SY355_.jpg"},
    {Name:"Fojli",Quantity:10,Price:1200,img:"./41jpqNMg-kL._SY355_.jpg"},
    {Name:"Fojli",Quantity:10,Price:1200,img:"./41jpqNMg-kL._SY355_.jpg"},
    {Name:"Fojli",Quantity:10,Price:1200,img:"./41jpqNMg-kL._SY355_.jpg"},
    {Name:"Fojli",Quantity:10,Price:1200,img:"./41jpqNMg-kL._SY355_.jpg"},
    {Name:"Fojli",Quantity:10,Price:1200,img:"./41jpqNMg-kL._SY355_.jpg"},
    {Name:"Fojli",Quantity:10,Price:1200,img:"./41jpqNMg-kL._SY355_.jpg"},
    {Name:"Fojli",Quantity:10,Price:1200,img:"./41jpqNMg-kL._SY355_.jpg"},
    
  ]);
    return ( 
       <div className="container mx-auto">
         
           <div className='container   mx-auto space-x-4 md:flex pt-24 '>
         <Product P={product}/>
         
      </div>
       </div>
     );
}

export default Products;