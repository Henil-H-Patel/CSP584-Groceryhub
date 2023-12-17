// import React, { useEffect, useState } from 'react';

// import mainImg from './mainImg.jpg';
// import {Link} from 'react-router-dom'
// import logo from './logo2.png'
// import center from './main.jpeg'



//  function Products() {

//     const spacing = '1.5';
//     // Correct usage of style prop
//     const customStyle = {
 
       
//       // Add other style properties as needed
//     };

// return (
//     <div>
//        <section class="text-gray-600 body-font">
//   <div class="container px-5 py-24 mx-auto">
//     <div class="flex flex-wrap -m-4">

//       <div class="  object-contain p-4 lg:w-1/3">
//         <div class="h-full  bg-[url('../public/images/fruits.jpeg')] rounded-lg bg-white bg-cover p-6 shadow-lg  dark:bg-neutral-70 text-center relative"
//         >
//           <h2 class="tracking-widest  text-xs title-font   font-medium text-white-400 mb-1">CATEGORY</h2>
//           <h1 class="title-font text-4xl font-extrabold text-white mb-3">Fuits</h1>
//           <p class="leading-relaxed text-white mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
//           <Link to='/Fruits'>
//           <a class="text-white inline-flex items-center">More Products
//             <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
//               <path d="M5 12h14"></path>
//               <path d="M12 5l7 7-7 7"></path>
//             </svg>
//           </a>
//           </Link>
        
//         </div>
//       </div>
//       <div class="p-4 lg:w-1/3">
//         <div class="h-full  bg-[url('../public/images/veg.jpeg')] rounded-lg bg-white bg-cover p-6 shadow-lg  dark:bg-neutral-70 text-center relative"
//         >
//           <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
//           <h1 class="title-font text-4xl font-extrabold mb-3 text-white">Vegetables</h1>
//           <p class="leading-relaxed mb-3 font-extrabold text-white">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
//           <Link to='/Veg'>
//           <a class="text-indigo-500 inline-flex items-center">More Products
//             <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
//               <path d="M5 12h14"></path>
//               <path d="M12 5l7 7-7 7"></path>
//             </svg>
//           </a>
//           </Link>
//         </div>
//       </div>
//       <div class="p-4 lg:w-1/3">
//         <div class="h-full  bg-[url('../public/images/bev.jpeg')] rounded-lg bg-white bg-cover p-6 shadow-lg  dark:bg-neutral-70 text-center relative"
//         >
//           <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
//           <h1 class="title-font  text-4xl font-extrabold text-white mb-3">Beverages</h1>
//           <p class="leading-relaxed mb-3 text-white">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
//           <Link to='/Beverages'>
//           <a class="text-indigo-500 inline-flex items-center">More Products
//             <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
//               <path d="M5 12h14"></path>
//               <path d="M12 5l7 7-7 7"></path>
//             </svg>
//           </a>
//          </Link>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>

// <section class="text-gray-600 body-font">
//   <div class="container px-5 py-24 mx-auto">
//     <div class="flex flex-wrap -m-4">
//       <div class="p-4 lg:w-1/3">
//         <div class="h-full  bg-[url('../public/images/dairy.jpeg')] rounded-lg bg-white bg-cover p-6 shadow-lg  dark:bg-neutral-70 text-center relative">
    
//           <h1 class="title-font  text-4xl font-medium text-white mb-3">Dairy</h1>
//           <p class="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
//           <Link to='/Dairy'>
//           <a class="text-indigo-500 inline-flex items-center">More Products
//             <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
//               <path d="M5 12h14"></path>
//               <path d="M12 5l7 7-7 7"></path>
//             </svg>
//           </a>
//           </Link>
        
//         </div>
//       </div>
//       <div class="p-4 lg:w-1/3">
//         <div class="h-full  bg-[url('../public/images/household.jpeg')] rounded-lg bg-white bg-cover p-6 shadow-lg  dark:bg-neutral-70 text-center relative">
   
