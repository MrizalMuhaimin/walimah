export const MainUpperSection = ({ dataInvitation = {} }) => {
  const header = () => {
    return (
      <div className="w-full pt-6">
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
    return <div>greeting</div>;
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
    <div className="w-full">
      {header()}
      {greeting()}
      {content()}
      {invitation()}
      {countdown()}
    </div>
  );
};
