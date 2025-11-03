import type { Country } from "../types";
import { capitalize } from "../utils";

interface CardProps {
  isFlipped: boolean;
  countryFront: Country;
  countryBack: Country;
}

const Card = ({ isFlipped, countryFront, countryBack }: CardProps) => {
  return (
    <div className="w-[500px] h-[555px] perspective-[2000px]">
      <div
        className={`w-full h-full transition-transform duration-700 transform-3d ${
          isFlipped ? "transform-[rotateY(180deg)]" : ""
        }`}
      >
        <div className="absolute w-full h-full text-center backface-hidden rounded-4xl bg-card-bg border-8 border-yellow-border drop-shadow-2xl pt-10 flex flex-col items-center gap-6">
          <p className="font-comic font-bold text-3xl">Welk land is dit?</p>
          <div className="w-102 mx-auto rounded-2xl overflow-hidden">
            <img
              src={`/images/${countryFront.name}.png`}
              className="w-full h-full"
            />
          </div>
        </div>
        <div className="absolute w-full h-full text-center backface-hidden rounded-4xl bg-card-bg transform-[rotateY(180deg)] border-8 border-blue-border drop-shadow-2xl pt-10 flex flex-col items-center gap-6">
          <p className="font-comic font-bold text-3xl">
            {capitalize(countryBack.name)}
          </p>
          <img
            src={`/images/${countryBack.name}_vlag.png`}
            className="w-[300px] mx-auto"
          />
          <p className="font-comic font-bold text-2xl">
            Inwoners: {countryBack.inhabitants}
          </p>
          <p className="font-comic font-bold text-2xl">
            Hoofdstad: {countryBack.capital}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
