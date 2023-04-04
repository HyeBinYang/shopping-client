import React from "react";
import styled from "styled-components";
import ProductCard from "../common/ProductCard";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 24px;

  & > div {
    flex-basis: 25%;
    padding: 0 8px;
  }

  @media screen and (max-width: 600px) {
    & > div {
      flex-basis: 50%;
    }
  }

  @media screen and (max-width: 325px) {
    & > div {
      flex-basis: 100%;
    }
  }
`;

const SearchResultList = () => {
  return (
    <Wrapper>
      {/* <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard /> */}
    </Wrapper>
  );
};

export default SearchResultList;
