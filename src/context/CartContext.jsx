import React, { createContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage.jsx';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useLocalStorage('cart', []);

  const addToCart = (product) => {
    setCartItems(prev => {
      const exists = prev.find(item => item.id === product.id);
      if (exists) {
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
      return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id))
  };

  const clearCart = () => setCartItems([]);
  
 const checkout = () => {
   setCartItems([]);
 };

  const updateQuantity = (id, quantity) => {
    setCartItems ((items) =>
      items.map ((item) =>
        item.id === id? {...item, quantity}:item
      )
    );
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart,updateQuantity,checkout }}>
      {children}
    </CartContext.Provider>
  );
};

