// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import UserDetails from './components/UserDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/user-details" element={<UserDetails />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
