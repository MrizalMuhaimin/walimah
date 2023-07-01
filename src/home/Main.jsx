import { useState, useRef, useEffect } from "react";
import { MainBottomSection } from "./MainBottomSection";
import { MainUpperSection } from "./MainUpperSection";
import { BottomBar } from "../components/BottomBar";
import { MusicSideBar } from "../components/MusicSideBar";

export const Main = ({ dataInvitation = {}, width }) => {
  const refQRSection = useRef(null);
  const refGiftSection = useRef(null);

  const [heightQRSection, setHeightQRSection] = useState(0);
  const [heightGiftSection, setHeightGiftSection] = useState(0);

  const [activeSection, setActiveSection] = useState("CALENDAR");

  const [isMute, setIsMute] = useState(false);

  useEffect(() => {
    setHeightQRSection(refQRSection.current.getBoundingClientRect().top + 55);
    setHeightGiftSection(
      refGiftSection.current.getBoundingClientRect().top + 55
    );
  }, [refQRSection.current, refGiftSection.current]);

  const scrollEvent = (e) => {
    const currentHeight = e.target.scrollTop + e.target.offsetHeight;
    switch (true) {
      case currentHeight > heightGiftSection:
        setActiveSection("GIFT");
        break;
      case currentHeight > heightQRSection:
        setActiveSection("QR");
        break;
      default:
        setActiveSection("CALENDAR");
        break;
    }
  };

  const handleMusic = () => {
    setIsMute(!isMute);
  };

  return (
    <div
      className="h-full w-full overflow-auto bg-white"
      onScroll={scrollEvent}
    >
      <MusicSideBar isMute={isMute} onClick={handleMusic} />
      <MainUpperSection dataInvitation={dataInvitation} width={width} />
      <MainBottomSection
        dataInvitation={dataInvitation}
        refQR={refQRSection}
        refGift={refGiftSection}
      />
      <BottomBar section={activeSection} width={width} />
    </div>
  );
};
