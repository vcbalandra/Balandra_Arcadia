import React, { useEffect, useState } from 'react';
import { useDashboardContext } from '../pages/DashboardLayout';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'; 

const Admin = () => {
  const { user } = useDashboardContext();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    if (!user || user.role !== 'superAdmin') {
      toast.error('You don\'t have access to this page.');
      navigate('/dashboard'); 
    } else {
      setLoading(false); 
    }
  }, [user, navigate]);

  if (loading) return null; 

  return (
    <div>
      <h1>Super Admin Panel</h1>
      <p>Welcome, {user?.name || 'Super Admin'}!</p>
    </div>
  );
};

export default Admin;