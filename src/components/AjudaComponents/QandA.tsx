'use client'
import React, { useState } from 'react';
import styled from 'styled-components';

const Section = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
`;

const Question = styled.div`
  font-size: 16px;
  font-weight: 600;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  margin: 5px;
  border: solid #404040;
  border-width: 1px;
  border-radius: 8px;
  width: 80vw;
  cursor: pointer;
  background-color: #FFFFFF;

  @media (max-width: 908px) {
    max-width: 100%;
  }
`;

const QuestionTitle = styled.p`
  font-size: 16px;
  font-weight: lighter;
  margin: 0;
  padding-right: 1rem; 
`;

const QuestionIcon = styled.img<{ $isOpen: boolean }>`
  align-items: center;
  justify-content: flex-end;
  height: 18px;
  width: 18px;
  transition: transform 0.3s ease;
  flex-shrink: 0;
  transform: ${({ $isOpen }) => ($isOpen ? 'rotate(180deg)' : 'none')};
`;

const Answer = styled.div`
  font-size: 16px;
  padding: 1rem 1.5rem;
  border: solid black;
  border-width: 1px;
  border-radius: 8px;
  width: 80vw;
  // box-shadow: 0 8px 12px #515151;
  color: #404040;
  line-height: 1.6;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  margin-top: -8px;

`;


interface QandAItemProps {
  question: string;
  answer: string;
}

const QandA: React.FC<QandAItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Section>
      <Question onClick={toggleOpen}>
        <QuestionTitle>{question}</QuestionTitle>
        <QuestionIcon src="/down-arrow-icon.svg" alt="ícone de exibição de pergunta" $isOpen={isOpen}/>
      </Question>
      
      {isOpen && <Answer>{answer}</Answer>}
    </Section>
  );
}

export default QandA;