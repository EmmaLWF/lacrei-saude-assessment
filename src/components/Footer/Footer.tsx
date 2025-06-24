'use client'
import React from 'react';
import styled from 'styled-components';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaRegEnvelope } from 'react-icons/fa';


const StyledFooter = styled.footer`
  background-color: #fff;
  padding: 4rem 5% 1rem;
  color: #FFFFFF;
`;

const MainFooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2.5rem;
  margin-bottom: 3rem;
  border-bottom: 1px solid #B2DFD0;
  padding-bottom: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ColumnTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: bold;
  color: #131313;
  margin: 0 0 0.5rem 0;
`;

const FooterLink = styled.a`
  color: #404040;
  text-decoration: none;
  font-size: 1rem;

  &:hover {
    text-decoration: underline;
  }
`;

const FooterLogo = styled.img`
  height: 35px;
  align-self: flex-start;

  @media (max-width: 768px) {
    display: none;
  }
`;

const SocialIconsContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 1rem;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialIconLink = styled.a`
  color: #018762;
  font-size: 1.5rem;
`;

const Disclaimer = styled.p`
  font-size: 0.8rem;
  color: #737373;
  line-height: 1.5;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Copyright = styled.p`
  font-size: 0.8rem;
  color: #737373;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;



const Footer = () => {
    return (
        <StyledFooter>
            <MainFooterGrid>
                <FooterColumn>
                    <FooterLogo 
                        src="https://lacreisaude.com.br/_next/static/media/logo_lacrei_desktop.7ae004ab.svg" 
                        alt="Logo Lacrei Saúde"
                    />
                    <SocialIconsContainer>
                        <SocialIconLink href="https://www.facebook.com/lacrei.saude/"><FaFacebookF /></SocialIconLink>
                        <SocialIconLink href="https://www.instagram.com/lacrei.saude/#"><FaInstagram /></SocialIconLink>
                        <SocialIconLink href="https://www.linkedin.com/company/lacreisaude/"><FaLinkedinIn /></SocialIconLink>
                        <SocialIconLink href="mailto:contato@lacreisaude.com.br"><FaRegEnvelope /></SocialIconLink>
                    </SocialIconsContainer>
    
                </FooterColumn>
                <FooterColumn>
                    <ColumnTitle>Lacrei Saúde</ColumnTitle>
                    <FooterLink href="https://lacreisaude.com.br/quem-somos/">Quem Somos</FooterLink>
                    <FooterLink href="https://lacreisaude.com.br/quem-somos/#proposito">Nosso Propósito</FooterLink>
                </FooterColumn>
                <FooterColumn>
                    <ColumnTitle>Saúde</ColumnTitle>
                    <FooterLink href="https://paciente.lacreisaude.com.br/">Buscar atendimento</FooterLink>
                    <FooterLink href="https://profissional.lacreisaude.com.br/">Oferecer atendimento</FooterLink>
                </FooterColumn>
                <FooterColumn>
                    <ColumnTitle>Segurança e Privacidade</ColumnTitle>
                    <FooterLink href="https://lacreisaude.com.br/politica-de-privacidade/">Política de Privacidade</FooterLink>
                    <FooterLink href="https://lacreisaude.com.br/termos-de-uso/">Termos de Uso</FooterLink>
                </FooterColumn>
            </MainFooterGrid>

            <Disclaimer>A Lacrei Saúde não oferece tratamento médico emergencial. Em caso de emergência procure o hospital mais próximo. Em caso de auxílio psicológico, ligue para 188 (CVV) ou acesse o site www.cvv.org.br</Disclaimer>
            <Copyright>Copyright © 2024 Lacrei Saúde. Todos os direitos reservados. CNPJ: 51.265.351/0001-65</Copyright>
        </StyledFooter>
    )
}

export default Footer;