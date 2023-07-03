import cloud3 from "./../assets/img/cloud3.svg";
import streetMrt2 from "./../assets/img/streetMrt2.svg";
import card from "./../assets/img/card.svg";

export const NotFound = () => {
  const cardMessage = () => {
    return (
      <div
        className={
          "absolute z-20 flex w-full justify-center drop-shadow-md transition-all"
        }
      >
        <p className="absolute w-full p-14 text-body3 font-thin">
          Undangan ini memerlukan kode unik untuk dibuka. Pastikan anda memiliki
          kode unik.
        </p>
        <img src={card}></img>
      </div>
    );
  };

  const footer = () => {
    return (
      <div className="flex h-full flex-col justify-between">
        <div className="relative ml-auto mr-auto flex h-1/2 w-full items-center justify-center overflow-hidden pb-0 pt-6 text-center">
          <img src={cloud3} className="cloud2 absolute -right-16 top-5"></img>
          <img
            src={cloud3}
            className="cloud absolute right-16 top-1 first-letter:first-line:absolute"
          ></img>
          <img src={cloud3} className="cloud2 absolute right-16 top-10"></img>
          {cardMessage()}
          <img
            src={cloud3}
            className=" cloud absolute -right-16 bottom-20"
          ></img>
          <img
            src={cloud3}
            className="cloud2 absolute -left-20 bottom-2 -scale-x-100"
          ></img>
        </div>
        <img src={streetMrt2} className="w-full object-fill"></img>
      </div>
    );
  };
  return (
    <div className="flex h-full flex-col items-center justify-center bg-white">
      {footer()}
    </div>
  );
};
