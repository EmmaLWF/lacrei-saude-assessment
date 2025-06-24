'use client';
import React from 'react';
import styled from 'styled-components';
import Link from 'next/link'; 
import HelpIcon from '../../../public/help-icon.svg'
import Image from 'next/image';

const StyledHomeButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;
  cursor: pointer;


  @media (max-width: 768px) {
    display: none;
  }

`;


const AjudaButtonLink = styled.button`
  background: none;
  border: none;
  color: #018762;
  padding: 16px 32px;
  cursor: pointer;
  font-weight: regular;
  font-size: 12px;
  line-height: 150%;
  justify-content: center;
  align-items: center;
  min-width: 24px;
  min-height: 24px;
  border-radius: 8px;
  width: 174px;
  height: 48px;

  & a {
    display: inline-block;  
    color: #018762;
    text-decoration: none;
    font-weight: bold;
    padding: 12px 24px 12px 24px;
    border: 1px solid transparent;
    border-radius: 5px;
  }

  &:hover a {
    background-color: #F0F0F0;
  }

   &:active a {
    border: 2px solid #4D8ACB;
  }

   @media (max-width: 768px) {
    display: none;
    min-width: 44px;
    min-height: 44px;
  }
`;

const StyledHeader = styled.header`
  padding: 24px 122px 24px 122px;
  background: linear-gradient(105.43deg, #F5FFFB 14.39%, #FFFFFF 84.69%);
`;

const LogoImage = styled.img`
  height: 35px;
  display: block;
`;

const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MobileLogo = styled.button`
  display: none;
  background-color: transparent;
  border: none;
  padding: 0;
  cursor: pointer;

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

interface HomeButtonProps {
    children?: React.ReactNode;
}

const HomeButton = ({ children }: HomeButtonProps) => {
    return (
        <StyledHomeButton>
            <Link href="/">{children}</Link>
        </StyledHomeButton>
    )
}

const AjudaButton = () => {
    return (
        <AjudaButtonLink>
            <Link href="/ajuda">Ajuda</Link>
        </AjudaButtonLink>
    )
}

const Header = () => {
    return (
        <StyledHeader>
            <NavBar>
                <HomeButton>
                    <LogoImage src="https://lacreisaude.com.br/_next/static/media/logo_lacrei_desktop.7ae004ab.svg" alt="Logo" />
                </HomeButton>
                
                <AjudaButton/>
                
                  <MobileLogo>
                    <Link href="/">
                      <Image
                          src="https://lacreisaude.com.br/_next/static/media/logo_lacrei_mobile.1f3a65cb.svg"
                          alt="Lacrei Saúde Logo"
                          width={48} // this is deforming the mobile header logo, but is set as the Guia de Estilo Marshall indicates.
                          height={16} // this is deforming the mobile header logo, but is set as the Guia de Estilo Marshall indicates.
                        />
                    </Link>
                  </MobileLogo>
                
                <MobileHelpIcon href="/ajuda">
                    <Image 
                      src={HelpIcon}
                      alt="ajuda"
                      
                      width={48} // this is deforming the mobile header help icon, but is set as the Guia de Estilo Marshall indicates.
                      height={48} // this is deforming the mobile header help icon, but is set as the Guia de Estilo Marshall indicates.
                    />
                </MobileHelpIcon>
            </NavBar>
        </StyledHeader>
    )
}

export default Header;

