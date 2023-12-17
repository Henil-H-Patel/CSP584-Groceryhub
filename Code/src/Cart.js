// Cart.js
import React from 'react';
import { useCart } from './CartContext';
import { Link } from 'react-router-dom';
import './Cart.css';
import Recommendations from './Recommendations'; // Assuming you have a Recommendations component


function Cart() {
  const { cart, removeFromCart } = useCart();
console.log(cart)
  // const calculateTotalPrice = () => {
  //   return cart.reduce((total, product) => {
  //     return total + product.productPrice * product.quantity;
  //   }, 0);
  // };
  const calculateTotalPrice = () => {
    return parseFloat(cart.reduce((total, product) => {
      return total + product.productPrice * product.quantity;
    }, 0).toFixed(2));
  };
  

  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>
      {cart.length === 0 ? (
        <h3>Your cart is empty.</h3>
      ) : (<>
        <table className="cart-table">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Product Image</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((product, index) => (
              <tr key={index}>
                <td>{product.productName}</td>
                <td><img src={`/images/${product.productImage}`} style={{ width: '100px',     margin: '0 auto' }}></img></td>
                <td>${product.productPrice}</td>
                <td>{product.quantity}</td>
                <td>${product.productPrice * product.quantity}</td>
                <td>
                  <button onClick={() => removeFromCart(product.productName)}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="4">Total:</td>
              <td>${calculateTotalPrice()}</td>
              <td></td>
            </tr>
          </tfoot>
        </table>
          <div>
          <Link to="/checkout">
            <button>Checkout</button>
          </Link>
        </div>
        </>
      )}

      {/* <Recommendations productsInCart={cart} /> */}
    </div>
  );
}

export default Cart;
