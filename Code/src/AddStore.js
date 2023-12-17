import React, { useState } from 'react';
import axios from 'axios';

const AddStore = () => {
  const [storeData, setStoreData] = useState({
    storeName: '',
    street: '',
    city: '',
    state: '',
    zipcode: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStoreData({ ...storeData, [name]: value });
  };

  const handleAddStore = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/api/addStore', storeData);

      if (!response.ok) {
        throw new Error('Failed to add store');
      }

    //   alert('Store Added Successfully');

      // Clear input fields after successful addition
      setStoreData({
        storeName: '',
        street: '',
        city: '',
        state: '',
        zipcode: '',
      });
    } catch (error) {
      console.error('Error adding store:', error.message);
    }
    alert('Store Added Successfully');

  };

  return (
    <div style={{ width: '50%', margin: '0 auto' }}>
      <h1 style={{textAlign:'center', fontSize:'22px', padding:'5px'}}>Add Store</h1>
      <form onSubmit={handleAddStore}>
        <label>Store Name:</label>
        <input type="text" name="storeName" value={storeData.storeName} onChange={handleChange} />

        <label>Street:</label>
        <input type="text" name="street" value={storeData.street} onChange={handleChange} />

        <label>City:</label>
        <input type="text" name="city" value={storeData.city} onChange={handleChange} />

        <label>State:</label>
        <input type="text" name="state" value={storeData.state} onChange={handleChange} />

        <label>Zipcode:</label>
        <input type="text" name="zipcode" value={storeData.zipcode} onChange={handleChange} />

        <button type="submit" style={{backgroundColor:'#28a745'}}>Add Store</button>
      </form>
    </div>
  );
};

export default AddStore;
