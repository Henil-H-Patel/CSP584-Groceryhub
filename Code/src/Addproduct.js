import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import './style.css';
function Addproduct(){
    const [formData, setFormData] = useState({
        productName: '',
        productType:'',
        productPrice:'',
        productImage:'',
        productManufacturer: '',
        productCondition:'',
        productDiscount:'',
        productDescription:'',
        inventory:'',

    });
    const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === 'productImage' && files.length > 0) {
      const fileName = files[0].name;
      setFormData({ ...formData, [name]: fileName });
    }else {
    setFormData({ ...formData, [name]: value });
  }
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const response = await fetch('http://localhost:8000/api/addProduct', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({...formData}),
          });
    
          if (!response.ok) {
            const errorMessage = await response.text();
            throw new Error(errorMessage);
          }
          alert("Added Successfully");
        } catch (error) {
          console.error('Error registering user:', error.message);
        //   setError('Error registering user. Please try again.');
        }
      };
    


    return(
        <div style={{paddingTop:'2%', paddingBottom:'2%'}}>
            <h1 className="text-center" style={{fontSize:'20px' , paddingBottom:'1%'}}>Add Product</h1>
            <form onSubmit={handleSubmit} className="review-form">
        <label>
          Product Name:
          <input type="text" name="productName" value={formData.productName} onChange={handleChange} required />
        </label>

        <label>
          Product Category:
          <select  name='productType' value={formData.productType} onChange={handleChange} required >
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

        <label>
          Product Price:
          <input type="number" name="productPrice" value={formData.productPrice} onChange={handleChange} required />
        </label>

        <label>
            Inventory:
            <input type='number' name='inventory' value={formData.inventory} onChange={handleChange} required />
        </label>
  

        <label>
          Product Discount:
          <input type="number" name="productDiscount" value={formData.productDiscount} onChange={handleChange} required />
        </label>

  
        <label>
        Product Condition:
        <select  name='productCondition' value={formData.productCondition} onChange={handleChange} required >
            <option value=''>Select Product Condition</option>
            <option value='New'>New</option>
            <option value='Used'>Used</option>
        </select>
          {/* <input type="number" name="reviewRating" value={formData.reviewRating} onChange={handleChange} required /> */}
        </label>

        <label>
          Product Image:
          <input type="file" name="productImage" onChange={handleChange} accept="image/*" required />
        </label>


        <label>
            Product Description:
            <textarea name='productDescription' value={formData.productDescription} onChange={handleChange} required />
        </label>

       
        <label>
          Manufacturer Name:
          <input type="text" name="productManufacturer" value={formData.productManufacturer} onChange={handleChange} required />
        </label>
  
        <button type="submit">Submit</button>
      </form>
        </div>
    )
}

export default Addproduct;