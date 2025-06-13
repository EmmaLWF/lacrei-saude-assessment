'use client'
import React, { useState } from 'react';
import styled from 'styled-components';

const Section = styled.div`
  font-family: sans-serif;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
`;

const Question = styled.div`
  font-family: sans-serif;
  font-size: 16px;
  font-weight: 600;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  margin: 5px;
  border: solid black;
  border-width: 1px;
  border-radius: 8px;
  width: 100%;
  cursor: pointer;
  background-color: #f9f9f9

  @media (max-width: 908px) {
    max-width: 100%;
  }
`;

const QuestionTitle = styled.p`
  font-family: sans-serif;
  font-size: 16px;
  font-weight: lighter;
  margin: 0;
  padding-right: 1rem; 
`;

const QuestionIcon = styled.img`
  align-items: center;
  justify-content: flex-end;
  height: 14px;
  width: 14px;
  transition: transform 0.3s ease;
  flex-shrink: 0;

  &.open {
    transform: rotate(180deg);
  }
`;

const Answer = styled.div`
  font-family: sans-serif;
  font-size: 16px;
  padding: 1rem 1.5rem;
  border: solid black;
  border-width: 1px;
  border-radius: 8px;
  width: 100%;
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.05);
  color: #333;
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
        <QuestionIcon src="/down-arrow.png" alt="ícone de exibição de pergunta" className={isOpen ? 'open' : ''}/>
      </Question>
      
      {isOpen && <Answer>{answer}</Answer>}
    </Section>
  );
}

export default QandA;