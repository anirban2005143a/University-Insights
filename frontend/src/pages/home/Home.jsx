import React, { useEffect } from "react";
import { gsap } from "gsap";

import itemBg1 from "../../assets/itemBg1.jpg"
import itemBg2 from "../../assets/itemBg2.jpg"
import itemBg3 from "../../assets/itemBg3.jpg"
import itemBg4 from "../../assets/itemBg4.avif"
import itemBg5 from "../../assets/itemBg5.avif"
import itemBg6 from "../../assets/itemBg6.avif"
import { Link } from "react-router-dom";
import Navbar from "../../component/navbar/Navbar";

const Home = () => {
  // useEffect(() => {
  //   gsap.from(".hero-title", { opacity: 0, y: 50, duration: 1, delay: 0.5 });
  //   gsap.from(".hero-subtitle", { opacity: 0, y: 50, duration: 1, delay: 0.8 });
  //   gsap.from(".cta-button", { opacity: 0, y: 50, duration: 1, delay: 1.1 });
  // }, [])


  return (
    <>
      <Navbar />

      <div id="homePage" className=" py-[100px] flex  justify-center bg-[#00000094] bg-blend-hard-light min-h-screen bg-cover bg-no-repeat" style={{ backgroundImage: `url(${itemBg3})` }}>
        <div className=" flex flex-col my-auto items-center backdrop-blur-sm md:w-7/12 sm:w-9/12 w-11/12 text-white py-10 px-8 rounded-2xl bg-[#00000046]">
          <h1 className="hero-title md:text-6xl text-4xl font-bold text-primary mb-4 text-center">
            Welcome to University Insights
          </h1>
          <p className="hero-subtitle text-xl text-text mb-8 py-8 font-light text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae nihil dolor iusto praesentium esse facilis cum quod tempora atque culpa, mollitia, assumenda nesciunt expedita reiciendis excepturi dolorem perspiciatis magni sapiente.
          </p>
          <button className=" bg-blue-700 cursor-pointer cta-button bg-primary text-white px-6 py-3 rounded-lg hover:bg-secondary transition duration-300">
            <Link to="/application">Apply Now</Link>
          </button>
        </div>
      </div>
    </>


    // <div id="default-carousel" class="relative w-full h-screen" data-carousel="slide">
    //   {/* overlayer  */}
    //   <div className=" absolute w-full h-full top-0 left-0 bg-[#0000006b] z-40 pointer-events-none"></div>
    //   {/* <!-- Carousel wrapper --> */}
    //   <div class="relative h-full overflow-hidden  bg-blend-hue ">
    //     {/* <!-- Item 1 --> */}
    //     <div class="hidden duration-700 ease-in-out" data-carousel-item>
    //       <img src={itemBg1} class=" object-cover absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
    //     </div>
    //     {/* <!-- Item 2 --> */}
    //     <div class="hidden duration-700 ease-in-out" data-carousel-item>
    //       <img src={itemBg2} class=" object-cover absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
    //     </div>
    //     {/* <!-- Item 3 --> */}
    //     <div class="hidden duration-700 ease-in-out" data-carousel-item>
    //       <img src={itemBg3} class=" object-cover absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
    //     </div>
    //     {/* <!-- Item 4 --> */}
    //     <div class="hidden duration-700 ease-in-out" data-carousel-item>
    //       <img src={itemBg4} class=" object-cover absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
    //     </div>
    //     {/* <!-- Item 5 --> */}
    //     <div class="hidden duration-700 ease-in-out" data-carousel-item>
    //       <img src={itemBg5} class=" object-cover absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
    //     </div>
    //     {/* <!-- Item 6 --> */}
    //     <div class="hidden duration-700 ease-in-out" data-carousel-item>
    //       <img src={itemBg6} class=" object-cover absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
    //     </div>
    //   </div>
    //   {/* <!-- Slider indicators --> */}
    //   <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
    //     <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
    //     <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
    //     <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
    //     <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
    //     <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
    //     <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 6" data-carousel-slide-to="4"></button>
    //   </div>
    //   {/* <!-- Slider controls --> */}
    //   <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
    //     <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
    //       <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
    //         <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
    //       </svg>
    //       <span class="sr-only">Previous</span>
    //     </span>
    //   </button>
    //   <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
    //     <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
    //       <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
    //         <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
    //       </svg>
    //       <span class="sr-only">Next</span>
    //     </span>
    //   </button>
    // </div>

  );
};

export default Home;