import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import NavBar from './components/NavBar/NavBar'

function App() {
  const [user, setUser] = useState({});

  function handleCallbackResponse(response) {
    console.log("Encoded JWT ID Token" + response.credential);
    let userObject = jwtDecode(response.credential);
    console.log(userObject)
  }
  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: '275135025973-l3f8cuvqu6a8n4680gcfbtdb62nbo80e.apps.googleusercontent.com',
      callback: handleCallbackResponse
    });
    google.accounts.id.renderButton(
      document.getElementById('signInDiv'),
      { 
        theme: 'outline', 
        size: 'large',
        shape: 'circle',
        text: 'sigin_with',
        logo_alignment: 'center' 
      }
    ); google.accounts.id.prompt()
  }, [])
  return (
    <div className="App">
      <NavBar use={user} />
    </div>
  );
}

export default App;
