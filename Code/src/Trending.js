import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Chart } from 'react-google-charts';
import './TrendingPage.css'; // Create a Trending.css file for styling

const Trending = () => {
  const [products, setProducts] = useState([]);
  const [zipcode, setZipcode] = useState('');
  const [mostSoldProducts, setMostSoldProducts] = useState([]);

  useEffect(() => {
    const fetchTrendingProducts = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/reviews/aggregated');
        setProducts(response.data); // Set products state with aggregated review data
      } catch (error) {
        console.error('Error fetching aggregated reviews:', error);
      }
    };

    fetchTrendingProducts();
  }, []);

  const handleInputChange = (event) => {
    setZipcode(event.target.value);
  };

  const fetchMostSoldProductsByZip = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/api/mostSoldProductByZip/${zipcode}`);
      setMostSoldProducts(response.data);
    } catch (error) {
      console.error('Error fetching most sold products by zip code:', error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (zipcode.trim() !== '') {
      fetchMostSoldProductsByZip();
    }
  };

  const getChartData = () => {
    const chartData = mostSoldProducts.map((product) => [product._id, product.totalSales]);
    return [['Product', 'Total Sales'], ...chartData];
  };

  return (
    <div className="trending-container">
      <h1 className="trending-title" style={{textAlign:'center'}}>Trending Products</h1>
      <table className="trending-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Average Rating</th>
            <th>Total Reviews</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.productModelName}>
              <td>{product.productModelName}</td>
              <td>{product.averageRating}</td>
              <td>{product.totalReviews}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="most-sold-products">
        <h2 style={{textAlign:'center', fontSize:'24px'}}>Find Most Reviewed Product by Zip Code</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Enter Zip Code:
            <input type="text" value={zipcode} onChange={handleInputChange} />
          </label>
          <button type="submit" style={{backgroundColor:'#28a745',width:'30%', margin:'0 auto'}}>Get Most Sold Product</button>
        </form>

        {mostSoldProducts.length > 0 && (
          <div>
            <h2>Top 5 Most Sold Products in Zip Code {zipcode}</h2>
            <Chart
              width={'100%'}
              height={'300px'}
              chartType="BarChart"
              loader={<div>Loading Chart</div>}
              data={getChartData()}
              options={{
                chart: {
                  title: 'Top 5 Most Sold Products',
                },
                hAxis: {
                  title: 'Product', // Represent product names on the x-axis
                },
                vAxis: {
                  title: 'Total Sales', // Represent total sales on the y-axis
                  minValue: 0,
                },
                legend: { position: 'none' }, // Hide the legend
                annotations: { textStyle: { fontSize: 0 } }, // Hide data labels
              }}
              rootProps={{ 'data-testid': '1' }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Trending;
