// src/Context/CartContext.js
import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Load cart from localStorage on first render
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart"));
    if (savedCart && savedCart.length > 0) {
      setCartItems(savedCart);
    }
  }, []);

  // Save cart to localStorage when cartItems change
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // Add item to cart
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);

      if (existingItem) {
        // ✅ Calculate new total quantity
        const newQuantity = existingItem.quantity + product.quantity;

        // ✅ Prevent exceeding max stock
        if (newQuantity > product.maxQuantity) {
          // alert(`Only ${product.maxQuantity} in stock!`);
          return prevItems; // ❌ Do not add more if stock limit is exceeded
        }

        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: newQuantity } : item,
        );
      } else {
        // ✅ Ensure new items follow stock limit
        if (product.quantity > product.maxQuantity) {
          alert(`Only ${product.maxQuantity} in stock!`);
          return prevItems;
        }

        return [...prevItems, product];
      }
    });
  };

  // Remove item from cart
  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]); // ✅ Clear cart state
    localStorage.removeItem("cart"); // ✅ Clear localStorage
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
