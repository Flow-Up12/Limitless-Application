import React from 'react';
import HeaderImg from "../assets/header-img.png";
import './header.css';

function Header() {
  return (
    <div className="header">
      <div className="top-container">
        <div className="logo">LIMITLESS</div>
        <div className="header-links">
          <button className="red">Home</button>
          <button>Features</button>
          <button>Leaderboard</button>
          <button>Our team</button>
        </div>
        <div className="authenticate">
          <div>Register</div> |
          <div>Login</div>
        </div>
      </div>

      <div className="middle">
        <div className="middle-text">
          <p className="text">Make Learning More Enjoyable and Interactive.</p>
          <p className="text2">With Limitless, you can enjoy free chat, video calls, whiteboards, puzzles, and many other amazing features...</p>
          <div className="bottom-buttons">
            <div className="red-button">Create an Account</div>
            <h4 className="or">OR</h4>
            <div>Log in</div>
          </div>
        </div>

        <div className='progress'>
          <img src={HeaderImg} alt="img" />
        </div>
      </div>

    </div>
  );
}

export default Header;
