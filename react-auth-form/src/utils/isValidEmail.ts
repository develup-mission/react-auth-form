import { REGEX } from '../constants/regex';

export const isValidEmail = (email: string) => {
  return REGEX.email.test(email);
};
