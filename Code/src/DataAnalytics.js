// // // DataAnalytics.js

// // import React, { useState } from 'react';

// // const DataAnalytics = () => {
// //   const [productName, setProductName] = useState('');
// //   const [reviewRating, setReviewRating] = useState('1');
// //   const [compareRating, setCompareRating] = useState('EQUALS_TO');
// //   const [retailerPin, setRetailerPin] = useState('');
// //   const [groupBy, setGroupBy] = useState('');
// //   const [dataGroupBy, setDataGroupBy] = useState('Count');

// //   const handleCheckBoxChange = (e) => {
// //     // Handle checkbox changes
// //   };

// //   const handleInputChange = (e) => {
// //     // Handle input changes
// //   };

// //   const handleSelectChange = (e) => {
// //     // Handle select changes
// //   };

// //   const handleRadioChange = (e) => {
// //     // Handle radio changes
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     // Handle form submission
// //   };

// //   return (
// //     <div style={{ backgroundColor: 'white', display: 'flex', justifyContent: 'center', paddingBottom: '20px' }}>
// //       <div className='post'>
// //         <h2 className='title meta'>
// //           <a style={{ fontSize: '24px' }}>Data Analytics on Review</a>
// //         </h2>
// //         <div className='entry'>
// //           <form onSubmit={handleSubmit}>
// //             <table id='bestseller'>
// //               <tr>
// //                 <td> <input type='checkbox' name='queryCheckBox' value='productName' onChange={handleCheckBoxChange} /> Select </td>
// //                 <td> Product Name: </td>
// //                 <td>
// //                   <input type='text' name='productName' placeholder='All Products' value={productName} onChange={handleInputChange} />
// //                 </td>
// //                 <td></td>
// //               </tr>

// //               <tr>
// //                 <td> <input type='checkbox' name='queryCheckBox' value='productName' onChange={handleCheckBoxChange} /> Select </td>
// //                 <td> Product Review: </td>
// //                 <td>
// //                   <input type='text' name='productReview' value={productName} onChange={handleInputChange} />
// //                 </td>
// //                 <td></td>
// //               </tr>
// //               {/* Additional form elements go here */}

// //               <tr>
// //                 <td colSpan='4'> <input type='submit' value='Find Data' className='btnbuy' /> </td>
// //               </tr>
// //             </table>
// //           </form>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default DataAnalytics;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Chart } from 'react-google-charts';

// const DataAnalytics = () => {
//   const [products, setProducts] = useState([]);
//   const [selectedProduct, setSelectedProduct] = useState('Fruit'); // Set the default selected product
//   const [zipcode, setZipcode] = useState('');
//   const [selectedRating, setSelectedRating] = useState('');
//   const [mostSoldProducts, setMostSoldProducts] = useState([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get('http://localhost:8000/api/getAllProducts');
//         setProducts(response.data); // Set products state with available products
//       } catch (error) {
//         console.error('Error fetching products:', error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   const handleProductChange = (event) => {
//     setSelectedProduct(event.target.value);
//   };

//   const handleZipcodeChange = (event) => {
//     setZipcode(event.target.value);
//   };

//   const handleRatingChange = (event) => {
//     setSelectedRating(event.target.value);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     if (selectedProduct !== '' && zipcode.trim() !== '' && selectedRating !== '') {
//       try {
//         const response = await axios.get(`http://localhost:8000/api/mostSoldProductByZipAndRating/${zipcode}/${selectedRating}`);
//         setMostSoldProducts(response.data); // Set the top 5 most sold products based on zip code and rating
//       } catch (error) {
//         console.error('Error fetching most sold products:', error);
//       }
//     }
//   };

//   // Render product options
//   const renderProductOptions = () => {
//     return (
//       <select value={selectedProduct} onChange={handleProductChange}>
//         <option value="Apple">Apple</option> {/* Added Fruit as a selectable product */}
//         {products.map((product, index) => (
//           <option key={index} value={product.name}>
//             {product.name}
//           </option>
//         ))}
//       </select>
//     );
//   };

//   // Function to format data for the chart
//   const getChartData = () => {
//     const chartData = mostSoldProducts.map((product) => [product._id, product.totalSales]);
//     return [['Product', 'Total Sales'], ...chartData];
//   };

//   return (
//     <div>
//       <h1>Data Analytics</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           {renderProductOptions()}
//         </div>
//         <div>
//           <label>
//             Enter Zip Code:
//             <input type="text" value={zipcode} onChange={handleZipcodeChange} />
//           </label>
//         </div>
//         <div>
//           <select value={selectedRating} onChange={handleRatingChange}>
//             <option value="">Select Rating</option>
//             <option value="1">1</option>
//             <option value="2">2</option>
//             <option value="3">3</option>
//             <option value="4">4</option>
//             <option value="5">5</option>
//           </select>
//         </div>
//         <button type="submit">Get Most Sold Product</button>
//       </form>

//       {mostSoldProducts.length > 0 && (
//         <div>
//           <h2>Top 5 Most Sold Products</h2>
//           <Chart
//             width={'500px'}
//             height={'300px'}
//             chartType="BarChart"
//             loader={<div>Loading Chart</div>}
//             data={getChartData()} // Use the getChartData() function to populate the chart data
//             options={{
//               chart: {
//                 title: 'Top 5 Most Sold Products',
//               },
//               hAxis: {
//                 title: 'Product',
//               },
//               vAxis: {
//                 title: 'Total Sales',
//                 minValue: 0,
//               },
//               legend: { position: 'none' },
//               annotations: { textStyle: { fontSize: 0 } },
//             }}
//           />
//         </div>
//       )}
//     </div>
//   );
// };

