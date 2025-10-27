import { useState } from "react";

const Card = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="w-[500px] h-[455px] perspective-[2000px]">
        <div
          className={`w-full h-full transition-transform duration-700 transform-3d ${
            isFlipped ? "transform-[rotateY(180deg)]" : ""
          }`}
        >
          <div className="absolute w-full h-full text-center backface-hidden rounded-4xl bg-card-bg border-8 border-yellow-border drop-shadow-2xl pt-10 flex flex-col items-center gap-4">
            <p className="font-comic font-bold text-3xl">Welk land is dit?</p>
            <div className="w-102 mx-auto rounded-2xl overflow-hidden">
              <img src="/images/nederland.png" className="w-full h-full" />
            </div>
          </div>
          <div className="absolute w-full h-full text-center backface-hidden rounded-4xl bg-card-bg transform-[rotateY(180deg)] border-8 border-blue-border drop-shadow-2xl pt-10">
            <p className="font-comic font-bold text-3xl">Nederland</p>
          </div>
        </div>
      </div>
      <button className="font-comic font-bold text-xl bg-purple-bg border-4 border-purple-border text-white rounded-full px-8 py-3 drop-shadow-xl">
        Ezelsbruggetje
      </button>
      <button
        onClick={() => setIsFlipped(!isFlipped)}
        className="font-comic font-bold text-xl bg-yellow-bg border-4 border-yellow-dark rounded-full px-8 py-3 drop-shadow-xl"
      >
        Draai om
      </button>
    </div>
  );
};

export default Card;
