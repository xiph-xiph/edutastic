import type { Country } from "../types";

interface CardProps {
  isFlipped: boolean;
  countryFront: Country;
  countryBack: Country;
}

const DonkeyBridge = ({ isFlipped, countryFront, countryBack }: CardProps) => {
  return (
    <div className="w-[350px] h-[555px] perspective-[2000px]">
      <div
        className={`w-full h-full transition-transform duration-700 transform-3d ${
          isFlipped ? "transform-[rotateY(180deg)]" : ""
        }`}
      >
        <div className="absolute w-full h-full text-center backface-hidden rounded-4xl bg-card-bg border-8 border-purple-bg drop-shadow-2xl py-8 px-3 ">
          <p className="font-comic font-bold text-3xl">Ezelsbruggetje</p>
          <div className="mx-auto rounded-2xl overflow-hidden w-[230px] shrink-0">
            <img
              src={`/images/${countryFront.name}_eb.png`}
              className="w-full h-auto object-contain block"
            />
          </div>
        </div>
        <div className="absolute w-full h-full text-center backface-hidden rounded-4xl bg-card-bg border-8 border-purple-bg drop-shadow-2xl py-8 px-3 flex flex-col items-center justify-center gap-4">
          <p className="font-comic font-bold text-3xl">Ezelsbruggetje</p>
          <div className="mx-auto rounded-2xl overflow-hidden w-[230px] shrink-0">
            <img
              src={`/images/${countryBack.name}_eb.png`}
              className="w-full h-auto object-contain block"
            />
          </div>
        </div>
        <div className="absolute w-full h-full text-center backface-hidden rounded-4xl bg-card-bg border-8 border-purple-bg drop-shadow-2xl py-8 px-3 flex flex-col items-center justify-center gap-4 transform-[rotateY(180deg)]">
          <p className="font-comic font-bold text-3xl">Ezelsbruggetje</p>
          <div className="mx-auto rounded-2xl overflow-hidden h-[300px] shrink-0">
            <img
              src={`/images/${countryBack.name}_eb.png`}
              className="w-full h-auto object-contain block"
            />
          </div>
          <p className="font-comic font-bold text-2xl">
            {countryBack.donkeyBridgeDescription}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DonkeyBridge;
