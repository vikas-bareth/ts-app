import React, { useState } from 'react';

interface PasswordInputFieldProps {
  label: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
}

const PasswordInputField = ({
  label,
  name,
  onChange,
  placeholder,
  required = false,
}: PasswordInputFieldProps): JSX.Element => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = (): void => {
    setShowPassword(prevState => !prevState);
  };

  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="relative">
        <input
          type={showPassword ? 'text' : 'password'}
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute inset-y-0 right-0 pr-3 flex items-center"
        >
          <svg
            className="h-5 w-5 text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={showPassword ? 'M12 3v18m9-9H3' : 'M12 3v18m9-9H3M12 3c6.627 0 12 6.273 12 12s-5.373 12-12 12S0 21.727 0 15 5.373 3 12 3z'}
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default PasswordInputField;
