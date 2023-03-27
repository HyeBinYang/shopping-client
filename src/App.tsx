import React from "react";
import { Route, Routes } from "react-router-dom";
import { Reset } from "styled-reset";
import Header from "./components/base/Header";
import Home from "./pages/Home";
import { GlobalStyle } from "./styles/globalStyle";

const App = () => {
  return (
    <div>
      <Reset />
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" Component={Home} />
      </Routes>
    </div>
  );
};

export default App;
