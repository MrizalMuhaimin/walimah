export const TimeCard = ({ value, label }) => {
  return (
    <div>
      <div className="w-[55px] rounded-[9px] bg-coklat200/[.50] p-[10px]">
        <p className="text-center font-[tanPearl] text-header2 text-coklat700">
          {value < 0 ? 0 : value}
        </p>
      </div>
      <p className="text-center font-[alice] text-body4 text-coklat800">
        {label}
      </p>
    </div>
  );
};
