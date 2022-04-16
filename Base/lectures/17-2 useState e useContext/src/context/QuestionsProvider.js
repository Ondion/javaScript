import React, { useState } from 'react';
import QuestionsContext from './QuestionsContext';

function QuestionsProvider({ children }) {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      name: 'Gabs',
      question: 'Qual a melhor estratégia pra lidar com o gerenciamento de informações no React ?',
      claps: 1,
    }
  ]);

  const createQuestion = (newQuestion) => {
    setQuestions((prevQuestions) => {
      return [
        ...prevQuestions,
        newQuestion,
      ]
    })
  }

  const contextValue = { questions, createQuestion };
  return (
    <QuestionsContext.Provider value={ contextValue }>
      {children}
    </QuestionsContext.Provider>
  )
}

export default QuestionsProvider;
