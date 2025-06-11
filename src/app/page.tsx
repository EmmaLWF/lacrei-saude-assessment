'use client'
import React from 'react';
import styled from 'styled-components';
import Link from 'next/link'; 

const MainContainer = styled.main`
  font-family: sans-serif;
`;

const Section = styled.section`
  width: 100%;
  padding: 4rem 5%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 900px) {
    padding: 3rem 1.5rem;
  }
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

const HeroBackgroundImage = styled.img`
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
  font-weight: 700;
  font-size: 3rem;
  line-height: 1.2;
  color: rgb(1, 135, 98);
  margin: 0 0 1rem 0;

  @media (max-width: 900px) {
    font-size: 2.2rem;
  }
`;

const HeroText = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 1.5;
  margin: 0 0 2rem 0;
  color: rgb(81, 81, 81);

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

const HeroButton = styled.button`
  background-color: #018762;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 14px 28px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #006d4f;
  }

  & a {
      color: inherit;
      text-decoration: none;
    }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #333;
  margin: 0;
  text-align: center;

  @media (max-width: 900px) {
    font-size: 2rem;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1.25rem;
  color: #555;
  margin-top: 0.5rem;
  text-align: center;
`;

const SeparatorLine = styled.div`
  width: 8rem;
  height: 4px;
  background: rgb(1, 135, 98);
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

const FeatureCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: #F7F5FA;
  padding: 2.5rem 2rem;
  border-radius: 8px;
`;

const CardIcon = styled.img`
  height: 60px;
  margin-bottom: 1.5rem;
`;

const CardTitle = styled.h3`
  font-family: Nunito, sans-serif;
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: 2.4rem;
  margin-top: 0.5rem;
  background: linear-gradient(105.43deg, rgb(1, 131, 131) 14.39%, rgb(1, 70, 135) 84.69%) text;
  -webkit-text-fill-color: transparent;
  // margin: 0 0 1rem 0;
`;

const CardText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #555;
  margin: 0;
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
  border-radius: 8px;
  object-fit: cover;
  z-index: 1; 

  @media (max-width: 950px) {
  display: none;
`;

const AboutTextBlock = styled.div`
  border: 1px solid rgb(220, 220, 220);
  border-radius: 8px;
  padding: 2.5rem;
  background-color: white;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  width: 50%;
  margin-left: -2%;
  z-index: 2;

  @media (max-width: 900px) {
  width: 100%;
  margin-left: 0;
  z-index: auto;
`;

const AboutButton = styled.button`
    padding: 12px 28px;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    background-color: #ffffff;
    color: #018762;
    border: 2px solid #018762;
    transition: all 0.3s ease;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    margin-top: 1.5rem;

    &:hover {
      background-color: #018762;
      color: #ffffff;
      transform: translateY(-3px);
      box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.15);
    }

    & a {
      color: inherit;
      text-decoration: none;
    }
`;


export default function Home() {
  return (
   <MainContainer>
    <HeroSection>
      <HeroBackgroundImage src={'https://lacreisaude.com.br/_next/static/media/greetings-banner-image.3ec83257.png'} alt="Fundo com cores da bandeira LGBTQIAPN+ e um estetoscópio"/>
      <HeroTextBlock>
        <HeroTitle>Olá, você está na Lacrei Saúde!</HeroTitle>
        <HeroText>Conectamos pessoas LGBTQIAPN+ com profissionais de saúde qualificados, proporcionando experiências de cuidado seguras e inclusivas.</HeroText>
        <HeroButtonsContainer>
          <HeroButton>
            <Link href='https://paciente.lacreisaude.com.br/'>Para pacientes</Link>
          </HeroButton>
          <HeroButton>
          <Link href='https://profissional.lacreisaude.com.br/'>Para profissionais</Link>
          </HeroButton>
        </HeroButtonsContainer>
      </HeroTextBlock>
    </HeroSection>

    <Section>
      <SectionTitle>Conheça o jeito Lacrei Saúde de cuidar</SectionTitle>
      <SeparatorLine />
      <SectionSubtitle>Atendimento de qualidade e inclusivo</SectionSubtitle>
      <ThreeItemsGrid>
        <FeatureCard>
          <CardIcon src={'https://lacreisaude.com.br/_next/static/media/handshake-icon.422966a2.svg'} alt="Ícone de aperto de mãos"/>
          <CardTitle>Inclusão</CardTitle>
          <CardText>Nossa plataforma digital é acessível e atendemos toda comunidade LGBTQIAPN+.</CardText>
        </FeatureCard>
        <FeatureCard>
          <CardIcon src={'https://lacreisaude.com.br/_next/static/media/heart-icon.081c2229.svg'} alt="Ícone de coração"/>
          <CardTitle>Acolhimento</CardTitle>
          <CardText>As pessoas profissionais da saúde entendem as necessidades da comunidade LGBTQIAPN+.</CardText>
        </FeatureCard>
        <FeatureCard>
          <CardIcon src={'https://lacreisaude.com.br/_next/static/media/shield-icon.54d509f2.svg'} alt="Ícone de escudo"/>
          <CardTitle>Segurança</CardTitle>
          <CardText>Protegemos seus dados e validamos pacientes e profissionais da saúde.</CardText>
        </FeatureCard>
     </ThreeItemsGrid>
    </Section>
    
    <Section style={{ backgroundColor: '#F7F5FA' }}>
      <AboutSectionGrid>
        <AboutImage src={'https://lacreisaude.com.br/_next/static/media/people-holding-flag.8d096827.png'} alt="Pessoas segurando a bandeira do arco-íris"/>
        <AboutTextBlock>
          <SectionTitle style={{ fontSize: '2.5rem' }}>O que é a Lacrei Saúde?</SectionTitle>
          <SeparatorLine style={{ margin: '1rem 0' }}/>
          <CardText style={{ textAlign: 'left' }}>O nosso papel é construir a conexão entre as pessoas da comunidade LGBTQIAPN+ que precisam de atendimento clínico com profissionais da saúde.</CardText> 
          <CardText style={{ textAlign: 'left', marginTop: '1rem' }}>Tudo isso com segurança, inclusão e representatividade.</CardText>
          <CardText style={{ textAlign: 'left', marginTop: '1rem' }}>Surgimos da esperança de ter um atendimento clínico qualificado, seguro e empático para todas as pessoas.</CardText>
          <AboutButton>
            <Link href='https://lacreisaude.com.br/quem-somos/'>Conhecer</Link>
          </AboutButton>
        </AboutTextBlock>
      </AboutSectionGrid>
    </Section>
   </MainContainer>
  );
}