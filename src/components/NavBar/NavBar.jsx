import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import styles from './NavBar.module.css'

const NavBar = ({ user, handleLogout }) => {
  
  
  return ( 
    <div className={styles.container}>
      <h1 className={styles.appName}>what's my wine</h1>
       {user ?
        <h1> Welcome, {user.given_name} </h1>
        :
        <h1> Welcome </h1>
       }
        
        
      
      
          
    
        
      
    </div>
  );
}
 
export default NavBar