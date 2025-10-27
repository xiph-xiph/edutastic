import Card from "../components/Card";

const Topo = () => {
  return (
    <div className="bg-[#D2F2FF] min-h-screen flex flex-col items-center gap-10 pt-8">
      <header className="flex flex-col items-center gap-12 w-full px-4">
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-6xl font-comic font-bold text-green-500 title-shadow">
            Edutastic
          </h1>
          <h2 className="font-comic font-bold text-2xl">topografie</h2>
        </div>

        <div className="flex justify-between max-w-[370px] w-full">
          <h2 className="font-comic font-bold text-xl">Vraag 1/10</h2>
          <h2 className="font-comic font-bold text-xl">Punten: 0</h2>
        </div>
      </header>
      <main>
        <Card />
      </main>
    </div>
  );
};

export default Topo;
