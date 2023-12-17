// const express = require('express');
// const mysql = require('mysql2');
// const cors = require('cors');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const app = express();

// app.use(cors());
// app.use(express.json());

// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'root',
//   database: 'smarthouse',
// });

// mongoose.connect('mongodb://localhost:27017/smarthouse', { useNewUrlParser: true, useUnifiedTopology: true });


// db.connect((err) => {
//   if (err) {
//     console.error('Database connection failed:', err);
//   } else {
//     console.log('Connected to MySQL database');
//   }
// });

// class User {
//     constructor(username, password, usertype) {
//       this.username = username;
//       this.password = password;
//       this.usertype = usertype;
//     }
//   }

//   const reviewSchema = new mongoose.Schema({
//     productModelName: String,
//     userId: String,
//     reviewRating: Number,
//     reviewText: String,
//     productCategory: String,
//     productPrice: Number,
//     storeId: Number,
//     storeCity: String,
//     storeState: String,
//     storeZip: Number,
//     productOnSale: String,
//     manufacturerName: String,
//     manufacturerRebate: String,
//     userAge: Number,
//     userGender: String,
//     userOccupation: String,
//     reviewRating: Number,
//     reviewDate: Date,
//     reviewText: String
//   });
  
// const ReviewModel = mongoose.model('reviews', reviewSchema);

//   app.post('/api/writeReview', async (req, res) => {
//     const {
//       productModelName,
//       userId,
//       reviewRating,
//       reviewText,
//       productCategory,
//       productPrice,
//       storeId,
//       storeCity,
//       storeState,
//       storeZip,
//       productOnSale,
//       manufacturerName,
//       manufacturerRebate,
//       userAge,
//       userGender,
//       userOccupation,
//       reviewDate,
//     } = req.body;
  
//     try {
//       const review = new ReviewModel({
//         productModelName,
//         userId,
//         reviewRating,
//         reviewText,
//         productCategory,
//         productPrice,
//         storeId,
//         storeCity,
//         storeState,
//         storeZip,
//         productOnSale,
//         manufacturerName,
//         manufacturerRebate,
//         userAge,
//         userGender,
//         userOccupation,
//         reviewDate,
//       });
  
//       await review.save();
//       res.status(201).send('Review added successfully');
//     } catch (error) {
//       console.error('Error adding review:', error);
//       res.status(500).send('Internal Server Error');
//     }
//   });




// app.post('/api/getReviews', async (req, res) => {
//   try {
//       const { productModelName } = req.query;
//       console.log(productModelName)

//       const filter = productModelName ? { productModelName } : {};
//       console.log('filter', filter)
//       const reviews = await ReviewModel.find(filter);
//       console.log('reviews', reviews)
//       res.status(200).json(reviews);
//   } catch (error) {
//       console.error('Error fetching reviews:', error);
//       res.status(500).send('Internal Server Error');
//   }
// });

  

// app.post('/api/login', (req, res) => {
//     const { username, password } = req.body;
  
//     const selectUserQuery = 'SELECT * FROM registration WHERE username = ? AND password = ?';
  
//     db.query(selectUserQuery, [username, password], (err, results) => {
//       if (err) {
//         console.error('Error selecting user:', err);
//         res.status(500).send('Internal Server Error');
//       } else {
//         console.log(results)
//         if (results.length > 0) {
//           const user = new User(
//             results[0].username,
//             results[0].password,
//             results[0].usertype
//           );
//           console.log(user);
//           res.send({
//             status:200,
//             message:"Login Successful",
//             data:{user}
//           });
//         //   res.status(200).json({ user });
//         } else {
//           res.status(401).send('Invalid credentials');
//         }
//       }
//     });
//   });

// app.get('/api/getAllProducts', (req, res) => {
//     const query = 'SELECT * FROM ProductDetails';
//     db.query(query, (err, result) => {
//       if (err) {
//         console.error('Error executing query:', err);
//         res.status(500).send('Internal Server Error');
//       } else {
//         res.json(result);
//       }
//     });
//   });

