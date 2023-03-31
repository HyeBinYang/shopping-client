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
import ProductPage from "./pages/Product";
import ProductRegister from "./pages/ProductRegister";
import My from "./pages/My";

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
        <Route path="/product/:id" Component={ProductPage} />
        <Route path="/product/register" Component={ProductRegister} />
        <Route path="/profile/:userId" Component={My} />
      </Routes>
      <Modal />
    </div>
  );
};

export default App;
