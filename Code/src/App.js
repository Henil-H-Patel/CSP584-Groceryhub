import './App.css';
import Header from './Header';
import Footer from './Footer';
import Doorlocks from './Veg';
import Doorbells from './Fruits';
import Speakers from './Beverages';
import Lightings from './HouseHold';
import Thermostats from './Dairy';
import Home from './Home';
import Login from './Login';
import Register from './Register'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from './CartContext';
import Cart from './Cart'
import Checkout from './Checkout';
import OrderConfirmation from './OrderConfirmation';
import ViewOrder from './ViewOrder';
import ProductDetails from './ProductDetails'
import ReviewForm from './ReviewForm';
import Addproduct from './Addproduct';
import ViewProduct from './ViewProduct';
import SingleProduct from './SingleProduct';
import Orders from './Orders';
import Trending from './Trending';
import UpdateForm from './UpdateForm';
import AddCustomer from './AddCustomer';
import Products from './Products';
import Fruits from './Fruits';
import Veg from './Veg';
import Beverages from './Beverages';
import HouseHold from './HouseHold';
import Dairy from './Dairy';
import Hb from './hb';
import Snacks from './snacks';
import Personalcare from './Personalcare';
import MapComponent from './MapComponent';
import Inventory from './Inventory';
import SalesReport from './SalesReport';
import SalesTrendsChart from './DataVisualization';
import DataAnalytics from './DataAnalytics';
import AddStore from './AddStore'
import EventFinder from './EventFinder';
function App() {
  return (
    <div className="App">
      <Router>
      <CartProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/Vieworder" element={<ViewOrder />} />
          <Route path="/Addproduct" element={<Addproduct />} />
          <Route path="/AddCustomer" element={<AddCustomer />} />
          <Route path="/viewProduct/:productName" element={<ViewProduct />} />
          <Route path="/allOrders" element={<Orders />} />
          <Route path="/updateProduct/:productName" element={<UpdateForm />} />
          <Route path="/productview/:ProductName" element={<SingleProduct />} />
          <Route path="/Trending" element={<Trending />} />
          <Route path="/Veg" element={<Veg />} />
          <Route path="/Fruits" element={<Fruits />} />
          <Route path="/Beverages" element={<Beverages />} />
          <Route path="/HouseHold" element={<HouseHold />} />
          <Route path="/Dairy" element={<Dairy />} />
          <Route path="/products" element={<Products />} />
          <Route path="/Hb" element={<Hb />} />
          <Route path="/Snacks" element={<Snacks />} />
          <Route path="/Personalcare" element={<Personalcare />} />
          <Route path="/store" element={<MapComponent />} />
          <Route path="/AddStore" element={<AddStore />} />
          <Route path="/InventoryReport" element={<Inventory />} />
          <Route path="/SalesReport" element={<SalesReport />} />
          <Route path="/EventFinder" element={<EventFinder />} />
          <Route path="/DataVisualization" element={<SalesTrendsChart />} />
          <Route path="/DataAnalytics" element={<DataAnalytics />} />
          <Route path="/ReviewForm/:productModelName" element={<ReviewForm />} />
          <Route path="/checkout/orderConfirmation/:orderId" element={<OrderConfirmation />} />
          
        </Routes>
        <Footer />
      </CartProvider>
      </Router>
    </div>
  );
}

export default App;
