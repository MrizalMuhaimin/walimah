import {ReactComponent as CalendarLogo } from '../assets/img/Calendar.svg';
import {ReactComponent as GiftLogo } from '../assets/img/Gift.svg';
import {ReactComponent as QRLogo } from '../assets/img/QR.svg';

export const BottomBar = ({section}) => {

  return (
    <div className="bg-white w-inherit h-11 flex justify-center sticky bottom-0 shadow-[0px_-4px_24px_0px_rgba(0,0,0,0.15)]">
        <div className="flex w-full justify-between">
            <div className={`flex items-center justify-center w-32 ${section === 'CALENDAR' ? 'bg-steel100 rounded-t-lg scale-y-119' : ''}`}>
              <CalendarLogo className="text-steel500 h-6 w-6" />
            </div>
            <div className={`flex items-center justify-center w-32 ${section === 'QR' ? 'bg-steel100 rounded-t-lg scale-y-119' : ''}`}>
              <QRLogo className="text-steel500 h-6 w-6" />
            </div>
            <div className={`flex items-center justify-center w-32 ${section === 'GIFT' ? 'bg-steel100 rounded-t-lg scale-y-119' : ''}`}>
              <GiftLogo className="text-steel500 h-6 w-6" />
            </div>
        </div>

    </div>
  );
};
