import CardRank from "../components/CardRank";
import Medal01 from "../assets/image/medal-01.png";
import Medal02 from "../assets/image/medal-02.png";
import Medal03 from "../assets/image/medal-03.png";
import { Button } from "../components/ui/button";

const Prizes = () => {
  const prizeList = [
    {
      amount: "$1000",
      desc: "CRAS DAPIBUS & CRAS DAPIBUS",
      img: Medal01,
    },
    { amount: "$1000", desc: "CRAS DAPIBUS", img: Medal02 },
    { amount: "$1000", desc: "CRAS DAPIBUS", img: Medal03 },
  ];

  return (
    <section className="py-20 bg-white text-center px-4 sm:px-6 lg:px-12">
      <h2 className="text-2xl font-semibold mb-12">PRIZES</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {prizeList.map((item) => (
          <CardRank key={item.img} {...item} />
        ))}
      </div>

      <div className="mt-16">
        <Button
          type="submit"
          className="mt-6 w-full sm:w-1/2 lg:w-[16%] h-[54px] bg-[#179149] hover:bg-green-400 text-xl"
        >
          JOIN NOW
        </Button>
        <p className="mt-2 text-[#A8A8A8]">Terms and Conditions apply</p>
      </div>
    </section>
  );
};

export default Prizes;
