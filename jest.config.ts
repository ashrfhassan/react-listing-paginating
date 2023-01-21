import { pathsToModuleNameMapper } from 'ts-jest';
import { compilerOptions } from './tsconfig.json';

export default {
  clearMocks: true,

  collectCoverage: true,

  collectCoverageFrom: ['**/__tests__/**/*.[jt]s?(x)', '!**/node_modules/**'],

  coverageDirectory: 'coverage',

  coverageProvider: 'v8',

  preset: 'ts-jest',

  setupFiles: ['jest-canvas-mock'],

  // setupFilesAfterEnv: ['<rootDir>/setupTests.js'],

  moduleDirectories: ['node_modules'],

  testEnvironment: 'jsdom',

  testPathIgnorePatterns: ['<rootDir>/node_modules/'],

  testMatch: ['**/__tests__/**/*.[jt]s?(x)'],

  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$',
  ],

  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest'],
    '^.+\\.(scss|sass|less)$': 'jest-preview/transforms/css',
    '^.+\\.css$': 'jest-transform-css',
    '^(?!.*\\.(js|jsx|mjs|cjs|ts|tsx|css|json)$)':
      'jest-preview/transforms/file',
  },

  moduleNameMapper: {
    '^.+\\.(sass|scss)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    ...pathsToModuleNameMapper(compilerOptions.paths, {
      prefix: '<rootDir>/src',
    }),
  },
};
