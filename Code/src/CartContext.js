// // CartContext.js
// import { createContext, useContext, useState } from 'react';

// const CartContext = createContext();

// export function CartProvider({ children }) {
//   const [cart, setCart] = useState([]);

//   const addToCart = (product) => {
//     setCart((prevCart) => [...prevCart, product]);
//   };

//   return (
//     <CartContext.Provider value={{ cart, addToCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// }

// export function useCart() {
//   return useContext(CartContext);
// }


// useCart.js
import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.name === product.productName);

    if (existingProduct) {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.name === product.productName ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
    }
  };

  // const removeFromCart = (productName) => {
  //   setCart((prevCart) => prevCart.filter((item) => item.name !== productName));
  // };
  const removeFromCart = (productName) => {
    console.log('Removing product:', productName);
    setCart((prevCart) => prevCart.filter((item) => item.productName !== productName));
  };
  
  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const clearCart = () =>{
    setCart([])
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, calculateTotalPrice, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}
