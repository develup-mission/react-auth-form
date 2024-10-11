import { useState } from 'react';

export const usePassword = () => {
  const [password, setPassword] = useState('');
  const [isValidPasswordInput, setIsValidPasswordInput] = useState(false);

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    handleIsValidPassword(e.target.value);
  };

  const handleIsValidPassword = (passwordValue: string) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/;
    setIsValidPasswordInput(passwordRegex.test(passwordValue));
  };

  return {
    password,
    isValidPasswordInput,
    handlePassword,
  };
};
