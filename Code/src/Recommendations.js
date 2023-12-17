import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Recommendations = ({ productsInCart }) => {
  const [recommendations, setRecommendations] = useState([]);
 

  useEffect(() => {
    // getLocation();
    // Fetch recommendations based on the products in the cart
    const fetchRecommendations = async () => {
      try {
        // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint for recommendations
        const response = await axios.post(
          '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',
          { productsInCart },
          {
            headers: {
              'Authorization': 'Bearer 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',
              'Content-Type': 'application/json', // Set the content type if needed
            },
          }
        );

        // Assuming the API response contains an array of recommended products
        setRecommendations(response.data.recommendedProducts);
      } catch (error) {
        console.error('Error fetching recommendations:', error);
      }
    };

    // Fetch recommendations when the products in the cart change
    if (productsInCart.length > 0) {
      fetchRecommendations();
    }
  }, [productsInCart]);

  return (
    <div>
      <h2>Recommended Products</h2>
      <ul>
        {recommendations.map((product, index) => (
          <li key={index}>{product}</li>
        ))}
      </ul>
    </div>
  );
};

export default Recommendations;
