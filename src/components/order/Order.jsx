import React from 'react';

function Order() {
    return (
          

<div className="container mx-auto pt-24 w-full pb-24 ">
           
<div className=" flex flex-col w-full mx-auto shadow bg-white pb-4 md:w-1/3">

    <div className="flex p-2 rounded  ">
      <div className="p-2">
      <img className='w-14 h-14 border-2 rounded-full p-2'src="./logo192.png" alt="" />
    </div>

<div className="flex p-2  text-gray  items-center grow">
      <p className='text-xl'>Mango Name/ mango number</p>
</div>
</div>

<div className="flex-call p-2 rounded  justify-center  w-full  md:flex-row ">
<input type="text" placeholder="Name" className="outline-0 p-2 bg-gray-100 my-2 grow rounded-full w-full " />
<input type="text" placeholder="Phone" className="outline-0 p-2 bg-gray-100  grow rounded-full w-full " />
</div>

<div className="flex-cal px-2 rounded items-center justify-center  w-full md:1/2  md:flex-row" >
            <input type="text" placeholder="Ex:Dhaka/Kuril"className="outline-0 p-2 bg-gray-100 grow   w-full rounded-full " />

         <div className="rounded-full flex justify-center w-full  my-2 ">
            <button className="rounded-l-full bg-gray-200 p-2 font-bold hover:bg-red-200">-</button>
            <span className=" w-15 bg-green-400 p-2 font-bold text-white grow">1 X 10</span>
            <button className="rounded-r-full p-2 bg-gray-200 font-bold hover:bg-green-200">+</button>
         </div>

         <div className="rounded-full bg-yellow-300 py-2 my-2  px-4 w-full">
           <p>1800TK</p>
         </div>

       <div className="rounded-full bg-black py-2 px-4  my-2 text-white">
           <button>Confirm</button>
      </div>

</div>


</div>



</div>
      
      
        
    
    );
}

export default Order;
