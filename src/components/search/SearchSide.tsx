import React, { useState } from "react";
import styled from "styled-components";
import colors from "../../styles/colors";
import { categoryList } from "../../utils/const";
import SideNav from "../common/SideNav";

const Wrapper = styled.aside`
  width: 250px;
  padding: 40px 0 40px 40px;
  margin-top: 100px;
  position: absolute;
  left: 0;
  top: 0;

  hr {
    margin: 40px 0;
    border-top: none;
    border-bottom: 1px solid ${colors.grey[300]};
  }

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

const CategoryList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;

  li {
    font-size: 15px;
    color: ${colors.grey[600]};
    cursor: pointer;
  }
`;

const SearchSide = () => {
  const [hide, setHide] = useState({
    category: false,
    location: false,
    price: false,
  });
  const { category, location, price } = hide;

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
          {categoryList.map((category) => (
            <li key={category}>{category}</li>
          ))}
        </CategoryList>
      </SideNav>
      <hr />
      <SideNav
        title="동네"
        hideButton
        hide={location}
        onHide={() => {
          setHide({ ...hide, location: !location });
        }}
      >
        <ul>
          <li>모든 동네보기</li>
          <li>현 위치로 보기</li>
        </ul>
      </SideNav>
      <hr />
      <SideNav
        title="가격"
        hideButton
        hide={price}
        onHide={() => {
          setHide({ ...hide, price: !price });
        }}
      >
        <ul>
          <li>전체가격</li>
          <li>10만원 이하</li>
          <li>10만원 ~ 30만원 이하</li>
          <li>30만원 ~ 50만원 이하</li>
          <li>50만원 이상</li>
          <li>직접 입력</li>
        </ul>
      </SideNav>
    </Wrapper>
  );
};

export default SearchSide;