// app.post('/api/getProducts', (req, res) => {
//   const { ProductType } = req.body;

//   const getProductQuery =
//     'SELECT * FROM ProductDetails WHERE ProductType = ?';

//   db.query(getProductQuery, [ProductType], (err, result) => {
//     if (err) {
//       console.error('Error getting products:', err);
//       res.status(500).json({ error: 'Internal Server Error' });
//     } else {
//       // Assuming 'result' is an array of product objects
//       res.status(200).json({ products: result });
//     }
//   });
// });

// app.post('/api/getProduct', (req, res) => {
//   const { ProductName } = req.body;

//   const getProductQuery =
//     'SELECT * FROM ProductDetails WHERE ProductName = ?';

//   db.query(getProductQuery, [ProductName], (err, result) => {
//     if (err) {
//       console.error('Error getting product:', err);
//       res.status(500).json({ error: 'Internal Server Error' });
//     } else {
//       // Assuming 'result' is an array of product objects
//       res.status(200).json({ products: result });
//     }
//   });
// });

//   app.post('/api/registerUser', (req, res) => {
//     const { username, password, repassword, usertype } = req.body;
  
//     const registerUserQuery =
//       'INSERT INTO registration (username, password, repassword, usertype) VALUES (?, ?, ?, ?)';
  
//     db.query(registerUserQuery, [username, password, repassword, usertype], (err, result) => {
//       if (err) {
//         console.error('Error registering user:', err);
//         res.status(500).send('Internal Server Error');
//       } else {
//         res.status(200).send('User registered successfully');
//       }
//     });
//   });

//   app.post('/api/addProduct', (req, res) => {
//     const { productName, productType, productPrice, productImage, productManufacturer, 
//       productCondition, productDiscount, productDescription} = req.body;
  
//     const addProductQuery =
//       'INSERT INTO ProductDetails (productName, productType, productPrice, productImage, productManufacturer, productCondition, productDiscount, productDescription) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
  
//     db.query(addProductQuery, [productName, productType, productPrice, productImage, productManufacturer, 
//       productCondition, productDiscount, productDescription], (err, result) => {
//       if (err) {
//         console.error('Error registering user:', err);
//         res.status(500).send('Internal Server Error');
//       } else {
//         res.status(200).send('Product Added successfully');
//       }
//     });
//   });
  
//   app.post('/api/addOrder', (req, res) => {
//     const { orderId, userName, productName, productPrice, street, creditCard, deliveryMethod, storeLocation} = req.body;
  
//     const addOrderQuery =
//       'INSERT INTO CustomerOrders (OrderId, userName, orderName, orderPrice, userAddress, creditCardNo, deliveryMethod, storeLocation) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
  
//     db.query(addOrderQuery, [orderId, userName, productName,productPrice, street, creditCard, deliveryMethod, storeLocation], (err, result) => {
//       if (err) {
//         console.error('Error registering user:', err);
//         res.status(500).send('Internal Server Error');
//       } else {
//         res.status(200).send('Order Added successfully');
//       }
//     });
//   });
//   app.post('/api/deleteProduct', (req, res) => {
//     const { productName } = req.body;
  
//     const deleteProductQuery =
//       'DELETE FROM ProductDetails WHERE productName= ?';
  
//     db.query(deleteProductQuery, [productName], (err, result) => {
//       if (err) {
//         console.error('Error registering user:', err);
//         res.status(500).send('Internal Server Error');
//       } else {
//         res.status(200).send('Product Deleted successfully');
//       }
//     });
//   });

//   // app.post('/api/updateProduct', (req, res) => {
//   //   const { productName, productPrice,productDescription ,productManufacturer,productDiscount, productCondition } = req.body;
  
//   //   const deleteProductQuery =
//   //     'UPDATE ProductDetails WHERE productName= ? VALUES';
  
