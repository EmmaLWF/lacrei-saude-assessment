'use client'
import React from 'react';
import styled from 'styled-components';
import Link from 'next/link'; 

const MainContainer = styled.main`
  background-color: #FFFFFF;
`;

const HeroSection = styled.div`
  position: relative; 
  width: 100%;
  height: 70vh;

  @media (max-width: 900px) {
    height: auto;
    display: flex;
    flex-direction: column;
  }
`;

const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  @media (max-width: 900px) {
    position: static;
    height: 300px;
  }
`;

const HeroTextBlock = styled.div`
  position: absolute;
  top: 50%;
  left: 10%;
  transform: translateY(-50%);
  max-width: 550px;

  @media (max-width: 900px) {
    position: static;
    transform: none;
    max-width: 100%;
    padding: 2rem 1.5rem;
    text-align: center;
    left: auto;
    top: auto;
  }
`;

const HeroTitle = styled.h1`
  line-height: 1.2;
  color: #018762;
  font-size: 48px;
  font-weight: Bold;
  line-height: 120px; //this is deforming the title, but is set as the Guia de Estilo Marshall indicates.

  @media (max-width: 900px) {
    font-size: 2.2rem;
  }
`;

const HeroText = styled.p`
  color: #515151;
  font-size: 24px;
  font-weight: Regular;
  line-height: 150%;

  @media (max-width: 900px) {
    font-size: 1.1rem;
  }
`;

const HeroButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;

const PrimarySolidButton = styled.button`
  background-color: #018762;
  color: #FFFFFF;
  border: none;
  border-radius: 8px;
  padding: 0px 32px;
  font-size: 18px;
  font-weight: regular;
  line-height: 150%;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s ease;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);
  height: 48px;

  &:hover {
    background-color: #007756;
  }

  & a {
      color: inherit;
      text-decoration: none;
    }
`;

const Section = styled.section<{ $backgroundColor?: string }>`
  width: 100%;
  padding: 4rem 5%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.$backgroundColor || 'transparent'};

  @media (max-width: 900px) {
    padding: 3rem 1.5rem;
    background-color: #FFFFFF;
  }
`;

const SectionOneTitle = styled.h2`
  font-size: 2.5rem;
  color: #131313;
  margin: 0;
  text-align: flex-start;

  @media (max-width: 900px) {
    font-size: 2rem;
  }
`;

const SectionOneSubtitle = styled.p`
  font-size: 1.25rem;
  color: #404040;
  margin-top: 0.5rem;
  text-align: center;
`;

const SeparatorOneDividingLine = styled.div`
  width: 8rem;
  height: 4px;
  background: #018762;
  border-radius: 4px;
  margin: 1rem 0;
`;

const ThreeItemsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  width: 100%;
  max-width: 1100px;
  margin-top: 3rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const CardLacrei = styled.div`
  border-radius: 16px;
  border-color: #CFCFCF;
  border-width: 1px;
  border-style: solid;  
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: #F9F3FF;
  padding: 2.5rem 2rem;
  // size: 356 x 288 px;
  // width: fixed;
  // height: fixed;


`;

const CardIcon = styled.img`
  height: 60px;
  margin-bottom: 1.5rem;
`;

const CardTitle = styled.h3`
  font-size: 24px;
  font-weight: Regular;
  line-height: 150%;
  text-color: #131313;
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: 2.4rem;
  margin-top: 0.5rem;
  background: linear-gradient(105.43deg, #018383 14.39%, #014687 84.69%) text;
  -webkit-text-fill-color: transparent;
`;

const CardText = styled.p<{ $textAlign?: string; $marginTop?: string }>`
  text-color: #2D2D2D;
  font-size: 24px;
  font-weight: Regular;
  line-height: 150%;
  color: #2D2D2D;
  margin: 0;
  text-align: ${(props) => props.$textAlign || 'inherit'};
  margin-top: ${(props) => props.$marginTop || '0'};
`;

const AboutSectionGrid = styled.div`
  display: flex; 
  flex-direction: row;
  align-items: center; 
  width: 100%;
  max-width: 1200px;
  margin: 2rem auto; 
  position: relative;

  @media (max-width: 900px) {
  flex-direction: column; 
  }
  `;

const AboutImage = styled.img`
  width: 55%; 
  border-radius: 16px;
  object-fit: cover;
  z-index: 1; 

  @media (max-width: 950px) {
  display: none;
`;

const AboutTextBlock = styled.div`
  border-radius: 16px;  
  border-color: #CFCFCF;
  border-width: 1px;
  border-style: solid;
  padding: 2.5rem;
  background-color: white;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  width: 50%;
  margin-left: -2%;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 909px) {
    width: 90%;
    margin-left: 0;
    z-index: auto;
  } 
`;

const DefaultOutlineButton = styled.button`  
    padding: 12px 28px;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    background-color: #ffffff;
    color: #018762;
    border: 2px solid #018762;
    transition: all 0.3s ease;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);
    margin-top: 1.5rem;

    &:hover {
      background-color: #007756;
      color: #ffffff;
      transform: translateY(-3px);
      box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.05);
    }

    & a {
      color: inherit;
      text-decoration: none;
    }
