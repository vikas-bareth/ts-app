import React from 'react';

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }:AuthLayoutProps):JSX.Element => {
  return (
    <div className="min-h-screen flex">
      <div className="w-1/2 bg-purple-600 flex items-center justify-center">
        <div className="text-center">
          <img src="https://dashboard.mysellercentral.com/png/ecommerce.png" alt="Login Illustration" className="mb-4" />
          <h1 className="text-white text-2xl font-bold">Welcome!</h1>
          <p className="text-purple-200">Your ultimate smart E-commerce solution provider...</p>
        </div>
      </div>
      <div className="w-1/2 flex items-center justify-center p-10">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