//   //   db.query(deleteProductQuery, [productName], (err, result) => {
//   //     if (err) {
//   //       console.error('Error registering user:', err);
//   //       res.status(500).send('Internal Server Error');
//   //     } else {
//   //       res.status(200).send('Product Deleted successfully');
//   //     }
//   //   });
//   // });

//   app.post('/api/updateProduct', (req, res) => {
//     const {
//       productName,
//       productPrice,
//       productDescription,
//       productManufacturer,
//       productDiscount,
//       productCondition,
//     } = req.body;
  
//     const updateProductQuery = `
//       UPDATE ProductDetails
//       SET productPrice = ?,
//           productDescription = ?,
//           productManufacturer = ?,
//           productDiscount = ?,
//           productCondition = ?
//       WHERE productName = ?
//     `;
  
//     db.query(
//       updateProductQuery,
//       [
//         productPrice,
//         productDescription,
//         productManufacturer,
//         productDiscount,
//         productCondition,
//         productName,
//       ],
//       (err, result) => {
//         if (err) {
//           console.error('Error updating product:', err);
//           res.status(500).send('Internal Server Error');
//         } else {
//           res.status(200).send('Product updated successfully');
//         }
//       }
//     );
//   });

//   app.post('/api/addCustomer', (req, res) => {
//     const { name, password, usertype } = req.body;
  
//     const addCustomerQuery = `
//       INSERT INTO Registration (username, password, repassword, usertype)
//       VALUES (?, ?, ?, ?)
//     `;
  
//     db.query(
//       addCustomerQuery,
//       [name, password, password, usertype],
//       (err, result) => {
//         if (err) {
//           console.error('Error adding customer:', err);
//           res.status(500).send('Internal Server Error');
//         } else {
//           res.status(200).send('Customer added successfully');
//         }
//       }
//     );
//   });
  
  

//   app.get('/api/getStores', (req,res) =>{
//     let sql = "SELECT * from store";
//     db.query(sql,(err,result)=>{
//       if (err) {
//         console.error('Error getting stores:', err);
//         res.status(500).send('Internal Server Error');
//       } else {
//         res.status(200).send(result);
//       }
//     })
//   })

//   app.get('/api/getOrders', (req,res) =>{
//     let sql = "SELECT * from CustomerOrders";
//     db.query(sql,(err,result)=>{
//       if (err) {
//         console.error('Error getting orders:', err);
//         res.status(500).send('Internal Server Error');
//       } else {
//         res.status(200).send(result);
//       }
//     })
//   })

//   app.post('/api/getOrder', (req, res) => {
//     const { userName } = req.body;
  
//     const getOrderQuery =
//       'SELECT * FROM CustomerOrders WHERE userName= ?';
  
//     db.query(getOrderQuery, [userName], (err, result) => {
//       if (err) {
//         console.error('Error registering user:', err);
//         res.status(500).send('Internal Server Error');
//       } else {
//         res.status(200).send(result);
//       }
//     });
//   });

// const PORT = process.env.PORT || 8000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });


const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'Groceryhub',
});

mongoose.connect('mongodb://localhost:27017/GroceryHub', { useNewUrlParser: true, useUnifiedTopology: true });


db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err);
  } else {
    console.log('Connected to MySQL database');
  }
});

class User {
    constructor(username, password, usertype) {
      this.username = username;
      this.password = password;
      this.usertype = usertype;
    }
  }

  const reviewSchema = new mongoose.Schema({
    productModelName: String,
    userId: String,
    reviewRating: Number,
    reviewText: String,
    productCategory: String,
    productPrice: Number,
    storeId: Number,
    storeCity: String,
    storeState: String,
    storeZip: Number,
    productOnSale: String,
    manufacturerName: String,
    manufacturerRebate: String,
    userAge: Number,
    userGender: String,
    userOccupation: String,
    reviewRating: Number,
    reviewDate: Date,
    reviewText: String
  });
  
