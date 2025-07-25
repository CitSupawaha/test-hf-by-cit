type PrizeCardProps = {
  amount: string;
  desc: string;
  img: string;
};

const CardRank = ({ amount, desc, img }: PrizeCardProps) => {
  return (
    <div className="flex-1 bg-[#F4F4F4] p-4 xl:p-8 rounded-xl flex flex-col w-full items-center shadow-sm">
      <img src={img} className="h-20 w-20 mt-4" />

      <h3 className="text-2xl xl:text-4xl font-bold mb-6 mt-6">{amount}</h3>
      <p className="text-sm text-gray-600 text-center w-[120px]">{desc}</p>
    </div>
  );
};

export default CardRank;
