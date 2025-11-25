import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Header from "./components/header";
import Homepage from "./pages/Homepage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route path="/" element={<Homepage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
