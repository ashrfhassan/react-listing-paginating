import React from 'react';
import {
  render,
  preview,
  waitFor,
  screen,
  fireEvent,
  act,
} from '../../jestSetup/render';
import { Pagination } from '../../components/pagination';

describe('testing login form behaviour for arabic', () => {
  beforeAll(() => {
    import('../../jestSetup/bootstrap.rtl.min.css');
    const rootHtml = document.getElementsByTagName('html')[0];
    rootHtml.setAttribute('dir', 'rtl');
  });
  it('should render', async () => {
    const { container } = render(
      <Pagination
        totalItems={1000}
        currentPage={1}
        itemsPerPage={20}
        displayedNumbersCount={6}
        previousBtnContent={'previous'}
        nextBtnContent={'next'}
      />
    );
    const pageTwoButton = container.querySelectorAll(
      'button'
    )[1] as HTMLInputElement;
    await act(() => {
      fireEvent.click(pageTwoButton);
    });
    preview.debug();
    await waitFor(() => {
      expect(pageTwoButton).toHaveClass('active');
    });
  });
});

describe('testing login form behaviour for english', () => {
  beforeAll(() => {
    import('../../jestSetup/bootstrap.min.css');
    const rootHtml = document.getElementsByTagName('html')[0];
    rootHtml.setAttribute('dir', 'ltr');
  });
  it('should render', async () => {
    render(
      <Pagination
        totalItems={1000}
        currentPage={1}
        itemsPerPage={20}
        displayedNumbersCount={6}
        previousBtnContent={'previous'}
        nextBtnContent={'next'}
      />
    );
    const pageTwoButton = screen.getByText('2');
    await act(() => {
      fireEvent.click(pageTwoButton);
    });
    preview.debug();
    await waitFor(() => {
      expect(pageTwoButton).toHaveClass('active');
    });
  });
});
