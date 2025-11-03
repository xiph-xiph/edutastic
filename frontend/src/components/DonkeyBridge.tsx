import type { Country } from "../types";
import { AnimatePresence, motion } from "motion/react";

interface CardProps {
  isFlipped: boolean;
  isShown: boolean;
  countryFront: Country;
  countryBack: Country;
}

const DonkeyBridge = ({
  isFlipped,
  isShown,
  countryFront,
  countryBack,
}: CardProps) => {
  return (
    <AnimatePresence mode="popLayout">
      {isShown && (
        <motion.div
          layout
          initial={{ scale: 0.5, translateX: -400, opacity: 0 }}
          animate={{ scale: 1, translateX: 0, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          className="w-[350px] h-[555px] perspective-[2000px]"
        >
          <motion.div
            className="w-full h-full transform-3d"
            animate={{ rotateY: isFlipped ? "180deg" : "0deg" }}
            transition={{ duration: 0.3 }}
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
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DonkeyBridge;
