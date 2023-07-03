import { useState } from "react";
import { toast } from "react-toastify";

import tent1 from "./../assets/img/tent1.svg";
import quiz from "./../assets/img/quiz.webp";

export const Quiz = ({ setStatePage = () => {} }) => {
  const [indexSelected, setIndexSelected] = useState(-1);

  const listAnswer = [
    {
      q: "Di kepala ayamnya",
      status: false,
    },
    {
      q: "Mungkin ketinggalan di rumah",
      status: false,
    },
    {
      q: "Ayam jantan mana ada sih yang Bertelor :)",
      status: true,
    },
  ];

  const onClickItem = (index) => {
    setIndexSelected(index);
    if (listAnswer[index].status) {
      setStatePage("mainPage");
    } else {
      toast.error("Maaf jawaban salah!!.", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const header = () => {
    return (
      <div className="px-6 pt-6 text-center">
        <p className="font-[tanPearl] text-header1 font-medium text-steel700 ">
          Jawab ini dulu!
        </p>
        <div className="ml-auto mr-auto w-72 text-center">
          <p className="font-[alice] text-body3 font-medium">
            Rossi naek motor lama itungannya kerja. Kita naek motor lama mah
            baru berangkat kerja. Belom kerjanya :
          </p>
        </div>
      </div>
    );
  };

  const questionItem = (text = "", isSelected = false, index = 0) => {
    return (
      <div
        key={index}
        className="flex cursor-pointer items-center rounded-md border border-grey bg-white px-2 py-1 active:bg-coklat300"
        onClick={() => onClickItem(index)}
      >
        <input
          type="radio"
          checked={isSelected}
          readOnly
          className="h-6 w-6 rounded-full accent-coklat500"
        />
        <span className="ml-2 font-[alice] text-body5 font-medium ">
          {text}
        </span>
      </div>
    );
  };

  const card = () => {
    return (
      <div className="px-6 pt-3 ">
        <div className="rounded-md bg-coklat100 p-3 drop-shadow">
          <img src={quiz} style={{ width: "288px", height: "138px" }}></img>
          <div className="ml-auto mr-auto w-72 pb-2 pt-2 text-center">
            <p className="font-[alice] text-body3 font-medium">
              Ada ayam jantan palanya ada di amerika ekornya di Afrika,
              sayapnya di Jakarta, matanya ada di Brazil, telurnya ada di mana?
            </p>
          </div>
          <div className="flex flex-col space-y-2">
            {listAnswer.map((val, index) =>
              questionItem(val.q, index === indexSelected, index)
            )}
          </div>
        </div>
      </div>
    );
  };

  const ornament = () => {
    return (
      <div className="w-full">
        <img src={tent1}></img>
      </div>
    );
  };

  return (
    <div className="relative flex h-full w-full flex-col justify-between">
      {header()}
      {card()}
      {ornament()}
    </div>
  );
};
