// Import the React library
import React from "react";
import "./footer.css";
import LimitlessLogo from "./limitless-logo.png";

function Footer() {
  return (
    <div class="footer">
      <div class="footer-top">
        <div class="footer-left">
          <img src={LimitlessLogo} class="limitless-logo" alt="logo" />
          <p class="footer-desc">With interactive learning, you can learn both quickly and efficiently. So join our platform in order to learn and enjoy the process.</p>
        </div>
        <div class="footer-right">
          <div class="right-company">
            <h2 class="footer-title">Company</h2>
            <a href="" class="footer-menu">
              About Us
            </a>
            <a href="" class="footer-menu">
              All Products
            </a>
            <a href="" class="footer-menu">
              Our Team
            </a>
          </div>
          <div class="right-services">
            <h2 class="footer-title">Services</h2>
            <a href="" class="footer-menu">
              My assignments
            </a>
            <a href="" class="footer-menu">
              My puzzles
            </a>
            <a href="" class="footer-menu">
              My account
            </a>
            <a href="" class="footer-menu">
              Terms & Conditions
            </a>
          </div>
          <div class="right-support">
            <h2 class="footer-title">Support</h2>
            <a href="" class="footer-menu">
              FAQ
            </a>
            <a href="" class="footer-menu">
              How it Works
            </a>
            <a href="" class="footer-menu">
              Contact
            </a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="footer-bottom-left">
          <p class="copyright">All Rights Reserved @ LIMITLESS 2023</p>
        </div>
        <div class="footer-bottom-right">
          <a href="" class="terms">
            Terms & Conditions
          </a>
          <a href="" class="terms">
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  );
}
export default Footer;
