import { useState, useRef, useEffect } from "react";
import { MainBottomSection } from "./MainBottomSection";
import { BottomBar } from "../components/BottomBar";

export const Main = ({dataInvitation={}}) => {
  // const refCalendarSection = useRef(null);
  const refQRSection = useRef(null);
  const refGiftSection = useRef(null);

  // const [heightCalendarSection, setHeightCalendarSection] = useState(0);
  const [heightQRSection, setHeightQRSection] = useState(0);
  const [heightGiftSection, setHeightGiftSection] = useState(0);

  const [activeSection, setActiveSection] = useState('CALENDAR');

  useEffect(() => {
    // setHeightCalendarSection(refCalendarSection.current.getBoundingClientRect().top);
    setHeightQRSection(refQRSection.current.getBoundingClientRect().top + 55);
    setHeightGiftSection(refGiftSection.current.getBoundingClientRect().top + 55);
  }, [/*refCalendarSection.current , */refQRSection.current, refGiftSection.current]);

  const scrollEvent = (e) => { 
    const currentHeight = e.target.scrollTop + e.target.offsetHeight;
    switch (true) {
      case (currentHeight > heightGiftSection):
        setActiveSection('GIFT');
        break;
      case (currentHeight > heightQRSection):
        setActiveSection('QR');
        break;
      default:
        setActiveSection('CALENDAR');
        break;
    }
  }

  return (
    <div className="w-full h-full bg-white overflow-auto" onScroll={scrollEvent}>
        <MainBottomSection 
          dataInvitation={dataInvitation} 
          refQR={refQRSection}
          refGift={refGiftSection}
        />
        <BottomBar section={activeSection}/>
    </div>
  );
};
