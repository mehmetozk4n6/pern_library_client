import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./compoents/Home";
import Add from "./compoents/Add";
import { Box } from "@mui/material";

function App() {
  return (
    <div className="App">
      <Box sx={{ width: "75%", marginX: "auto", padding: 3 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="add" element={<Add />} />
        </Routes>
      </Box>
    </div>
  );
}

export default App;
