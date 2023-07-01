import leftLeaf from "./../assets/img/leftLeaf.svg";
import rightLeaf from "./../assets/img/rightLeaf.svg";

export const MainUpperSection = ({ dataInvitation = {} }) => {
  const header = () => {
    return (
      <div
        className="relative h-[300px] w-full bg-white pt-6 shadow-[inset_0px_-8px_16px_0px_rgba(70,130,180,0.25)]
          "
        style={{
          clipPath:
            "path('M 0 0 L 384 0 V 300 H 356 C 269 189 115 189 28 300 H 0 Z')",
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
  };
  const greeting = () => {
    return <div className="">greeting</div>;
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
