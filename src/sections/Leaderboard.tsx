import LeaderboardTable from "../components/LeaderboardTable";
import WinnerCard from "../components/WinnerCard";
import Trophy01 from "../assets/image/trophy-01.png";
import Trophy02 from "../assets/image/trophy-02.png";
import Trophy03 from "../assets/image/trophy-03.png";
import FAQAccordion from "../components/FAQAccordion";
import { Button } from "../components/ui/button";

const winners = [
  {
    rank: 1,
    date: "January 1st winner",
    name: "John Smith",
    phone: "567897654",
    gain: "1634.4%",
    prize: "$1000",
    img: Trophy01,
  },
  {
    rank: 2,
    date: "January 2nd winner",
    name: "John Smith",
    phone: "567897654",
    gain: "1634.4%",
    prize: "$1000",
    img: Trophy02,
  },
  {
    rank: 3,
    date: "January 3rd winner",
    name: "John Smith",
    phone: "567897654",
    gain: "1634.4%",
    prize: "$1000",
    img: Trophy03,
  },
];

const leaderboard = [
  { name: "John Smith", gain: "1624.19%" },
  { name: "John Smith", gain: "1081.63%" },
  { name: "John Smith", gain: "633.47%" },
  { name: "John Smith", gain: "169.20%" },
  { name: "John Smith", gain: "158.62%" },
  { name: "John Smith", gain: "124.50%" },
  { name: "John Smith", gain: "71.47%" },
  { name: "John Smith", gain: "67.05%" },
  { name: "John Smith", gain: "62.30%" },
  { name: "John Smith", gain: "61.74%" },
];

const Leaderboard = () => {
  return (
    <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-12">
      <h2 className="text-center text-2xl font-semibold mb-12">
        SED FRINGILLA MAURIS SIT
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <div className="flex flex-col gap-4">
          {winners.map((winner) => (
            <WinnerCard key={winner.rank} {...winner} />
          ))}
        </div>
        <LeaderboardTable rows={leaderboard} />
      </div>

      <div className="flex justify-center mt-12">
        <Button
          type="submit"
          className="w-full sm:w-1/2 lg:w-[25%] bg-[#179149] h-[54px] hover:bg-green-400 text-xl"
        >
          JOIN NOW
        </Button>
      </div>
      <p className="text-center mt-2 text-[#A8A8A8]">
        Terms and Conditions apply
      </p>

      <div className="mt-20">
        <FAQAccordion />
      </div>
    </section>
  );
};

export default Leaderboard;