//           <h1 class="title-font  text-4xl font-extrabold text-white mb-3">HouseHold</h1>
//           <p class="leading-relaxed mb-3 text-white">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
//           <Link to='/HouseHold'>
//           <a class="text-indigo-500 inline-flex items-center">More products
//             <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
//               <path d="M5 12h14"></path>
//               <path d="M12 5l7 7-7 7"></path>
//             </svg>
//           </a>
//           </Link>
//         </div>
//       </div>
//       <div class="p-4 lg:w-1/3">
//         <div class="h-full  bg-[url('../public/images/hotbr.jpeg')] rounded-lg bg-white bg-cover p-6 shadow-lg  dark:bg-neutral-70 text-center relative"
//         >
        
//           <h1 class="title-font  text-4xl font-medium text-white mb-3">Hot Beverages</h1>
//           <p class="leading-relaxed mb-3 text-white">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
//           <Link to='/hb'>
//           <a class="text-indigo-500 inline-flex items-center">More Products
//             <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
//               <path d="M5 12h14"></path>
//               <path d="M12 5l7 7-7 7"></path>
//             </svg>
//           </a>
//           </Link>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>


// <section class="text-gray-600 body-font">
//   <div class="container px-5 py-24 mx-auto">
//     <div class="flex flex-wrap -m-4">
//       <div class="p-4 lg:w-1/3">
//         <div class="h-full  bg-[url('../public/images/snack.jpeg')] rounded-lg bg-white bg-cover p-6 shadow-lg  dark:bg-neutral-70 text-center relative">
          
//           <h1 class="title-font  text-3xl font-medium text-white mb-3">Snacks</h1>
//           <p class="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
//           <Link to='/snacks'>
//           <a class="text-indigo-500 inline-flex items-center">More Products
//             <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
//               <path d="M5 12h14"></path>
//               <path d="M12 5l7 7-7 7"></path>
//             </svg>
//           </a>
//           </Link>
        
//         </div>
//       </div>
//       <div class="p-4 lg:w-1/3">
//         <div class="h-full  bg-[url('../public/images/personalcare.jpeg')] rounded-lg bg-black bg-cover p-6 shadow-lg  dark:bg-neutral-70 text-center relative">

//           <h1 class="title-font  text-3xl font-medium text-white mb-3">Personal Care</h1>
//           <p class="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
//           <Link to='/Personalcare'>
//           <a class="text-indigo-500 inline-flex items-center">More Products
//             <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
//               <path d="M5 12h14"></path>
//               <path d="M12 5l7 7-7 7"></path>
//             </svg>
//           </a>
//           </Link>
        
//         </div>
//       </div>
//     </div>
//   </div>
// </section>



//     </div>     
//         );  
// }


// export default Products;



import React, { useEffect, useState } from 'react';

