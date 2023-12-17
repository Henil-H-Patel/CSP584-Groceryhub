import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';
import './Checkout.css';

function Checkout() {
  const { cart, clearCart } = useCart();
  console.log('cart',cart)
  const [stores, setStores] = useState([]);
  const [uname, setUname] = useState('');
  const [orderId, setOrderId] = useState('');

  useEffect(()=>{
    let un = sessionStorage.getItem('username');
    setUname(un);
     fetch('http://localhost:8000/api/getStores')
     .then((response) => response.json())
     // console.log(response)
     .then((data) => {
       console.log('stores', data)
       setStores(data);
     })
     .catch((error) => {
       console.error(error);
     });
     const randomOrderId = generateRandomOrderId();
     const currentDate = new Date().toISOString().split('T')[0];
     setFormData({
      name: '',
      street: '',
      city: '',
      state: '',
      zipCode: '',
      creditCard: '',
      deliveryMethod: 'homeDelivery',
      storeLocation: '',
      orderDate: currentDate, // Set the orderDate to the current date
    });
     setOrderId(randomOrderId);

  },[])
  const [formData, setFormData] = useState({
    name: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    creditCard: '',
    deliveryMethod: 'homeDelivery', // Default to home delivery
    storeLocation: '', // Only applicable for in-store pickup
    orderDate: '', 
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/api/addOrder', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          orderId: orderId,
          userName: uname,
          productName: cart[0].productName,
          productPrice: cart[0].productPrice,
          street: formData.street,
          creditCard: formData.creditCard,
          deliveryMethod: formData.deliveryMethod,
          storeLocation: formData.storeLocation,
          orderDate: formData.orderDate,
        }),
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(errorMessage);
      }
      alert("Order placed Successfully");
      console.log(response)
      clearCart();
      window.location.href = `checkout/orderConfirmation/${orderId}`;

    } catch (error) {
      console.error('Error registering user:', error.message);
    //   setError('Error registering user. Please try again.');
    }
  };

  const generateRandomOrderId = () => {
    const characters = '0123456789';
    const orderIdLength = 8;
    let randomOrderId = '';

    for (let i = 0; i < orderIdLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomOrderId += characters.charAt(randomIndex);
    }

    return randomOrderId;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // const handleCheckout = () => {
    // Perform checkout logic here (e.g., send data to server, update order status)
    // For simplicity, we'll just clear the cart in this example
    // clearCart();
    // alert('Order placed successfully!');
  // };

  return (
    <div className="checkout-container">
      <h1 style={{textAlign:'center', fontSize:'22px', padding:'5px'}}>Checkout</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />
        </label>
        <br />
        <label>
          Street:
          <input type="text" name="street" value={formData.street} onChange={handleInputChange} required />
        </label>
        <br />
        <label>
          City:
          <input type="text" name="city" value={formData.city} onChange={handleInputChange} required />
        </label>
        <br />
        <label>
          State:
          <input type="text" name="state" value={formData.state} onChange={handleInputChange} required />
        </label>
        <br />
        <label>
          Zip Code:
          <input type="text" name="zipCode" value={formData.zipCode} onChange={handleInputChange} required />
        </label>
        <br />
        <label>
          Credit Card:
          <input type="text" name="creditCard" value={formData.creditCard} onChange={handleInputChange} required />
        </label>
        <br />
        <label>
          Delivery Method:
          <select name="deliveryMethod" value={formData.deliveryMethod} onChange={handleInputChange}>
            <option value="homeDelivery">Home Delivery</option>
            <option value="inStorePickup">In-Store Pickup</option>
          </select>
        </label>
        {formData.deliveryMethod === 'inStorePickup' && (
          <label>
            Store Location:
            <select name="storeLocation" value={formData.storeLocation} onChange={handleInputChange}>
            {/* <option value="1">Marianos</option>
            <option value="2">Patel Brothers</option>
            <option value="3">Siri</option>
            <option value="4">Cermak</option>
            <option value="5">Costco</option>
            <option value="6">South Loop</option>
            <option value="7">Indian SpiceMart</option>
            <option value="8">Go Grocers</option>
            <option value="9">Jewel Osco</option>
            <option value="10">Big Basket</option> */}
            {stores.map((store)=>(
                <option value={store.storeName}>{store.storeName}</option>
            ))}
          </select>
            {/* <input
              type="text"
              name="storeLocation"
              value={formData.storeLocation}
              onChange={handleInputChange}
              required
            /> */}
          </label>
        )}
        <br />
        {/* <Link to='orderConfirmation'> */}
            <button type="submit" style={{backgroundColor:'#28a745'}}>
            Place Order
            </button>
        {/* </Link> */}
      </form>
    </div>
  );
}

export default Checkout;
