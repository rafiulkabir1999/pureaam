import React from 'react';
import OneProduct from './oneproduct';

function Product(props) {
  
    const product=props.P

    return ( 
       
           <div className='grid grid-cols-2 grid-flow-row gap-1 sm:grid-cols-4 md:grid-cols-6 md:gap-4'>
               {product.map(e=>(
                   <OneProduct element={e}/>
               ))}
           </div>
       
     );
}

export default Product;