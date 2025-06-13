import {render, screen } from '@testing-library/react';
import Home from '../src/app/page';
import '@testing-library/jest-dom';


it('should work Conhecer button', () => {
  render(< Home />)

  const myEle = screen.getByRole('link', { name: /conhecer/i });

  expect(myEle).toBeInTheDocument();
});
