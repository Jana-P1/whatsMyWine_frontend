import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import NavBar from './components/NavBar/NavBar'
import * as authService from './services/authService'

function App() {
  const [user, setUser] = useState({});

  function handleCallbackResponse(response) {
    console.log("Encoded JWT ID Token" + response.credential);
    let userObject = response.credential;
    console.log(userObject)
    setUser(userObject, authService.googleSuccessSignIn(userObject))
  }
  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: `${process.env.REACT_APP_GOOGLE_CLIENT_ID}`,
      callback: handleCallbackResponse
    });
    google.accounts.id.renderButton(
      document.getElementById('signInDiv'),
      { 
        theme: 'outline', 
        size: 'large', 
      }
    ); google.accounts.id.prompt()
  }, [])
  return (
    <div className="App">
      <NavBar user={user} handleCallbackResponse={handleCallbackResponse} />
    </div>
  );
}

export default App;
