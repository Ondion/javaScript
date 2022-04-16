import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import QuestionsContext from '../context/QuestionsContext';

function NewQuestionPage() {
  const [question, setQuestion] = useState('');
  const [name, setName] = useState('');

  const history = useHistory();

  const { createQuestion, questions } = useContext(QuestionsContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const questionObject = {
      id: questions.length + 1,
      question,
      name,
      claps: 0,
    }

    createQuestion(questionObject);
    history.push('/');
  }

  return (
    <section className="question-section">
      <form onSubmit={handleSubmit}>
        <label htmlFor="question">
          Digite a sua pergunta:
          <textarea
            name="question"
            value={question}
            placeholder="Escreva aqui sua pergunta"
            id="question"
            cols="30"
            rows="10"
            onChange={(e) => setQuestion(e.target.value)}
          />
        </label>
        <label htmlFor="user">
          Digite o seu nome:
          <input
            type="text"
            name="name"
            value={name}
            placeholder="Escreva seu nome..."
            id="user"
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}

export default NewQuestionPage;
