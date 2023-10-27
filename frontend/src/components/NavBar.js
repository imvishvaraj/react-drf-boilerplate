import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SETTINGS } from '../Constants';

function NavBar() {
  const navigate = useNavigate();
  const token = localStorage.getItem('accessToken');

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    navigate('/login');
  };

  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">{SETTINGS.SITE_NAME}</div>
        <div>
          {token ? (
            <button onClick={handleLogout} className="text-white">Logout</button>
          ) : (
            <>
              <Link to="/about" className="text-white mr-4">About</Link>
              <Link to="/login" className="text-white mr-4">Login</Link>
              <Link to="/register" className="text-white">Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
