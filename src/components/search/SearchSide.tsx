import React, { useState } from "react";
import styled from "styled-components";
import colors from "../../styles/colors";
import { categoryList } from "../../utils/const";
import SideNav from "../common/SideNav";
import { Link } from "react-router-dom";
import useURLQuery from "../../hooks/useURLQuery";

const Wrapper = styled.aside`
  width: 250px;
  padding: 40px 0 40px 40px;
  margin-top: 100px;
  position: absolute;
  left: 0;
  top: 0;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

const CategoryList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const CategoryItem = styled.li<{ active: boolean }>`
  a {
    font-size: 15px;
    color: ${({ active }) => (active ? "#000" : colors.grey[600])};
    cursor: pointer;
  }
`;

const SearchSide = () => {
  const { query } = useURLQuery();
  const [hide, setHide] = useState({
    category: false,
  });
  const { category } = hide;

  return (
    <Wrapper>
      <SideNav
        title="카테고리"
        hideButton
        hide={category}
        onHide={() => {
          setHide({ ...hide, category: !category });
        }}
      >
        <CategoryList>
          {categoryList.map((category, index) => (
            <CategoryItem key={category} active={query.get("type") === (index + 1000).toString()}>
              <Link to={`/search?type=${index + 1000}`}>{category}</Link>
            </CategoryItem>
          ))}
        </CategoryList>
      </SideNav>
    </Wrapper>
  );
};

export default SearchSide;
