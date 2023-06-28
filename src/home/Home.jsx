import { useState } from 'react';
import { Onboarding } from "../home/Onboarding.jsx";
import { Quiz } from "../home/Quiz.jsx";
import { Main } from './Main.jsx';

export const Home = () => {
  const [page, setPage] = useState('onbaordingPage');

  function renderContent (){
    switch (page) {
      case 'onbaordingPage': return <Onboarding setStatePage={setPage} />
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
