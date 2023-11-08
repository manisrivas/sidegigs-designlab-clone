import React from 'react';
import one from '../assets/one.png';
import two from '../assets/two.png';
import three from '../assets/three.png';
import four from '../assets/four.png';

function Aboutus() {
  return (
    <div>
      <div className='flex items-center justify-center my-[5vh]'>
        <p className='text-4xl font-semibold'>Founders and Main Host</p>
        <img
          src='https://sidegigsdesignlab.com/wp-content/uploads/2023/10/Group.svg'
          alt='about-us'
          className='max-w-full h-auto'
        />
      </div>

      <div className='mx-[8%] flex flex-col md:flex-row justify-center gap-2 md:gap-6'>
        <div className='w-full md:w-1/2  '>
          <img
            src='https://sidegigsdesignlab.com/wp-content/uploads/2023/10/1.svg'
            alt='host1'
            className='max-w-full h-auto'
          />
        </div>
        <div className='w-full md:w-1/2'>
          <img
            src='https://sidegigsdesignlab.com/wp-content/uploads/2023/10/2.svg'
            alt='host2'
            className='max-w-full h-auto'
          />
        </div>
      </div>

      <div className='flex items-center justify-center mt-[5vh] md:mt-[15vh]'>
        <img
          src='https://sidegigsdesignlab.com/wp-content/uploads/2023/10/Sparkle.svg'
          alt='about-us'
          className='max-w-full h-auto'
        />
        <p className='text-4xl font-bold'>About and History</p>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mt-[5vh] md:mt-[10vh] px-[5vw]'>
        <div>
          <p className='font-bold text-xl'>Founders And Main Host ?</p><br />
          <p>Mustaq Ahmed Ali and Chanakya, co-founders of Side Gigs Design Lab, lead a team of skilled freelancers in frontend and backend development, AWS services, graphic design, digital marketing, photography, videography, and UI/UX design, providing high-quality and comprehensive digital solutions</p>
        </div>

        <div>
          <p className='font-bold text-xl'>Who We Are?</p><br />
          <p>We offer graphic design, web development, SEO, digital marketing,
            UI/UX design, e-commerce solutions, branding, consultation, product photography, videography, and short video content creation. Your comprehensive digital partner for success.</p>
        </div>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mt-[5vh] md:mt-[10vh] px-[5vw]'>
        <div>
          <p className='font-bold text-xl'>How's Our Collaborative Partnership Approach?</p><br />
          <p>At Side Gigs Design Lab, our freelancers collaborate seamlessly, crafting customized digital solutions according to client requirements. Our approach is professional and client-centric, ensuring exceptional results</p>
        </div>

        <div className='mx-[2%]'>
          <p className='font-bold text-xl'>How We Work?</p><br />
          <p>In collaboration with our in-house freelancers, our digital agency seamlessly integrates as part of your team. Through expert cooperation, we tailor solutions to ensure your project’s success.</p>
        </div>
      </div>

      <hr className='mt-[5vh] md:mt-[8vh] mx-[5vw]' />

      <div className='flex items-center justify-center mt-[5vh] md:mt-[15vh]'>
        <img
          src='https://sidegigsdesignlab.com/wp-content/uploads/2023/10/Sparkle.svg'
          alt='about-us'
          className='max-w-full h-auto'
        />
        <p className='text-4xl font-bold'>Meet Side gig’s Dream Team</p>
      </div>
   
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mx-4 lg:mx-8 place-content-center">
    <img src={one} className="w-1/2 md:w-full mx-auto" />
    <img src={two} className="w-1/2 md:w-full mx-auto" />
    <img src={three} className="w-1/2 md:w-full mx-auto" />
    <img src={four} className="w-1/2 md:w-full mx-auto" />
</div>


      

      <img
        src='https://sidegigsdesignlab.com/wp-content/uploads/2023/10/Frame-3604.svg'
        alt='about-us'
        className='mx-[3%] mt-[5vh] md:ml-[35vw] md:mt-[20vh] max-w-full h-auto'
      />

      <div className="flex flex-col mt-[5vh] md:mt-[20vh] px-[5vw] sm:flex-row mb-5">
        <div className="mb-[5vh] md:mb-0 md:mr-[2vw] w-full sm:w-1/2">
          <p className="font-semibold text-4xl">We hired people who are very<br /> passionate about what they do</p>
          <p className="text-xl mt-[3vh]">Within Our Design Agency, we’re a community of freelancers from<br /> around the world. Our mission is to collaborate and provide creative<br /> solutions for our clients.</p>
          <p className="mt-[2vh] text-xl"><span className="text-3xl">&rarr;</span> <span className='font-bold'>Flexible Scheduling:</span> Employees have the freedom to work<br /> when it's most convenient for them, allowing for a better work-life balance </p>
          <p className="mt-[2vh] text-xl"><span className="text-3xl">&rarr;</span> <span className='font-bold'>Autonomy and Responsibility:</span> Remote work empowers<br /> employees to take ownership of their projects and contribute to the brand's success. </p>
          <p className="mt-[2vh] text-xl"><span className="text-3xl">&rarr;</span> <span className='font-bold'>Career Growth Opportunities:</span> Employees can take on<br /> additional projects during their free time to further their career and expand their skill set </p>
          <p className="mt-[2vh] text-xl"><span className="text-3xl">&rarr;</span> <span className='font-bold'>Remote Collaboration Tools:</span> Access to top-notch collaboration<br /> tools ensures seamless communication and project management from anywhere</p>
        </div>
        <div className="w-full sm:w-1/2">
          <img
            src="https://sidegigsdesignlab.com/wp-content/uploads/2023/10/Header-image.svg"
            alt="how we work"
            className="max-w-full h-auto"
          />
        </div>
      </div>


      <div>
        <div className='flex flex-col mt-[5vh] md:mt-[20vh] px-[5vw] sm:flex-row  bg-gray-100'>
      <div className="mb-[5vh] md:mb-0 md:mr-[2vw] w-full sm:w-1/2 mt-10">
<p className="font-semibold text-4xl">Current openings</p>
<p className="text-xl mt-[3vh]">“If you believe your skills align with our team’s vision, we invite you to get in touch with us. Should you feel you are a suitable candidate, kindly forward your email to sidegigsdesignlab@gmail come along with your comprehensive portfolio and professional experience.

<br /> <br /> We are eager to learn more about your motivations for collaboration and the value you can bring to our projects.”</p>

</div></div>
      <div class="relative flex min-h-screen flex-col jus items-center justify-center overflow-hidden bg-gray-100 p-6 sm:py-12">
      
    
    <div class="bg-white    shadow-xl shadow-gray-100 w-full max-w-4xl flex flex-col sm:flex-row gap-3 sm:items-center  justify-between px-5 py-4 rounded-md">
   <div>
     
     <h3 class="font-bold mt-px">Front end Developer</h3>
     <div class="flex items-center gap-3 mt-2">
       <span class="bg-purple-100 text-purple-700  px-3 py-1 text-sm">Full-time / Part Time</span>
       
     </div>
   </div>
   <div>
     <a href="/career">
     <button class="bg-[#000b3f] text-white font-medium px-4 py-2 flex gap-1 items-center">Apply Now <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
   <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
 </svg>
 </button></a>
   </div>
    </div>
    <div class="bg-white mt-2 shadow-xl shadow-gray-100 w-full max-w-4xl flex flex-col sm:flex-row gap-3 sm:items-center  justify-between px-5 py-4 rounded-md">
   <div>
     
     <h3 class="font-bold mt-px">Back end Developer</h3>
     <div class="flex items-center gap-3 mt-2">
       <span class="bg-purple-100 text-purple-700  px-3 py-1 text-sm">Full-time / Part Time</span>
       
     </div>
   </div>
   <div>
   <a href="/career">
     <button class="bg-[#000b3f] text-white font-medium px-4 py-2 flex gap-1 items-center">Apply Now <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
   <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
 </svg>
 </button></a>
   </div>
    </div>
    <div class="bg-white mt-2 shadow-xl shadow-gray-100 w-full max-w-4xl flex flex-col sm:flex-row gap-3 sm:items-center  justify-between px-5 py-4 rounded-md">
   <div>
     
     <h3 class="font-bold mt-px">Video Editor</h3>
     <div class="flex items-center gap-3 mt-2">
       <span class="bg-purple-100 text-purple-700  px-3 py-1 text-sm">Full-time / Part Time</span>
       
     </div>
   </div>
   <div>
   <a href="/career">
     <button class="bg-[#000b3f] text-white font-medium px-4 py-2 flex gap-1 items-center">Apply Now <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
   <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
 </svg>
 </button></a>
   </div>
    </div>
    <div class="bg-white mt-2 shadow-xl shadow-gray-100 w-full max-w-4xl flex flex-col sm:flex-row gap-3 sm:items-center  justify-between px-5 py-4 rounded-md">
   <div>
     
     <h3 class="font-bold mt-px">Bussiness Development Associate</h3>
     <div class="flex items-center gap-3 mt-2">
       <span class="bg-purple-100 text-purple-700  px-3 py-1 text-sm">Full-time / Part Time</span>
       
     </div>
   </div>
   <div>
   <a href="/career">
     <button class="bg-[#000b3f] text-white font-medium px-4 py-2 flex gap-1 items-center">Apply Now <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
   <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
 </svg>
 </button></a>
   </div>
    </div>
    <div class="bg-white mt-2 shadow-xl shadow-gray-100 w-full max-w-4xl flex flex-col sm:flex-row gap-3 sm:items-center  justify-between px-5 py-4 rounded-md">
   <div>
     
     <h3 class="font-bold mt-px">SEO Specialist</h3>
     <div class="flex items-center gap-3 mt-2">
       <span class="bg-purple-100 text-purple-700  px-3 py-1 text-sm">Full-time / Part Time</span>
       
     </div>
   </div>
   <div>
    <a href="/career">
     <button class="bg-[#000b3f] text-white font-medium px-4 py-2 flex gap-1 items-center">Apply Now <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
   <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
 </svg>
 </button></a>
   </div>
    </div>




 

 </div>
 </div>
      
    </div>
  );
}

export default Aboutus;
