import { useNavigate } from "react-router";
import Header from "../components/Header";
import Button from "../components/Button";

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/topo");
  };

  return (
    <>
      <Header subtext={null} />
      <main className="flex flex-col items-center gap-4 w-full px-4">
        <Button
          label="Ga naar Edutastic Topografie"
          color="yellow"
          onClick={handleClick}
        />
      </main>
    </>
  );
};

export default Home;
