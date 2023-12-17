import React, { useEffect, useState } from 'react';
import { Chart } from 'react-google-charts';


const SalesReport = () => {
  const [salesData, setSalesData] = useState([]);
  const [productSales, setProductSales] = useState([]);
  const [dailyTransactions, setDailyTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage] = useState(10);

  useEffect(() => {
    // Fetch total sales data
    fetch('http://localhost:8000/api/totalSales')
      .then((response) => response.json())
      .then((data) => {
        
        setSalesData(data.totalSales);
      })
      .catch((error) => console.error('Error fetching total sales:', error));

    // Fetch product sales data
    fetch('http://localhost:8000/productSales')
      .then((response) => response.json())
      .then((data) => {
        console.log('Fetched data: prdsales', data);
        setProductSales(data)})
      .catch((error) => console.error('Error fetching product sales:', error));

    // Fetch daily transactions data
    fetch('http://localhost:8000/dailyTransactions')
      .then((response) => response.json())
      .then((data) => setDailyTransactions(data))
      .catch((error) => console.error('Error fetching daily transactions:', error))
      .finally(() => setLoading(false));
  }, []);


  const indexOfLastItem = (currentPage + 1) * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentSales = salesData.slice(indexOfFirstItem, indexOfLastItem);


  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };


  if (loading) {
    return <div>Loading...</div>;
  }

  const renderTable = (data, title, columns) => {
    return (
      <div className="post">
        <u>
          <h3 className="title">{title}</h3>
        </u>
        <div className="entry" style={{ textAlign: 'center' }}>
          <table style={{ textAlign: 'center', marginLeft: 'auto', marginRight: 'auto' }} className="gridtable" border="1">
            <thead>
              <tr>
                {/* {columns.map((column) => (
                  <th key={column}>{column}</th>
                ))} */}

                <th>Product Sa</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  {columns.map((column) => (
                    <td key={column}>{item[column.toLowerCase()]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  const renderBarChart = (data, title, xLabel, yLabel) => {
    const chartData = [['Category', 'Amount Sold']];
    data.forEach((item) => {
      chartData.push([item.orderName, item.totalSales]);
    });

    return (
      <div className="post">
        <u>
          <h3 className='text-center my-5 font-semibold text-6xl text-black'>{title}</h3>
        </u>
        <div className="entry">
          <Chart
          style={{margin:'0 auto'}}
            width={'500px'}
            height={'300px'}
            chartType="BarChart"
            loader={<div>Loading Chart</div>}
            data={chartData}
            options={{
              chart: {
                title: title,
              },
              hAxis: {
                title: xLabel,
              },
              vAxis: {
                title: yLabel,
              },
            }}
          />
        </div>
      </div>
    );
  };

  const renderLineChart = (data, title, xLabel, yLabel) => {
    const chartData = [['Category', 'Amount Sold']];
    data.forEach((item) => {
      chartData.push([item.productName, item.soldAmount]);
    });

    return (
      <div className="post">
        <u>
          <h3 className="title">{title}</h3>
        </u>
        <div className="entry">
          <Chart
            width={'500px'}
            height={'300px'}
            chartType="LineChart"
            loader={<div>Loading Chart</div>}
            data={chartData}
            options={{
              chart: {
                title: title,
              },
              hAxis: {
                title: xLabel,
              },
              vAxis: {
                title: yLabel,
              },
            }}
          />
        </div>
      </div>
    );
  };

//   const renderPieChart = (data, title) => {
//     const chartData = [['Category', 'Amount Sold']];
//     data.forEach((item) => {
//       chartData.push([item.deliveryMethod || 'Unknown', item.orderPrice]);
//     });

//     return (
//       <div className="post">
//         <u>
//           <h3 className="title">{title}</h3>
//         </u>
//         <div className="entry">
//           <Chart
//             width={'500px'}
//             height={'300px'}
//             chartType="PieChart"
//             loader={<div>Loading Chart</div>}
//             data={chartData}
//             options={{
//               chart: {
//                 title: title,
//               },
//             }}
//           />
//         </div>
//       </div>
//     );
//   };

const renderPieChart = (data, title) => {
    const filteredData = data.filter((item) => item.deliveryMethod === 'inStorePickup' || item.deliveryMethod === 'homeDelivery');
    
    const chartData = [['Delivery Method', 'Percentage']];
    const totalOrders = filteredData.length;
    const inStorePickupCount = filteredData.filter((item) => item.deliveryMethod === 'inStorePickup').length;
    const deliveryCount = filteredData.filter((item) => item.deliveryMethod === 'homeDelivery').length;
  
    chartData.push(['inStorePickup', (inStorePickupCount / totalOrders) * 100]);
    chartData.push(['delivery', (deliveryCount / totalOrders) * 100]);
  
    return (
      <div className="post">
        <u>
          <h3 className='text-center my-5 font-semibold text-6xl text-black'>{title}</h3>
        </u>
        <div className="entry">
          <Chart
            style={{margin:'0 auto'}}
            width={'500px'}
            height={'300px'}
            chartType="PieChart"
            loader={<div>Loading Chart</div>}
            data={chartData}
            options={{
              chart: {
                title: title,
              },
            }}
          />
        </div>
      </div>
    );
  };
  

  return (
    <div>
      {/* <h2>Sales Report</h2>
      <div>
        <h3>Total Sales</h3>
        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>User Name</th>
              <th>Order Name</th>
              <th>Order Price</th>
            </tr>
          </thead>
          <tbody>
            {salesData.map((sale) => (
              <tr key={sale.OrderId}>
                <td>{sale.OrderId}</td>
                <td>{sale.userName}</td>
                <td>{sale.orderName}</td>
                <td>{sale.orderPrice}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> */}
      {/* <div> */}
         <h2 className='text-center my-5 font-semibold text-6xl text-black'>Sales Report</h2>
        <div>
           <h3 className='text-center my-5 font-semibold text-6xl text-black'>Total Sales</h3>

          <div class="flex flex-col">
  <div class="m-10 border-solid overflow-x-auto">
    <div class="p-1.5 min-w-full inline-block align-middle">
      <div class="overflow-hidden">
        <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead>
            <tr>
              <th scope="col" class="px-6 py-3 text-start text-3xl font-medium text-gray-500 uppercase">OrderId</th>
              <th scope="col" class="px-6 py-3 text-start text-3xl font-medium text-gray-500 uppercase">User Name</th>
              <th scope="col" class="px-6 py-3 text-start text-3xl font-medium text-gray-500 uppercase">Order Name</th>
              <th scope="col" class="px-6 py-3 text-start text-3xl font-medium text-gray-500 uppercase">Order Price</th>       
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200 dark:divide-gray-700">


          {salesData.map((sale) => (
            <tr class="hover:text-white dark:hover:bg-indigo-500" key={sale.OrderId}>
              <td class="px-6 py-4 whitespace-nowrap text-3xl font-medium text-gray-800 dark:text-black">{sale.OrderId}</td>
              <td class="px-6 py-4 whitespace-nowrap text-3xl text-gray-800 dark:text-black">{sale.userName}</td>
              <td class="px-6 py-4 whitespace-nowrap text-3xl text-gray-800 dark:text-black">{sale.orderName}</td>
              <td class="px-6 py-4 whitespace-nowrap text-3xl text-gray-800 dark:text-black">{sale.orderPrice}</td>   
            </tr>

            ))}
          </tbody>
        </table>
        {/* <div>
          <button onClick={handlePrevPage} disabled={currentPage === 0}>
            Previous
          </button>
          <span>{`Page ${currentPage + 1}`}</span>
          <button onClick={handleNextPage} disabled={indexOfLastItem >= salesData.length}>
            Next
          </button>
        </div> */}


      </div>
    </div>
  </div>
</div> 








        </div>



        
      {/* </div> */}
      {/* {renderTable(productSales, 'Table of Product Sold', ['Product Name', 'Price', 'Sold Amount'])} */}
      {renderBarChart(productSales, 'Bar Chart of Product Sold', 'Product Name', 'Sold Amount')}
      {/* {renderTable(dailyTransactions, 'Table of Daily Sales Transactions', ['Date', 'Sold Amount'])} */}
      {/* {renderLineChart(dailyTransactions, 'Line Chart of Daily Sales Transactions', 'Date', 'Sold Amount')} */}
      {renderPieChart(salesData, 'Pie Chart of Sales by Delivery Method')}
    </div>
  );
};

export default SalesReport;
