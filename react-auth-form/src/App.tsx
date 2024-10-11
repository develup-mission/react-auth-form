import React, { useState } from 'react';
import { useEmail } from './hooks/useEmail';
import { usePassword } from './hooks/usePassword';
import { useConfirmPassword } from './hooks/useConfirmPassword';

const App: React.FC = () => {
  const { email, isValidEmailInput, handleEmail } = useEmail();
  const { password, isValidPasswordInput, handlePassword } = usePassword();
  const { confirmPassword, isValidConfirmPassword, handleConfirmPassword } =
    useConfirmPassword(password);
  const [isLogin, setIsLogin] = useState<boolean>(false);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isValidEmailInput) {
      alert('올바른 이메일 형식을 입력하세요.');
      return;
    }
    if (!isValidPasswordInput) {
      alert('비밀번호는 대소문자와 특수문자가 포함된 8자 이상이어야 합니다.');
      return;
    }
    console.log(isValidConfirmPassword);
    if (!isValidConfirmPassword) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }
    alert(
      `이메일: ${email}, 비밀번호: ${password}, 비밀번호 확인: ${confirmPassword}`
    );
  };

  const toggleMode = () => {
    setIsLogin((prev) => !prev);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <button type="submit" onClick={toggleMode}>
          {!isLogin ? '회원가입' : '로그인'}
        </button>
        <div>
          <label htmlFor="email">이메일:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmail}
            placeholder="이메일을 입력하세요"
          />
        </div>
        <div>
          <label htmlFor="password">비밀번호:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePassword}
            placeholder="비밀번호를 입력하세요"
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">비밀번호 확인:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={handleConfirmPassword}
            placeholder="비밀번호를 다시 입력하세요"
          />
        </div>
      </form>
    </div>
  );
};

export default App;
