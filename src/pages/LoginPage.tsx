import React from 'react';
import AuthLayout from '../components/Layouts/AuthLayout';
import Login from '../features/Auth/Login';

const LoginPage = ():JSX.Element => {
  const handleLogin = (data: { email: string; password: string }) => {
    // Perform login logic here (API call, state update, etc.)
    console.log('Login data:', data);
  };

  return (
    <AuthLayout>
      <Login onLogin={handleLogin} />
    </AuthLayout>
  );
};

export default LoginPage;
