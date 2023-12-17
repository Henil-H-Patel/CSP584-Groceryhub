// import React, { useEffect, useState } from 'react';
// import './Header.css';
// import { Link } from 'react-router-dom';
// import { useCart } from './CartContext';
// import center from './main.jpeg'
// import logo from './gh.png'
// function Header() {
//     const [usertype,setUserType] = useState('')
//     const [username, setUsername] = useState('')
//    const { cart } = useCart();
//     const [products, setProducts] = useState('');
//     const [searchText, setSearchText] = useState('');
//     const [matchingProducts, setMatchingProducts] = useState([]);

  
//     useEffect(()=>{
//         let ut = sessionStorage.getItem('usertype');
//         setUserType(ut);
//         let un = sessionStorage.getItem('username');
//         setUsername(un);
//         getAllProducts();
//     }, [])

//     const getAllProducts = async () => {
//     try {
//       const response = await fetch('http://localhost:8000/api/getAllProducts');
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }

//       const result = await response.json();
//       setProducts(result);
//     } catch (error) {
//       console.error('Error fetching products:', error);
//     }
//   };

//   const productSearch = (e) => {
//     const searchText = e.target.value.toLowerCase();
//     setSearchText(searchText);

//     const matchingProducts = searchText
//       ? products.filter((product) => product.productName.toLowerCase().includes(searchText))
//       : [];

//     setMatchingProducts(matchingProducts);
//   };


//     const logout = ()=>{
//         window.sessionStorage.clear();
//         window.location.reload();
//         window.location.href = '/';
//     }


    
//   return (
//     <div className="header">
//       <header className="App-header">
  
         
// <div style={{ display: 'flex', alignItems: 'center' }}>
//   <div id="logo1">
//     <img src={logo} alt="Smart Homes Logo" style={{ width: '30%', height: '15%' }} />
//   </div>
//   <div style={{ flex: '1', textAlign: 'left' }}>
//     <input
//       type="text"
//       placeholder="Search for products"
//       onChange={productSearch}
//       style={{
//         width: '500px',
//         height: '40px',
//         margin: '10px',
//         // Adjust padding as needed
//       }}
//     />
//     {matchingProducts.length > 0 && (
//       <div className="search-products">
//         <ul>
//           {matchingProducts.map((product) => (
//             <Link to={`/productview/${product.productName}`} key={product.id}>
//               <li>{product.productName}</li>
//             </Link>
//           ))}
//         </ul>
//       </div>
//     )}
//   </div>

// <div>
//   {username && (
//     <span style={{ padding: '0 25px', fontSize: '20px' }}>Hello, {username}</span>
//   )}
//   {(usertype === 'customer' || usertype === 'retailer' || usertype === 'manager') ? (
//     <>
//       <Link to='' onClick={logout} style={{ padding: '0 25px', fontSize: '20px' }}>Logout</Link>
//       <Link to="/cart" style={{ padding: '0 25px', fontSize: '20px' }}>Cart ({cart.length})</Link>
//       {/* <span style={{ margin: '0 50px' }}></span> Adjust the margin value as needed */}

//     </>
//   ) : (
//     <div style={{padding: '0 25px'}}>
//     <Link to='/login' style={{ padding: '0 25px',  fontSize: '20px' }}>Login</Link>
//     <Link to="/cart" style={{ fontSize: '20px' }}>Cart ({cart.length})</Link>
//     </div>
//   )}
// </div>



// </div>




//                <div id="top-header">
//                        <div className="left-buttons">
//                             {usertype === 'manager' ? ( // For manager
//                                   <>
//                                    <Link to="/">Home</Link>
//                                    <Link to="/products">Products</Link>
//                                    <Link to="/store">Store</Link>
//                                    <Link to="/trending">Trending</Link>
//                                    <Link to="/DataVisualization">Data Visualization</Link>
//                                    <Link to="/DataAnalytics">Data Analytics</Link>
//                                    <Link to="/SalesReport">Sales Report</Link>
//                                    <Link to="InventoryReport">Inventory</Link>
//                                    <Link to="/AddProduct">Add Product</Link>
//                                    <Link to="/vieworder">View Order</Link>
//                                   </>
//                             ) : usertype === 'retailer' ? ( // For retailer
//                                   <>
//                                    <Link to="/">Home</Link>
//                                    <Link to="/products">Products</Link>
//                                    <Link to="/store">Store</Link>
//                                    <Link to="/trending">Trending</Link>
//                                    <Link to="/AddCustomer">Add Customer</Link>
//                                    <Link to="/allOrders">All Orders</Link>
//                                    <Link to="/vieworder">View Order</Link>
//                                    </>
//                             ) : ( // For other user types
//                                   <>
//                                    <Link to="/">Home</Link>
//                                    <Link to="/products">Products</Link>
//                                    <Link to="/store">Store</Link>
//                                    <Link to="/trending">Trending</Link>
//                                    <Link to="/vieworder">View Order</Link>
//                                   </>
//                            )}
//                     </div>


   
//                         {/* <div className="right-buttons">
//                              <Link to="/vieworder">View Order</Link>
                             
//                         </div> */}
//         </div>

            

 


//         {/* <nav>
//           <ul>
//             <li>
//               <Link to='/'><span class="glyphicon glyphicon-home" style={{fontSize: "x-large"}}>Home</span></Link>
//             </li>
//             <li>
//               <Link to='/Doorlocks'>Smart Doorlocks</Link>
//             </li>
//             <li>
//               <Link to='/Doorbells'>Smart Doorbells</Link>
//             </li>
//             <li>
//               <Link to='/Speakers'>Smart Speakers</Link>
//             </li>
//             <li>
//               <Link to='/Lightings'>Smart Lightings</Link>
//             </li>
//             <li>
//               <Link to='/Thermostats'>Smart Thermostats</Link>
//             </li>
//           </ul>
//         </nav> */}


