import decoration3 from "./../assets/img/decoration3.svg";
import leaf2 from "./../assets/img/leaf2.svg";
import { ReactComponent as Download } from "./../assets/img/download.svg";
import { ReactComponent as CheckCircle } from "./../assets/img/checkCircle.svg";
import { ReactComponent as Gift } from "./../assets/img/gift.svg";
import { ReactComponent as Send } from "./../assets/img/send.svg";
import streetMrt2 from "./../assets/img/streetMrt2.svg";
import cloud3 from "./../assets/img/cloud3.svg";

import QRCode from "react-qr-code";

export const MainBottomSection = ({ dataInvitation = {}, refQR, refGift }) => {
  const header = () => {
    return (
      <div className="relative h-48 px-6 text-center" ref={refQR}>
        <p className="pt-9 font-[tanPearl] text-header1 font-medium text-steel700 ">
          Kehadiran
        </p>
        <div className="ml-auto mr-auto w-60 pt-6 text-center">
          <p className="font-[alice] text-body4 font-medium text-steel700">
            Harap simpan Kode QR reservasi berikut
          </p>
        </div>
        <img
          src={leaf2}
          className="absolute -bottom-24 left-0 -scale-x-100"
        ></img>
        <img src={leaf2} className="absolute -bottom-24 right-0"></img>
      </div>
    );
  };

  const vidio = () => {
    return (
      <div className="w-full">
        <div className="relative px-6 pb-3 pt-6 text-center">
          <img src={decoration3} className="ml-auto mr-auto"></img>
          <p className="pt-9 font-[tanPearl] text-header1  font-medium text-steel700 ">
            Video
          </p>
          <div
            style={{ width: "280px" }}
            className="ml-auto mr-auto text-center"
          >
            <p className="font-[alice] text-body4 font-medium text-steel700">
              Kami tidak tidak berkenan menerima karangan bunga sebagai ucapan.
              Namun, <b>kami sangat menantikan ucapan berupa video</b> yang akan
              ditampilkan pada hari pernikahan
            </p>
          </div>
        </div>
        <div className="bg-coklat800 px-6 py-6 font-[alice] text-body4 font-medium text-white">
          <p>Ketentuan Vidio:</p>
          <ul className="list-disc px-3 pb-4" style={{ width: "311px" }}>
            <li>
              Video dapat berupa film pendek, vlog, video musik, parodi, ataupun
              jenis video yang lain
            </li>
            <li>Format .mp4, .mkv atau .mov</li>
            <li>Video dibuat dalam layout landscape</li>
            <li>Durasi maksimal 1 menit</li>
            njs
          </ul>
          <div
            style={{ height: "32px", width: "311px" }}
            className="ml-auto mr-auto flex  w-full items-center justify-center rounded-sm bg-coklat600"
          >
            <CheckCircle />
            <p className="px-2 font-[alice] text-body3 font-medium text-white drop-shadow ">
              {" "}
              Ingatkan saya untuk kirim video
            </p>
          </div>
        </div>
      </div>
    );
  };

  const gift = () => {
    return (
      <div className="w-full pb-6" ref={refGift}>
        <div className="relative px-6 pb-3 pt-6 text-center">
          <img src={decoration3} className="ml-auto mr-auto"></img>
          <p className="pt-9 font-[tanPearl] text-header1  font-medium text-steel700 ">
            Hadiah
          </p>
        </div>
        <div
          style={{ height: "32px", width: "311px" }}
          className="ml-auto mr-auto flex  w-full items-center justify-center rounded-sm bg-coklat500"
        >
          <Gift />
          <p className="px-2 font-[alice] text-body3 font-medium text-white drop-shadow ">
            {" "}
            Lihat Rekening dan Alamat
          </p>
        </div>
        <img
          src={decoration3}
          className="ml-auto mr-auto -scale-100 py-2"
        ></img>
      </div>
    );
  };

  const emptyCard = () => {
    return (
      <div
        style={{ height: 100 }}
        className="flex  items-center justify-center rounded border border-coklat400 "
      >
        <p className="text-body3 text-coklat600">Belum ada ucapan</p>
      </div>
    );
  };

  const cardItem = () => {
    return (
      <div
        style={{ height: 142, width: 311 }}
        className="rounded  border border-coklat400 p-2 "
      >
        <p style={{ lineHeight: "12px" }} className="text-body2 text-coklat700">
          Dari ....
        </p>
        <p className="text-body4 text-coklat500">6 Juli 2023</p>
        <p className="py-2 text-body4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In orci est,
          ultrices sed tempor eu, sagittis id erat. In pretium accumsan
          vehicula. Integer ac libero leo.
        </p>
      </div>
    );
  };

  const greetingCard = () => {
    return (
      <div className="w-full">
        <div className="relative px-6 pb-3 pt-14 text-center">
          <p className="pt-9 font-[tanPearl] text-header1  font-medium text-steel700 ">
            Ucapan
          </p>
        </div>
        <div className="bg-coklat800 px-6 py-6 font-[alice] text-body4 font-medium text-white">
          <p>Dari {dataInvitation?.user?.name} :</p>
          <textarea
            style={{ height: "100px", width: "311px" }}
            placeholder="Isi Ucapan"
            className="my-3 rounded p-2 text-blackNeutral placeholder:text-coklat400"
          ></textarea>

          <div
            style={{ height: "32px", width: "311px" }}
            className="ml-auto mr-auto flex  w-full items-center justify-center rounded-sm bg-coklat500"
          >
            <Send />
            <p className="px-2 font-[alice] text-body3 font-medium text-white drop-shadow ">
              Kirim Ucapan
            </p>
          </div>
        </div>
        <img
          src={decoration3}
          className="ml-auto mr-auto -scale-100 py-2"
        ></img>
        <div className="flex flex-col space-y-3 px-6 py-3">
          {emptyCard()}
          {cardItem()}
        </div>
      </div>
    );
  };

  const qr = () => {
    return (
      <div className="w-full">
        <div className="relative bg-white px-6 py-6 text-center">
          <div style={{ height: "311px", width: "311px" }} className="mb-6">
            <QRCode
              fgColor="#6E513B"
              size={256}
              style={{ height: "auto", maxWidth: "100%", width: "100%" }}
              value={dataInvitation?.user?.id}
              viewBox={`0 0 256 256`}
            />
          </div>
          <div
            style={{ height: "32px", width: "311px" }}
            className="ml-auto mr-auto flex  w-full items-center justify-center rounded-sm bg-coklat600  "
          >
            <Download />
            <p className="px-2 font-[alice] text-body3 font-medium text-white">
              {" "}
              Unduh QR Code
            </p>
          </div>
          <div className="my-5 flex-grow border-t-2 border-dashed border-steel500"></div>
          <div className="flex justify-between pb-4">
            <select className="rounded border border-coklat500 bg-white px-3 py-1 text-body4">
              <option value="true">Saya bisa hadir</option>
              <option value="false">Saya tidak bisa hadir</option>
            </select>
            <div className="flex w-24 items-center justify-evenly">
              <div className="relative h-5 w-5 rounded-full bg-coklat500">
                <span
                  style={{ top: "-24px", left: "2.5px", fontSize: "40px" }}
                  className="absolute text-white"
                >
                  -
                </span>
              </div>
              <p>0</p>
              <div className="relative h-5 w-5 rounded-full bg-coklat500">
                <span
                  style={{ top: "-15px", left: "2px", fontSize: "30px" }}
                  className="absolute text-white"
                >
                  +
                </span>
              </div>
            </div>
          </div>
          <div
            style={{ height: "32px", width: "311px" }}
            className="ml-auto mr-auto flex  w-full items-center justify-center rounded-sm bg-coklat600 "
          >
            <CheckCircle />
            <p className="px-2 font-[alice] text-body3 font-medium text-white">
              {" "}
              Konfirmasi
            </p>
          </div>
        </div>
      </div>
    );
  };

  const footer = () => {
    return (
      <div className="py-11 ">
        <div
          style={{ height: "170px" }}
          className="relative ml-auto mr-auto flex items-center justify-center overflow-hidden pb-0 pt-6 text-center"
        >
          <img src={cloud3} className="absolute -right-16 -top-1"></img>
          <p
            style={{ width: "311px" }}
            className="font-[tanPearl] text-header3 font-medium text-coklat700"
          >
            Sampai Berjumpa di Hari Pernikahan
          </p>
          <img
            src={cloud3}
            className="absolute -left-20 bottom-2 -scale-x-100"
          ></img>
        </div>
        <img src={streetMrt2} className="ml-auto mr-auto"></img>
      </div>
    );
  };

  return (
    <div className="w-full">
      {header()}
      {qr()}
      {vidio()}
      {gift()}
      {greetingCard()}
      {footer()}
    </div>
  );
};
