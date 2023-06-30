import { ReactComponent as SoundMuteLogo } from "../assets/img/soundMute.svg";
import { ReactComponent as SoundMaxLogo } from "../assets/img/soundMax.svg";

export const MusicSideBar = ({ isMute, onClick }) => {
  return (
    <div
      className="w-inherit sticky top-6 flex h-11 w-11 select-none items-center justify-center rounded-r-lg bg-coklat600 shadow-[0px_0px_12px_0px_rgba(0,0,0,0.25)]"
      onClick={onClick}
    >
      {isMute ? (
        <SoundMuteLogo className="text-coklat100" />
      ) : (
        <SoundMaxLogo className="text-coklat100" />
      )}
    </div>
  );
};
