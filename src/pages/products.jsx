import React from 'react';
import producrs from '../assets/producrs.svg'
const Products = () => {
  return (
    <div className='bg-[#000b3f]'>
      <div>
      <div className="  px-[10vw] flex flex-col items-center z-[-1] ">
      <p className="text-center text-3xl md:text-4xl lg:text-5xl text-white font-outfit mt-[15%]">
  Exciting News! 🌟 Our Team Is Cooking Up Something <br />
  Extraordinary! Stay Tuned To Our Product Section For An <br />
  Exclusive Sneak Peek Into Our Upcoming Marvel.
  Get Ready To Be Amazed!
</p>

      
    </div>
      </div>
      <img src={producrs} alt="" />
    </div>
  );
}

export default Products;

