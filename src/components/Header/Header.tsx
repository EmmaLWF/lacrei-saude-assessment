'use client';
import React from 'react';
import styled from 'styled-components';
import Link from 'next/link'; 
import Image from 'next/image';



const StyledHeader = styled.header`
  padding: 24px 122px;
  background: linear-gradient(105.43deg, #F5FFFB 14.39%, #FFFFFF 84.69%);
  margin-bottom: 48px;

  @media (max-width: 900px) {
    padding: 24px;
    margin-bottom: 24px;
  }
`;

const LogoImage = styled.img`
  display: block;
  width: 202.92px;
  height: 24px;

  @media (max-width: 900px) {
    display: none;
  }
`;

const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MobileLogo = styled.img`
  display: none;
  background-color: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  justify-content: center;
  align-items: center;

  @media (max-width: 900px) {
    display: block;
  }

`;

const MobileHelpIcon = styled.a`
  display: none;
  width: 48px;
  height: 48px;
  background-color: none;
  border-radius: 8px;
  justify-content: center;
  align-items: center;

  @media (max-width: 900px) {
    display: flex;

    &:active {
    background-color: #B2DFD0; 
    }

    &:focus {
      background-color: #FFFFFF;
      outline: none;
      border: 2px solid #4D8ACB;
      border-radius: 8px;

    }
  }
`;


const AjudaButtonLink = styled(Link)`
  background: none;
  border: 2px solid transparent;
  color: #018762;
  border-radius: 8px;
  border-with: none;
  height: 48px;
  font-size: 18px;
  font-weight: bold;
  line-height: 150%;
  text-align: center;
  padding: 16px 32px 16px 32px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #DFF2ED;
    color: #007756;
  }

   &:active {
    background-color: #B2DFD0; 
    color: #007756;
  }

  &:focus {
    background-color: none;
    color: #018762;
    outline: none;
    border: 2px solid #4D8ACB;
    border-radius: 8px;

  }

   @media (max-width: 900px) {
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

