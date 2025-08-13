import React from "react";
import { assets } from "../../assets/assets";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-box-first">
          <div className="footer-box1">
            <h2>About</h2>
            <ul>
              <li>
                <a href="">Contact Us</a>
              </li>
              <li>
                <a href="">About Us</a>
              </li>
              <li>
                <a href="">Careers</a>
              </li>
              <li>
                <a href="">Corporate</a>
              </li>
              <li>
                <a href="">Information</a>
              </li>
            </ul>
          </div>
          <div className="footer-box1">
            <h2>Group Companies</h2>
            <ul>
              <li>
                <a href="">Myntra</a>
              </li>
              <li>
                <a href="">Shopsy</a>
              </li>
              <li>
                <a href="">Amazon</a>
              </li>
              <li>
                <a href="">Flipkart</a>
              </li>
            </ul>
          </div>
          <div className="footer-box1">
            <h2>Customer Policy</h2>
            <ul>
              <li>
                <a href="">Terms Of Use</a>
              </li>
              <li>
                <a href="">Security</a>
              </li>
              <li>
                <a href="">Provicy</a>
              </li>
              <li>
                <a href="">Sitemap</a>
              </li>
              <li>
                <a href="">Grievences</a>
              </li>
            </ul>
          </div>
          <div className="footer-box1">
            <h2>Help</h2>
            <ul>
              <li>
                <a href="">Payment</a>
              </li>
              <li>
                <a href="">Shipping</a>
              </li>
              <li>
                <a href="">Cancel</a>
              </li>
              <li>
                <a href="">FAQ</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-box-second">
          <div className="footer-box2">
            <h2>Mail Us:</h2>
            <p>
              Light Trendz Private Limited, Address 1: Building Number: 123
              Street Name: Ocean Drive Street Address: Art Deco Welcome Center,
              10th Street State: FL City: Miami Beach Post Code: 33139
            </p>

            <div className="footer-social">
              <h2>Social:</h2>
              <div className="social-img">
                <img src={assets.facebook}></img>
                <img src={assets.twitter}></img>
                <img src={assets.youtube}></img>
                <img src={assets.instagram}></img>
              </div>
            </div>
          </div>
          <div className="footer-box2">
            <h2>Registered Office Address:</h2>
            <p>
              Light Trendz Private Limited,Address 1:
Building Number: 123
Street Name: Ocean Drive
Street Address: Art Deco Welcome Center, 10th Street
State: FL
City: Miami Beach
Post Code: 33139
            </p>
            <span>CIN : U310500TN2024TC088107</span>
            <span>Telephone : 044-45614700 / 044-45700800</span>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2007-2026 LiteTrendz.com</p>
        <img src={assets.payments}></img>
      </div>
    </>
  );
};

export default Footer;
