import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import UserDetails from './components/UserDetails';
import About from './components/About';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<UserDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} /> 
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
