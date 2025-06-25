import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../src/components/Header/Header';
import '@testing-library/jest-dom';
import 'jest-styled-components';


describe('Header Component Responsiveness', () => {
  it('should have the correct CSS rules for desktop and mobile views', () => {
    const { getByTestId } = render(<Header />);

    const desktopLogo = getByTestId('desktop-logo');
    const mobileLogo = getByTestId('mobile-logo');
    const ajudaButton = getByTestId('ajuda-button');


    expect(desktopLogo).not.toHaveStyleRule('display', 'none');
    expect(desktopLogo).toHaveStyleRule('display', 'none', {
      media: '(max-width: 768px)',
    });


    expect(mobileLogo).toHaveStyleRule('display', 'none');
    expect(mobileLogo).toHaveStyleRule('display', 'block', {
      media: '(max-width: 768px)',
    });


    expect(ajudaButton).not.toHaveStyleRule('display', 'none');
    expect(ajudaButton).toHaveStyleRule('display', 'none', {
      media: '(max-width: 768px)',
    });
  });

    it('should navigate to /ajuda when Ajuda button is clicked', async () => {
      render(<Header />);
      const ajudaLink = screen.getByRole('link', { name: /ajuda/i });
      expect(ajudaLink).toHaveAttribute('href', '/ajuda');
    });


  it('should have accessible aria-labels and alt attributes', () => {
    render(<Header />);

    const desktopLogo = screen.getByTestId('desktop-logo');
    expect(desktopLogo).toHaveAttribute('alt');
    expect(desktopLogo).toHaveAttribute('aria-label', expect.stringContaining('Lacrei Saúde'));

    const mobileLogo = screen.getByTestId('mobile-logo');
    expect(mobileLogo).toHaveAttribute('alt');
    expect(mobileLogo).toHaveAttribute('aria-label', expect.stringContaining('Lacrei Saúde'));

    const ajudaButton = screen.getByTestId('ajuda-button');
    expect(ajudaButton).toHaveAttribute('aria-label', expect.stringContaining('Ajuda'));
  });


});