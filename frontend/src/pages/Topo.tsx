import Card from "../components/Card";

const Topo = () => {
  return (
    <div className="page-container">
      <header className="flex flex-col items-center gap-4 w-full px-4">
        <h1 className="text-6xl font-comic font-bold text-primary-green title-shadow">
          Edutastic
        </h1>
        <p className="font-comic font-bold text-2xl">topografie</p>
      </header>

      <section className="flex justify-between max-w-[370px] w-full">
        <h2 className="font-comic font-bold text-xl">Vraag 1/10</h2>
        <p className="font-comic font-bold text-xl">Punten: 0</p>
      </section>
      <main>
        <Card />
      </main>
    </div>
  );
};

export default Topo;
