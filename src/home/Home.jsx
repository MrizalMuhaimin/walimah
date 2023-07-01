import { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { OnBoarding } from "./OnBoarding.jsx";
import { Quiz } from "../home/Quiz.jsx";
import { Main } from "./Main.jsx";

import { getInvitation } from "./../services/invitations";
import { useSize } from "../helpers/hooks/useSize.js";

export const Home = () => {
  const { id: idInvitation } = useParams();
  const navigate = useNavigate();
  const [page, setPage] = useState("onBoardingPage");
  const [dataInvitation, setDataInvitation] = useState({});
  const refContainer = useRef(null);
  const size = useSize(refContainer);

  const getDataInvitation = async (invitationId) => {
    try {
      const response = await getInvitation(invitationId);
      const data = response?.data || {};
      if (data.invitation.status === "AVAILABLE") {
        setPage("onBoardingPage");
      } else if (data.user.status === "RSVP_PROVIDED") {
        setPage("mainPage");
      } else if (data.user.status === "INFO_COMPLETED") {
        setPage("onBoardingPage");
      } else if (data.user.status === "NEWLY_CREATED") {
        setPage("onBoardingPage");
      } else {
        navigate("/");
      }
      setDataInvitation(data);
    } catch (error) {
      navigate("/");
    }
  };

  useEffect(() => {
    getDataInvitation(idInvitation);
  }, [idInvitation]);

  function renderContent() {
    switch (page) {
      case "onBoardingPage":
        return (
          <OnBoarding
            setStatePage={setPage}
            dataInvitation={dataInvitation}
            getDataInvitation={() => {
              getDataInvitation(idInvitation);
            }}
          />
        );
      case "quizPage":
        return <Quiz setStatePage={setPage} />;
      case "mainPage":
        return <Main dataInvitation={dataInvitation} width={size.width} />;
      default:
        return <OnBoarding />;
    }
  }

  return (
    <div
      className="h-screen w-full overflow-hidden bg-white"
      ref={refContainer}
    >
      {renderContent()}
    </div>
  );
};