`;


export default function Home () {
  return (
   <MainContainer>
    <HeroSection>
      <HeroImage src={'https://lacreisaude.com.br/_next/static/media/greetings-banner-image.3ec83257.png'} alt="Fundo com cores da bandeira LGBTQIAPN+ e um estetoscópio"/>
      <HeroTextBlock>
        <HeroTitle>Olá, você está na Lacrei Saúde!</HeroTitle>
        <HeroText>Conectamos pessoas <strong>LGBTQIAPN+</strong> com profissionais de saúde qualificados, proporcionando experiências de cuidado seguras e inclusivas.</HeroText>
        <HeroButtonsContainer>
          <PrimarySolidButton>
            <Link href='https://paciente.lacreisaude.com.br/'>Para pacientes</Link>
          </PrimarySolidButton>
          <PrimarySolidButton>
          <Link href='https://profissional.lacreisaude.com.br/'>Para profissionais</Link>
          </PrimarySolidButton>
        </HeroButtonsContainer>
      </HeroTextBlock>
    </HeroSection>

    <Section>
      <SectionOneTitle>Conheça o jeito Lacrei Saúde de cuidar</SectionOneTitle>
      <SeparatorOneDividingLine />
      <SectionOneSubtitle>Atendimento de qualidade e inclusivo</SectionOneSubtitle>
      <ThreeItemsGrid>
        <CardLacrei>
          <CardIcon src={'https://lacreisaude.com.br/_next/static/media/handshake-icon.422966a2.svg'} alt="Ícone de aperto de mãos"/>
          <CardTitle>Inclusão</CardTitle>
          <CardText>Nossa plataforma digital é acessível e atendemos toda comunidade LGBTQIAPN+.</CardText>
        </CardLacrei>
        <CardLacrei>
          <CardIcon src={'https://lacreisaude.com.br/_next/static/media/heart-icon.081c2229.svg'} alt="Ícone de coração"/>
          <CardTitle>Acolhimento</CardTitle>
          <CardText>As pessoas profissionais da saúde entendem as necessidades da comunidade LGBTQIAPN+.</CardText>
        </CardLacrei>
        <CardLacrei>
          <CardIcon src={'https://lacreisaude.com.br/_next/static/media/shield-icon.54d509f2.svg'} alt="Ícone de escudo"/>
          <CardTitle>Segurança</CardTitle>
          <CardText>Protegemos seus dados e validamos pacientes e profissionais da saúde.</CardText>
        </CardLacrei>
     </ThreeItemsGrid>
    </Section>
    
    <Section>
      <AboutSectionGrid>
        <AboutImage src={'https://lacreisaude.com.br/_next/static/media/people-holding-flag.8d096827.png'} alt="Pessoas segurando a bandeira do arco-íris"/>
        <AboutTextBlock>
          <SectionOneTitle>O que é a Lacrei Saúde?</SectionOneTitle>
          <SeparatorOneDividingLine />
          <CardText $textAlign="left">O nosso papel é construir a conexão entre as pessoas da comunidade LGBTQIAPN+ que precisam de atendimento clínico com profissionais da saúde.</CardText> 
          <CardText $textAlign="left" $marginTop="1rem">Tudo isso com segurança, inclusão e representatividade.</CardText>
          <CardText $textAlign="left" $marginTop="1rem">Surgimos da esperança de ter um atendimento clínico qualificado, seguro e empático para todas as pessoas.</CardText>
          <DefaultOutlineButton>
            <Link href='https://lacreisaude.com.br/quem-somos/'>Conhecer</Link>
          </DefaultOutlineButton>
        </AboutTextBlock>
      </AboutSectionGrid>
    </Section>
   </MainContainer>
  );
}