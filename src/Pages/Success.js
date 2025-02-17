import React, { useContext, useEffect, useRef, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Container, Div } from "../Styles/PagesStyle";
import { Message, Title, Button } from "../Styles/SuccessStyle";
import { CartContext } from "../Components/CartContext"; // ✅ Import cart context

const Success = () => {
  const [orderDetails, setOrderDetails] = useState(null);
  const [error, setError] = useState(null);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { clearCart } = useContext(CartContext); // ✅ Import clearCart function

  const fetchOrderDetails = async () => {
    const sessionId = searchParams.get("session_id");
    if (!sessionId) return;

    try {
      const response = await fetch(
        `https://asia-southeast1-sani-85087.cloudfunctions.net/api/retrieve-session?session_id=${sessionId}`,
      );
      const data = await response.json();
      if (!data.success) throw new Error("Failed to fetch session details");

      setOrderDetails(data.session);
      clearCart(); // ✅ Instantly clear cart on success page

      const customerEmail = data.session.customer_details?.email || "N/A";

      // ✅ Send confirmation email
      fetch(
        "https://asia-southeast1-sani-85087.cloudfunctions.net/api/send-confirmation-email",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: customerEmail,
            orderDetails: data.session,
          }),
        },
      ).catch((err) => console.error("❌ Email failed:", err));

      // ✅ Send stock update
      fetch(
        "https://asia-southeast1-sani-85087.cloudfunctions.net/api/update-stock",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            lineItems: data.session.line_items?.data,
          }),
        },
      ).catch((err) => console.error("❌ Stock update failed:", err));
    } catch (error) {
      console.error("❌ Error retrieving order details:", error);
    }
  };

  const hasFetched = useRef(false);

  useEffect(() => {
    if (!hasFetched.current) {
      console.log("🔄 Fetching order details...");
      fetchOrderDetails();
      hasFetched.current = true; // ✅ Prevents second execution
    }
  }, []);

  if (error)
    return (
      <Container>
        <Div>
          <Message>{error}</Message>;
        </Div>
      </Container>
    );

  return (
    <Container>
      <Div style={{ justifyItems: "center", textAlign: "center" }}>
        <Title>🎉 Thank You for Your Order! 🎉</Title>
        <Message>Your payment was successful.</Message>
        {orderDetails && (
          <Message>
            Confirmation sent to:{" "}
            <strong>{orderDetails.customer_details?.email || "N/A"}</strong>
          </Message>
        )}
        <Message>
          You'll receive another update when your order has shipped. If you have
          any questions, contact support.
        </Message>
        <Button onClick={() => navigate("/")}>Return Home</Button>
      </Div>
    </Container>
  );
};

export default Success;
