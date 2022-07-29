import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { Routes, Route } from 'react-router-dom';
import Login from './components/auth/login'

function App() {
  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
