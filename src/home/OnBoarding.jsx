import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import imgEnvelope from "./../assets/img/imgEnvelope.svg";
import union from "./../assets/img/union.svg";
import logoAA from "./../assets/img/logoAA.svg";
import lampLeft from "./../assets/img/lampLeft.svg";
import lampRight from "./../assets/img/lampRight.svg";
import card from "./../assets/img/card.svg";
import { ReactComponent as CheckCircle } from "./../assets/img/checkCircle.svg";

import { createUser, updateUser } from "./../services/user";
import { cekInvitation } from "./../services/invitations";

export const OnBoarding = ({
  setStatePage = () => {},
  dataInvitation = {},
  getDataInvitation = () => {},
  updateDataInvitationByNumber = () => {},
}) => {
  const [isCard, setIsCard] = useState(false);
  const [number, setNumber] = useState("");
  const [isNumber, setIsNumber] = useState(false);
  const [name, setName] = useState("");
  const [isName, setIsName] = useState(false);
  const [showName, setShowName] = useState(false);
  const [warning, setWarning] = useState("");

  const onChangeNumber = (e) => {
    const val = e.target.value;
    if (val.startsWith("+")) {
      setNumber(val);
    } else {
      setNumber("");
    }

    if (val.toString().startsWith("+62")) {
      setWarning("");
    } else {
      setWarning("Format nomer harus +62");
    }
  };

  const onChangeName = (e) => {
    const val = e.target.value;
    setName(val);
    if (val != "") {
      setWarning("");
    }
  };

  const getUserByNumber = async () => {
    const response = await cekInvitation(number);
    const dataRes = response?.data || {};
    if (dataRes?.message == "success") {
      console.log(dataRes.message);
      updateDataInvitationByNumber(number);
      toast.success('Nomor WhatsApp berhasil disimpan.', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setIsNumber(false);
    } else {
      console.log(dataRes.message);
      createNewUser();
    }
  };

  const createNewUser = async () => {
    const data = {
      wa_number: number,
    };
    const response = await createUser(dataInvitation?.invitation?.id, data);
    const dataRes = response?.data || {};
    if (dataRes?.message == "success") {
      if (dataInvitation?.invitation?.type == "SINGLE") {
        getDataInvitation();
      } else {
        updateDataInvitationByNumber(number);
      }
      setIsNumber(false);
      setIsName(true);
      toast.success('Nomor WhatsApp berhasil disimpan. Silahkan masukkan nama.', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      console.log(dataRes.message);
      setWarning(dataRes?.message);
    }
  };

  const updateDataUser = async () => {
    if (name != "") {
      const data = {
        name: name,
      };
      const response = await updateUser(dataInvitation?.user?.id, data);
      const dataRes = response?.data || {};
      if (dataRes?.message == "success") {
        setIsName(false);
        setIsNumber(false);
        if (dataInvitation?.invitation?.type == "SINGLE") {
          getDataInvitation();
        } else {
          updateDataInvitationByNumber(number);
        }
        setIsCard(true);
      } else {
        setWarning(dataRes?.message);
      }
    } else {
      setWarning("Nama harus diisi");
    }
  };

  const onNext = () => {
    if (warning == "") {
      getDataInvitation();

      if (
        dataInvitation?.invitation?.status === "AVAILABLE" &&
        number != "" &&
        dataInvitation?.invitation?.type == "SINGLE"
      ) {
        createNewUser();
      }
      if (
        dataInvitation?.invitation?.status === "AVAILABLE" &&
        number != "" &&
        dataInvitation?.invitation?.type == "GROUP" &&
        dataInvitation?.user?.status != "NEWLY_CREATED"
      ) {
        getUserByNumber();
      } else if (dataInvitation?.user?.status === "NEWLY_CREATED") {
        updateDataUser();
      } else if (dataInvitation?.user?.status === "INFO_COMPLETED") {
        setIsCard(true);
      }

      if (number === "") {
        setWarning("Nomer harus diisi");
      }
    }
  };


  useEffect(() => {
    if (
      dataInvitation?.user?.status === "INFO_COMPLETED" &&
      dataInvitation?.invitation?.type == "SINGLE"
    ) {
      setIsCard(true);
      setIsName(false);
      setIsNumber(false);
      setShowName(true);
    }

    if (
      dataInvitation?.user?.status == "NEWLY_CREATED" &&
      dataInvitation?.invitation?.type == "SINGLE"
    ) {
      setIsName(true);
      setIsNumber(false);
      setNumber(dataInvitation?.user?.wa_number)
    }

    if (
      dataInvitation?.invitation?.status == "AVAILABLE" &&
      dataInvitation?.invitation?.type == "SINGLE"
    ) {
      setIsNumber(true);
    }

    if (
      dataInvitation?.invitation?.status == "AVAILABLE" &&
      dataInvitation?.invitation?.type == "GROUP" &&
      dataInvitation?.user?.status == "RSVP_PROVIDED"
    ) {
      setStatePage("mainPage");
    } else if (
      dataInvitation?.invitation?.status == "AVAILABLE" &&
      dataInvitation?.invitation?.type == "GROUP" &&
      dataInvitation?.user?.status == "NEWLY_CREATED"
    ) {
      setIsNumber(false);
      setIsName(true);
    } else if (
      dataInvitation?.invitation?.status == "AVAILABLE" &&
      dataInvitation?.invitation?.type == "GROUP" &&
      dataInvitation?.user?.status == "INFO_COMPLETED"
    ) {
      setIsCard(true);
      setIsName(false);
      setIsNumber(false);
      setShowName(true);
    } else if (
      dataInvitation?.invitation?.status == "AVAILABLE" &&
      dataInvitation?.invitation?.type == "GROUP"
    ) {
      setIsNumber(true);
    }
  }, [dataInvitation]);

  const header = () => {
    return (
      <div className="relative z-20 px-6 pt-6">
        <p className="font-[alice] text-body4 font-medium">dari:</p>
        <p className="font-[tanPearl] text-header1 font-medium text-coklat600 ">
          Afra & Akram
        </p>
      </div>
    );
  };

  const inputForm = () => {
    return (
      <div className="relative z-20 px-6">
        <p className="font-[alice] text-body4 font-medium">untuk:</p>
        <div className="flex w-full flex-col space-y-2">
          {isNumber && (
            <div className="w-full">
              <p className="font-[alice] text-body5 font-light">Nomer</p>
              <input
                type="text"
                value={number}
                className="input-type1 w-full rounded-sm border border-steel500 p-2 text-body5 placeholder:text-body4 placeholder:text-steel400"
                placeholder="Isi nomer Anda dengan format +6281234567890"
                onChange={(e) => {
                  onChangeNumber(e);
                }}
              ></input>
            </div>
          )}
          {isName && (
            <div className="w-full">
              <p className="font-[alice] text-body5 font-light">Nama</p>
              <input
                type="text"
                value={name}
                className="input-type1 w-full rounded-sm border border-steel500 p-2 text-body5 placeholder:text-body5 placeholder:text-steel400"
                placeholder="Isi dengan Nama Lengkap Anda"
                onChange={(e) => {
                  onChangeName(e);
                }}
              ></input>
            </div>
          )}
          {showName && (
            <div style={{ width: "311px" }}>
              <p className="py-2 text-center font-[tanPearl] text-header3 font-medium text-coklat600 ">
                {dataInvitation?.user?.name}
              </p>
            </div>
          )}
        </div>
        {warning != "" && (
          <p className="font-[alice] text-body5 font-light text-danger300">
            {warning}
          </p>
        )}
      </div>
    );
  };

  const background = () => {
    return (
      <div className="absolute bottom-40 flex w-full">
        <div className="relative bottom-0 left-0 flex w-full justify-center">
          <img src={lampLeft}></img>
        </div>
        <div className="relative -bottom-10 left-0 flex w-full justify-center">
          <img src={lampRight}></img>
        </div>
      </div>
    );
  };

  const envelope = () => {
    return (
      <div
        className={`trans absolute left-0 flex h-max w-full justify-center px-2 ${
          isCard ? "-bottom-16" : "bottom-0"
        }`}
      >
        <div className="absolute bottom-16 left-0 z-10 flex w-full justify-center">
          <img src={union}></img>
        </div>
        <div className="absolute bottom-0 left-0 z-30 flex w-full justify-center">
          <img src={imgEnvelope}></img>
        </div>
        <div className="relative left-0 top-0 z-10 flex h-80 w-full justify-center">
          {!isCard && dataInvitation && (
            <div
              className="relative flex h-32 w-32 cursor-pointer items-center justify-center rounded-full bg-coklat400 text-center drop-shadow-md"
              onClick={() => onNext()}
            >
              <p className="absolute font-[alice] text-body3 font-medium">
                Ketuk untuk melanjutkan
              </p>
              <div className="absolute flex w-full justify-center">
                <img src={logoAA}></img>
              </div>
            </div>
          )}

          {isCard && (
            <div
              className="relative -bottom-5 flex h-9 w-10/12 cursor-pointer items-center justify-center rounded-sm bg-coklat400 text-center drop-shadow-md"
              onClick={() => setStatePage("quizPage")}
            >
              <CheckCircle className="text-white" />
              <p className="px-1 font-[alice] text-body4 font-medium text-white">
                Terima Tantangan
              </p>
            </div>
          )}
        </div>
      </div>
    );
  };

  const cardMessage = () => {
    return (
      <div
        className={`absolute z-20 flex w-full justify-center drop-shadow-md transition-all ${
          isCard ? "-bottom-20 -translate-y-80" : "-bottom-20"
        }`}
      >
        <p className="absolute w-full p-14 text-body3 font-thin">
          Tidak ada hal yang cuma-cuma di sirkel kami. Buktikan bahwa kamu
          memang yang terpilih yang bisa menyelesaikan tantangan ini. Seberapa
          tangguh kamu?
        </p>
        <img src={card}></img>
      </div>
    );
  };

  return (
    <div className="relative flex h-full flex-col justify-between">
      <div className="h-full w-full">
        {header()}
        {inputForm()}
        {cardMessage()}
      </div>
      <div className="relative h-80 w-full">
        {background()}
        {envelope()}
      </div>
    </div>
  );
};
