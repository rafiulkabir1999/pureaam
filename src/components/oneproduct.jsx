import React from 'react';
import {AiOutlineStar,AiFillStar} from 'react-icons/ai'
import {FaStarHalfAlt} from 'react-icons/fa'


function Onepro(props) {
    const pro=props.element
    return ( 
        <div className='relative flex-nowrap p-0  bg-white shadow rounded-md w-11/12 mx-auto my-2 md:p-4   md:w-full md:my-0 md:mx-0 md:p-2 md:my-4'>
               
                       <div className='flex items-center justify-center md:p-2'>
                       <img className='w-full h-full ' src={pro.img} alt="" />
                    </div>
               <div className="p-1 flex justify-around text-gray-400 font-medium items-center">
                   <p className='p-1'>{pro.Name}</p>
                   <span className='text-yellow-400 flex text-md'>
                       <AiFillStar/><AiFillStar/><AiFillStar/><FaStarHalfAlt/>
                   </span>
                   <p className='p-1'>10KG</p>
               </div>
   
                
               <div className="flex p-1 justify-between items-center border-0 rounded-full pb-2 md:border-2">
                       <h2 className='text-green-400 grow font-bold'>{pro.Price}</h2>
                      <button class='notavailable rounded-full bg-green-400 px-4 text-white justify-center w-1/2  transition-all duration-550 ease-out hover:bg-green-500  p-2 '>
                         Order
                        </button>
               </div>
   
                   <div className='absolute top-6 left-6'>
                       <h2 className='rounded-full w-13 h-13 bg-yellow-400 p-2 text-white'>{pro.Quantity}</h2>
                  </div>
           
              </div>
     );
}

export default Onepro;