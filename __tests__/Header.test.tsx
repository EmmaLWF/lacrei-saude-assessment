import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../src/components/Header/Header';
import '@testing-library/jest-dom';
import 'jest-styled-components';


describe('Header Component Responsiveness', () => {

  it('should have the correct CSS rules for desktop and mobile views', () => {
    render(<Header />);

    const ajudaButton = screen.getByRole('link', { name: 'Ajuda' }).parentElement;
    const homeButton = screen.getByAltText('Logo').parentElement?.parentElement;
    const mobileTitle = screen.getByText('Lacrei Saúde');

    expect(homeButton).not.toHaveStyleRule('display', 'none');
    
    expect(ajudaButton).not.toHaveStyleRule('display', 'none');

    expect(mobileTitle).toHaveStyleRule('display', 'none');

    expect(homeButton).toHaveStyleRule('display', 'none', {
      media: '(max-width: 768px)',
    });

    expect(ajudaButton).toHaveStyleRule('display', 'none', {
      media: '(max-width: 768px)',
    });
    
    expect(mobileTitle).toHaveStyleRule('display', 'block', {
      media: '(max-width: 768px)',
    });
  });
});