'use client'
import React from 'react';
import styled from 'styled-components';
import Link from 'next/link'; 
import QandA from '../../components/AjudaComponents/QandA'

const MainContainer = styled.main`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  max-width: 90rem;
  padding: 0px 7.625rem 4rem;
  margin: 0px auto;
  gap: 2rem;

  @media (max-width: 942px) {
    align-items: center;
    padding: 2rem 1.5rem;
  }
`;

const SearchPath = styled.div`
  font-size: 1rem;
  line-height: 1.6;
  color: #2D2D2D;
  margin: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 942px) {
    flex-wrap: wrap;
  }
`;

const InicioSearchPath = styled.div`
  font-size: 14px;
  font-weight: bold;
  line-height: 1.6;
  color: #2D2D2D;
  margin: 10px;
  text-decoration: none;
  border: 2px solid transparent;

  & a {
    color: inherit;
    text-decoration: none;
  }
`;

const SearchPathIcon = styled.img`
  align-items: center;
  justify-content: flex-end;
  height: 14px;
  width: 14px;
  margin: 10px;
`;

const PageTitles = styled.div`
  width: 100%;
  text-align: left;

  @media (max-width: 942px) {
    text-align: center;
  }
`;

const AjudaTitle = styled.h1`
  font-weight: 700;
  font-size: 3rem;
  line-height: 1.2;
  color: #018762;
  margin: 10px;

  @media (max-width: 942px) {
    font-size: 2.2rem;
  }
`;

const BreadcrumbCurrentPage = styled.span`
  font-size: 14px;
  margin: 10px;
  font-weight: 700;
  line-height: 1.2;
  color: #018762;
`;

const AjudaSubtitle = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #2D2D2D;
  margin: 15px;

  @media (max-width: 942px) {
    font-size: 1rem;
  }
`;

const SectionQuestions = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const ContactSection = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const ContactSectionTitle = styled.h2`
  font-weight: 700;
  font-size: 28px;
  line-height: 1.2;
  color: #018762;
  margin: 10px;
`;

  const ContactButton = styled.button`
  background-color: #018762;
  color: white;
  border: none;
  margin: 20px;
  border-radius: 8px;
  padding: 14px 28px;
  min-width: 250px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
  background-color: #007756;
   }

   & a {
    color: inherit;
    text-decoration: none;
  }

  @media (min-width: 900px) {
    width: 100%;
    max-width: 300px;
  }
`;



const AjudaPage = () => {
    return(
        <MainContainer>
            <SearchPath>
                <InicioSearchPath><Link href={'/'}>Início</Link></InicioSearchPath>
                <SearchPathIcon src="/next-arrow-icon.svg" alt="Ícone do caminho de pesquisa"/>
                <BreadcrumbCurrentPage> Dúvidas Frequentes </BreadcrumbCurrentPage> 
            </SearchPath>
            <PageTitles>
              <AjudaTitle>Dúvidas Frequentes</AjudaTitle> 
              <AjudaSubtitle>Aqui, você encontra as dúvidas mais frequentes!</AjudaSubtitle> 
            </PageTitles>
            
            <SectionQuestions>
              <QandA 
                question="Como faço para me cadastrar na Lacrei Saúde?"
                answer="Na página inicial, clique em “Para pacientes” ou “Buscar atendimento” caso você seja um paciente. Caso você seja um profissional da saúde, clique em “Para profissionais” ou “Oferecer atendimento”."
              />
              <QandA 
                question="Como faço para alterar o meu cadastro?"
                answer="Após o login, na parte superior direita da página clique em “Meu perfil”. Em seguida clique em “Informações pessoais” e altere os dados que desejar. No final basta salvar as alterações realizadas."
              />
              <QandA 
                question="Como faço para excluir meu cadastro na Lacrei Saúde?"
                answer="Após o login, na parte superior direita da página clique em “Meu perfil”. Em seguida, acesse a aba “Privacidade”. Na seção “Minha conta”, clique em “Apagar minha conta”."
              />
              <QandA 
                question="Esqueci minha senha. Como faço para acessar minha conta?"
                answer="Na página de login/cadastro, clique em “Esqueci minha senha”. Preencha o campo com o e-mail que você utilizou para se cadastrar na Lacrei Saúde e clique em “Enviar link”. Você receberá um e-mail com um link para redefinir sua senha."
              />
              <QandA 
                question="Não estou recebendo o e-mail de validação. O que faço?"
                answer="Caso nosso e-mail não esteja na caixa de entrada, confira se o e-mail informado está escrito corretamente. Verifique também as outras pastas, a mensagem pode ter sido movida por um filtro de spam ou regra de e-mail, direcionando para a pasta de spam, lixo eletrônico, itens apagados, arquivo ou e-mail secundário. Caso o problema continue, envie um e-mail para contato@lacreisaude.com.br."
              />
              <QandA 
                question="O link para a minha redefinição de senha ou e-mail expirou. O que devo fazer?"
                answer="Nosso link para redefinições possui um prazo de validade de 24 horas. Isso ajuda a evitar que contas sejam usadas indevidamente."
              />
            </SectionQuestions>

            <ContactSection>
                <ContactSectionTitle>Não encontrou o que procurava?</ContactSectionTitle>
                <ContactButton>
                <Link href="mailto:contato@lacreisaude.com.br">Enviar e-mail</Link>
                </ContactButton>
            </ContactSection>
        </MainContainer>
    
    )
}

export default AjudaPage;