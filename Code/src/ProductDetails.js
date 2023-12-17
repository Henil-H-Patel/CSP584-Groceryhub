// ProductDetails.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./style.css";

function ProductDetails() {
  const [productDetails, setProductDetails] = useState(null);
  const { productName } = useParams();

  useEffect(() => {
    // Fetch the details of the product based on the productName parameter
    fetch(`./products.xml`)
      .then((response) => response.text())
      .then((xml) => {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xml, 'text/xml');
        const productNode = xmlDoc.querySelector(`category[name="doorlocks"] product name:contains("${productName}")`);

        if (productNode) {
          const product = {
            name: productNode.textContent,
            description: productNode.parentElement.querySelector('description').textContent,
            price: productNode.parentElement.querySelector('price').textContent,
            image: productNode.parentElement.querySelector('image').textContent,
            manufacturer: productNode.parentElement.querySelector('manufacturer').textContent,
          };
          setProductDetails(product);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [productName]);

  if (!productDetails) {
    return <p>Loading...</p>;
  }

  return (
    <div className='product-details-container'>
      <h1>{productDetails.name}</h1>
      <h2>{productDetails.manufacturer}</h2>
      <h3>{productDetails.description}</h3>
      <h3>Price: ${productDetails.price}</h3>
      <img
        src={`/images/${productDetails.image}`}
        alt="Product Image"
        onError={() => console.log(`Error loading image for ${productDetails.name}`)}
      />
    </div>
  );
}

export default ProductDetails;
