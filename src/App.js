  import Header from "./Components/head/Header";
  import Footer from "./Components/footer/Footer";
  import Mid from "./Components/mid/Mid";
  import Bottom from "./Components/bottom/Bottom";
  import SignUp from "./Components/SignIn/SignUp";
  import SignIn from "./Components/SignIn/SignIn";
  import {  Route, Routes, useNavigate } from 'react-router-dom';
  import { useState, useEffect } from 'react';

  import "./index.css"


    
  function App() {
  const [users, setUsers] = useState([]);

  const [usernameInput, setUsernameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [isLoggedIn , setIsLoggedIn] = useState(false)
  const [isSigningUp, setIsSigningUp] = useState(false);
  const [isLoading, setIsLoading] = useState(true);


  const handleSignOut = (e) => {
    e.preventDefault();
      setIsLoggedIn(false);
      setUsernameInput('');
      setPasswordInput('');
      alert("you were signed out");
    } 
    const handleSignIn = (e) => {

      const matchedUser = users.find(
        (user) => user.username === usernameInput && user.password === passwordInput
      );
    
      if (matchedUser) {
        setIsLoggedIn(true);
        setUsernameInput(matchedUser.username);
        setPasswordInput('');
        // navigate("/");
      } else {
        alert('Invalid username or password. Please try again.');
      }

    };
    
    const handleSignUp =  async (e) => {
      try {
        const matchedUser = users.find(
          (user) => user.username === usernameInput && user.password === passwordInput
        );
          
        if (matchedUser) {
          alert("Username is taken.");
        } 
        else if (usernameInput === '' ||passwordInput === '' ){
          alert("blank information");
        }

        else {
          // await api2.post('/userinfo',  {
          //   id: users.length + 1,
          //   username: usernameInput,
          //   password: passwordInput,
          
          // });
          setIsSigningUp(false);
          setIsLoggedIn(true);
          alert("You were signed up.");
          // navigate('/')
        }
      }catch (err) {
        console.log(`Error ${err.message}`);
      }
    
    };
    
    return (
      
     <>
        {/* {!isLoggedIn && !isSigningUp && !isLoading && (
            <SignIn
              handleSignIn={handleSignIn}
              setUsernameInput={setUsernameInput}
              passwordInput={passwordInput}
              setPasswordInput={setPasswordInput}
              usernameInput={usernameInput}
              setIsSigningUp={setIsSigningUp}
            />
          )}
        
          {isSigningUp && (
            <SignUp
              handleSignUp={handleSignUp}
              setUsernameInput={setUsernameInput}
              passwordInput={passwordInput}
              setPasswordInput={setPasswordInput}
              usernameInput={usernameInput}
              setIsSigningUp={setIsSigningUp}
              setIsLoggedIn={setIsLoggedIn}
            />
          )} */}
              {/* <SignIn
              handleSignIn={handleSignIn}
              setUsernameInput={setUsernameInput}
              passwordInput={passwordInput}
              setPasswordInput={setPasswordInput}
              usernameInput={usernameInput}
              setIsSigningUp={setIsSigningUp}
            /> */}
            {/* <SignUp
              handleSignUp={handleSignUp}
              setUsernameInput={setUsernameInput}
              passwordInput={passwordInput}
              setPasswordInput={setPasswordInput}
              usernameInput={usernameInput}
              setIsSigningUp={setIsSigningUp}
              setIsLoggedIn={setIsLoggedIn}
            /> */}
            <LandingPage/>
      
      
      </>

      
    );
  }

  function LandingPage() {
    return (
      <div className="App">
        
        <Header />
        <Mid />
        <Bottom />
        <Footer />
      </div>
    );
  }

  export default App;
