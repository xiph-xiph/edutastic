import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Topo from "./pages/Topo";

const App = () => {
  return (
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/topo" Component={Topo} />
    </Routes>
  );
};

export default App;
