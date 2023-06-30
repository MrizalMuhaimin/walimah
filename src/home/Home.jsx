
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Onboarding } from "../home/Onboarding.jsx";
import { Quiz } from "../home/Quiz.jsx";
import { Main } from './Main.jsx';

import { getInvitation } from "./../services/invitations"

export const Home = () => {
  const { id: idInvitation } = useParams();
  const navigate = useNavigate();
  const [page, setPage] = useState('onbaordingPage');
  const [dataInvitation, setDataInvitation] = useState({});

  const getDataInvitation = async (invitationId) => {
    try {
      const response = await getInvitation(
        invitationId
  
      );
      const data = response?.data || {};
      if(data.invitation.status === 'AVAILABLE' ){
        setPage('onbaordingPage')
  
      } else if(data.user.status === 'RSVP_PROVIDED') {
        setPage('mainPage')
      } else if(data.user.status === 'INFO_COMPLETED') {
        setPage('onbaordingPage')
      } else if(data.user.status === 'NEWLY_CREATED') {
        setPage('onbaordingPage')
      } else {
        navigate('/');
  
      }
      setDataInvitation(data);

    }catch (error) {
      navigate('/');

    }
  }

  useEffect(() => {
    getDataInvitation(idInvitation)
    
  },[idInvitation]);

  function renderContent (){
    switch (page) {
      case 'onbaordingPage': return <Onboarding setStatePage={setPage} dataInvitation={dataInvitation} getDataInvitation = {() => {getDataInvitation(idInvitation)}} />
      case 'quizPage': return <Quiz setStatePage={setPage}/>
      case 'mainPage': return <Main dataInvitation={dataInvitation}/>
      default: return <Onboarding/>
    }
  }

  return (
    <div className="w-full bg-white h-screen overflow-hidden">
      {renderContent()}
    </div>
  );
};
