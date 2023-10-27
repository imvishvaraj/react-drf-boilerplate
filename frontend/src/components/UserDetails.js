import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SETTINGS } from "../Constants";

function UserDetails() {
  const [userDetails, setUserDetails] = useState(null);
  const navigate = useNavigate();

  console.log("UserDetails component rendered");


  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const token = localStorage.getItem('accessToken');

        if (!token) {
          navigate('/login')
        }
        const response = await fetch(`${SETTINGS.API_BASE_URL}/users/me/`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        setUserDetails(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchUserDetails();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      {userDetails ? (
        <div className="bg-white p-8 rounded shadow-lg text-center">
          <h1 className="text-2xl font-bold mb-4">User Details</h1>
          <p className="text-xl mb-2">Email: {userDetails.email}</p>
          {/* Display other user details here */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default UserDetails;
