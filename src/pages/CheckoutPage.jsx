import React, { useEffect, useState } from "react";
import { NavLink } from "react-router";



const CheckoutPage = () => {
  const [showPopup, setShowPopup] = useState(false);

useEffect(() => {
  const query = new URLSearchParams(window.location.search);
  if (query.get("success") === "true") {
    setShowPopup(true);
    window.history.replaceState({}, document.title, window.location.pathname);
  }
}, []);


  return (
    <div>
      {/* Your normal page content */}

      {showPopup && (
        <div style={{
          position: "fixed",
          top: 0, left: 0,
          width: "100%", height: "100%",
          background: "rgba(0,0,0,1.8)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1000
        }}>
          <div style={{
            background: "#fff",
            padding: "20px",
            borderRadius: "10px",
            textAlign: "center",
            minWidth: "300px"
          }}>
            <h2>✅ Payment Successful</h2>
            <p>Your payment has been completed successfully!</p>
            <NavLink to={'/'}><button
              onClick={() => setShowPopup(false)}
              style={{
                marginTop: "10px",
                padding: "10px 20px",
                background: "#4caf50",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer"
              }}
            >
              OK
            </button></NavLink>
          </div>
        </div>
      )}
    </div>
  );
}

export default CheckoutPage






