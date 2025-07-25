import Phone from "../assets/image/phone.png";
import {
  BanknoteArrowUp,
  UserRoundCheck,
  ChartCandlestick,
} from "lucide-react";

const QuickStart = () => {
  return (
    <section className="bg-gray-100 pt-16 px-4 sm:px-6 lg:px-12">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 xl:mb-12">
          QUISQUE RUTRUM
        </h2>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 xl:gap-12 relative">
          <div className="grid grid-cols-2 xl:flex xl:flex-col gap-4 xl:gap-16 items-end">
            <FeatureItem
              icon={
                <UserRoundCheck className="h-8 w-8 xl:w-14 xl:h-14 text-red-500 stroke-[1]" />
              }
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"

            />
            <FeatureItem
              icon={
                <BanknoteArrowUp className="h-8 w-8 xl:w-14 xl:h-14 text-red-500 stroke-[1]" />
              }
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            />
          </div>

          <div className="relative z-10 hidden xl:flex">
            <img
              src={Phone}
              alt="phone mockup"
              className="w-[280px] sm:w-[300px] md:w-[480px] lg:w-[520px] mx-auto"
            />
          </div>

          <div className="grid grid-cols-2 xl:flex xl:flex-col gap-4 xl:gap-16">
            <FeatureItem
              icon={
                <ChartCandlestick className="h-8 w-8 xl:w-14 xl:h-14 text-red-500 stroke-[1]" />
              }
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            />
            <FeatureItem
              icon={
                <UserRoundCheck className="h-8 w-8 xl:w-14 xl:h-14 text-red-500 stroke-[1]" />
              }
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            />
          </div>
          <div className="relative z-10 xl:hidden mt-4">
            <img
              src={Phone}
              alt="phone mockup"
              className="w-[240px] sm:w-[400px] md:w-[480px] lg:w-[520px] mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

function FeatureItem({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <div className={`flex flex-col max-w-[200px]`}>
      <div className="mb-2 xl:mb-4">{icon}</div>
      <p className="text-sm text-gray-600 text-left">{text}</p>
    </div>
  );
}

export default QuickStart;
