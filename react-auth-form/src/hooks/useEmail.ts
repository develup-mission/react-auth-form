import { useState } from 'react';
import { isValidEmail } from '../utils/isValidEmail';

export const useEmail = () => {
  const [email, setEmail] = useState('');
  const [isValidEmailInput, setIsValidEmailInput] = useState(false);

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    handleIsValidEmail(e.target.value);
  };

  const handleIsValidEmail = (emailValue: string) => {
    setIsValidEmailInput(isValidEmail(emailValue));
  };

  return {
    email,
    isValidEmailInput,
    handleEmail,
  };
};
