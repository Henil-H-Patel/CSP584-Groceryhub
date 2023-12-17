import React, { useEffect, useState } from 'react';
import "./style.css";
import { useCart } from './CartContext';
import {Link } from 'react-router-dom';
import ReviewForm from './ReviewForm';
import UpdateForm from './UpdateForm';


function Beverages() {
  const [productDetails, setProductDetails] = useState([]);
  const { addToCart } = useCart();
  const [usertype, setUserType] = useState('');
  const [notification, setNotification] = useState('');
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState([]);
  const [showUpdateForm, setShowUpdateForm] = useState(false);


  useEffect(() => {
    let ut = sessionStorage.getItem('usertype');
    setUserType(ut);
  }, []);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () =>{
    fetch('http://localhost:8000/api/getProducts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ProductType: 'beverages', 
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
  }


  const handleWriteReview = (product) => {
    setSelectedProduct(product);
    setShowReviewForm(true);
  };

  const closeReviewForm = () => {
    setShowReviewForm(false);
  };

  const handleBuyNow = (product) => {
    addToCart({ ...product, quantity: 1 });
    setNotification(`"${product.productName}" added to cart!`);
    setTimeout(() => {
      setNotification('');
    }, 3000);
  };

  const handleDelete = async ({...product}) =>{
    try{
      let prd = {...product}
      let productName = prd.productName;
      console.log(productName)
      const response = fetch('http://localhost:8000/api/deleteProduct', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        productName
      }),
      
    }).then(getProducts());
    
    if (!response.ok) {
      // const errorMessage = await response.text();
      throw new Error('error');
    }

    setProductDetails((prevProducts) =>
      prevProducts.filter((p) => p.productName !== productName)
    );

  }catch(error){
    console.error('Error logging user:', error.message);
  }
  }

  const handleUpdate = (product) => {
    setSelectedProduct(product);
    setShowUpdateForm(true);
  };
  // const handleUpdate = async ({...product}) =>{
  //   setSelectedProduct(product);
  //   setShowUpdateForm(true);
  //   try{
  //     let prd = {...product}
  //     let productName = prd.productName;
  //     console.log(productName)
  //     const response = fetch('http://localhost:8000/api/updateProduct', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       productName
  //     }),
      
  //   }).then(getProducts());
    
  //   if (!response.ok) {
  //     // const errorMessage = await response.text();
  //     throw new Error('error');
  //   }

  //   setProductDetails((prevProducts) =>
  //     prevProducts.filter((p) => p.productName !== productName)
  //   );

  // }catch(error){
  //   console.error('Error logging user:', error.message);
  // }
  // }


  // const handleUpdate = (product) => {
  //   setSelectedProduct(product);
  //   setShowUpdateForm(true);
    
  // };

    
    

  return (
    <div className=' bg-white mt-6'>
       
       <h1 class="mb-2 mt-0 text-6xl flex justify-center text-indigo-600  font-bold leading-tight text-primary">
            BEVERAGES
        </h1>


    <div class="text-gray-600 body-font">
 

    <ul className="flex flex-wrap justify-center">
    {productDetails.map((product, index) => (
              <div class="p-4 md:w-1/1 sm:mb-0 mb-6">
                <div class="rounded-lg h-64 overflow-hidden">
                <Link to={`/viewProduct/${product.productName}`}>
            <img
              src={`./images/${product.productImage}`}
              alt="Product Image"
              class = "object-scale-down h-full w-full"
              onError={() => console.log(`Error loading image for ${product.productName}`)}
            /></Link>
                  <img alt="content" class="object-center  h-full w-full" src="https://dummyimage.com/1203x503"/>
                </div>
                <h2 class="text-5xl font-medium title-font text-gray-900 mt-5">{product.productName}</h2>
                <h4 class="text-2xl font-medium title-font text-gray-900 mt-1">Price: ${product.productPrice}</h4>
               <h4 class="text-2xl font-medium title-font text-gray-900 mt-1">Discount: ${product.productDiscount}</h4>
                <p class="text-md leading-relaxed mt-2  font-medium">{product.productDescription}</p>
               
                <Link to={`/viewProduct/${product.productName}`}>
                <a class="text-indigo-500 inline-flex items-center mt-3">More Info
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
            </Link>
                <input
              type="submit"
              className="text-white text-xl font-medium title-font  bg-green-600 border-0 py-5 px-5 focus:outline-none hover:bg-green-900 rounded mt-10 sm:mt-0"
              value="Add to cart"
              onClick={() => handleBuyNow(product)}
            />
             <Link to={`/ReviewForm/${product.productName}`}><input
              type="submit"
              class="text-white text-xl font-medium title-font bg-indigo-500 border-0 py-5 px-5 focus:outline-none hover:bg-indigo-600 rounded mt-10 sm:mt-0"
              value="Write Review"
              onClick={() => handleWriteReview(product)}
            />
            </Link>
            {usertype === 'manager' && (
              <>
                <input
                  type="submit"
                  className="text-white text-xl font-medium title-font bg-red-400 border-0 py-5 px-5 focus:outline-none hover:bg-red-600 rounded mt-10 sm:mt-0"
                  value="Delete"
                  onClick={() => handleDelete(product)}
                />
               <Link to={`/updateProduct/${product.productName}`}> <input
                  type="submit"
                  className="btn-update"
                  value="Update"
                  onClick={() => handleUpdate(product)}
                />
                </Link>
              </>
            )}
              </div>
    ))}
  </ul>


  {notification && (
        <div className="notification-container">
          <div className="notification">
            <p>{notification}</p>
          </div>
        </div>
      )}
    {showReviewForm && (
        <ReviewForm
          productModelName={selectedProduct.productName}
          onClose={closeReviewForm}
        />
      )}

    {showUpdateForm && (
        <UpdateForm
          product={selectedProduct}
          // onUpdate={updateProduct}
          onClose={() => setShowUpdateForm(false)}
        />
      )}

</div>

    
      
    </div>
  );

    }

export default Beverages