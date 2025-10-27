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
          <div className="absolute w-full h-full text-center backface-hidden rounded-4xl bg-[#F5F5F5] border-8 border-[#FFED48] drop-shadow-2xl pt-10 flex flex-col items-center gap-4">
            <p className="font-comic font-bold text-3xl">Welk land is dit?</p>
            <div className="w-102 mx-auto rounded-2xl overflow-hidden">
              <img src="/images/nederland.png" className="w-full h-full" />
            </div>
          </div>
          <div className="absolute w-full h-full text-center backface-hidden rounded-4xl bg-[#F5F5F5] transform-[rotateY(180deg)] border-8 border-[#4245FF] drop-shadow-2xl pt-10">
            <p className="font-comic font-bold text-3xl">Nederland</p>
          </div>
        </div>
      </div>
      <button className="font-comic font-bold text-xl bg-[#C163D4] border-4 border-[#7A1C99] text-white rounded-full px-8 py-3 drop-shadow-xl">
        Ezelsbruggetje
      </button>
      <button
        onClick={() => setIsFlipped(!isFlipped)}
        className="font-comic font-bold text-xl bg-[#FFF069] border-4 border-[#E8D100] rounded-full px-8 py-3 drop-shadow-xl"
      >
        Draai om
      </button>
    </div>
  );
};

export default Card;
