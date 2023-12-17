import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function UpdateForm (){
    let {productName} = useParams();
    const [updatedProduct, setUpdatedProduct] = useState([]);
    const [formData, setFormData] = useState([{
        productName: updatedProduct.productName,
        productPrice: "",
        productDescription: "",
        productManufacturer: "",
        productDiscount:"",
        productCondition:"",
    }]);

    useEffect(() => {
        getProduct();
      }, []);

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
          .then((data) => {
            console.log('data', data.products[0].productName);
            setUpdatedProduct(data.products[0]);
          })
          .catch((error) => {
            console.error(error);
          });
      };

      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
    
        fetch('http://localhost:8000/api/updateProduct', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              ...formData
            }),
          })
            .then((response) => response.json())
            .then((data) => {
              console.log('data', data.products[0].productName);
              setUpdatedProduct(data.products[0]);
              
            })
            .catch((error) => {
              console.error(error);
            });
            alert("Product Updated")
      };

    return(<div style={{width:'50%', margin:'0 auto'}}>
        <h1 style={{textAlign:'center', fontSize:'22px', padding:'5px'}}>Update form for {productName}</h1>
        <form onSubmit={handleSubmit}>
            <label>Product Name:</label>
            <input type="text" name="productName" value={formData.productName} onChange={handleChange}/>

            <label>Product Price:</label>
            <input type="text" name="productPrice" value={formData.productPrice} onChange={handleChange}/>

            <label>Product Description:</label>
            <input type="text" name="productDescription" value={formData.productDescription} onChange={handleChange}/>

            <label>Product Manufacturer:</label>
            <input type="text" name="productManufacturer" value={formData.productManufacturer} onChange={handleChange}/>

            <label>Product Discount:</label>
            <input type="text" name="productDiscount" value={formData.productDiscount} onChange={handleChange}/>

            <label>Product Condition:</label>
            <input type="text" name="productCondition" value={formData.productCondition} onChange={handleChange}/>
            <button type='submit' style={{backgroundColor:'#28a745'}}>Update</button>
        </form>
    </div>)
}

export default UpdateForm;