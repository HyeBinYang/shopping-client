import React from "react";
import styled from "styled-components";
import SearchFilter from "./SearchFilter";
import SearchResultList from "./SearchResultList";

const Wrapper = styled.main`
  margin-left: 250px;
  padding-top: 40px;
  padding-left: 10px;

  hr {
    margin: 20px 0;
    border: 1px solid #000;
  }

  @media screen and (max-width: 1024px) {
    & {
      margin-left: 0;
    }
  }
`;

const Title = styled.p`
  font-size: 20px;
  font-weight: 600;
`;

const SearchMainTemplate = () => {
  return (
    <Wrapper>
      <Title>전체 (24,941,203)</Title>
      <hr />
      <SearchFilter />
      <SearchResultList />
    </Wrapper>
  );
};

export default SearchMainTemplate;
