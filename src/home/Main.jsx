import { useState, useRef, useEffect } from "react";
import { MainBottomSection } from "./MainBottomSection";
import { MainUpperSection } from "./MainUpperSection";
import { BottomBar } from "../components/BottomBar";
import { MusicSideBar } from "../components/MusicSideBar";

export const Main = ({
  dataInvitation = {},
  width,
  updateDataInvitation = () => {},
  updateDataInvitationByNumber = () => {},
}) => {
  const refCalendarSection = useRef(null);
  const refQRSection = useRef(null);
  const refSpeechSection = useRef(null);

  const [heightCalendarSection, setHeightCalendarSection] = useState(0);
  const [heightQRSection, setHeightQRSection] = useState(0);
  const [heightSpeechSection, setHeightSpeechSection] = useState(0);

  const [activeSection, setActiveSection] = useState("CALENDAR");

  const [isMute, setIsMute] = useState(false);

  useEffect(() => {
    setHeightCalendarSection(
      refCalendarSection.current.getBoundingClientRect().top
    );
    setHeightQRSection(refQRSection.current.getBoundingClientRect().top + 1000);
    setHeightSpeechSection(
      refSpeechSection.current.getBoundingClientRect().top + 1000
    );
  }, [
    refCalendarSection.current,
    refQRSection.current,
    refSpeechSection.current,
  ]);

  const scrollEvent = (e) => {
    const currentHeight = e.target.scrollTop + e.target.offsetHeight;
    switch (true) {
      case currentHeight > heightSpeechSection:
        setActiveSection("SPEECH");
        break;
      case currentHeight > heightQRSection:
        setActiveSection("QR");
        break;
      case currentHeight > heightCalendarSection:
      default:
        setActiveSection("CALENDAR");
        break;
    }
  };

  const handleMusic = () => {
    setIsMute(!isMute);
  };

  const goToPosition = (to) => {
    switch (to) {
      case "SPEECH":
        refSpeechSection.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "QR":
        refQRSection.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "CALENDAR":
      default:
        refCalendarSection.current.scrollIntoView({ behavior: "smooth" });
        break;
    }
  };

  return (
    <div
      className="h-full w-full overflow-auto bg-white"
      onScroll={scrollEvent}
    >
      <MusicSideBar isMute={isMute} onClick={handleMusic} />
      <MainUpperSection
        dataInvitation={dataInvitation}
        width={width}
        refCalendar={refCalendarSection}
        updateDataInvitation={updateDataInvitation}
        updateDataInvitationByNumber={updateDataInvitationByNumber}
      />
      <MainBottomSection
        dataInvitation={dataInvitation}
        refQR={refQRSection}
        refSpeech={refSpeechSection}
        updateDataInvitation={updateDataInvitation}
        updateDataInvitationByNumber={updateDataInvitationByNumber}
      />
      <BottomBar
        section={activeSection}
        width={width}
        onClickTab={goToPosition}
      />
    </div>
  );
};
