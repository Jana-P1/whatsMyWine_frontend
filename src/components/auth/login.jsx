
import React from "react";
import { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";


const Login = () => {
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
      { theme: 'outline', size: 'large' }
    );
  }, [])
  
  return ( 
    <div>
      <div id="signInDiv"></div>
    </div>
   );
}
 
export default Login;