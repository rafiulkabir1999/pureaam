import React from 'react';
import {ImStarEmpty} from 'react-icons/im'

function singleReview(props) {

   const Review=props.UserReview;
            
          

    return ( 
          <div className=" w-11/12 mx-auto grid grid-row-1 grid-flow-row lace-content-center gap-4 md:w-full md:grid-cols-4 md:grid-flow-col">
        {Review.map((e)=>(
              
               
            <div className=" flex-col my-4 shadow bg-white   ">

            
                    <div className="flex p-2 rounded border-b-2 ">
                        <div className="p-2">
                    <img className='w-14 h-14 border-2 rounded-full p-2'src="./logo192.png" alt="" />
                    </div>

                <div className="flex p-2  text-gray  items-center grow">
                    <p className='text-xl'>{e.Name}</p>
            
                </div>
                 
                 <span className='items-center bg-yellow-300 rounded-full p-2 w-10 h-
                 
                 10 my-auto'>{e.Receive}</span>
              
            </div>

            <div className="flex p-2 rounded">
                <p className="p-2 text-left text-gray-500">
                {e.Review}
                </p>

               
            </div>

            <div className="flex p-2 rounded items-center justify-between">
                <div className="flex bg-yellow-200 px-7 rounded-full space-x-2 py-2 shadow ">
                      <ImStarEmpty/>
                      <ImStarEmpty/>
                      <ImStarEmpty/>
                      <span className='text-sm px-4 text-gray-400'>{e.Ratting}</span>
                </div>
                <div>
                    <span>{e.Date}</span>
                </div>
            </div>
 </div>
                
            ))}
         

       

     </div>
     
        
       
           
     
  
 );
         
 
    
}

export default singleReview;