// export default DataAnalytics;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Chart } from 'react-google-charts';

const DataAnalytics = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState('Fruit'); // Set the default selected product
  const [zipcode, setZipcode] = useState('');
  const [selectedRating, setSelectedRating] = useState('');
  const [mostSoldProducts, setMostSoldProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/getAllProducts');
        setProducts(response.data); // Set products state with available products
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleProductChange = (event) => {
    setSelectedProduct(event.target.value);
  };

  const handleZipcodeChange = (event) => {
    setZipcode(event.target.value);
  };

  const handleRatingChange = (event) => {
    setSelectedRating(event.target.value);
  };

  // Function to format data for the chart
  const getChartData = () => {
    const chartData = mostSoldProducts.map((product) => [product._id, product.totalSales]);
    return [['Product', 'Total Sales'], ...chartData];
  };

    const handleSubmit = async (event) => {
    event.preventDefault();
    if (selectedProduct !== '' && zipcode.trim() !== '' && selectedRating !== '') {
      try {
        const response = await axios.get(`http://localhost:8000/api/mostSoldProductByZipAndRating/${zipcode}/${selectedRating}`);
        setMostSoldProducts(response.data); // Set the top 5 most sold products based on zip code and rating
      } catch (error) {
        console.error('Error fetching most sold products:', error);
      }
    }
  };

  // Render product options
  const renderProductOptions = () => {
    const categories = [
      'Fruit',
      'Vegetables',
      'Beverages',
      'Dairy',
      'Household',
      'Hot Beverages',
      'Snacks',
      'Personal Care',
    ];

    return (
      <select value={selectedProduct} onChange={handleProductChange}>
        {categories.map((category, index) => (
          <option key={index} value={category.toLowerCase()}>
            {category}
          </option>
        ))}
        {products.map((product, index) => (
          <option key={index + categories.length} value={product.name}>
            {product.name}
          </option>
        ))}
      </select>
    );
  };

  // Rest of your component code remains unchanged

//   return (
//     <div>
//       <h1>Data Analytics</h1>
//       <form onSubmit={handleSubmit}>
//         <div>{renderProductOptions()}</div>
//         <div>
//           <label>
//             Enter Zip Code:
//             <input type="text" value={zipcode} onChange={handleZipcodeChange} />
//           </label>
//         </div>
//         <div>
//           <select value={selectedRating} onChange={handleRatingChange}>
//             <option value="">Select Rating</option>
//             <option value="1">1</option>
//             <option value="2">2</option>
//             <option value="3">3</option>
//             <option value="4">4</option>
//             <option value="5">5</option>
//           </select>
//         </div>
//         <button type="submit">Get Most Sold Product</button>
//       </form>

//       {mostSoldProducts.length > 0 && (
//         <div>
//           <h2>Top 5 Most Sold Products</h2>
//           <Chart
//             width={'500px'}
//             height={'300px'}
//             chartType="BarChart"
//             loader={<div>Loading Chart</div>}
//             data={getChartData()} // Use the getChartData() function to populate the chart data
//             options={{
//               chart: {
//                 title: 'Top 5 Most Sold Products',
//               },
//               hAxis: {
//                 title: 'Product',
//               },
//               vAxis: {
//                 title: 'Total Sales',
//                 minValue: 0,
//               },
//               legend: { position: 'none' },
//               annotations: { textStyle: { fontSize: 0 } },
//             }}
//           />
//         </div>
//       )}
//     </div>
//   );
// };

// export default DataAnalytics;

 return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1 style={{margin:'20px'}}>Data Analytics</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {/* <div>{renderProductOptions()}</div> */}
        <select name="productCategory" id="productCategory">
        <option value="fruit">Fruit</option>
        <option value="veg">Vegetables</option>
        <option value="beverages">Beverages</option>
        <option value="dairy">Dairy</option>
        <option value="household">Household</option>
        <option value="hb">Hot Beverages</option>
        <option value="snacks">Snacks</option>
        <option value="pc">Personal Care</option>
      </select>

        <div>
          <label>
            Enter Zip Code:
            <input type="text" value={zipcode} onChange={handleZipcodeChange} />
          </label>
        </div>
        <div>
          <select value={selectedRating} onChange={handleRatingChange}>
            <option value="">Select Rating</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <button type="submit" style={{backgroundColor:'#28a745'}}>Get Most Sold Product</button>
      </form>

      {mostSoldProducts.length > 0 && (
        <div style={{ textAlign: 'center' }}>
          <h2>Top 5 Most Sold Products</h2>
          <Chart
            width={'500px'}
            height={'300px'}
            chartType="BarChart"
            loader={<div>Loading Chart</div>}
            data={getChartData()} // Use the getChartData() function to populate the chart data
            options={{
              chart: {
                title: 'Top 5 Most Sold Products',
              },
              hAxis: {
                title: 'Product',
              },
              vAxis: {
                title: 'Total Sales',
                minValue: 0,
              },
              legend: { position: 'none' },
              annotations: { textStyle: { fontSize: 0 } },
            }}
          />
        </div>
      )}
    </div>
  );
};

export default DataAnalytics;
