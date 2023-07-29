import { Link } from "react-router-dom";
import './auth.css'

function SignIn({ handleSignIn, usernameInput, setUsernameInput, passwordInput, setPasswordInput, setIsSigningUp}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignIn(usernameInput, passwordInput);
  };

  return (
    <div className="SignIn">
    
        <img src="/blogging.png" alt="Blogging" className="signin-image" />  
          <h1>MJ Blog</h1>
      <h3>Sign In</h3>       
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={usernameInput}
          onChange={(e) => setUsernameInput(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={passwordInput}
          onChange={(e) => setPasswordInput(e.target.value)}
        />
        <button type="submit">Sign In</button>
      </form>
      {/* <Link to="/signup" onClick={() => setIsSigningUp(true)}> */}
  Create an account
{/* </Link> */}

    </div>
  );
}

export default SignIn;
