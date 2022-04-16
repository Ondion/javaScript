import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import QuestionsContext from '../context/QuestionsContext';
import QuestionCard from '../components/QuestionCard';

function QuestionListPage() {
  const myContextValue = useContext(QuestionsContext);

  const history = useHistory();

  return (
    <section>
        {myContextValue.questions.map((question, index) => (
          <QuestionCard key={index} question={question} />
        ))}

        <button type="button" onClick={() => history.push('/new-question')}>
          Nova Pergunta
        </button>
      </section>
  )
}

export default QuestionListPage;
