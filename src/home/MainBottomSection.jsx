import { useState, useEffect } from "react";
import decoration3 from "./../assets/img/decoration3.svg";
import leaf2 from "./../assets/img/leaf2.svg";
import { ReactComponent as Download } from "./../assets/img/download.svg";
import { ReactComponent as CheckCircle } from "./../assets/img/checkCircle.svg";
import { ReactComponent as Send } from "./../assets/img/send.svg";
import { ReactComponent as Edit } from "./../assets/img/edit.svg";
import streetMrt2 from "./../assets/img/streetMrt2.svg";
import cloud3 from "./../assets/img/cloud3.svg";
import favorite from "./../assets/img/favorite.svg";
import unfavorite from "./../assets/img/unfavorite.svg";
import { ReactComponent as Copy } from "./../assets/img/copy.svg";
import QRCode from "react-qr-code";
import { videoReminder } from "../services/reminders";
import {
  comments,
  creteComment,
  myComment,
  updateComment,
  likeComment,
} from "../services/comment";

import { Pagination } from "../components/Pagination";
import { createRsvp, unduhQr } from "../services/user";

export const MainBottomSection = ({
  dataInvitation = {},
  refQR,
  refSpeech,
  updateDataInvitation = () => {},
  updateDataInvitationByNumber = () => {},
}) => {
  const [isModal, setIsModal] = useState(false);
  const [cPeople, setCPeople] = useState(1);
  const [isAttending, setIsAttending] = useState("true");
  const [dataComments, setDataComments] = useState([]);
  const [dataMyComment, setDataMyComment] = useState("");
  const [idMyComment, setIdMyComment] = useState("");
  const [isUpdateGetComment, setIsUpdateGetComment] = useState(false);
  const [isUpdateDataUser, setIsUpdateDataUser] = useState(false);
  const [isDisableRSVC, setIsDisableRSVC] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);

  const setVidioReminder = async () => {
    try {
      await videoReminder(dataInvitation.user.id);
      setIsUpdateDataUser(!isUpdateDataUser);
    } catch (error) {
      console.log("error");
    }
  };

  const getMyQR = async () => {
    try {
      const response = await unduhQr(dataInvitation.user.id);
      const url = window.URL.createObjectURL(
        new Blob([response.data], { type: "image/png" })
      );
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `qr_${dataInvitation.user.name}.png`);
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.log("error");
    }
  };

  const createComments = async () => {
    try {
      const data = {
        comment: dataMyComment,
      };

      const response = await creteComment(dataInvitation.user.id, data);
      if (response?.data?.message === "success") {
        setDataMyComment(response?.data?.comment);
        setIdMyComment(response?.data?.comment_id);
      }
    } catch (error) {
      setDataMyComment("");
      console.log("error");
    }
  };

  const setRsvp = async () => {
    try {
      const data = {
        is_attending: isAttending === "true" ? true : false,
        people_count: cPeople,
      };

      const response = await createRsvp(dataInvitation.user.id, data);
      if (response?.data?.message === "success") {
        setIsUpdateDataUser(!isUpdateDataUser);
        console.log("response");
      }
    } catch (error) {
      setDataMyComment("");
      console.log("error");
    }
  };

  const updateMyComments = async () => {
    try {
      const data = {
        comment: dataMyComment,
      };

      const response = await updateComment(idMyComment, data);
      if (response?.data?.message === "success") {
        setDataMyComment(response?.data?.comment);
        setIdMyComment(response?.data?.comment_id);
        setIsUpdateGetComment(!isUpdateGetComment);
      }
    } catch (error) {
      setDataMyComment("");
      console.log("error");
    }
  };

  const likeTheComment = async (id) => {
    try {
      const params = {
        comment_id: id,
      };
      const response = await likeComment(dataInvitation.user.id, params);
      if (response?.data?.message === "success") {
        setIsUpdateGetComment(!isUpdateGetComment);
      }
    } catch (error) {
      console.log("error");
    }
  };

  const getMyComment = async () => {
    try {
      const response = await myComment(dataInvitation?.user?.id);
      if (response?.data) {
        setDataMyComment(response?.data?.comment);
        setIdMyComment(response?.data?.comment_id);
      }
    } catch (error) {
      setDataMyComment("");
      console.log("error");
    }
  };

  const getComments = async () => {
    const params = {
      limit: 10,
    };
    const response = await comments(dataInvitation.user.id, params);
    const dataRes = response?.data?.items || [];
    setTotalPage(response?.data?.total_pages);
    setDataComments(dataRes);
  };

  useEffect(() => {
    getComments();
    getMyComment();
    if (dataInvitation?.user?.people_count > 0) {
      setIsDisableRSVC(true);
    }
    if (dataInvitation?.user?.people_count) {
      setCPeople(dataInvitation?.user?.people_count);
    }
  }, [dataInvitation, idMyComment]);

  useEffect(() => {
    getComments();
  }, [isUpdateGetComment]);

  useEffect(() => {
    if (dataInvitation?.invitation?.type == "SINGLE") {
      updateDataInvitation();
    } else {
      updateDataInvitationByNumber(dataInvitation.user.wa_number);
    }
  }, [isUpdateDataUser]);

  const copyText = (text) => {
    navigator.clipboard.writeText(text);
  };

  const onChangeMyComment = (e) => {
    setDataMyComment(e.target.value);
  };

  const onChangePage = (type = "+") => {
    if (page <= totalPage && type === "+") {
      if (page == totalPage) {
        return;
      }
      return setPage(page + 1);
    } else {
      return setPage((state) => (state - 1 <= 1 ? 1 : state - 1));
    }
  };
  const onChangeNumber = (type = "+") => {
    if (isAttending == "true" && isAttending) {
      if (type === "+") {
        return setCPeople(cPeople + 1);
      }
      if (cPeople - 1 <= 0) {
        setIsAttending("false");
      }
      return setCPeople((state) => (state - 1 <= 0 ? 0 : state - 1));
    }
  };

  const onChangeAtt = (e) => {
    console.log(e.target.value);
    setIsAttending(e.target.value);
    if (e.target.value == "false") {
      setCPeople(0);
      console.log(e.target.value);
    } else {
      setCPeople(1);
    }
  };

  const modal = () => {
    return (
      <div
        className="relative z-[60]"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

        <div className="fixed inset-0 z-[60] overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-0 text-center">
            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="flex flex-col ">
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <h3
                      className="font-[tanPearl] text-header3  leading-6 text-steel600"
                      id="modal-title"
                    >
                      Rekening
                    </h3>
                    <div className="mt-2 flex items-center text-left">
                      <Copy
                        onClick={() => copyText("12345667890")}
                        className="cursor-pointer active:text-steel300 "
                      />
                      <div className="px-2">
                        <div className="font-[alice] text-body3 leading-[18px]">
                          BNI an. Afra Izzati Kamili
                        </div>
                        <div className="font-[alice] text-body4 leading-[10px]">
                          12345667890
                        </div>
                      </div>
                    </div>
                    <div className="mt-2 flex items-center text-left">
                      <Copy
                        onClick={() => copyText("12345667890")}
                        className="cursor-pointer active:text-steel300 "
                      />
                      <div className="px-2">
                        <div className="font-[alice] text-body3 leading-[18px]">
                          BNI an. Afra Izzati Kamili
                        </div>
                        <div className="font-[alice] text-body4 leading-[10px]">
                          12345667890
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="my-5 flex-grow border-t-2 border-dashed border-steel500"></div>
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <h3
                      className="font-[tanPearl] text-header3  leading-6 text-steel600"
                      id="modal-title"
                    >
                      E-Wallet
                    </h3>
                    <div className="mt-2 flex items-center text-left">
                      <Copy
                        onClick={() => copyText("12345667890")}
                        className="cursor-pointer text-emerald-50 active:text-steel300 "
                      />
                      <div className="px-2">
                        <div className="font-[alice] text-body3 leading-[18px]">
                          BNI an. Afra Izzati Kamili
                        </div>
                        <div className="font-[alice] text-body4 leading-[10px]">
                          12345667890
                        </div>
                      </div>
                    </div>
                    <div className="mt-2 flex items-center text-left">
                      <Copy
                        onClick={() => copyText("12345667890")}
                        className="cursor-pointer active:text-steel300 "
                      />
                      <div className="px-2">
                        <div className="font-[alice] text-body3 leading-[18px]">
                          BNI an. Afra Izzati Kamili
                        </div>
                        <div className="font-[alice] text-body4 leading-[10px]">
                          12345667890
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  type="button"
                  onClick={() => setIsModal(false)}
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-coklat500 px-3 py-2 text-body4 font-semibold text-white shadow-sm  ring-gray-300 hover:bg-coklat600 sm:mt-0 sm:w-auto"
                >
                  Kembali
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

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
          <div className="ml-auto mr-auto w-full text-center">
            <p className="font-[alice] text-body4 font-medium text-steel700">
              Kami tidak tidak berkenan menerima karangan bunga sebagai ucapan.
              Namun, <b>kami sangat menantikan ucapan berupa video</b> yang akan
              ditampilkan pada hari pernikahan
            </p>
          </div>
        </div>
        <div className="bg-coklat800 px-6 py-6 font-[alice] text-body4 font-medium text-white">
          <p>Ketentuan Vidio:</p>
          <ul className="list-disc px-3 pb-4">
            <li>
              Video dapat berupa film pendek, vlog, video musik, parodi, ataupun
              jenis video yang lain
            </li>
            <li>Format .mp4, .mkv atau .mov</li>
            <li>Video dibuat dalam layout landscape</li>
            <li>Durasi maksimal 1 menit</li>
          </ul>
          <div
            onClick={() => {
              setVidioReminder();
            }}
            className={`flex w-full cursor-pointer items-center justify-center gap-[4px]  rounded-[4px]  px-[12px] py-[4px] ${
              dataInvitation?.user.is_video_reminder_sent != "1"
                ? "bg-[#BABABA]"
                : "bg-coklat600"
            } `}
          >
            <CheckCircle
              className={`${
                dataInvitation?.user.is_video_reminder_sent != "1"
                  ? "text-green-700 "
                  : "text-white"
              } `}
            />
            <p className="select-none px-2 font-[alice] text-body3 font-medium text-white drop-shadow">
              {" "}
              Ingatkan saya untuk kirim video
            </p>
          </div>
        </div>
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

  const cardItem = (val = {}) => {
    return (
      <div
        key={val?.id}
        id={val?.id}
        style={{ height: 142 }}
        className="rounded  border border-coklat400 p-2 "
      >
        <p style={{ lineHeight: "12px" }} className="text-body2 text-coklat700">
          Dari {val?.user_name}
        </p>
        <p className="text-body4 text-coklat500">
          {new Date(val?.created_at).toLocaleDateString()}
        </p>
        <p className="py-2 text-body4">{val?.comment}</p>
        <div className="flex">
          {val?.is_liked && (
            <img
              src={favorite}
              onClick={() => likeTheComment(val?.id)}
              className="cursor-pointer"
            />
          )}
          {!val?.is_liked && (
            <img
              src={unfavorite}
              onClick={() => likeTheComment(val?.id)}
              className="cursor-pointer"
            />
          )}
          <p className="px-1 text-body2 text-steel500">{val?.like_count}</p>
        </div>
      </div>
    );
  };

  const greetingCard = () => {
    return (
      <div className="w-full" ref={refSpeech}>
        <img src={decoration3} className="ml-auto mr-auto w-[233px] pt-6"></img>
        <div className="relative px-6 pb-3 text-center">
          <p className="pt-9 font-[tanPearl] text-header1  font-medium text-steel700 ">
            Ucapan
          </p>
        </div>
        <div className="bg-coklat800 px-6 py-6 font-[alice] text-body4 font-medium text-white">
          <p>Dari {dataInvitation?.user?.name} :</p>
          <textarea
            value={dataMyComment}
            style={{ height: "100px" }}
            onChange={(e) => onChangeMyComment(e)}
            placeholder="Isi Ucapan"
            className="my-3 w-full rounded p-2 text-blackNeutral placeholder:text-coklat400"
          ></textarea>
          {idMyComment == "" && (
            <div
              onClick={() => createComments()}
              className="flex w-full cursor-pointer items-center justify-center gap-[4px]  rounded-[4px] bg-coklat500 px-[12px] py-[4px]"
            >
              <Send />
              <p className="select-none px-2 font-[alice] text-body3 font-medium text-white drop-shadow ">
                Kirim Ucapan
              </p>
            </div>
          )}
          {idMyComment !== "" && (
            <div
              onClick={() => updateMyComments()}
              className="flex w-full cursor-pointer items-center justify-center gap-[4px]  rounded-[4px] bg-coklat500 px-[12px] py-[4px]"
            >
              <Edit />
              <p className="select-none px-2 font-[alice] text-body3 font-medium text-white drop-shadow ">
                Edit Ucapan
              </p>
            </div>
          )}
        </div>
        <img
          src={decoration3}
          className="ml-auto mr-auto -scale-100 py-2"
        ></img>
        <div className="flex flex-col space-y-3 px-6 py-3">
          {dataComments.length == 0 && emptyCard()}
          {dataComments.length > 0 && dataComments.map((val) => cardItem(val))}
        </div>
        <Pagination
          page={page}
          totalPage={totalPage}
          onChange={onChangePage}
          setPage={setPage}
        />
      </div>
    );
  };

  const qr = () => {
    return (
      <div className="w-full">
        <div className="relative bg-white px-6 py-6 text-center">
          <div className="mb-6">
            {dataInvitation?.user?.id && (
              <QRCode
                fgColor="#6E513B"
                size={256}
                style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                value={dataInvitation?.user?.id || "A"}
                viewBox={`0 0 256 256`}
              />
            )}
          </div>
          <div
            onClick={() => {
              getMyQR();
            }}
            className="flex w-full cursor-pointer items-center justify-center gap-[4px]  rounded-[4px] bg-coklat500 px-[12px] py-[4px]"
          >
            <Download />
            <p className="select-none px-2 font-[alice] text-body3 font-medium text-white">
              {" "}
              Unduh QR Code
            </p>
          </div>
          <div className="my-5 flex-grow border-t-2 border-dashed border-steel500"></div>
          <div className="flex justify-between pb-4">
            <select
              disabled={isDisableRSVC}
              onChange={(e) => onChangeAtt(e)}
              value={isAttending}
              className={`cursor-pointer rounded border px-2 py-1 text-body4 ${
                isDisableRSVC
                  ? "border-[#BABABA] bg-[#BABABA] text-slate-50"
                  : "border-coklat500 bg-white "
              }`}
            >
              <option value={true}>Saya bisa hadir</option>
              <option value={false}>Saya tidak bisa hadir</option>
            </select>
            <div className="flex w-48 items-center justify-evenly">
              <div className="text-body4">Jumlah Orang :</div>
              <div
                onClick={() => onChangeNumber("-")}
                className={`relative h-5 w-5 cursor-pointer rounded-full ${
                  cPeople === 0 || isDisableRSVC
                    ? "bg-[#BABABA]"
                    : "bg-coklat500"
                }`}
              >
                <span
                  style={{ top: "-24px", left: "2.5px", fontSize: "40px" }}
                  className="absolute select-none text-white"
                >
                  -
                </span>
              </div>
              <p className="w-6">{cPeople}</p>
              <div
                onClick={() => onChangeNumber("+")}
                className={`relative h-5 w-5 cursor-pointer rounded-full ${
                  isAttending === "false" || isDisableRSVC
                    ? "bg-[#BABABA]"
                    : "bg-coklat500"
                }`}
              >
                <span
                  style={{ top: "-15px", left: "2px", fontSize: "30px" }}
                  className="absolute select-none text-white"
                >
                  +
                </span>
              </div>
            </div>
          </div>
          <div
            onClick={() => {
              setRsvp();
            }}
            className={`flex w-full cursor-pointer items-center justify-center gap-[4px]  rounded-[4px]  px-[12px] py-[4px] ${
              isDisableRSVC ? "bg-[#BABABA] " : "bg-coklat600"
            } `}
          >
            <CheckCircle
              className={`${isDisableRSVC ? "text-green-700 " : "text-white"} `}
            />
            <p className="select-none px-2 font-[alice] text-body3 font-medium text-white">
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
      <div className="py-11">
        <div
          style={{ height: "170px" }}
          className="relative ml-auto mr-auto flex items-center justify-center overflow-hidden pb-0 pt-6 text-center"
        >
          <img src={cloud3} className="absolute -right-16 -top-1"></img>
          <p className="font-[tanPearl] text-header2 font-medium text-coklat700">
            Sampai Berjumpa di Hari Pernikahan
          </p>
          <img
            src={cloud3}
            className="absolute -left-20 bottom-2 -scale-x-100"
          ></img>
        </div>
        <img src={streetMrt2} className="w-full object-fill"></img>
      </div>
    );
  };

  return (
    <div className="w-full">
      {isModal && modal()}
      {header()}
      {qr()}
      {vidio()}
      {/* {gift()} */}
      {greetingCard()}
      {footer()}
    </div>
  );
};
