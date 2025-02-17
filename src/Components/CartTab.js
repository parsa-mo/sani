import React, { useContext, useEffect, useRef, useState } from "react";
import { faCartShopping, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { createPortal } from "react-dom";
import { CartContext } from "./CartContext";
import {
  Span,
  ContinueShoppingButton,
  Overlay,
  CloseButton,
  CartContainer,
  ActionButtonsWrapper,
  ActionButton,
  CartSummary,
} from "../Styles/CartStyle";
import {
  ItemContainer,
  ImgDiv,
  Img,
  InfoDiv,
  Title,
  InfoText,
  InfoLabel,
} from "../Styles/CartItemStyles";
import { useNavigate } from "react-router-dom";

const CartTab = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    // ✅ Only open the cart when an item is ADDED (not removed)
    if (cartItems.length > 0) {
      setIsOpen(true);
    }
    if (cartItems.length === 0) {
      setIsOpen(false);
    }
  }, [cartItems]);

  const toggleCart = () => {
    setIsOpen(!isOpen);
  };

  // Calculate total quantity and total price
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );
  const totalPrice = cartItems
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2);

  // Handle Checkout Button
  const handleCheckout = async () => {
    toggleCart();
    try {
      const currentPage = window.location.href; // ✅ Get the last visited URL

      const response = await fetch(
        "https://asia-southeast1-sani-85087.cloudfunctions.net/api/create-checkout-session",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            cartItems,
            cancelUrl: currentPage, // ✅ Send last visited URL
          }),
        },
      );

      const data = await response.json();

      if (data.url) {
        window.location.href = data.url; // ✅ Redirect to Stripe Checkout
      } else {
        alert("Error creating checkout session");
      }
    } catch (error) {
      console.error("Checkout error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  const cartContent = (
    <>
      <Overlay isOpen={isOpen} onClick={toggleCart} />
      <CartContainer isOpen={isOpen}>
        <CloseButton onClick={toggleCart}>✕</CloseButton>

        {cartItems.length === 0 ? (
          <>
            <p style={{ padding: "60px 30px", color: "white" }}>
              Your cart is currently empty.
            </p>
            <ContinueShoppingButton onClick={toggleCart}>
              Continue Shopping
            </ContinueShoppingButton>
          </>
        ) : (
          <>
            {/* 🛍️ Cart Items */}
            {cartItems.map((item) => (
              <ItemContainer key={item.id}>
                <ImgDiv>
                  <Img
                    src={item.image}
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      toggleCart();
                      navigate(item.href);
                    }}
                  />
                </ImgDiv>
                <InfoDiv>
                  <Title
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      toggleCart();
                      navigate(item.href);
                    }}
                  >
                    {item.name.toUpperCase()} - {item.color.toUpperCase()}
                  </Title>
                  <InfoText>
                    <InfoLabel>EACH: </InfoLabel> ${item.price}
                  </InfoText>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <InfoText>
                      <InfoLabel>SIZE: </InfoLabel>
                      {item.size}
                    </InfoText>
                    <InfoText>
                      <InfoLabel>QTY:</InfoLabel> {item.quantity}
                    </InfoText>
                  </div>
                </InfoDiv>
                <FontAwesomeIcon
                  onClick={() => removeFromCart(item.id)}
                  style={{ cursor: "pointer" }}
                  icon={faTrash}
                />
              </ItemContainer>
            ))}
            {/* 🛒 Total Items and Total Price */}
            <CartSummary>
              <div>Total Items: {totalItems}</div>
              <div>Total: ${totalPrice}</div>
            </CartSummary>
            {/* 🧹 Clear Cart & ✅ Checkout Buttons */}
            <ActionButtonsWrapper>
              <ActionButton
                onClick={clearCart}
                style={{ backgroundColor: "#ff4d4f" }}
              >
                Clear Cart
              </ActionButton>
              <ActionButton
                onClick={handleCheckout}
                style={{ backgroundColor: "#ad9e75", flex: 2 }}
              >
                Checkout
              </ActionButton>
            </ActionButtonsWrapper>
          </>
        )}
      </CartContainer>
    </>
  );

  return (
    <>
      {/* Cart Icon */}
      <div
        style={{
          overflow: "hidden",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
        }}
        onClick={toggleCart}
      >
        <Span>{cartItems.length}</Span>
        <FontAwesomeIcon icon={faCartShopping} size="lg" />
      </div>

      {/* Portal renders the cart outside the Navbar */}
      {createPortal(cartContent, document.getElementById("cart-portal"))}
    </>
  );
};

export default CartTab;
