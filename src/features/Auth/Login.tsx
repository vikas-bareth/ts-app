import React, { useState } from 'react';
import InputField from '../../components/Form/InputField';
import Button from '../../components/Form/Button';
import { LoginFormData } from './Auth.types';
import PasswordInputField from '../../components/Form/PasswordField';

interface LoginProps {
  onLogin: (data: LoginFormData) => void;
}

const Login = ({ onLogin }:LoginProps):JSX.Element => {
  const [formData, setFormData] = useState<LoginFormData>({ email: '', password: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full">
      <h2 className="text-xl font-bold mb-6 text-center">Login</h2>
      <InputField
        label="Email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
    <PasswordInputField name='password' label='password' onChange={handleChange} required={true} />
      <Button text="Login" type="submit" />
      <div className="text-right mt-4">
        <a href="/forgot-password" className="text-sm text-indigo-600 hover:underline">
          Forgot Password?
        </a>
      </div>
    </form>
  );
};

export default Login;
