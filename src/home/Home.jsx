import { useState } from 'react';
import { Onboarding } from "../home/Onboarding.jsx";
import { Quiz } from "../home/Quiz.jsx";
import { Main } from './Main.jsx';

export const Home = () => {
  const [page, setPage] = useState('onbaordingPage');

  const setQuiz = () => {
    setPage('quizPage');
  }

  function renderContent (){
    switch (page) {
      case 'onbaordingPage': return <Onboarding setStatePage={setQuiz} />
      case 'quizPage': return <Quiz/>
      case 'mainPage': return <Main/>
      default: return <Onboarding/>
    }
  }

  return (
    <div className="w-full bg-white h-screen overflow-hidden">
      {renderContent()}
    </div>
  );
};
