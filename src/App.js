import React, { useEffect, useState, createContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import './App.css'
import NavBar from './components/NavBar/NavBar'
import * as authService from './services/authService'
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import { UserContext } from './Context/UserContext';


function App() {
  const [user, setUser] = useState(null);
  

  useEffect(() => {
    /* global google */
    window.onload = function () {
      google.accounts.id.initialize({
        client_id: `${process.env.REACT_APP_GOOGLE_CLIENT_ID}`,
        callback: handleCallbackResponse
      });
      google.accounts.id.prompt()
    //   renderButton(
    //     document.getElementById("buttonDiv"),
    //     { theme: 'outline', size: 'large' }); 
    }
}, [])

  // Callback function for Google login
  function handleCallbackResponse(response) {
    console.log("Encoded JWT ID Token" + response.credential);
    let userObject = jwtDecode(response.credential);
    console.log(userObject)
    setUser(userObject, authService.googleLogin(response))
  }
  
  return (
    <div className='App'>
      
      
        <NavBar user={user} />
        <Routes>
          <Route
            path='/'
            element={!user ? <Navigate to ='/login' /> : <Home />}
          />
          <Route
            path='/login'
            element={<Login user={user} />}
          />
        </Routes>
    
    </div>
  );
}

export default App;
