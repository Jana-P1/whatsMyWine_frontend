import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";

const NavBar = ({ user, handleLogout }) => {
  console.log(user)
  return ( 
    <>
      <h1>What's My Wine?</h1>
      {user.given_name ? 
        <header> Welcome, {user.given_name}</header>
        :
        <header>Welcome</header>
      
      }
          
    
        
      
    </>
  );
}
 
export default NavBar