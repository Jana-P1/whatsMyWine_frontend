import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import './App.css'
import NavBar from './components/NavBar/NavBar'
import * as authService from './services/authService'
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';


function App() {
  const [user, setUser] = useState({});

  function handleCallbackResponse(response) {
    console.log("Encoded JWT ID Token" + response.credential);
    let userObject = jwtDecode(response.credential);
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
    <div>
      <NavBar user={user} handleCallbackResponse={handleCallbackResponse} />
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/login'
          element={user ? <Navigate to='/' /> : <Login />}
        />
      </Routes>
    </div>
  );
}

export default App;
