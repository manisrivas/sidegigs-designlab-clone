import React from 'react';
import producrs from '../assets/producrs.svg'
const Products = () => {
  return (
    <div className='bg-[#000b3f] min-h-[80vh] h-auto'>
      <div >
      <div className="  px-[10vw]  flex flex-col items-center z-[-1] ">
      <p className="text-center text-3xl md:text-4xl lg:text-5xl xl:text-8xl text-white font-outfit mt-[15%]">
  Exciting News! 🌟 Our Team Is Cooking Up Something <br />
  Extraordinary! Stay Tuned To Our Product Section For An <br />
  Exclusive Sneak Peek Into Our Upcoming Marvel.
  Get Ready To Be Amazed!
</p>

      
    </div>
      </div>
      <div className='sm:display-none'><img src={producrs} alt="" /></div>
    </div>
  );
}

export default Products;

