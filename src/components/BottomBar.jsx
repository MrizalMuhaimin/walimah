import { ReactComponent as CalendarLogo } from "../assets/img/calendar.svg";
import { ReactComponent as SendLogo } from "../assets/img/send.svg";
import { ReactComponent as QRLogo } from "../assets/img/qr.svg";

export const BottomBar = ({ section, onClickTab, width }) => {
  return (
    <div
      className="sticky bottom-0 z-50 flex h-11 w-full justify-center bg-white shadow-[0px_-4px_24px_0px_rgba(0,0,0,0.15)]"
      style={{ width: `${width}px` }}
    >
      <div className="flex w-full justify-between">
        <div
          className={`flex w-4/12 items-center justify-center ${
            section === "CALENDAR" ? "scale-y-120 rounded-t-lg bg-steel100" : ""
          }`}
          onClick={() => onClickTab("CALENDAR")}
        >
          <CalendarLogo className="h-6 w-6 text-steel500" />
        </div>
        <div
          className={`flex w-4/12 items-center justify-center ${
            section === "QR" ? "scale-y-120 rounded-t-lg bg-steel100" : ""
          }`}
          onClick={() => onClickTab("QR")}
        >
          <QRLogo className="h-6 w-6 text-steel500" />
        </div>
        <div
          className={`flex w-4/12 items-center justify-center ${
            section === "SPEECH" ? "scale-y-120 rounded-t-lg bg-steel100" : ""
          }`}
          onClick={() => onClickTab("SPEECH")}
        >
          <SendLogo className="h-6 w-6 text-steel500" />
        </div>
      </div>
    </div>
  );
};
