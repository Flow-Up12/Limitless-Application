import React from 'react';


function Header() {
  return (
    <div className="header">
      <div className="top-container">
        <img src="/limitless-logo-1.png" alt="Limitless Logo" />
        <div>
          <button className='red'>Home</button>
          <button>Features</button>
          <button>Leaderboard</button>
          <button>
            Browse
            <svg xmlns="http://www.w3.org/2000/svg" width="7" height="4" viewBox="0 0 7 4" fill="none">
              <path d="M3.5 4L0 0H7L3.5 4Z" fill="#495263" />
            </svg>
          </button>
        </div>
      </div>

      <div className="middle">
        <div className="middle-text">
          <p className="text">Make Learning Enjoyable and Interactive.</p>
          <p className="text2">With Limitless, you can enjoy free chat, video calls, whiteboards, puzzles, and many other amazing features...</p>
        </div>
        <div className='progress'>
           <div className='progress-box'>
            <h1>Assingment!</h1>
            <div className='rectangle'></div>
            <h2>Complete your assingment!</h2>
            <h3>Progress 63%</h3>
           </div>
           <img src="/removebg-preview-1.png" alt="img" />
        </div>
        
      </div>

      <div className="bottom-buttons">
        <button className="red-button">Create an Account</button>
        <h4 className="or">or</h4>
        <button>Log In</button>
      </div>
    </div>
  );
}

export default Header;
