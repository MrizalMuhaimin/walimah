import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Onboarding } from "../home/Onboarding.jsx";
import { Quiz } from "../home/Quiz.jsx";
import { Main } from './Main.jsx';

import { getInvitation } from "./../services/invitations"

export const Home = () => {
  const { id: idInvitation } = useParams();
  const [page, setPage] = useState('onbaordingPage');
  const [dataInvitation, setDataInvitation] = useState([]);

  const getDataInvitation = async () => {
    console.log(idInvitation);
    const response = await getInvitation({
      invitationId:idInvitation

    });
    console.log(response);
    const data = response?.data?.response?.data || {};
    console.log(data);
    setDataInvitation(data);
    console.log(dataInvitation);

  }

  useEffect(() => {
    getDataInvitation()
    
  },);

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
