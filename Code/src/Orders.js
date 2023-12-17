// Orders.js

import React, { useState, useEffect } from 'react';
import './Orders.css'; // Import your CSS file for styling

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10); // Set the number of items per page

  useEffect(() => {
    fetchOrders();
  }, [currentPage]); // Trigger fetchOrders when the currentPage changes

  const fetchOrders = async () => {
    try {
      const response = await fetch(`http://localhost:8000/api/getOrders?page=${currentPage}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setOrders(data);
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  // Calculate the index of the last item on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  // Calculate the index of the first item on the current page
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // Get the current items for the current page
  const currentOrders = orders.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="orders-container">
      <h1 style={{ textAlign: 'center', fontSize: '22px', padding: '5px' }}>Customer Orders</h1>
      {currentOrders.length > 0 ? (
        <>
          <table className="orders-table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>User Name</th>
                <th>Order Name</th>
                <th>Order Price</th>
                <th>User Address</th>
                <th>Credit Card No</th>
                <th>Delivery Method</th>
                <th>Store Location</th>
              </tr>
            </thead>
            <tbody>
              {currentOrders.map((order) => (
                <tr key={order.OrderId}>
                  <td>{order.OrderId}</td>
                  <td>{order.userName}</td>
                  <td>{order.orderName}</td>
                  <td>${order.orderPrice.toFixed(2)}</td>
                  <td>{order.userAddress}</td>
                  <td>{order.creditCardNo}</td>
                  <td>{order.deliveryMethod}</td>
                  <td>{order.storeLocation}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination controls */}
          <div className="pagination">
            {Array.from({ length: Math.ceil(orders.length / itemsPerPage) }, (_, i) => (
              <button
                key={i}
                onClick={() => paginate(i + 1)}
                className={currentPage === i + 1 ? "active" : ""}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </>
      ) : (
        <h2>No orders available.</h2>
      )}
    </div>
  );
};

export default Orders;
