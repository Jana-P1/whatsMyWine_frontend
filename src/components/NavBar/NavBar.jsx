import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import styles from './NavBar.module.css'

const NavBar = ({ user, handleLogout }) => {
  console.log(user)
  
  return ( 
    <div className={styles.container}>
      <h1>What's My Wine?</h1>
      {user.given_name ? 
        <header> Welcome, {user.given_name}</header>
        :
        <header>Welcome</header>
      
      }
          
    
        
      
    </div>
  );
}
 
export default NavBar