import Box from "@mui/material/Box";
import React from "react";
import Filter from "./Filter";
import Navbar from "./Navbar";
import Table from "./Table";

function Home() {
  return (
    <div>
      <Navbar />
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        <Table />
        <Filter />
      </Box>
    </div>
  );
}

export default Home;