import mainImg from './mainImg.jpg';
import {Link} from 'react-router-dom'
import logo from './logo2.png'
import center from './main.jpeg'



 function Products() {

    const spacing = '1.5';
    // Correct usage of style prop
    const customStyle = {
 
       
      // Add other style properties as needed
    };

return (
    <div>
        <section class="text-gray-600 body-font">
  <div class="container px-5 py-2 mx-auto">
    <div class="flex flex-wrap -m-4">
      <div class="p-4 md:w-1/3">
        <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden" styel={{textDecoration: 'none', color: 'inherit', }}>
        <Link to='/Fruits' >
          <img class="lg:h-48 md:h-36 w-full object-cover object-center" src={`./images/fruits.jpeg`} alt="blog"/>
          <div class="p-6">
     
          
            <h1 class="title-font text-3xl font-medium text-gray-900 mb-3">Fruits</h1>
            <p class="leading-relaxed mb-3">Explore our fresh and juicy selection of fruits. From seasonal delights to year-round favorites, we have a variety to suit your taste buds. Enjoy nature's sweetness with our premium fruits.</p>
            
           
          </div>
          </Link>
        </div>
      </div>
      <div class="p-4 md:w-1/3">
        <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <Link to='/Veg'>
          <img class="lg:h-48 md:h-36 w-full object-cover object-center" src={`./images/veg.jpeg`} alt="blog"/>
          <div class="p-6">
       
            <h1 class="title-font text-3xl  font-extrabold text-gray-900 mb-3">Vegetabels</h1>
            <p class="leading-relaxed mb-3">Discover a vibrant assortment of fresh vegetables. From leafy greens to colorful bell peppers, our vegetable selection is packed with nutrients and flavors. Add a healthy touch to your meals with our farm-fresh vegetables.</p>
      
          </div>
          </Link>
        </div>
      </div>
      <div class="p-4 md:w-1/3">
        <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <Link to='/Beverages'>
          <img class="lg:h-48 md:h-36 w-full object-cover object-center" src={`./images/bev.jpeg`} alt="blog"/>
          <div class="p-6">
        
            <h1 class="title-font text-3xl font-extrabold text-gray-900 mb-3">Beverages</h1>
            <p class="leading-relaxed mb-3">Quench your thirst with our diverse range of beverages. From refreshing juices to energizing drinks, we offer a variety of options to suit your taste. Explore our beverage collection and stay hydrated in style.</p>
        
          </div>
          </Link>
        </div>
      </div>
    </div>
  </div>
</section>


<section class="text-gray-600 body-font">
  <div class="container px-5 py-2 mx-auto">
    <div class="flex flex-wrap -m-4">
      <div class="p-4 md:w-1/3">
        <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <Link to='/Dairy'>
          <img class="lg:h-48 md:h-36 w-full object-cover object-center" src={`./images/dairy.jpeg`} alt="blog"/>
          <div class="p-6">
       
          
            <h1 class="title-font text-3xl font-extrabold text-gray-900 mb-3">Dairy</h1>
            <p class="leading-relaxed mb-3">Experience the goodness of fresh dairy products. From creamy milk to a variety of cheeses, our dairy selection is sourced from local farms to ensure quality and taste. Elevate your recipes and enjoy the richness of our dairy products.</p>
            
           
          </div>
          </Link>
        </div>
      </div>
      <div class="p-4 md:w-1/3">
        <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <Link to='/HouseHold'>
          <img class="lg:h-48 md:h-36 w-full object-cover object-center" src={`./images/household.jpeg`} alt="blog"/>
          <div class="p-6">
         
            <h1 class="title-font text-3xl  font-extrabold text-gray-900 mb-3">HouseHold</h1>
            <p class="leading-relaxed mb-3">Make your home a haven with our household essentials. From cleaning supplies to organizational tools, we offer practical solutions for every corner of your home. Explore our household collection and keep your space tidy and welcoming.</p>
           
          </div>
          </Link>
        </div>
      </div>
      <div class="p-4 md:w-1/3">
        <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <Link to='/hb'>
          <img class="lg:h-48 md:h-36 w-full object-cover object-center" src={`./images/hotbr.jpeg`} alt="blog"/>
          <div class="p-6">
       
            <h1 class="title-font text-3xl font-extrabold text-gray-900 mb-3">Hot Beverages</h1>
            <p class="leading-relaxed mb-3">Warm up with our comforting hot beverages. From soothing teas to rich coffees, we offer a diverse selection to elevate your beverage experience. Embrace the cozy moments with our premium hot drinks.</p>
      
          </div>
          </Link>
        </div>
      </div>
    </div>
  </div>
</section>



<section class="text-gray-600 body-font">
  <div class="container px-5 py-2 mx-auto">
    <div class="flex flex-wrap -m-4">
      <div class="p-4 md:w-1/3">
      
        <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <Link to='/snacks'>
          <img class="lg:h-48 md:h-36 w-full object-cover object-center" src={`./images/snack.jpeg`} alt="blog"/>
          <div class="p-6">
        
          
            <h1 class="title-font text-3xl font-extrabold text-gray-900 mb-3">Snacks</h1>
            <p class="leading-relaxed mb-3">Indulge in delicious snacks for every craving. From savory to sweet, our snack collection offers a delightful range of treats. Whether you prefer crunchy or chewy, find your perfect snack companion here.</p>
            
      
          </div>
          </Link>
        </div>
      </div>
      <div class="p-4 md:w-1/3">
        <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <Link to='/Personalcare'>
          <img class="lg:h-48 md:h-36 w-full object-cover object-center" src={`./images/personalcare.jpeg`} alt="blog"/>
          <div class="p-6">
         
            <h1 class="title-font text-3xl  font-extrabold text-gray-900 mb-3">Personal Care</h1>
            <p class="leading-relaxed mb-3">Take care of yourself with our high-quality personal care products. From skincare essentials to grooming items, we offer a range of products to pamper you. Enhance your self-care routine with our premium personal care collection.</p>
           
          </div>
          </Link>
        </div>
      </div>
    </div>
  </div>
</section>
</div>
)}

export default Products;
