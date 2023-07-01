import leftLeaf from "./../assets/img/leftLeaf.svg";
import rightLeaf from "./../assets/img/rightLeaf.svg";
import decoration1 from "./../assets/img/decoration1.svg";
import decoration2 from "./../assets/img/decoration2.svg";
import streetMrt from "./../assets/img/streetMrt.svg";
import { useCallback } from "react";

export const MainUpperSection = ({ dataInvitation = {}, width }) => {
  const header = useCallback(() => {
    return (
      <div
        className="relative h-[300px] w-full bg-white pt-6 shadow-[inset_0px_-8px_16px_0px_rgba(70,130,180,0.25)]
          "
        style={{
          clipPath: `path('M 0 0 L ${width} 0 V 300 H ${width * 0.9} C ${
            width * 0.73
          } 190 ${width * 0.27} 190 ${width * 0.1} 300 H 0 Z')`,
        }}
      >
        <img src={leftLeaf} className="absolute left-0 top-0" />
        <img src={rightLeaf} className="absolute right-0 top-[150px]" />
        <div className="flex flex-col items-center justify-center">
          <div className="w-36">
            <p className="text-center font-[tanPearl] text-header2  font-normal text-coklat700">
              Selamat ya, {dataInvitation?.user?.name}!
            </p>
          </div>
          <div className="w-72">
            <p className="text-center font-[alice] text-body3  font-normal text-coklat700">
              Karena berhasil melewati tantangan yang kita berikan, kami
              mengundang kamu untuk hadir pada acara
            </p>
          </div>
        </div>
      </div>
    );
  }, [width]);
  const greeting = () => {
    return (
      <div className="flex w-full flex-col items-center justify-center">
        <img src={decoration2} />
        <p className="font-[alice]">23 Juli 2023</p>
        <p className="font-[tanPearl]">Akram & Afra</p>
        <img src={decoration1} />
        <div className="w-full">
          <img src={streetMrt} className="object-fill" />
        </div>
      </div>
    );
  };
  const content = () => {
    return <div>content</div>;
  };
  const invitation = () => {
    return <div>invitation</div>;
  };
  const countdown = () => {
    return <div>countdown</div>;
  };
  return (
    <div className="w-full bg-blueGradient">
      {header()}
      {greeting()}
      {content()}
      {invitation()}
      {countdown()}
    </div>
  );
};
