import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./compoents/Home";
import Add from "./compoents/Add";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="add" element={<Add />} />
      </Routes>
    </div>
  );
}

export default App;
