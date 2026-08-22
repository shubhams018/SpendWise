import React, { useEffect, useState } from 'react'
import { getCurrentUser } from '../services/auth.service';
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {

  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  async function checkAuth() {
    try {
      const response = await getCurrentUser();
      setAuthenticated(true);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    checkAuth();
  }, []);

  if (loading) {
    return <p>Checking authentication...</p>;
  }

  if (authenticated) {
    return children;
  }

  return navigate("/login");
}

export default ProtectedRoute;