import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Login";

const App = () => {
  return (
    <BrowserRouter>
      {/* JOSE */}
      <Routes>
        <Route index path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>


  );
};

export default App;