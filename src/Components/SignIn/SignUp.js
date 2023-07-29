import { Link } from 'react-router-dom';
import './auth.css'

function SignUp({
  handleSignUp,
  usernameInput,
  setUsernameInput,
  passwordInput,
  setPasswordInput,
  setIsSigningUp,

}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignUp(usernameInput, passwordInput);
  };

  return (
    <div className="SignUp">
      <img src="/blogging.png" alt="Blogging" className="signin-image" />
      <h1>MJ Blog</h1>
      <h3>Sign Up</h3>
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
        <button type="submit">Sign Up</button>
      </form>
      {/* <Link to="/signin" onClick={() => setIsSigningUp(false)}> */}
  Already have an account? Sign In
{/* </Link> */}
    </div>
  );
}

export default SignUp;
