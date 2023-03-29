import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { Reset } from "styled-reset";
import Header from "./components/base/Header";
import Modal from "./components/common/Modal";
import ModalContext from "./context/modal";
import Event from "./pages/Event";
import Home from "./pages/Home";
import Search from "./pages/Search";
import { GlobalStyle } from "./styles/globalStyle";

const App = () => {
  return (
    <div>
      <Reset />
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/search" Component={Search} />
        <Route path="/events" Component={Event} />
      </Routes>
      <Modal />
    </div>
  );
};

export default App;
