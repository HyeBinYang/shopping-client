import React, { useEffect, useState } from "react";
import styled from "styled-components";
import HomeProducts from "../components/home/HomeProducts";
import { Product } from "../types/product";
import axiosInstance from "../utils/axios";

const HomeWrapper = styled.main`
  max-width: 1100px;
  margin: 0 auto;
  padding-bottom: 100px;
`;

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // 최신 상품 데이터 요청
    axiosInstance.get("/product").then((res) => {
      setProducts(res.data);
    });
  }, []);

  return (
    <>
      <HomeWrapper>
        {/* <HomeProducts title="인기 상품" /> */}
        <HomeProducts title="최신 상품" products={products} />
      </HomeWrapper>
    </>
  );
};

export default Home;
