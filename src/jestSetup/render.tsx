import React, { ReactElement, FC } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import '@testing-library/jest-dom';

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export * from '@testing-library/user-event';
export * as preview from 'jest-preview';
export { customRender as render };
