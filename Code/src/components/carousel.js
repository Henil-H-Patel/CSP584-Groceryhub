import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';



const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div className='relative'>
        <img
          src={`./images/v3.jpeg`}
          alt="Slide 1"
          className='opacity-90 brightness-50'
          style={{ width: '100%', height: '3/4' }}
        />
       <div class="absolute top-80 px-4 py-3 w-full">
      <h1 class="text-white  text-center font-semibold text-8xl"> Order Groceries For delivery or Pickup today </h1>
      <p class="text-gray-200 text-center text-4xl mt-10 font-semibold">
        Whatever you want from local stores, brought right to your door
      </p>
    </div>
      </div>
      <div className='relative'> 
        <img
          src={`./images/v5.jpg`}
          alt="Slide 2"
          className='opacity-90 brightness-50'
          style={{ width: '100%', height: '3/4' }}
        />
     
           <div class="absolute top-80 px-4 py-3 w-full">
    
      
      <h1 class="text-white  text-center font-semibold text-8xl"> Good Foods and More </h1>
      <Link to={`./Products`}>
      <button class="bg-transparent absolute left-1/2 py-3 px-9  -ml-14 justify-center hover:bg-white hover:text-black mt-10 rounded-full text-white text-center border-2 border-solid border-white text-3xl  font-medium">
          Find foods
      </button>
      </Link>
      
    </div>
    </div>
      <div>
        <img
          src={`./images/v1.jpeg`}
          alt="Slide 2"
          

          style={{ width: '100%', height: 'auto', }}
        />
      </div>
      {/* Add more slides as needed */}
    </Slider>
  );
};

export default Carousel;








// import React, { useState } from 'react';
// import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io';

// const Carousels = () => {
//   let [current, setCurrent] = useState(0);

//   let previousSlide = () => {
//     if (current === 0) setCurrent(slides.length - 1);
//     else setCurrent(current - 1);
//   };

//   let nextSlide = () => {
//     if (current === slides.length - 1) setCurrent(0);
//     else setCurrent(current + 1);
//   };

//   let slides = [
//     "./images/c1.jpeg",
//     "./images/c2.jpeg",
//     "./images/c3.jpeg",
//   ];

//   return (
//     <div className="overflow-hidden relative h-3/4">
//       <div
//         className={`flex transition ease-out duration-300`}
//         style={{
//           transform: `translateX(-${current * 100}%)`,
//         }}
//       >
//         {slides.map((s, index) => (
//           <img
//             key={index}
//             src={s}
//             alt={`Slide ${index + 1}`}
//             className="object-cover h-full w-screen relative"
//           />
//         ))}
//       </div>

//       <div className="absolute top-0 h-full w-full flex justify-between items-center text-white px-10 text-3xl">
//         <button onClick={previousSlide} className="bg-white text-black">
//           <IoIosArrowRoundBack />
//         </button>
//         <button onClick={nextSlide} className="bg-white text-black">
//           <IoIosArrowRoundForward />
//         </button>
//       </div>
//     </div>
//   );
// };