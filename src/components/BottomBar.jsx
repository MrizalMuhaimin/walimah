import { ReactComponent as CalendarLogo } from "../assets/img/calendar.svg";
import { ReactComponent as GiftLogo } from "../assets/img/gift.svg";
import { ReactComponent as QRLogo } from "../assets/img/qr.svg";

export const BottomBar = ({ section }) => {
  return (
    <div className="w-inherit sticky bottom-0 flex h-11 justify-center bg-white shadow-[0px_-4px_24px_0px_rgba(0,0,0,0.15)]">
      <div className="flex w-full justify-between">
        <div
          className={`flex w-32 items-center justify-center ${
            section === "CALENDAR" ? "scale-y-119 rounded-t-lg bg-steel100" : ""
          }`}
        >
          <CalendarLogo className="h-6 w-6 text-steel500" />
        </div>
        <div
          className={`flex w-32 items-center justify-center ${
            section === "QR" ? "scale-y-119 rounded-t-lg bg-steel100" : ""
          }`}
        >
          <QRLogo className="h-6 w-6 text-steel500" />
        </div>
        <div
          className={`flex w-32 items-center justify-center ${
            section === "GIFT" ? "scale-y-119 rounded-t-lg bg-steel100" : ""
          }`}
        >
          <GiftLogo className="h-6 w-6 text-steel500" />
        </div>
      </div>
    </div>
  );
};
