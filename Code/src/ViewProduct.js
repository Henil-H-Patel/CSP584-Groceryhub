import React, { useEffect, useState } from "react";
import {useParams} from 'react-router-dom'
import './ViewProduct.css'

function ViewProduct({ match }){
    // const { productName } = match.params;
    let { productName } = useParams();
    const [reviews, setReviews] = useState([])
    const [productDetails, setProductDetails] = useState([])
    useEffect(()=>{


       getProduct()
        fetch(`http://localhost:8000/api/getReviews?productModelName=${productName}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                productModelName: productName, 
            }),
          })
            .then((response) => response.json())
            // console.log(response)
            .then((data) => {
              console.log('data', data)
              setReviews(data);
            })
            .catch((error) => {
              console.error(error);
            });

    },[])

    const getProduct = async () => {
        fetch('http://localhost:8000/api/getProduct', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              ProductName: productName, 
            }),
          })
            .then((response) => response.json())
            // console.log(response)
            .then((data) => {
              console.log('data', data)
              setProductDetails(data.products);
            })
            .catch((error) => {
              console.error(error);
            });
    
      };

return(
    <div className="view-product-container w-full">
      <h1 className="text-center uppercase text-9xl mt-10">{productName}</h1>

      {productDetails[0] ? <div className="product-details">
     
      <div class="text-gray-600 body-font">
          <div class="container px-5 py-24 mx-auto flex flex-col">
        <div class="lg:w-4/ mx-auto">
      <div class="rounded-lg h-64 overflow-hidden">
        <img alt="content" class="object-cover object-center h-full w-full" src={`/images/${productDetails[0].productImage}`}/>
      </div>
        <h3 className="text-center text-xl mt-5 font-bold">{productDetails[0].productDescription}</h3>
        <h3 className="text-center text-xl mt-1 font-bold">Price: ${productDetails[0].productPrice}</h3>
      </div>
    </div>
  </div>
</div>
       
    : ''}
      
    
    
      
      
      {reviews.length > 0 ? (
    <div className="reviews">
        <h1 className=" text-center text-5xl font-bold">Customer Reviews</h1>
        {reviews.map((review) => (
            <div key={review._id} className="review-item">
              
             


                <div class="container px-5 py-24 mx-auto flex flex-col">
                <div class="lg:w-4/6 mx-auto">
        
          <div class="flex flex-col sm:flex-row mt-10">
            <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
              <div class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div class="flex flex-col items-center text-center justify-center">
                <h2 class="font-medium title-font mt-4 text-gray-900 text-3xl">{review.userId}</h2>
                <div class="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                <h3 class="eading-relaxed text-3xl mb-4 ">Rating: {review.reviewRating}</h3>
                <p class="text-xl">{review.userOccupation}</p>
              </div>
            </div>
            <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              <p class="leading-relaxed text-4xl mb-4 ">{review.reviewText}</p>
              
            </div>
          </div>
        </div>
      </div>




            </div>



        ))}
    </div>
) : (
    <div className="no-reviews-message">
        <h1 className="text-center uppercase text-3xl mt-10 font-bold mb-20 ">No Reviews for this product</h1>
    </div>
)}

     
    </div>
)
}

export default ViewProduct;