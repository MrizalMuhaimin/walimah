import cloud3 from './../assets/img/cloud3.svg'
import streetMrt2 from './../assets/img/streetMrt2.svg'

export const NotFound = () => {
  const footer = () => {
    return (
      <div className="h-full flex justify-between flex-col">
        <div
          className="relative w-full ml-auto h-1/2 mr-auto flex items-center justify-center overflow-hidden pb-0 pt-6 text-center"
        >
          <img src={cloud3} className="cloud2 absolute -right-16 top-5"></img>
          <img src={cloud3} className="cloud absolute first-letter:first-line:absolute right-16 top-1"></img>
          <img src={cloud3} className="cloud2 absolute right-16 top-10"></img>
          <p className="font-[tanPearl] text-header2 font-medium text-coklat700">
            Maaf halaman tidak tersedia
          </p>
          <img src={cloud3} className=" cloud absolute -right-16 bottom-20"></img>
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
    <div className="flex flex-col h-full items-center justify-center">
      {footer()}
    </div>
  );
};
