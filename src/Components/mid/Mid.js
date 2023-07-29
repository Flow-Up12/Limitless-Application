import React from "react";
import "./mid.css";
import ICON1 from "./icon1.png";
import ICON2 from "./icon2.png";

function Mid() {
  return (
    <div id="features" class="mid">
      <p class="key-text">Our key features</p>
      <p class="slogan-text">With limitless, the e-learning is made easy and more interactive, with all these amazing features:</p>
      <div class="card-container">
        <div class="card1" id="all-card">
          <img src={ICON1} alt="shipping" class="card-icon" />
          <h3 class="card-title">Puzzles</h3>
          <h4 class="card-description">With LIMITLESS, you can solve some puzzles related to your field of study.</h4>
        </div>
        <div class="card2" id="all-card">
          <img src={ICON1} alt="shipping" class="card-icon" />
          <h3 class="card-title">Practice Problems</h3>
          <h4 class="card-description">In our website, we provide a lot of amazing and interactive practice problems.</h4>
        </div>
        <div class="card3" id="all-card">
          <img src={ICON2} alt="Secure Login System" class="card-icon" />
          <h3 class="card-title">Secure Login System</h3>
          <h4 class="card-description">You can authenticate securely and privately, due to Django’s amazing authentication system</h4>
        </div>
      </div>
    </div>
  );
}
export default Mid;
