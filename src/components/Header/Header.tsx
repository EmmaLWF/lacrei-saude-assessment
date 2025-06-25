'use client';
import React from 'react';
import styled from 'styled-components';
import Link from 'next/link'; 
import Image from 'next/image';



const StyledHeader = styled.header`
  padding: 24px;
  background: linear-gradient(105.43deg, #F5FFFB 14.39%, #FFFFFF 84.69%);
`;

const LogoImage = styled.img`
  height: 35px;
  display: block;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  // height: 96px;
`;

const MobileLogo = styled.img`
  display: none;
  background-color: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  min-width: 24px;
  min-height: 24px;
  border-radius: 8px;

  @media (max-width: 768px) {
    display: block;
  }

`;

const MobileHelpIcon = styled.a`
  display: none;
  font-color: #018762;

  @media (max-width: 768px) {
    display: block;
  }
`;


const AjudaButtonLink = styled.a`
  background: none;
  border: 1px solid transparent;
  color: #018762;
  cursor: pointer;
  font-weight: regular;
  display: flex;
  font-size: 18px;
  line-height: 150%;
  justify-content: center;
  align-items: center;
  min-width: 24px;
  min-height: 24px;
  border-radius: 8px;
  width: 174px;
  height: 48px;
  text-decoration: none;
  font-weight: bold;
  padding: 12px 24px;
  border: 1px solid transparent;
  border-radius: 5px;

  &:hover {
    background-color: #F0F0F0;
  }

  &:focus-visible {
    outline: none;
    border: 2px solid #4D8ACB;
  }

   @media (max-width: 768px) {
    display: none;
    min-width: 44px;
    min-height: 44px;
  }
`;

const Header = () => {
    return (
        <StyledHeader>
            <NavBar>
                <Link href="/">
                    <LogoImage data-testid="desktop-logo" src="https://lacreisaude.com.br/_next/static/media/logo_lacrei_desktop.7ae004ab.svg" alt="Logo" aria-label="Ir para a página inicial da Lacrei Saúde" />
                    <MobileLogo data-testid="mobile-logo"
                          src="https://lacreisaude.com.br/_next/static/media/logo_lacrei_mobile.1f3a65cb.svg"
                          alt="Logo mobile da Lacrei Saúde"
                          width={144} 
                          height={16} 
                          aria-label="Ir para a página inicial da Lacrei Saúde"
                        />
                </Link>
                
                <AjudaButtonLink
                  data-testid="ajuda-button"
                  aria-label="Ajuda"
                  href="/ajuda"
                >
                  Ajuda
                </AjudaButtonLink>
                
                <MobileHelpIcon href="/ajuda" aria-label="Ajuda">
                    <Image 
                      src="/help-icon.svg"
                      alt="ajuda"
                      width={24} 
                      height={24} 
                    />
                </MobileHelpIcon>
            </NavBar>
        </StyledHeader>
    )
}

export default Header;

