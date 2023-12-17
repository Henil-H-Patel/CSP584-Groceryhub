import React, { useState } from 'react';
import axios from 'axios';
import './ReviewForm.css'
import {useParams} from 'react-router-dom'

const ReviewForm = ({ onClose }) => {
let { productModelName } = useParams();
  const [formData, setFormData] = useState({
    userId: '',
    reviewRating: 0,
    reviewText: '',
    productCategory: '',
    productPrice: 0,
    storeId: 0,
    storeCity: '',
    storeState: '',
    storeZip: 0,
    productOnSale: '',
    manufacturerName: '',
    manufacturerRebate: '',
    userAge: 0,
    userGender: '',
    userOccupation: '',
    reviewDate: new Date(),
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:8000/api/writeReview', {
        productModelName,
        ...formData,
      });
      alert("Your review has been submitted!");

      onClose(); // Close the form after successful submission
    } catch (error) {
      console.error('Error submitting review:', error);
      // Handle error (display a message, etc.)
    }
  };

  return (
    <div className="review-form-container" style={{marginTop:'2%', marginBottom:'2%'}}>
      <h2 style={{textAlign:'center', fontSize:'20px'}}>Write a Review for {productModelName}</h2>
      <form onSubmit={handleSubmit} className="review-form">
        <label>
          User Name:
          <input type="text" name="userId" value={formData.userId} onChange={handleChange} required />
        </label>
  
        <label>
          Review Rating:
          {/* <input type="number" name="reviewRating" value={formData.reviewRating} onChange={handleChange} required /> */}
          <select  name='reviewRating' value={formData.reviewRating} onChange={handleChange} required >
            <option value=''>Select Review Rating</option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
            {/* <option value='snakcs'>Snacks</option>
            <option value='pc'>Personal Care</option> */}
        </select>
        </label>
  
        <label>
          Review Text:
          <textarea name="reviewText" value={formData.reviewText} onChange={handleChange} required />
        </label>
  
        {/* <label>
          Product Category:
          <input type="text" name="productCategory" value={formData.productCategory} onChange={handleChange} required />
        </label>
   */}
        <label>
          Product Category:
          <select  name='productCategory' value={formData.productCategory} onChange={handleChange} required >
            <option value=''>Select Product Type</option>
            <option value='fruit'>Fruits</option>
            <option value='veg'>Vegetables</option>
            <option value='beverages'>Beverages</option>
            <option value='dairy'>Dairy</option>
            <option value='hotbeverages'>Hot Beverages</option>
            <option value='snakcs'>Snacks</option>
            <option value='pc'>Personal Care</option>
        </select>
        </label>
        {/* <label>
          Product Price:
          <input type="number" name="productPrice" value={formData.productPrice} onChange={handleChange} required />
        </label>
  
        <label>
          Store ID:
          <input type="number" name="storeId" value={formData.storeId} onChange={handleChange} required />
        </label>
  
        <label>
          Store City:
          <input type="text" name="storeCity" value={formData.storeCity} onChange={handleChange} required />
        </label>
  
        <label>
          Store State:
          <input type="text" name="storeState" value={formData.storeState} onChange={handleChange} required />
        </label> */}
  
        <label>
          Store Zip:
          <input type="number" name="storeZip" value={formData.storeZip} onChange={handleChange} required />
        </label>
  
        {/* <label>
          Product On Sale:
          <input type="text" name="productOnSale" value={formData.productOnSale} onChange={handleChange} required />
        </label>
  
        <label>
          Manufacturer Name:
          <input type="text" name="manufacturerName" value={formData.manufacturerName} onChange={handleChange} required />
        </label>
  
        <label>
          Manufacturer Rebate:
          <input type="text" name="manufacturerRebate" value={formData.manufacturerRebate} onChange={handleChange} required />
        </label>
  
        <label>
          User Age:
          <input type="number" name="userAge" value={formData.userAge} onChange={handleChange} required />
        </label>
  
        <label>
          User Gender:
          <input type="text" name="userGender" value={formData.userGender} onChange={handleChange} required />
        </label>
  
        <label>
          User Occupation:
          <input type="text" name="userOccupation" value={formData.userOccupation} onChange={handleChange} required />
        </label> */}
  
        <button type="submit">Submit</button>
      </form>
    </div>
  );
  
};

export default ReviewForm;
