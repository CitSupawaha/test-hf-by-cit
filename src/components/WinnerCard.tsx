type WinnerCardProps = {
  rank: number;
  date: string;
  name: string;
  phone: string;
  gain: string;
  prize: string;
  img: string;
};

const WinnerCard = ({
  date,
  name,
  gain,
  prize,
  img,
  phone,
}: WinnerCardProps) => {
  return (
    <div className="relative bg-white rounded-2xl p-4 shadow-lg  overflow-hidden">
      <div className="absolute top-0  -right-8 overflow-visible">
        <div className="bg-gradient text-white w-40 py-1 text-center text-md font-bold transform rotate-45 translate-x-6 translate-y-2 ">
          {prize}
        </div>
      </div>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-3 flex justify-center items-center">
          <img src={img} className="xl:w-20 xl:h-20 h-12 w-12" />
        </div>
        <div className="col-span-9 ">
          <div className="text-gradient font-bold xl:mb-4">
            {date} {name}
          </div>
          <div className="flex items-center gap-4">
            <div className="flex-1 min-w-0">
              <div className="text-md xl:text-lg">{name}</div>
              <div className="text-sm text-[#A8A8A8]">{phone}</div>

              <div className="flex items-center gap-2 xl:mt-3">
                <span className="text-sm  font-bold">
                  TOTAL GAIN OF
                </span>
                <span className="text-md xl:text-lg font-bold text-red-500">{gain}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WinnerCard;
