import ReactAudioPlayer from 'react-audio-player';
import { ReactComponent as SoundMuteLogo } from "../assets/img/soundMute.svg";
import { ReactComponent as SoundMaxLogo } from "../assets/img/soundMax.svg";

export const MusicSideBar = ({ isMute, onClick }) => {
  return (
    <div
      className="w-inherit absolute top-6 z-50 flex h-11 w-11 select-none items-center justify-center rounded-r-lg bg-coklat600 shadow-[0px_0px_12px_0px_rgba(0,0,0,0.25)]"
      onClick={onClick}
    >
      <ReactAudioPlayer
        className='hidden'
        src="https://api.kramili.site/static/Baraka_Allahu_Lakuma.mp3"
        autoPlay
        loop
        muted={isMute}
        volume={0.1}
      />
      {isMute ? (
        <SoundMuteLogo className="text-coklat100" />
      ) : (
        <SoundMaxLogo className="text-coklat100" />
      )}
    </div>
  );
};
