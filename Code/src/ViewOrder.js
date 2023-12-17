import React, { useEffect, useState} from 'react';
import './style.css'
function ViewOrder(){
    const [un, setUn] = useState('')
    const [orders, setOrders] = useState([])
    useEffect(()=>{
        let uname = sessionStorage.getItem('username');
        setUn(uname);
        try{
            const response = fetch('http://localhost:8000/api/getOrder', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              userName:uname,
            }),
            
          }).then((res)=>{
            return res.json();
          }).then((data)=>{
            console.log(data)
            setOrders(data)
          })
          
          if (!response.ok) {
            
            throw new Error('error');
          }
      
        }catch(error){
          console.error('Error logging user:', error.message);
        }
        
    },[])
    return(
        <div style={{textAlign:'center', width:'50%', margin:'0 auto',}}>
            {orders.length > 0 ? (
                <table className="orders-table" style={{marginBottom:'10%'}}>
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
                  {orders.map((order) => (
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
            )
            :<h2 style={{textColor:'red'}}>You have not placed any orders.</h2>}
            
        </div>
    )
}

export default ViewOrder;