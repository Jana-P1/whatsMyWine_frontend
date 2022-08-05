import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";

const NavBar = ({ user, handleLogout }) => {
  user = jwtDecode(user)
  return ( 
    <>
      <h1>What's My Wine?</h1>
      {user ? 
        <header> Welcome, {user.given_name}</header>
        :
        <header>Please log in!</header>
      }
        
      
    </>
  );
}
 
export default NavBar