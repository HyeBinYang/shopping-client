import React from "react";
import { Route, Routes } from "react-router-dom";
import { Reset } from "styled-reset";
import Home from "./pages/Home";
import Search from "./pages/Search";
import { GlobalStyle } from "./styles/globalStyle";

const App = () => {
  return (
    <div>
      <Reset />
      <GlobalStyle />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/search" Component={Search} />
      </Routes>
    </div>
  );
};

export default App;
