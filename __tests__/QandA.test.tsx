import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import QandA from '../src/components/AjudaComponents/QandA';
import '@testing-library/jest-dom';


describe('QandA Component', () => {


  const mockQuestion = "Qual é a pergunta de teste?";
  const mockAnswer = "Esta é a resposta de teste.";

  it('should show the answer when the question is clicked', async () => {
    render(<QandA question={mockQuestion} answer={mockAnswer} />);

    const questionElement = screen.getByText(mockQuestion);
    expect(questionElement).toBeInTheDocument();

    const answerElementInitially = screen.queryByText(mockAnswer);
    expect(answerElementInitially).not.toBeInTheDocument();

    await userEvent.click(questionElement);

    const answerElementAfterClick = screen.getByText(mockAnswer);
    expect(answerElementAfterClick).toBeInTheDocument();
  });
});