const ReviewModel = mongoose.model('reviews', reviewSchema);

  app.post('/api/writeReview', async (req, res) => {
    const {
      productModelName,
      userId,
      reviewRating,
      reviewText,
      productCategory,
      productPrice,
      storeId,
      storeCity,
      storeState,
      storeZip,
      productOnSale,
      manufacturerName,
      manufacturerRebate,
      userAge,
      userGender,
      userOccupation,
      reviewDate,
    } = req.body;
  
    try {
      const review = new ReviewModel({
        productModelName,
        userId,
        reviewRating,
        reviewText,
        productCategory,
        productPrice,
        storeId,
        storeCity,
        storeState,
        storeZip,
        productOnSale,
        manufacturerName,
        manufacturerRebate,
        userAge,
        userGender,
        userOccupation,
        reviewDate,
      });
  
      await review.save();
      res.status(201).send('Review added successfully');
    } catch (error) {
      console.error('Error adding review:', error);
      res.status(500).send('Internal Server Error');
    }
  });


  app.get('/api/reviews/aggregated', async (req, res) => {
    try {
      const aggregationPipeline = [
        {
          $group: {
            _id: '$productModelName', // Group by productModelName
            averageRating: { $avg: '$reviewRating' }, // Calculate average rating
            totalReviews: { $sum: 1 }, // Count total reviews
          },
        },
        {
          $project: {
            _id: 0, // Exclude the default _id field from the output
            productModelName: '$_id', // Rename _id to productName
            averageRating: { $round: ['$averageRating', 1] }, // Round average rating to one decimal place
            totalReviews: 1, // Include totalReviews field
          },
        },
      ];
  
      // Execute aggregation pipeline
      const aggregatedReviews = await ReviewModel.aggregate(aggregationPipeline);
  
      res.json(aggregatedReviews); // Send the aggregated reviews as JSON response
    } catch (error) {
      console.error('Error fetching aggregated reviews:', error);
      res.status(500).json({ error: 'Failed to fetch aggregated reviews' });
    }
  });

  app.get('/api/mostSoldProductByZip/:zipcode', async (req, res) => {
    const { zipcode } = req.params;
  
    try {
      const mostSoldProducts = await ReviewModel.aggregate([
        {
          $match: { storeZip: Number(zipcode) } // Filter by the provided zip code
        },
        {
          $group: {
            _id: '$productModelName',
            totalSales: { $sum: 1 }
          }
        },
        {
          $sort: { totalSales: -1 } // Sort by totalSales in descending order
        },
        {
          $limit: 5 // Get the top 5 most sold products
        }
      ]);
  
      res.json(mostSoldProducts); // Send the top 5 most sold products as JSON response
    } catch (error) {
      console.error('Error fetching most sold products by zip code:', error);
      res.status(500).json({ error: 'Failed to fetch most sold products by zip code' });
    }
  });

app.post('/api/getReviews', async (req, res) => {
  try {
      const { productModelName } = req.query;
      console.log(productModelName)

      const filter = productModelName ? { productModelName } : {};
      console.log('filter', filter)
      const reviews = await ReviewModel.find(filter);
      console.log('reviews', reviews)
      res.status(200).json(reviews);
  } catch (error) {
      console.error('Error fetching reviews:', error);
      res.status(500).send('Internal Server Error');
  }
});

  

app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
  
    const selectUserQuery = 'SELECT * FROM registration WHERE username = ? AND password = ?';
  
    db.query(selectUserQuery, [username, password], (err, results) => {
      if (err) {
        console.error('Error selecting user:', err);
        res.status(500).send('Internal Server Error');
      } else {
        console.log(results)
        if (results.length > 0) {
          const user = new User(
            results[0].username,
            results[0].password,
            results[0].usertype
          );
          console.log(user);
          res.send({
            status:200,
            message:"Login Successful",
            data:{user}
          });
        //   res.status(200).json({ user });
        } else {
          res.status(401).send('Invalid credentials');
        }
      }
    });
  });

