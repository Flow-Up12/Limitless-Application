import react from "react";
import "./bottom.css";
import image2 from "./bot1.png";

function Bottom() {
  return (
    <div class="bottom">
      <div class="bottom-left">
        <img src={image2} alt="png" class="bottom-img" />
      </div>
      <div class="bottom-right">
        <div class="right-content">
          <h3 class="why-text">Why choose us</h3>
          <p class="offer-text">Limitless offers a bunch of features you’ll never find somewhere else</p>
          <p class="bottom-description">At Limitless, having fun while learning is our priority, that’s why we offer you multiple ways of learn with interactive activities.</p>
          <button class="start-button">Start your journey</button>
        </div>
      </div>
    </div>
  );
}
export default Bottom;
