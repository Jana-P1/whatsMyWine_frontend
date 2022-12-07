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
            element={<Login />}
          />
        </Routes>
    
    </div>
  );
}

export default App;
