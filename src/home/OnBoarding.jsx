import { useState, useEffect } from "react";
import imgEnvelope from "./../assets/img/imgEnvelope.svg";
import union from "./../assets/img/union.svg";
import logoAA from "./../assets/img/logoAA.svg";
import lampLeft from "./../assets/img/lampLeft.svg";
import lampRight from "./../assets/img/lampRight.svg";
import card from "./../assets/img/card.svg";
import { ReactComponent as CheckCircle } from "./../assets/img/checkCircle.svg";

import { createUser, updateUser } from "./../services/user";

export const OnBoarding = ({
  setStatePage = () => {},
  dataInvitation = {},
  getDataInvitation = () => {},
}) => {
  const [isCard, setIsCard] = useState(false);
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
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

  const createNewUser = async () => {
    const data = {
      wa_number: number,
    };
    const response = await createUser(dataInvitation?.invitation?.id, data);
    const dataRes = response?.data || {};
    if (dataRes?.message == "success") {
      getDataInvitation();
    } else {
      console.log(dataRes.message);
      setWarning(dataRes?.message);
    }
  };

  const updateDataUser = async () => {
    const data = {
      name: name,
    };
    const response = await updateUser(dataInvitation?.user?.id, data);
    const dataRes = response?.data || {};
    if (dataRes?.message == "success") {
      getDataInvitation();
    } else {
      setWarning(dataRes?.message);
    }
  };

  const onNext = () => {
    if (warning == "") {
      getDataInvitation();

      if (dataInvitation?.invitation?.status === "AVAILABLE" && number != "") {
        createNewUser();
      } else if (
        dataInvitation?.user?.status === "NEWLY_CREATED" &&
        name != ""
      ) {
        updateDataUser();
      } else if (dataInvitation?.user?.status === "INFO_COMPLETED") {
        setIsCard(true);
      }

      if (number === "") {
        setWarning("Nomer harus diisi");
      } else if (name === "") {
        setWarning("Nama harus diisi");
      }
    }
  };

  useEffect(() => {
    if (dataInvitation?.user?.status === "INFO_COMPLETED") {
      setIsCard(true);
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
          {dataInvitation?.invitation?.status === "AVAILABLE" && (
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
          {dataInvitation?.user?.status === "NEWLY_CREATED" && (
            <div className="w-full">
              <p className="font-[alice] text-body5 font-light">Nama</p>
              <input
                type="text"
                value={name}
                className="input-type1 w-full rounded-sm border border-steel500 p-2 text-body5 placeholder:text-body5 placeholder:text-steel400"
                placeholder="Isi dengan Nama Lengkap Anda"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              ></input>
            </div>
          )}
          {dataInvitation?.user?.name && (
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
          {!isCard && (
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In orci est,
          ultrices sed tempor eu, sagittis id erat. In pretium accumsan
          vehicula. Integer ac libero leo.
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
