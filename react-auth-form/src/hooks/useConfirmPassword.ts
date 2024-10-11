import { useState } from 'react';

export const useConfirmPassword = (password: string) => {
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isValidConfirmPassword, setIsValidConfirmPassword] = useState(false);

  const handleConfirmPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
    handleIsValidConfirmPassword(e.target.value);
  };

  const handleIsValidConfirmPassword = (confirmPasswordValue: string) => {
    setIsValidConfirmPassword(confirmPasswordValue === password);
  };

  return {
    confirmPassword,
    isValidConfirmPassword,
    handleConfirmPassword,
  };
};