app.get('/api/getAllProducts', (req, res) => {
    const query = 'SELECT * FROM ProductDetails';
    db.query(query, (err, result) => {
      if (err) {
        console.error('Error executing query:', err);
        res.status(500).send('Internal Server Error');
      } else {
        res.json(result);
      }
    });
  });

  app.get('/api/onSale', (req, res) => {
    const query = `SELECT * FROM ProductDetails WHERE productCondition = 'New'`;
    db.query(query, (err, result) => {
      if (err) {
        console.error('Error executing query:', err);
        res.status(500).send('Internal Server Error');
      } else {
        res.json(result);
      }
    });
  });

  app.get('/api/onRebate', (req, res) => {
    const query = 'SELECT * FROM ProductDetails WHERE productDiscount > 0';
    db.query(query, (err, result) => {
      if (err) {
        console.error('Error executing query:', err);
        res.status(500).send('Internal Server Error');
      } else {
        res.json(result);
      }
    });
  });


  // API endpoint to get sales information
app.get('/api/sales', (req, res) => {
  // SQL query to get distinct order names, sale amounts, and order prices
  const sqlQuery = `
    SELECT DISTINCT orderName, COUNT(orderName) AS saleAmount, AVG(orderPrice) AS avgOrderPrice
    FROM CustomerOrders
    GROUP BY orderName
  `;

  // Execute the query
  db.query(sqlQuery, (error, results) => {
    if (error) {
      console.error('Error executing SQL query:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      // Send the results as JSON
      res.json({ sales: results });
    }
  });
});

app.get('/api/totalSales', (req, res) => {
  const sqlQuery = 'SELECT * FROM CustomerOrders';

  db.query(sqlQuery, (error, results) => {
    if (error) {
      console.error('Error executing SQL query:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      console.log(results)
      res.json({ totalSales: results });
    }
  });
});
app.get('/api/mostSoldProductByZipAndRating/:zipcode/:rating', async (req, res) => {
  const { zipcode, rating } = req.params;

  try {
    const mostSoldProducts = await ReviewModel.aggregate([
      {
        $match: { storeZip: Number(zipcode), reviewRating: Number(rating) } // Filter by zip code and rating
      },
      {
        $group: {
          _id: '$productModelName',
          totalSales: { $sum: 1 }
        }
      },
      {
        $sort: { totalSales: -1 } // Sort by totalSales in descending order
      },
      {
        $limit: 5 // Get the top 5 most sold products
      }
    ]);

    res.json(mostSoldProducts); // Send the top 5 most sold products as JSON response
  } catch (error) {
    console.error('Error fetching most sold products by zip code and rating:', error);
    res.status(500).json({ error: 'Failed to fetch most sold products by zip code and rating' });
  }
});

// router.get('/dailyTransactions', (req, res) => {
//   const sqlQuery = 'SELECT DATE(orderTime) AS date, COUNT(*) AS soldAmount FROM CustomerOrders GROUP BY date';

//   db.query(sqlQuery, (error, results) => {
//     if (error) {
//       console.error('Error executing SQL query:', error);
//       res.status(500).json({ error: 'Internal Server Error' });
//     } else {
//       res.json(results);
//     }
//   });
// });

// Route for fetching daily transactions
app.get('/dailyTransactions', (req, res) => {
  const sqlQuery = 'SELECT OrderId, COUNT(*) AS soldAmount FROM CustomerOrders GROUP BY OrderId';

  db.query(sqlQuery, (error, results) => {
    if (error) {
      console.error('Error executing SQL query:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(results);
    }
  });
});


app.get('/productSales', (req, res) => {
  const sqlQuery = 'SELECT orderName, SUM(orderPrice) AS totalSales FROM CustomerOrders GROUP BY orderName';

  db.query(sqlQuery, (error, results) => {
    if (error) {
      console.error('Error executing SQL query:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(results);
    }
  });
});

app.get('/api/salesData', (req, res) => {
  const query = 'SELECT orderDate, SUM(orderPrice) AS totalSales FROM CustomerOrders GROUP BY orderDate';
  db.query(query, (error, results) => {
    if (error) {
      console.error('Error fetching sales data:', error);
      res.status(500).json({ error: 'Failed to fetch sales data' });
    } else {
      res.json(results);
    }
  });
});

app.get('/api/productPopularity', (req, res) => {
  const query = 'SELECT orderName, COUNT(*) AS orderCount FROM CustomerOrders GROUP BY orderName;';
  db.query(query, (error, results) => {
    if (error) {
      console.error('Error fetching product popularity data:', error);
      res.status(500).json({ error: 'Failed to fetch product popularity data' });
    } else {
      res.json(results);
    }
  });
});


app.get('/api/orderFrequency', (req, res) => {
  // Query to get order frequency per day or week
  const query = `
    SELECT orderDate, COUNT(*) AS orderCount
    FROM CustomerOrders
    GROUP BY orderDate
    ORDER BY orderDate;
  `;

  // Execute the query
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching order frequency: ', err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }

    // Send the retrieved data as response
    console.log(results)
    res.json(results);
  });
});

app.post('/api/getProducts', (req, res) => {
  const { ProductType } = req.body;

  const getProductQuery =
    'SELECT * FROM ProductDetails WHERE ProductType = ?';

  db.query(getProductQuery, [ProductType], (err, result) => {
    if (err) {
      console.error('Error getting products:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      // Assuming 'result' is an array of product objects
      res.status(200).json({ products: result });
    }
  });
});

app.post('/api/getProduct', (req, res) => {
  const { ProductName } = req.body;

  const getProductQuery =
    'SELECT * FROM ProductDetails WHERE ProductName = ?';

  db.query(getProductQuery, [ProductName], (err, result) => {
    if (err) {
      console.error('Error getting product:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      // Assuming 'result' is an array of product objects
      res.status(200).json({ products: result });
    }
  });
});

  app.post('/api/registerUser', (req, res) => {
    const { username, password, repassword, usertype } = req.body;
  
    const registerUserQuery =
      'INSERT INTO registration (username, password, repassword, usertype) VALUES (?, ?, ?, ?)';
  
    db.query(registerUserQuery, [username, password, repassword, usertype], (err, result) => {
      if (err) {
        console.error('Error registering user:', err);
        res.status(500).send('Internal Server Error');
      } else {
        res.status(200).send('User registered successfully');
      }
    });
  });

  app.post('/api/addProduct', (req, res) => {
    const { productName, productType, productPrice, productImage, productManufacturer, 
      productCondition, productDiscount, productDescription, inventory} = req.body;
  
    const addProductQuery =
      'INSERT INTO ProductDetails (productName, productType, productPrice, productImage, productManufacturer, productCondition, productDiscount, productDescription, inventory) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
  
    db.query(addProductQuery, [productName, productType, productPrice, productImage, productManufacturer, 
      productCondition, productDiscount, productDescription, inventory], (err, result) => {
      if (err) {
        console.error('Error registering user:', err);
        res.status(500).send('Internal Server Error');
      } else {
        res.status(200).send('Product Added successfully');
      }
    });
  });
  
  app.post('/api/addOrder', (req, res) => {
    const { orderId, userName, productName, productPrice, street, creditCard, deliveryMethod, storeLocation, orderDate} = req.body;
  
    const addOrderQuery =
      'INSERT INTO CustomerOrders (OrderId, userName, orderName, orderPrice, userAddress, creditCardNo, deliveryMethod, storeLocation, orderDate) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
  
    db.query(addOrderQuery, [orderId, userName, productName,productPrice, street, creditCard, deliveryMethod, storeLocation, orderDate], (err, result) => {
      if (err) {
        console.error('Error registering user:', err);
        res.status(500).send('Internal Server Error');
      } else {
        res.status(200).send('Order Added successfully');
      }
    });
  });
  app.post('/api/deleteProduct', (req, res) => {
    const { productName } = req.body;
  
    const deleteProductQuery =
      'DELETE FROM ProductDetails WHERE productName= ?';
  
    db.query(deleteProductQuery, [productName], (err, result) => {
      if (err) {
        console.error('Error registering user:', err);
        res.status(500).send('Internal Server Error');
      } else {
        res.status(200).send('Product Deleted successfully');
      }
    });
  });

  // app.post('/api/updateProduct', (req, res) => {
  //   const { productName, productPrice,productDescription ,productManufacturer,productDiscount, productCondition } = req.body;
  
  //   const deleteProductQuery =
  //     'UPDATE ProductDetails WHERE productName= ? VALUES';
  
  //   db.query(deleteProductQuery, [productName], (err, result) => {
  //     if (err) {
  //       console.error('Error registering user:', err);
  //       res.status(500).send('Internal Server Error');
  //     } else {
  //       res.status(200).send('Product Deleted successfully');
  //     }
  //   });
  // });

  app.post('/api/updateProduct', (req, res) => {
    const {
      productName,
      productPrice,
      productDescription,
      productManufacturer,
      productDiscount,
      productCondition,
    } = req.body;

    console.log('here',productName,
    productPrice,
    productDescription,
    productManufacturer,
    productDiscount,
    productCondition)
  
    const updateProductQuery = `
      UPDATE ProductDetails
      SET productPrice = ?,
          productDescription = ?,
          productManufacturer = ?,
          productDiscount = ?,
          productCondition = ?
      WHERE productName = ?
    `;
  
    db.query(
      updateProductQuery,
      [
        productPrice,
        productDescription,
        productManufacturer,
        productDiscount,
        productCondition,
        productName,
      ],
      (err, result) => {
        if (err) {
          console.error('Error updating product:', err);
          res.status(500).send('Internal Server Error');
        } else {
          res.status(200).send('Product updated successfully');
        }
      }
    );
  });

  app.post('/api/addCustomer', (req, res) => {
    const { name, password, usertype } = req.body;
  
    const addCustomerQuery = `
      INSERT INTO Registration (username, password, repassword, usertype)
      VALUES (?, ?, ?, ?)
    `;
  
    db.query(
      addCustomerQuery,
      [name, password, password, usertype],
      (err, result) => {
        if (err) {
          console.error('Error adding customer:', err);
          res.status(500).send('Internal Server Error');
        } else {
          res.status(200).send('Customer added successfully');
        }
      }
    );
  });

  app.post('/api/addStore', (req, res) => {
    const { storeName, street, city, state, zipcode } = req.body;
  
    const addStoreQuery = `
      INSERT INTO store (storeName, street, city, state, zipcode)
      VALUES (?, ?, ?, ?, ?)
    `;
  
    db.query(
      addStoreQuery,
      [storeName, street, city, state, zipcode],
      (err, result) => {
        if (err) {
          console.error('Error adding customer:', err);
          res.status(500).send('Internal Server Error');
        } else {
          res.status(200).send('Customer added successfully');
        }
      }
    );
  });
  // app.post('/addStore', (req, res) => {
  //   const { storeName, street, city, state, zipcode } = req.body;
  
  //   // Here, you would typically add the store to your database
  //   // For simplicity, let's log the store details
  //   console.log('Adding store:', { storeName, street, city, state, zipcode });
  
  //   // Send a success response (you might want to send more meaningful data)
  //   res.json({ success: true, message: 'Store added successfully' });
  // });
  
  

  app.get('/api/getStores', (req,res) =>{
    let sql = "SELECT * from store";
    db.query(sql,(err,result)=>{
      if (err) {
        console.error('Error getting stores:', err);
        res.status(500).send('Internal Server Error');
      } else {
        res.status(200).send(result);
      }
    })
  })

  app.get('/api/getOrders', (req,res) =>{
    let sql = "SELECT * from CustomerOrders";
    db.query(sql,(err,result)=>{
      if (err) {
        console.error('Error getting orders:', err);
        res.status(500).send('Internal Server Error');
      } else {
        res.status(200).send(result);
      }
    })
  })

  app.post('/api/getOrder', (req, res) => {
    const { userName } = req.body;
  
    const getOrderQuery =
      'SELECT * FROM CustomerOrders WHERE userName= ?';
  
    db.query(getOrderQuery, [userName], (err, result) => {
      if (err) {
        console.error('Error registering user:', err);
        res.status(500).send('Internal Server Error');
      } else {
        res.status(200).send(result);
      }
    });
  });

  app.get('/api/jsp-content', (req, res) => {
    // Logic to render your JSP file and send it as a response
    res.send(`
      <html>
        <head>
          <title>Stores</title>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
        </head>
        
        <style>
          /* Create four equal columns that float next to each other */
          .column {
            float: left;
            width: 100%;
            padding: 10px;
            height: auto;
          }
      
          .form-control {
            padding-top: 10px;
            width: 600px;
          }
      
          #map {
            height: 100vh;
          }
      
          html,
          body {
            max-width: 100%;
            overflow-x: hidden;
          }
        </style>
      
        <body>
          <div class="row">
            <div class="col-sm-1">
            </div>
            <div class="col-sm-2">
              <div class="row">
                <div class="column" style="background-color:white;">
                  <form>
                    <label for="fname">Grocery Hub</label><br>
                    <address id="address0"></address>
                    <button id="store" type="button" class="btn btn-success" value='0' onclick="change('1600 Amphitheatre Parkway, Mountain View, CA')">Select</button>
                  </form>
                </div>
              </div>
              <br>
              <!-- Add more store locations with similar structure -->
            </div>
            <div class="col-sm-8">
              <div class="row mb-2">
                <div class="col-sm-12">
                  <input class="form-control" id="ciudad" type="text" placeholder="Search ... " />
                </div>
              </div>
              <div id="map"></div>
            </div>
            <div class="col-sm-1">
            </div>
          </div>
        </div>
      
        <script>
          let map;
          let marianosMarker;
      
          function initMap() {
            const marianosLocation = { lat: 41.9445, lng: -87.6547 }; // Mariano's store in Chicago
            map = new google.maps.Map(document.getElementById('map'), {
              center: marianosLocation,
              zoom: 15, // You can adjust the zoom level as needed
            });
      
            // Add a marker for the Mariano's store
            marianosMarker = new google.maps.Marker({
              position: marianosLocation,
              map: map,
              title: "Mariano's - Chicago",
            });
      
            // Add an event listener to open an info window when the marker is clicked
            marianosMarker.addListener('click', function () {
              const infowindow = new google.maps.InfoWindow({
                content: '<strong>Mariano\'s - Chicago</strong>',
              });
              infowindow.open(map, marianosMarker);
            });
          }
      
          // Initialize a geocoder
          const geocoder = new google.maps.Geocoder();
      
          function geocodeAddress(address, callback) {
            geocoder.geocode({ 'address': address }, function (results, status) {
              if (status === 'OK' && results[0]) {
                const location = results[0].geometry.location;
                callback(location);
              } else {
                alert('Geocode was not successful for the following reason: ' + status);
              }
            });
          }
      
          
          function change(address) {
            geocodeAddress(address, function (location) {
              map.setCenter(location);
              map.setZoom(15); // You can adjust the zoom level as needed
              // Place the marker at the new location
              marianosMarker.setPosition(location);
            });
          }
        </script>
      
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
          integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
          crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
          integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
          crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
          integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
          crossorigin="anonymous"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script
          src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCzX6Bj4xArtu8k9zUDFs2DlQRWM-nlZ4w&callback=initMap&libraries=places,geometry"
          async defer></script>
        </body>
        <br><br>
      </html>
    `);
  });
  

  
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
