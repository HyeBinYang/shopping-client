import React from "react";
import SearchMainTemplate from "../components/search/SearchMainTemplate";
import SearchSide from "../components/search/SearchSide";
import styled from "styled-components";

const Wrapper = styled.main`
  max-width: 1100px;
  margin: 0 auto;
  position: relative;
`;

const Search = () => {
  return (
    <Wrapper>
      <SearchSide />
      <SearchMainTemplate />
    </Wrapper>
  );
};

export default Search;
