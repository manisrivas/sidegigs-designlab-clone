import React from 'react';
import formbg from '../assets/formbg.svg'

function Brand() {
    
  return (
    
   
      <div className="flex flex-col md:flex-row justify-center items-center p-4 bg-blue-100">
      <div className="w-[100%] md:w-1/2  p-10  mb-4 md:mb-0">
        {/* Text on the left */}
        <div>
          <h1 className="text-3xl font-semibold text-black mb-4">Let’s Talk
            </h1>
            <p className='mt-2 mb-4 text-2xl'> Let’s get started with your Brand Stratergy journey!<br/> Please continue by filling out the form</p>
          <p className="text-black text-1xl">
          Share your details and we’ll get in contact  <br />with you and discuss your project over an initial 30-minute discovery call.
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 relative">
      <div className="w-full md:w-1/2 lg:w-[35vw] p-6" style={{backgroundImage: `url(${formbg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: 'auto', maxWidth: '600px'}}>

  {/* Contact form on the right with a border */}
  <form className="bg-white p-4 md:p-10 shadow-lg w-full md:w-[30vw] mt-4 md:mt-[5vh] md:ml-4 mb-4 md:mb-10 relative z-10">
  <div className="mb-2">
    <label htmlFor="name" className="text-gray-800">Name:</label>
    <input type="text" id="name" name="name" className="border p-2 w-full" />
  </div>
  <div className="mb-2">
    <label htmlFor="email" className="text-gray-800">Email:</label>
    <input type="email" id="email" name="email" className="border p-2 w-full" />
  </div>

  <div className="mb-2">
    <label htmlFor="budget" className="text-gray-800">Budget:</label>
    <input type="number" id="budget" name="budget" className="border p-2 w-full" />
  </div>
  <div className="mb-2">
    <label htmlFor="message" className="text-gray-800">Message:</label>
    <textarea id="message" name="message" className="border p-2 w-full h-24"></textarea>
  </div>
  <button className="bg-[#000b3f] text-white p-2 w-full md:w-[20%] mt-4">Submit</button>
</form>

</div>
</div>

    </div>

   
  );
}

export default Brand
