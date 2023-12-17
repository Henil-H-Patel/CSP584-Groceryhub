import React, { useState } from "react";

function AddCustomer() {
  const [customerData, setCustomerData] = useState({
    name: "",
    password: "",
    usertype: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomerData({ ...customerData, [name]: name === 'usertype' ? value : value });
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/api/addCustomer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(customerData),
      });

      if (!response.ok) {
        throw new Error("Failed to add customer");
      }
      alert("Customer Added")

      const result = await response.json();
      console.log(result);

    } catch (error) {
      console.error("Error adding customer:", error.message);
    }
  };

  return (
    <div style={{width:'50%', margin:'0 auto'}}>
      <h1  style={{textAlign:'center', fontSize:'22px', padding:'5px'}}>Add Customer</h1>
      <form onSubmit={handleSubmit}>
            <label>Customer Name:</label>
            <input type="text" name="name" value={customerData.name} onChange={handleChange}/>

            <label>Password:</label>
            <input type="text" name="password" value={customerData.password} onChange={handleChange}/>

            <label>Customer Type:</label>
            <select name="usertype" value={customerData.usertype} onChange={handleChange}>
            <option value="customer">Customer</option>
            <option value="reatiler">Retailer</option>
            <option value="manager">Store Manager</option>
            </select>

        <button type="submit" style={{backgroundColor:'#28a745'}}>Add Customer</button>
      </form>
    </div>
  );
}

export default AddCustomer;