//         <nav class='nav1'>
//             <ul>
//             {/* {usertype == 'manager' ? <>
//                 <li>
//                     <Link to='/dataVisualization'>Data Visualization</Link>
//                 </li>
//                 <li>
//                     <Link to='/DataAnalytics'>Data Analytics</Link>
//                 </li>
//                 <li>
//                     <Link to='/SalesReport'>Sales Report</Link>
//                 </li>
//                 <li>
//                     <Link to='/AddProduct'>Add Product</Link>
//                 </li>
//                  </> : ''} */}
//                  {/* {usertype == 'retailer' ? <>
//                 <li>
//                     <Link to='/AddCustomer'>Add Customers</Link>
//                 </li>
//                 <li>
//                     <Link to='/allOrders'>All Orders</Link>
//                 </li>
//                  </> : ''} */}
//                  {/* <li>
//                     <Link  to='/Trending'>
//                         <span class='glyphicon glyphicon glyphicon-fire'>Trending</span>
//                     </Link></li>
//                 <li>
//                     <Link to='/Vieworder'>View Order</Link>
//                 </li> */}
//                 {/* {username ? <li><Link to=''>Hello, {username}</Link></li>:''}
//                 <li>
//                     {usertype == 'customer' || usertype == 'retailer' || usertype == 'manager' ? <Link to='' onClick={logout}>Logout</Link>  : <Link to='/login'>Login</Link>}
//                 </li> */}
             
                

//             </ul>
//         </nav>
//       </header>
//     </div>
//   );
// }

// export default Header;

import React, { useEffect, useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';
import logo from './gh.png';

function Header() {
  const { cart } = useCart();
  const [usertype, setUserType] = useState('');
  const [username, setUsername] = useState('');
  const [products, setProducts] = useState('');
  const [searchText, setSearchText] = useState('');
  const [matchingProducts, setMatchingProducts] = useState([]);

  useEffect(() => {
    let ut = sessionStorage.getItem('usertype');
    setUserType(ut);
    let un = sessionStorage.getItem('username');
    setUsername(un);
    getAllProducts();
  }, []);

  const getAllProducts = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/getAllProducts');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      setProducts(result);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const productSearch = (e) => {
    const searchText = e.target.value.toLowerCase();
    setSearchText(searchText);

    const matchingProducts = searchText
      ? products.filter((product) => product.productName.toLowerCase().includes(searchText))
      : [];

    setMatchingProducts(matchingProducts);
  };

  const handleProductClick = (productName) => {
    // Empty the search box and matching products list
    setSearchText('');
    setMatchingProducts([]);

    // You can add additional logic here based on the clicked product, if needed
    console.log(`Product clicked: ${productName}`);
  };

  const logout = () => {
    window.sessionStorage.clear();
    window.location.reload();
    window.location.href = '/';
  };

  return (
    <div className="header">
      <header className="App-header">
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div id="logo1">
            <img src={logo} alt="Smart Homes Logo" style={{ width: '30%', height: '15%' }} />
          </div>
          <div style={{ flex: '1', textAlign: 'left' }}>
            <input
              type="text"
              placeholder="Search for products"
              onChange={productSearch}
              value={searchText}
              style={{
                width: '500px',
                height: '40px',
                margin: '10px',
                // Adjust padding as needed
              }}
            />
            {matchingProducts.length > 0 && (
              <div className="search-products">
                <ul>
                  {matchingProducts.map((product) => (
                    <a
                      href={`/productview/${product.productName}`}
                      key={product.id}
                      onClick={() => handleProductClick(product.productName)}
                    >
                      <li>{product.productName}</li>
                    </a>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div>
            {username && (
              <span style={{ padding: '0 25px', fontSize: '20px' }}>Hello, {username}</span>
            )}
            {(usertype === 'customer' || usertype === 'retailer' || usertype === 'manager') ? (
              <>
                <Link to='' onClick={logout} style={{ padding: '0 25px', fontSize: '20px' }}>
                  Logout
                </Link>
                <Link to="/cart" style={{ padding: '0 25px', fontSize: '20px' }}>
                  Cart ({cart.length})
                </Link>
              </>
            ) : (
              <div style={{ padding: '0 25px' }}>
                <Link to='/login' style={{ padding: '0 25px', fontSize: '20px' }}>
                  Login
                </Link>
                <Link to="/cart" style={{ fontSize: '20px' }}>
                  Cart ({cart.length})
                </Link>
              </div>
            )}
          </div>
        </div>

        <div id="top-header">
          <div className="left-buttons">
            {usertype === 'manager' ? (
              <>
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/store">Store</Link>
                <Link to="/trending">Trending</Link>
                <Link to="/DataVisualization">Data Visualization</Link>
                <Link to="/DataAnalytics">Data Analytics</Link>
                <Link to="/SalesReport">Sales Report</Link>
                <Link to="InventoryReport">Inventory</Link>
                <Link to="/AddProduct">Add Product</Link>
                <Link to="/vieworder">View Order</Link>
              </>
            ) : usertype === 'retailer' ? (
              <>
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/store">Store</Link>
                <Link to="/trending">Trending</Link>
                <Link to="/AddCustomer">Add Customer</Link>
                <Link to="/AddStore">Add Store</Link>
                <Link to="/allOrders">All Orders</Link>
                <Link to="/vieworder">View Order</Link>
              </>
            ) : (
              <>
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/store">Store</Link>
                <Link to="/trending">Trending</Link>
                <Link to="/vieworder">View Order</Link>
                <Link to="/EventFinder">Recommendation</Link>
              </>
            )}
          </div>
        </div>

        <nav class='nav1'>
          <ul></ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;

