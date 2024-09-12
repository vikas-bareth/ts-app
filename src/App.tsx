import React from 'react';
import './App.css';
import Login from './features/Auth/Login';
import { LoginFormData } from './components/Form/Form.types';
import AuthLayout from './components/Layouts/AuthLayout';

function App():JSX.Element {
  const handleLogin = (data:LoginFormData):void => {
    console.log("handler login data",data)
    //handle login logic
  }
  return (
    <div>
      <AuthLayout children={<Login onLogin={handleLogin} />} />
    </div>
  );
}

export default App;
