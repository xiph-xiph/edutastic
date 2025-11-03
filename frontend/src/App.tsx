import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Topo from "./pages/Topo";

const App = () => {
  return (
    <div className="page-container">
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/topo" Component={Topo} />
      </Routes>
    </div>
  );
};

export default App;
