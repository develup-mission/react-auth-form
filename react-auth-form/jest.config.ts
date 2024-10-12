import type { Config } from "jest";

const config: Config = {
  testEnvironment: "jsdom", // 테스트 시 jsdom 환경 사용
  preset: "ts-jest", // TypeScript 사용
  transform: {
    ".+\\.(css|styl|less|sass|scss|png|jpg|svg|ttf|woff|woff2)$": "jest-transform-stub", // nonJS 파일 처리
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"], // 모든 테스트 파일에 jest-dom import
  testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[tj]s?(x)"], // 검사할 파일 형식 정의
  clearMocks: true, // 모든 테스트 실행 전 자동으로 mock 호출, 인스턴스, 컨텍스트, 결과값 클리어
  collectCoverage: true, // 테스트 실행 동안 커버리지 정보 수집
  coverageProvider: "v8", // 커버리지 확인을 위해 사용할 프로바이더
  coverageReporters: ["text"], // 커버리지를 콘솔에 텍스트로 출력
  moduleNameMapper: {
    "^@public/(.*)$": "<rootDir>/public/$1",
  },
};

export default config;
