'use client';
import React from 'react';
import styled from 'styled-components';
import Link from 'next/link'; 
import { FaQuestionCircle } from 'react-icons/fa';


const StyledHomeButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;
  cursor: pointer;

  @media (max-width: 768px) {
    display: none;
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

const StyledAjudaButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  font-family: sans-serif;

  & a {
    color: #555;
    text-decoration: none;
    font-size: 1rem;
    font-weight: bold;
    padding: 8px;
  }

  &:hover a {
    color: #018762;
  }

   @media (max-width: 768px) {
    display: none;
  }
`;


const AjudaButton = () => {
    return (
        <StyledAjudaButton>
            <Link href="/ajuda">Ajuda</Link>
        </StyledAjudaButton>
    )
}

const StyledHeader = styled.header`
  background-color: #fff;
  border-bottom: 1px solid #f0f0f0;
  padding: 1rem 5%;
`;

const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  .logo {
    height: 35px;
    display: block;
  }
`;

const MobileTitle = styled.span`
  display: none;
  font-size: 1.5rem;
  font-weight: bold;
  color: #018762;
  font-family: sans-serif;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileHelpIcon = styled.a`
  display: none;
  color: #018762;
  font-size: 1.8rem;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Header = () => {
    return (
        <StyledHeader>
            <NavBar>
                <HomeButton>
                    <img src="https://lacreisaude.com.br/_next/static/media/logo_lacrei_desktop.7ae004ab.svg" alt="Logo" className="logo" />
                </HomeButton>
                <AjudaButton/>

                <MobileTitle>Lacrei Saúde</MobileTitle>
                <MobileHelpIcon href="/ajuda">
                  <FaQuestionCircle />
                </MobileHelpIcon>
            </NavBar>
        </StyledHeader>
    )
}

export default Header;

