import React from "react";
import { useLocation } from "react-router";

const Success = () => {
  const query = new URLSearchParams(useLocation().search);
  const amount = query.get("amount");

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1 style={{ color: "green" }}>✅ Payment Successful!</h1>
      <p>Thank you for your purchase.</p>
      {amount && (
        <h2>
          Total Paid: <span style={{ color: "blue" }}>${amount}</span>
        </h2>
      )}
    </div>
  );
};

export default Success;
