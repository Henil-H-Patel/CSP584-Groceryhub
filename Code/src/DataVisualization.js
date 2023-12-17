import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Chart } from 'react-google-charts';

const SalesTrendsChart = () => {
  const [salesData, setSalesData] = useState([]);
  const [productPopularity, setProductPopularity] = useState([]);
  const [orderFrequency, setOrderFrequency] = useState([]);


  useEffect(() => {

    fetchSalesData();
    fetchProductPopularity();
     fetchOrderFrequency();
  }, []);

  const fetchSalesData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/salesData');
        setSalesData(response.data);
      } catch (error) {
        console.error('Error fetching sales data:', error);
      }
    };

    const fetchProductPopularity = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/productPopularity');
        setProductPopularity(response.data);
      } catch (error) {
        console.error('Error fetching product popularity data:', error);
      }
    };

      const fetchOrderFrequency = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/orderFrequency');
        console.log('Akash', orderFrequency)
        setOrderFrequency(response.data);
      } catch (error) {
        console.error('Error fetching order frequency data:', error);
      }
    };

  const prepareSalesDataForChart = () => {
    const chartData = salesData.map((data) => [
      new Date(data.orderDate), // Convert date string to Date object
      data.totalSales,
    ]);

    return [
      ['Date', 'Sales Amount'], // Chart header row
      ...chartData,
    ];
  };

  // const prepareProductPopularityForChart = () => {
  //   const chartData = productPopularity.map((data) => [data.productName, data.orderCount]);

  //   return [
  //     ['Product', 'Order Count'], // Chart header row
  //     ...chartData,
  //   ];
  // };
  const prepareProductPopularityForChart = () => {
  const chartData = productPopularity.map((data) => [data.orderName, data.orderCount]);

  return [
    ['Product', 'Order Count'], // Chart header row
    ...chartData,
  ];
};


 const prepareOrderFrequencyForChart = () => {
    const chartData = orderFrequency.map((data) => [
      new Date(data.orderDate), // Convert date string to Date object
       parseInt(data.orderCount),
      // data.orderCount,
    ]);

    return [
      ['Date', 'Order Count'], // Chart header row
      ...chartData,
    ];
  };

  const salesChartData = prepareSalesDataForChart();
  const productPopularityChartData = prepareProductPopularityForChart();
    const orderFrequencyChartData = prepareOrderFrequencyForChart();


  return (
    <div>
      {/* Render Line Chart using sales data */}
      <Chart
        width={'100%'}
        height={'400px'}
        chartType="LineChart"
        loader={<div>Loading Chart...</div>}
        data={salesChartData}
        options={{
          title: 'Sales Trends',
          hAxis: {
            title: 'Date', // X-axis label
            format: 'MMM dd, yyyy', // Date format for display
          },
          vAxis: {
            title: 'Sales Amount',
          },
        }}
      />

      {/* Render Bar Chart using product popularity data */}
      <Chart
        width={'100%'}
        height={'400px'}
        chartType="BarChart"
        loader={<div>Loading Chart...</div>}
        data={productPopularityChartData}
        options={{
          title: 'Product Popularity',
          // Add more options based on your preference
           hAxis: {
            title: 'Product Count',
          },
          vAxis: {
            title: 'Product',
          },
        }}
      />

      <Chart
        width={'100%'}
        height={'400px'}
        chartType="LineChart"
        loader={<div>Loading Chart...</div>}
        data={orderFrequencyChartData}
        options={{
          title: 'Order Frequency',
          hAxis: {
            title: 'Date',
            format: 'MMM dd, yyyy',
          },
          vAxis: {
            title: 'Order Count',
          },
        }}
      />
    </div>
  );
};

export default SalesTrendsChart;