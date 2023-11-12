import React from 'react';
import formbg from '../assets/formbg.svg'

function Career() {
    
  return (
    
   
      <div className="flex flex-col md:flex-row justify-center items-center pb-20 p-4 bg-blue-100">
      <div className="w-[100%] md:w-1/2  p-10   mb-4 md:mb-20">
        {/* Text on the left */}
        <div>
          
            <p className='mt-2 mb-4 text-1xl mb-5 xl:text-3xl'> We're eager to learn what inspires you to collaborate <br/> and the special skills you bring to our projects. Tell us more about yourself <br/> and how you can make a difference!</p>
          <p className="text-black text-2xl mt-5 mb-4 xl:text-2xl">Upload Your CV
          </p> <br/>
          <p className="text-black text-2xl mt-2 mb-4 xl:text-2xl">Find Suitable Job
          </p><br/>
          <p className="text-black text-2xl mt-2 mb-4 xl:text-2xl">Apply Job
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 relative mt-5">
      <div className="w-full md:w-1/2 md:w-[35vw] lg:w-[35vw] p-6" style={{backgroundImage: `url(${formbg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: 'auto', maxWidth: '35vw'}}>
  {/* Contact form on the right with a border */}
  <form className="bg-white p-4 md:p-10 shadow-lg w-full md:w-[30vw] mt-4 md:mt-[5vh] ml-[3%] mb-4 md:mb-10 relative z-10">
  <div className="mb-2">
    <label htmlFor="name" className="text-gray-800">Name:</label>
    <input type="text" id="name" name="name" className="border p-2 w-full" />
  </div>
  <div className="mb-2">
    <label htmlFor="email" className="text-gray-800">Email:</label>
    <input type="email" id="email" name="email" className="border p-2 w-full" />
  </div>
  <div className="mb-2">
    <label htmlFor="linkedin" className="text-gray-800">LinkedIn Profile:</label>
    <input type="text" id="linkedin" name="linkedin" className="border p-2 w-full" />
  </div>

    
  

  <div className="mb-2">
    <label htmlFor="attachment" className="text-gray-800">Attach Your Resume:</label>
    <input type="file" id="attachment" name="attachment" className="border p-2 w-full" />
  </div>
  <button className="bg-[#000b3f] text-white p-2 w-full md:w-[20%] mt-4">Submit</button>
</form>

</div>
</div>

    </div>

   
  );
}

export default Career
