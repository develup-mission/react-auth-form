# 리액트 회원가입/로그인 폼

<img width="236" alt="스크린샷 2024-08-19 오후 3 59 09" src="https://github.com/user-attachments/assets/6884123d-dcec-49b2-ae5f-5a4ea87000bd">

> 이 이미지는 예시 이미지입니다. 이러한 디자인의 형태로 만들어도 좋고, 커스텀 하셔도 좋습니다. 다만 밑의 기능 요구사항은 충족하셔서 미션 진행해주세요.

## 🚀 진행 방식

1. 미션 진행은 [미션 진행 가이드 문서](https://github.com/develup-mission/docs/blob/main/mission-guide.md)를 따른다.

## 💻 기능 요구 사항

1. 입력 받아야하는 값은 `이메일`, `비밀번호`, `비밀번호 확인` 이다.
   각각의 유효성 검사는 다음과 같다.
   - 이메일 입력은 이메일의 형식에 맞춰야한다. 형식에 맞지 않는다면 사용자에게 알려준다.
   - 비밀번호는 대,소문자 + 특수문자가 섞여서 8자 이상이어야한다.
   - 비밀번호 확인 섹션은 비밀번호 입력값과 같아야한다.
2. 상단에 위치한 로그인 버튼을 누르면 버튼의 텍스트가 `로그인`, 회원가입 버튼을 누르면 버튼의 텍스트가 `회원가입`으로 변한다.
3. 세개의 입력 값중에 하나라도 유효하지 않을시에 사용자에게 알린다. (단순 텍스트여도 좋고 alert여도 좋습니다.)
4. 제출 버튼을 눌렀을때 입력 값을 담은 `alert`창이 띄워져야한다.

## ✅ 프로그래밍 요구사항

1. RTL(React Testing Library)을 활용하여 테스트 코드를 작성한다.

2. 반복되는 컴포넌트에 대한 재사용성을 높인다.

3. Github pages를 활용한 배포 링크를 PR 본문에 추가해야한다.
