import { render, screen } from '@testing-library/react';
import Home from '../src/app/page';
import '@testing-library/jest-dom';
import { useRouter } from 'next/navigation';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

describe('Home page', () => {
  it('should render Conhecer button', () => {
    render(<Home />);
    const myEle = screen.getByRole('link', { name: /conhecer/i });
    expect(myEle).toBeInTheDocument();
  });

  it('should navigate to /quem-somos/ when Conhecer button is clicked', async () => {
    const push = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({ push });
    render(<Home />);
    const conhecerLink = screen.getByRole('link', { name: /conhecer/i });
    expect(conhecerLink).toHaveAttribute('href', 'https://lacreisaude.com.br/quem-somos/');
  });

  it('should have accessible roles and labels', () => {
    render(<Home />);

    expect(screen.getByRole('main')).toBeInTheDocument();

    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
    expect(screen.getAllByRole('heading', { level: 2 }).length).toBeGreaterThan(0);

    const images = screen.getAllByRole('img');
    images.forEach(img => {
      expect(img).toHaveAttribute('alt');
      expect(img.getAttribute('alt')).not.toBe('');
    });

    const links = screen.getAllByRole('link');
    links.forEach(link => {
      expect(link).toHaveAccessibleName();
    });
  });

  it('should have correct aria-labels on key elements', () => {
    render(<Home />);
    // Main action buttons
    const pacientesButton = screen.getByRole('link', { name: /Ir para página de login do pacientes/i });
    expect(pacientesButton).toHaveAttribute('aria-label', expect.stringContaining('Ir para página de login do pacientes'));
    const profissionaisButton = screen.getByRole('link', { name: /Ir para página de login do profissionais da saúde/i });
    expect(profissionaisButton).toHaveAttribute('aria-label', expect.stringContaining('Ir para página de login do profissionais da saúde'));
    // Conhecer button
    const conhecerButton = screen.getByRole('link', { name: /conhecer/i });
    expect(conhecerButton).toHaveAttribute('aria-label', expect.stringContaining('Conhecer'));
    // Card icons and about image
    const handshakeIcon = screen.getByLabelText(/ícone de aperto de mãos/i);
    expect(handshakeIcon).toBeInTheDocument();
    const heartIcon = screen.getByLabelText(/ícone de coração/i);
    expect(heartIcon).toBeInTheDocument();
    const shieldIcon = screen.getByLabelText(/ícone de escudo/i);
    expect(shieldIcon).toBeInTheDocument();
    const aboutImg = screen.getByLabelText(/pessoas segurando a bandeira do arco-íris/i);
    expect(aboutImg).toBeInTheDocument();
  });
});
