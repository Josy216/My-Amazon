import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { DataContext } from '../DataProvider/DataProvider';

function ProtectPayment({ children, msg, redirect }) {
  const navigate = useNavigate();
  const [{ user }] = useContext(DataContext);

  useEffect(() => {
    if (!user) {
      navigate('/Signup', { state: { msg, redirect } });
    }
  }, [user, navigate, redirect]);

  // Only render children if the user is logged in
  return user ? <>{children}</> : null;
}

export default ProtectPayment;