import styles from "../style";
import robot from "../assets/robot.svg";
import webdev from '../assets/webdev.svg'
import uiux from '../assets/uiux.svg'
import seo from '../assets/seo.svg'
import social from '../assets/social.svg'
import photo from '../assets/photo.svg'
import graphic from '../assets/graphic.svg'
import brand from '../assets/brand.svg'
import mobile from '../assets/mobile.svg'
import lab from '../assets/lab.jpg'
import comm from '../assets/comm.jpg'
import together from '../assets/together.jpg'
import eye from '../assets/eye.jpg'

const Hero = () => {
  return (
    <div className="overflow-x-hidden">
    <div id="home" className={`flex md:flex-row flex-col min-h-[86vh] mb-0 bg-[#000b3f]`}>

      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row justify between items-center w-full ">
          <h1 className="text-white font-outfit text-7xl ">Every great <br /> design begins <br /> with a story</h1>
        </div>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter}  mt-[14vh] relative`}>
        <img src={robot} alt="billing" className="w-full h-full relative z-5" />
      </div>

    </div>
  <div className="bg-[#9cadff]">
    <div className="  px-[10vw] flex flex-col items-center ">
      <p className="text-center text-5xl font-bold mb-[5vh] mt-[2%]">WHO WE ARE</p>
      <p className="text-center text-4xl mb-[8vh]">We're a remote tribe of creatives, transforming startups<br /> into digital wonders, one project at a time</p>
     <a href="/Contactus"><button  className="p-2 bg-green-300 text-xl font-bold">GET A FREE CONSULTATION <span className="text-3xl">&rarr;</span> </button></a> 
      <p className="text-5xl font-bold mt-[15vh] mb-[3vh]">THE SERVICE WE PROVIDE FOR YOU</p>
    </div>

    <div class=" flex items-center py-[5vh] justify-center lg:min-h-screen ">
      <div class="p-4">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4">
         
          <div class="bg-[#000b3f] rounded-lg  p-4">
          <img src={webdev} alt="Placeholder Image" class="w-full h-48 rounded-md object-cover"/>
            <div class="px-1 py-4">
              <div class="ml-[-1vh]">
              <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 64 65" fill="none"><g clip-path="url(#clip0_37_355)"><path d="M33.3333 43.1666H10.6667C9.95942 43.1666 9.28115 42.8857 8.78105 42.3856C8.28095 41.8855 8 41.2072 8 40.5V13.8333C8 13.126 8.28095 12.4478 8.78105 11.9477C9.28115 11.4476 9.95942 11.1666 10.6667 11.1666H53.3333C54.0406 11.1666 54.7189 11.4476 55.219 11.9477C55.7191 12.4478 56 13.126 56 13.8333V35.1666" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18.6667 53.8334H29.3334" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M24 43.1666V53.8333" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M53.3333 56.5L58.6666 51.1667L53.3333 45.8334" stroke="#f06c34" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M45.3333 45.8334L40 51.1667L45.3333 56.5" stroke="#f06c34" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></g><defs><clipPath id="clip0_37_355"><rect width="64" height="64" fill="white" transform="translate(0 0.5)"></rect></clipPath></defs></svg>
              </div>
              <p class="text-white text-base">
               Web Design & development
              </p>
            </div>
            <div class="px-1 py-4">
              <a href="/web-dev" class="text-[#088c9c] hover:underline">Request a Quote</a>
            </div>
          </div>
          <div class="bg-[#000b3f] rounded-lg p-4">
          <img src={uiux} alt="Placeholder Image" class="w-full h-48 rounded-md object-cover"/>
            <div class="px-1 py-4">
            <div className="ml-[-2vh]"><svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 64 64" fill="none" ><g clip-path="url(#clip0_37_395)"><path d="M32 32.5C32 34.6217 32.8429 36.6566 34.3431 38.1569C35.8434 39.6571 37.8783 40.5 40 40.5C42.1217 40.5 44.1566 39.6571 45.6569 38.1569C47.1571 36.6566 48 34.6217 48 32.5C48 30.3783 47.1571 28.3434 45.6569 26.8431C44.1566 25.3429 42.1217 24.5 40 24.5C37.8783 24.5 35.8434 25.3429 34.3431 26.8431C32.8429 28.3434 32 30.3783 32 32.5Z" stroke="#f06c34" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16 16.5C16 14.3783 16.8429 12.3434 18.3431 10.8431C19.8434 9.34286 21.8783 8.5 24 8.5H40C42.1217 8.5 44.1566 9.34286 45.6569 10.8431C47.1571 12.3434 48 14.3783 48 16.5C48 18.6217 47.1571 20.6566 45.6569 22.1569C44.1566 23.6571 42.1217 24.5 40 24.5H24C21.8783 24.5 19.8434 23.6571 18.3431 22.1569C16.8429 20.6566 16 18.6217 16 16.5Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M24 24.5C21.8783 24.5 19.8434 25.3429 18.3431 26.8431C16.8429 28.3434 16 30.3783 16 32.5C16 34.6217 16.8429 36.6566 18.3431 38.1569C19.8434 39.6571 21.8783 40.5 24 40.5M24 40.5H32M24 40.5C22.4178 40.5 20.871 40.9692 19.5554 41.8482C18.2398 42.7273 17.2145 43.9767 16.609 45.4385C16.0035 46.9003 15.845 48.5089 16.1537 50.0607C16.4624 51.6126 17.2243 53.038 18.3431 54.1569C19.462 55.2757 20.8874 56.0376 22.4393 56.3463C23.9911 56.655 25.5997 56.4965 27.0615 55.891C28.5233 55.2855 29.7727 54.2602 30.6518 52.9446C31.5308 51.629 32 50.0822 32 48.5V8.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></g><defs><clipPath id="clip0_37_395"><rect width="64" height="64" fill="white" transform="translate(0 0.5)"></rect></clipPath></defs></svg></div>
              <p class="text-white text-base ">
               UI/UX
              </p>
            </div>
            <div class="px-1 py-4">
              <a href="/uiux" class="text-[#088c9c] hover:underline">Request a Quote</a>
            </div>
          </div>
          <div class="bg-[#000b3f] rounded-lg  p-4">
          <img src={seo} alt="Placeholder Image" class="w-full h-48 rounded-md object-cover"/>
            <div class="px-1 py-4">
              <div class=" ml-[-1vh]">
              <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 64 64" fill="none"><g clip-path="url(#clip0_37_432)"><path d="M18.6667 21.8334H10.6667C9.95942 21.8334 9.28115 22.1143 8.78105 22.6144C8.28095 23.1145 8 23.7928 8 24.5V29.8334C8 30.5406 8.28095 31.2189 8.78105 31.719C9.28115 32.2191 9.95942 32.5 10.6667 32.5H16C16.7072 32.5 17.3855 32.781 17.8856 33.2811C18.3857 33.7812 18.6667 34.4595 18.6667 35.1667V40.5C18.6667 41.2073 18.3857 41.8856 17.8856 42.3857C17.3855 42.8858 16.7072 43.1667 16 43.1667H8" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M37.3333 43.1667H26.6667V21.8334H37.3333" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M29.3333 32.5H34.6667" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M45.3333 24.5C45.3333 23.7928 45.6143 23.1145 46.1144 22.6144C46.6145 22.1143 47.2928 21.8334 48 21.8334H53.3333C54.0406 21.8334 54.7189 22.1143 55.2189 22.6144C55.719 23.1145 56 23.7928 56 24.5V40.5C56 41.2073 55.719 41.8856 55.2189 42.3857C54.7189 42.8858 54.0406 43.1667 53.3333 43.1667H48C47.2928 43.1667 46.6145 42.8858 46.1144 42.3857C45.6143 41.8856 45.3333 41.2073 45.3333 40.5V24.5Z" stroke="#f06c34" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></g><defs><clipPath id="clip0_37_432"><rect width="64" height="64" fill="white" transform="translate(0 0.5)"></rect></clipPath></defs></svg>
              </div>
              <p class="text-white text-base">
                Search Engine Optimization
              </p>
            </div>
            <div class="px-1 py-4">
              <a href="/seo" class="text-[#088c9c] hover:underline">Request a Quote</a>
            </div>
          </div>
          <div class="bg-[#000b3f] rounded-lg  p-4">
          <img src={social} alt="Placeholder Image" class="w-full h-48 rounded-md object-cover"/>
            <div class="px-1 py-4">
              <div class="ml-[-1vh]">
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 64 64" fill="none"><g clip-path="url(#clip0_37_487)"><path d="M26.6667 13.3333C26.6667 14.7478 27.2286 16.1044 28.2288 17.1046C29.2289 18.1048 30.5855 18.6667 32 18.6667C33.4145 18.6667 34.771 18.1048 35.7712 17.1046C36.7714 16.1044 37.3333 14.7478 37.3333 13.3333C37.3333 11.9188 36.7714 10.5623 35.7712 9.5621C34.771 8.5619 33.4145 8 32 8C30.5855 8 29.2289 8.5619 28.2288 9.5621C27.2286 10.5623 26.6667 11.9188 26.6667 13.3333Z" stroke="#f06c34" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8 50.6667C8 52.0812 8.5619 53.4377 9.5621 54.4379C10.5623 55.4381 11.9188 56 13.3333 56C14.7478 56 16.1044 55.4381 17.1046 54.4379C18.1048 53.4377 18.6667 52.0812 18.6667 50.6667C18.6667 49.2522 18.1048 47.8957 17.1046 46.8955C16.1044 45.8953 14.7478 45.3334 13.3333 45.3334C11.9188 45.3334 10.5623 45.8953 9.5621 46.8955C8.5619 47.8957 8 49.2522 8 50.6667Z" stroke="#f06c34" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M45.3333 50.6667C45.3333 52.0812 45.8952 53.4377 46.8954 54.4379C47.8956 55.4381 49.2522 56 50.6667 56C52.0812 56 53.4377 55.4381 54.4379 54.4379C55.4381 53.4377 56 52.0812 56 50.6667C56 49.2522 55.4381 47.8957 54.4379 46.8955C53.4377 45.8953 52.0812 45.3334 50.6667 45.3334C49.2522 45.3334 47.8956 45.8953 46.8954 46.8955C45.8952 47.8957 45.3333 49.2522 45.3333 50.6667Z" stroke="#f06c34" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M24 37.3334C24 39.4551 24.8429 41.4899 26.3431 42.9902C27.8434 44.4905 29.8783 45.3334 32 45.3334C34.1217 45.3334 36.1566 44.4905 37.6569 42.9902C39.1571 41.4899 40 39.4551 40 37.3334C40 35.2116 39.1571 33.1768 37.6569 31.6765C36.1566 30.1762 34.1217 29.3334 32 29.3334C29.8783 29.3334 27.8434 30.1762 26.3431 31.6765C24.8429 33.1768 24 35.2116 24 37.3334Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M32 18.6666V29.3333" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M17.8665 47.4668L25.3332 42.1334" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M46.1333 47.4668L38.6667 42.1334" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></g><defs><clipPath id="clip0_37_487"><rect width="64" height="64" fill="white"></rect></clipPath></defs></svg>
              </div>
              <p class="text-white text-base">
                Social Media Marketing
              </p>
            </div>
            <div class="px-1 py-4">
              <a href="/social" class="text-[#088c9c] hover:underline">Request a Quote</a>
            </div>
          </div>
          <div class="bg-[#000b3f] rounded-lg p-4">
          <img src={photo} alt="Placeholder Image" class="w-full h-48 rounded-md object-cover"/>
          <div class="px-1 py-4">
            <div class=" ml-[-1vh]">
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 64 64" fill="none"><g clip-path="url(#clip0_37_314)"><path d="M40 27.1666L52.1413 21.0973C52.5478 20.8942 52.9994 20.7983 53.4533 20.8187C53.9072 20.8392 54.3484 20.9753 54.735 21.2141C55.1215 21.4529 55.4406 21.7866 55.662 22.1833C55.8834 22.5801 55.9998 23.0269 56 23.4813V41.5186C55.9998 41.973 55.8834 42.4198 55.662 42.8166C55.4406 43.2133 55.1215 43.547 54.735 43.7858C54.3484 44.0246 53.9072 44.1607 53.4533 44.1812C52.9994 44.2016 52.5478 44.1057 52.1413 43.9026L40 37.8333V27.1666Z" stroke="#f06c34" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8 21.8333C8 20.4188 8.5619 19.0623 9.5621 18.0621C10.5623 17.0619 11.9188 16.5 13.3333 16.5H34.6667C36.0812 16.5 37.4377 17.0619 38.4379 18.0621C39.4381 19.0623 40 20.4188 40 21.8333V43.1667C40 44.5812 39.4381 45.9377 38.4379 46.9379C37.4377 47.9381 36.0812 48.5 34.6667 48.5H13.3333C11.9188 48.5 10.5623 47.9381 9.5621 46.9379C8.5619 45.9377 8 44.5812 8 43.1667V21.8333Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></g><defs><clipPath id="clip0_37_314"><rect width="64" height="64" fill="white" transform="translate(0 0.5)"></rect></clipPath></defs></svg>
            </div>
            <p class="text-white text-base">
              Commercial Photography
            </p>
          </div>
          <div class="px-1 py-4">
            <a href="/photography" class="text-[#088c9c] hover:underline">Request a Quote</a>
          </div>
        </div>
        <div class="bg-[#000b3f] rounded-lg p-4">
        <img src={graphic} alt="Placeholder Image" class="w-full h-48 rounded-md object-cover"/>
          <div class="px-1 py-4">
            <div class=" ml-[-1vh]">
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 64 64" fill="none"><g clip-path="url(#clip0_37_286)"><path d="M53.3333 45.8333V13.8333C53.3333 10.844 50.9893 8.5 48 8.5C45.0107 8.5 42.6667 10.844 42.6667 13.8333V45.8333L48 51.1667L53.3333 45.8333Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M42.6667 19.1666H53.3333" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M48 51.1667H13.3333C11.9188 51.1667 10.5623 50.6048 9.5621 49.6046C8.5619 48.6044 8 47.2479 8 45.8334C8 44.4189 8.5619 43.0623 9.5621 42.0621C10.5623 41.0619 11.9188 40.5 13.3333 40.5H24C25.4145 40.5 26.771 39.9381 27.7712 38.9379C28.7714 37.9377 29.3333 36.5812 29.3333 35.1667C29.3333 33.7522 28.7714 32.3957 27.7712 31.3955C26.771 30.3953 25.4145 29.8334 24 29.8334H16" stroke="#f06c34" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></g><defs><clipPath id="clip0_37_286"><rect width="64" height="64" fill="white" transform="translate(0 0.5)"></rect></clipPath></defs></svg>
            </div>
            <p class="text-white text-base">
              Graphic Design
            </p>
          </div>
          <div class="px-1 py-4">
            <a href="/graphic" class="text-[#088c9c] hover:underline">Request a Quote</a>
          </div>
        </div>
        <div class="bg-[#000b3f] rounded-lg p-4">
        <img src={brand} alt="Placeholder Image" class="w-full h-48 rounded-md object-cover"/>
          <div class="px-1 py-4">
            <div class=" ml-[-1vh]">
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 64 64" fill="none"><g clip-path="url(#clip0_37_203)"><path d="M50.6667 8H40C38.5855 8 37.229 8.5619 36.2288 9.5621C35.2286 10.5623 34.6667 11.9188 34.6667 13.3333V45.3333C34.6667 48.1623 35.7905 50.8754 37.7909 52.8758C39.7913 54.8762 42.5044 56 45.3333 56C48.1623 56 50.8754 54.8762 52.8758 52.8758C54.8762 50.8754 56 48.1623 56 45.3333V13.3333C56 11.9188 55.4381 10.5623 54.4379 9.5621C53.4377 8.5619 52.0812 8 50.6667 8Z" stroke="#f06c34" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M34.667 19.5999L29.3336 14.2666C28.3335 13.2668 26.9772 12.7051 25.563 12.7051C24.1488 12.7051 22.7925 13.2668 21.7923 14.2666L14.251 21.8079C13.2511 22.8081 12.6895 24.1644 12.6895 25.5786C12.6895 26.9928 13.2511 28.3491 14.251 29.3493L38.251 53.3493" stroke="#f06c34" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M19.4667 34.6666H13.3333C11.9188 34.6666 10.5623 35.2285 9.5621 36.2287C8.5619 37.2289 8 38.5855 8 40V50.6666C8 52.0811 8.5619 53.4377 9.5621 54.4379C10.5623 55.4381 11.9188 56 13.3333 56H45.3333" stroke="#f06c34" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M45.3333 45.3334V45.3596" stroke="white" stroke-width="5.33333" stroke-linecap="round" stroke-linejoin="round"></path></g><defs><clipPath id="clip0_37_203"><rect width="64" height="64" fill="white"></rect></clipPath></defs></svg>
            </div>
            <p class="text-white text-base">
             Brand Statergy
            </p>
          </div>
          <div class="px-1 py-4">
            <a href="/brand" class="text-[#088c9c] hover:underline">Request a Quote</a>
          </div>
        </div>
        <div class="bg-[#000b3f] rounded-lg  p-4">
        <img src={mobile} alt="Placeholder Image" class="w-full h-48 rounded-md object-cover"/>
          <div class="px-1 py-4">
            <div class="= ml-[-1vh]">
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 64 64" fill="none"><g clip-path="url(#clip0_37_246)"><path d="M10.6667 13.3333C10.6667 12.626 10.9476 11.9478 11.4477 11.4477C11.9478 10.9476 12.6261 10.6666 13.3333 10.6666H24C24.7072 10.6666 25.3855 10.9476 25.8856 11.4477C26.3857 11.9478 26.6667 12.626 26.6667 13.3333V24C26.6667 24.7072 26.3857 25.3855 25.8856 25.8856C25.3855 26.3857 24.7072 26.6666 24 26.6666H13.3333C12.6261 26.6666 11.9478 26.3857 11.4477 25.8856C10.9476 25.3855 10.6667 24.7072 10.6667 24V13.3333Z" stroke="#f06c34" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10.6667 40C10.6667 39.2928 10.9476 38.6145 11.4477 38.1144C11.9478 37.6143 12.6261 37.3334 13.3333 37.3334H24C24.7072 37.3334 25.3855 37.6143 25.8856 38.1144C26.3857 38.6145 26.6667 39.2928 26.6667 40V50.6667C26.6667 51.374 26.3857 52.0522 25.8856 52.5523C25.3855 53.0524 24.7072 53.3334 24 53.3334H13.3333C12.6261 53.3334 11.9478 53.0524 11.4477 52.5523C10.9476 52.0522 10.6667 51.374 10.6667 50.6667V40Z" stroke="#f06c34" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M37.3333 40C37.3333 39.2928 37.6143 38.6145 38.1144 38.1144C38.6145 37.6143 39.2928 37.3334 40 37.3334H50.6667C51.3739 37.3334 52.0522 37.6143 52.5523 38.1144C53.0524 38.6145 53.3333 39.2928 53.3333 40V50.6667C53.3333 51.374 53.0524 52.0522 52.5523 52.5523C52.0522 53.0524 51.3739 53.3334 50.6667 53.3334H40C39.2928 53.3334 38.6145 53.0524 38.1144 52.5523C37.6143 52.0522 37.3333 51.374 37.3333 50.6667V40Z" stroke="#f06c34" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M37.3333 18.6666H53.3333" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M45.3333 10.6666V26.6666" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></g><defs><clipPath id="clip0_37_246"><rect width="64" height="64" fill="white"></rect></clipPath></defs></svg>
            </div>
            <p class="text-white text-base">
              Mobile App Development
            </p>
          </div>
          <div class="px-1 py-4">
            <a href="/mobile" class="text-[#088c9c] hover:underline">Request a Quote</a>
          </div>
        </div>
    
        </div>
      </div>
    </div>
    </div>

    <div className="px-[10vw] bg-blue-200 py-[10vh] ">
  <p className="text-xl sm:text-2xl font-bold ">WHY WE STARTED SIDE GIGS DESIGN LABS</p> <br />
  <p className="text-base sm:text-3xl">We’re a team of freelancers who are crazy about creativity and dedicated to delivering top-notch services. We don’t just focus on being budget-friendly; we’re all about giving you incredible value without emptying your wallet. Our secret ingredient? Efficiency. We get your projects done fast and flawlessly.</p>
  <br />
  <p className="text-base sm:text-3xl">Side Gigs Design Lab was established on October 4th, 2023, by a group of passionate digital enthusiasts. However, we’re not your ordinary creative agency; we’re a vibrant and professional community. Join us for straightforward solutions infused with a touch of innovation and creativity!</p>
</div>

<div className="flex flex-col sm:flex-row  px-[10vw] bg-blue-200">
  <div className="mb-4 sm:mr-4 w-full sm:w-1/2">
    <p className="font-bold text-3xl sm:text-3xl">HOW WE WORK?</p>
    <p className="font-semibold text-2xl sm:text-2xl">Our approach thrives on four guiding principles: Simplicity, Functionality, the Art of Side Gigs, and the Power of Partnership.</p>
    <p className="mt-2 text-xl sm:text-2xl"><span className="text-3xl">&rarr;</span> Simplicity Rules</p>
    <p className="text-xl pl-4 sm:text-2xl pl-6">We Keep Things Clear And Elegant</p>
    <p className="mt-2 text-xl sm:text-2xl"><span className="text-3xl">&rarr;</span> Crafting Form, Function, And Side Gigs</p>
    <p className="text-xl pl-4 sm:text-2xl pl-6">Stylish & Smart Designs, Side Gigs Ignite Innovation</p>
    <p className="mt-2 text-xl sm:text-2xl"><span className="text-3xl">&rarr;</span> Unleashing Creativity Beyond</p>
    <p className="text-xl pl-4 sm:text-2xl pl-6">Our Personal Design And Development Ventures Ignite Innovation</p>
    <p className="mt-2 text-xl sm:text-2xl"><span className="text-3xl">&rarr;</span> Collaborative Partnerships Drive Success</p>
    <p className="text-xl pl-4 sm:text-2xl pl-6">Together, We Solve & Create</p>
  </div>
  <div className="w-full sm:w-1/2">
    <img src={eye} alt="how we work" className="mb-4 max-w-full" />
   <a href="/Contactus"> <button className="p-2 bg-green-300 text-xl sm:text-2xl font-bold mt-2 mx-[8%] mb-5">GET A FREE CONSULTATION <span className="text-3xl">&rarr;</span></button></a>
  </div>
</div>


<div className="min-h-screen w-screen bg-blue-100 p-8 ">
  <h1 className="text-3xl sm:text-2xl md:text-4xl lg:text-5xl text-center mb-1">HOW WE COLLABORATE</h1>
  <p className="text-center text-1xl mt-10%">We are a united force of individual creators, startup champions, UI/UX designers, product designers, <br /> front-end and back-end developers, graphic artists, product photographers, and commercial videographers. <br/>Our collaborative spirit knows no bounds as we work harmoniously to transform ideas into impactful <br/>solutions for our valued clients, whether they’re solo creators or innovative startups</p>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 my-10">
  <div className="flex justify-center">
    <div className="bg-white  border shadow-md max-w-xs md:max-w-none overflow-hidden">
      <img className="h-36 md:h-56 lg:h-60 w-full object-contain" src={together} alt="" />
      <div className="p-3">
        <h3 className="font-semibold text-lg sm:text-xl md:text-2xl leading-6 text-gray-700 my-2">
          TOGETHER
        </h3>
        <p className="paragraph-normal text-gray-600">
          Impact can only be made together. We love working together with clients, partners, and each other as a team.
        </p>
      </div>
    </div>
  </div>

  <div className="flex justify-center ">
    <div className="bg-white  border shadow-md max-w-xs md:max-w-none overflow-hidden">
      <img className="h-36 md:h-56 lg:h-60 w-full object-contain" src={comm} alt="" />
      <div className="p-3 ">
        <h3 className="font-semibold text-lg sm:text-xl md:text-2xl leading-6 text-gray-700 my-2">
          COMMUNICATION
        </h3>
        <p className="paragraph-normal text-gray-600">
          We will introduce you to our workflow, as well as our way of creating the complete solution. 
          We focus on all things, and everything matters to us.
        </p>
      </div>
    </div>
  </div>

  <div className="flex justify-center">
    <div className="bg-white border shadow-md max-w-xs md:max-w-none overflow-hidden">
      <img className="h-36 md:h-56 lg:h-60 w-full object-contain" src={lab} alt="" />
      <div className="p-3">
        <h3 className="font-semibold text-lg sm:text-xl md:text-2xl leading-6 text-gray-700 my-2">
          SIDE GIGS DESIGN LABS
        </h3>
        <p className="paragraph-normal text-gray-600">
          Your Freelance Hub for Affordable and Efficient Startup Solutions, Bridging Talent and Business Innovation.
        </p>
      </div>
    </div>
  </div>
</div>

</div>


<div className="flex flex-col md:flex-row justify-center items-center p-4 bg-blue-100">
      <div className="w-[70%] md:w-1/2  p-10  mb-4 md:mb-0">
        {/* Text on the left */}
        <div>
          <h1 className="text-3xl font-semibold text-black mb-4">Let’s get started - <br />
             Tell us about your project <br />
             and goals.</h1>
          <p className="text-black text-2xl">
          Share your details and we’ll get in contact  <br />with you and discuss your project over an initial 30-minute discovery call.
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2">
        {/* Contact form on the right with a border */}
        <form className="bg-white p-10  shadow-lg w-[70%] mx-[15%] mb-10">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Get in Touch</h2>
          <h2 className="text-1xl font-semibold text-blue-800 mb-4">Our friendly team would love to hear from you.</h2>
          <div className="mb-2">
            <label htmlFor="name" className="text-gray-800">Name:</label>
            <input type="text" id="name" name="name" className="border p-2 w-full" />
          </div>
          <div className="mb-2">
            <label htmlFor="email" className="text-gray-800">Email:</label>
            <input type="email" id="email" name="email" className="border p-2 w-full" />
          </div>
          <div className="mb-2">
            <label htmlFor="contact" className="text-gray-800">Contact:</label>
            <input type="number" id="contact" name="contact" className="border p-2 w-full" />
          </div>
          
          
          <button className="bg-[#000b3f] text-white p-2 rounded w-full mt-4">Request a call back</button>
        </form>
      </div>
    </div>

 </div>

   


   
    
  );
};

export default Hero;
