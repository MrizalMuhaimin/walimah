import leftLeaf from "./../assets/img/leftLeaf.svg";
import rightLeaf from "./../assets/img/rightLeaf.svg";
import leftLeaf2 from "./../assets/img/leftLeaf2.svg";
import rightLeaf2 from "./../assets/img/rightLeaf2.svg";
import decoration1 from "./../assets/img/decoration1.svg";
import decoration2 from "./../assets/img/decoration2.svg";
import decoration3 from "./../assets/img/decoration3.svg";
import decoration2Half from "./../assets/img/decoration2Half.svg";
import streetMrt from "./../assets/img/streetMrt.svg";
import bismillah from "./../assets/img/bismillah.svg";
import terminalBus from "./../assets/img/terminalBus.svg";
import escalator from "./../assets/img/escalator.svg";
import building from "./../assets/img/building.svg";
import { ReactComponent as CompassLogo } from "../assets/img/compass.svg";
import { ReactComponent as BellLogo } from "../assets/img/bell.svg";
import { useCallback } from "react";
import { useCountdown } from "../helpers/hooks/useCountdown";
import { TimeCard } from "../components/TimeCard";
import { dateReminder } from "../services/reminders";

export const MainUpperSection = ({ dataInvitation = {}, width }) => {
  const [days, hours, minutes, seconds] = useCountdown("2023-07-23T01:00:00Z");

  const getDateReminder = async () => {
    try {
      await dateReminder(dataInvitation.user.id);
    } catch (error) {
      console.log(error);
    }
  };

  const getLocation = () => {
    window.open("https://maps.app.goo.gl/8AyYLyB1kX8BHPmUA", "_blank");
  };

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
        <img src={decoration2} className="-mt-9 w-[130px]" />
        <p className="font-[alice] text-body2 text-white">23 Juli 2023</p>
        <p className="font-[tanPearl] text-header1 text-white">Akram & Afra</p>
        <img src={decoration1} className="w-[305px]" />
        <div className="w-full py-[32px]">
          <img src={streetMrt} className="object-fill" />
        </div>
        <img src={decoration1} className="w-[305px] rotate-180" />
        <img src={bismillah} className="" />
        <div className="w-[280px]">
          <p className="text-center text-body4 text-white">
            Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud
            menyelenggarakan pernikahan
          </p>
        </div>
        <div className="w-full pt-[30px]">
          <img src={terminalBus} className="object-fill" />
        </div>
      </div>
    );
  };
  const content = () => {
    return (
      <div className="shadow-[0px_0px_16px_0px_rgba(0,0,0,0.5) flex h-[254px] flex-col justify-evenly bg-white py-[10px]">
        <div className="text-center">
          <p className="font-[tanPearl] text-header2 text-warning400">
            Afra Izzati Kamili
          </p>
          <div className="flex  flex-col justify-center font-[alice] text-body4 text-steel700">
            <p>Putri ke-2 keluarga</p>
            <p>Bapak Ismir Kamili & Ibu Yuria Pratiwhi Cleopatra</p>
            <p>(Antapani, Bandung)</p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <img src={decoration2Half} alt="" />
          <p className="font-[tanPearl] text-header1 text-coklat600">&</p>
          <img src={decoration2Half} alt="" className="-scale-x-100" />
        </div>
        <div className="text-center">
          <p className="font-[tanPearl] text-header2 text-warning400">
            Muhammad Akram Al Bari
          </p>
          <div className="flex  flex-col justify-center font-[alice] text-body4 text-steel700">
            <p>Putra ke-3 keluarga</p>
            <p>Bapak Edy Rianto & Ibu Diana Laelawati</p>
            <p>(Sewon, Bantul)</p>
          </div>
        </div>
      </div>
    );
  };
  const invitation = () => {
    return (
      <div>
        <div className="w-full">
          <img src={escalator} className="object-fill" />
        </div>
        <div className="flex items-center justify-center pt-[50px] text-white">
          <div className="z-40 flex flex w-10/12 flex-col items-center justify-center rounded-[24px] bg-[#396A93]/[.75] py-[16px] text-center">
            <div>
              <p className="font-[alice] text-body2 uppercase">Minggu</p>
              <p className="font-[tanPearl] text-header1">23 Juli 2023</p>
            </div>
            <div className="py-[8px]">
              <p className="font-[alice] text-body2">
                Bale Dayang Sumbi Itenas
              </p>
              <p className="font-[alice] text-body2">
                Jl. PP.H. Mustofa No.23, Neglasari, Cibeunying Kaler, Bandung
                City, West Java 40124, Indonesia
              </p>
            </div>
            <div className="flex justify-between pb-[8px]">
              <div>
                <p className="font-[tanPearl] text-header2">Akad</p>
                <p className="font-[alice] text-body2">08.00 - 09.30</p>
              </div>
              <div className="mx-[32px] border border-white" />
              <div>
                <p className="font-[tanPearl] text-header2">Resepsi</p>
                <p className="font-[alice] text-body2">10.00 - 11.30 </p>
              </div>
            </div>
            <button
              className="rounded-[4px] border border-[#EEEEEE] bg-white px-[12px] py-[4px] text-black"
              onClick={getLocation}
            >
              <div className="flex items-center justify-center gap-[4px]">
                <CompassLogo className="text-steel500" />
                <p className="font-[alice] text-body4">Buka di Google Maps</p>
              </div>
            </button>
          </div>
        </div>
        <div className="-mt-20 w-full">
          <img src={building} className="object-fill" />
        </div>
      </div>
    );
  };
  const countdown = () => {
    return (
      <div
        className="shadow=[inset_0px_8px_16px_0px_rgba(70,130,180,0.25)] relative -mt-[135px] flex h-[340px] items-center justify-center bg-white pt-[150px]"
        style={{
          clipPath: `path('M 0 0 H ${width * 0.1} C ${width * 0.27} 140 ${
            width * 0.73
          } 140 ${width * 0.9} 0 H ${width} V 340 H 0 Z')`,
        }}
      >
        <img src={leftLeaf2} className="absolute left-0 top-0" />
        <img src={rightLeaf2} className="absolute right-0 top-[150px]" />
        <div className="z-40 flex w-10/12 flex-col items-center justify-center gap-[10px]">
          <button
            className="w-full rounded-[4px] bg-coklat500 px-[12px] py-[4px]"
            onClick={getDateReminder}
          >
            <div className="flex items-center justify-center gap-[4px]">
              <BellLogo className="text-coklat100" />
              <p className="font-[alice] text-body4 text-coklat100">
                Ingatkan Saya
              </p>
            </div>
          </button>
          <div className="flex items-start justify-center gap-[4px]">
            <TimeCard value={days} label="Hari" />
            <p className="pt-[10px] font-[tanPearl] text-header2 text-coklat700">
              :
            </p>
            <TimeCard value={hours} label="Jam" />
            <p className="pt-[10px] font-[tanPearl] text-header2 text-coklat700">
              :
            </p>
            <TimeCard value={minutes} label="Menit" />
            <p className="pt-[10px] font-[tanPearl] text-header2 text-coklat700">
              :
            </p>
            <TimeCard value={seconds} label="Detik" />
          </div>
          <p className="font-[tanPearl] text-header4 text-coklat800">
            Menuju Hari Pernikahan
          </p>
          <div className="py-[32px]">
            <img src={decoration3} className="w-[230px]"></img>
          </div>
        </div>
      </div>
    );
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
