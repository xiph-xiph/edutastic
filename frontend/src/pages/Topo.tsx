import { useState } from "react";
import Card from "../components/Card";
import Header from "../components/Header";
import Button from "../components/Button";
import DonkeyBridge from "../components/DonkeyBridge";
import { getDefaultCountries, sleep } from "../utils";

const Topo = () => {
  const countries = getDefaultCountries();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [donkeyBridgeIsShown, setDonkeyBridgeIsShown] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const [flipIsInProgress, setFlipIsInProgress] = useState(false);
  const [points, setPoints] = useState(0);

  const currentCountry = countries[currentQuestion];
  const nextCountry =
    countries[Math.min(countries.length, currentQuestion + 1)];

  const handleCorrect = async () => {
    setFlipIsInProgress(true);
    setIsFlipped(false);
    await sleep(290);
    setFlipIsInProgress(false);
    setDonkeyBridgeIsShown(false);
    setCurrentQuestion(currentQuestion + 1);
    setPoints(points + 1);
  };

  const handleIncorrect = async () => {
    setFlipIsInProgress(true);
    setIsFlipped(false);
    await sleep(290);
    setFlipIsInProgress(false);
    setDonkeyBridgeIsShown(false);
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <>
      <Header subtext="topografie" />
      <section className="flex justify-between max-w-[370px] w-full">
        <h2 className="font-comic font-bold text-xl">
          Vraag {currentQuestion + 1}/{countries.length}
        </h2>
        <p className="font-comic font-bold text-xl">Punten: {points}</p>
      </section>
      <main className="flex flex-col items-center gap-8">
        <div className="flex gap-4">
          <Card
            isFlipped={isFlipped}
            countryFront={flipIsInProgress ? nextCountry : currentCountry}
            countryBack={currentCountry}
          />
          {donkeyBridgeIsShown && (
            <DonkeyBridge
              isFlipped={isFlipped}
              countryFront={flipIsInProgress ? nextCountry : currentCountry}
              countryBack={currentCountry}
            />
          )}
        </div>

        <Button
          label="Ezelsbruggetje"
          onClick={() => setDonkeyBridgeIsShown(true)}
          color="purple"
          invisible={donkeyBridgeIsShown}
        />

        {!isFlipped ? (
          <Button
            label="Draai om"
            onClick={() => setIsFlipped(true)}
            color="yellow"
          />
        ) : (
          <>
            <p className="font-comic font-bold text-3xl">
              Had je het goed of fout?
            </p>
            <div className="flex gap-10">
              <Button color="green" label="Goed" onClick={handleCorrect} />
              <Button color="red" label="Fout" onClick={handleIncorrect} />
            </div>
          </>
        )}
      </main>
    </>
  );
};

export default Topo;
