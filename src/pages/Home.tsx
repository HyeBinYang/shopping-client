import React from "react";
import styled from "styled-components";
import Header from "../components/base/Header";
import HomeEvent from "../components/home/HomeEvent";
import HomeProducts from "../components/home/HomeProducts";

const HomeWrapper = styled.main`
  padding-bottom: 100px;
`;

const Home = () => {
  return (
    <>
      <Header />
      <HomeWrapper>
        <HomeEvent />
        <HomeProducts title="인기 상품" />
        <HomeProducts title="최신 상품" />
      </HomeWrapper>
    </>
  );
};

export default Home;
