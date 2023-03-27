import React, { HTMLAttributes } from "react";
import styled from "styled-components";
import colors from "../../styles/colors";

const Wrapper = styled.div`
  position: absolute;
  top: 100px;
  left: 0;
  z-index: 1000;
  width: 100%;
  display: none;

  .backdrop {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(10px);
  }

  &.active {
    display: block;
  }

  .menu__content {
    position: relative;
    padding: 40px 40px 60px;
    background-color: #fff;
  }

  .menu__title {
    margin-bottom: 40px;
    font-size: 22px;
  }

  .menu__list {
    display: flex;
    flex-wrap: wrap;
    gap: 20px 0px;

    li {
      width: 25%;
      font-size: 14px;
      color: ${colors.grey[600]};
      cursor: pointer;

      &:hover {
        color: #000;
      }
    }
  }
`;

interface HomeCategoryMenuProps extends HTMLAttributes<HTMLDivElement> {
  active: boolean;
  onClose(): void;
}

const categoryList = [
  "수입명품",
  "패션의류",
  "패션잡화",
  "뷰티",
  "출산/유아동",
  "모바일/태블릿",
  "가전제품",
  "노트북/데스크탑",
  "카메라/캠코더",
  "가구/인테리어",
  "리빙/생활",
  "게임",
  "반려동물/취미",
  "도서/음반/문구",
  "티켓/쿠폰",
  "스포츠",
  "레저/여행",
  "중고차",
  "오토바이",
  "공구/산업용품",
  "무료나눔",
  "NFT",
];

const HomeCategoryMenu: React.FC<HomeCategoryMenuProps> = ({ active, onClose, ...props }) => {
  return (
    <Wrapper className={active ? "active" : ""} {...props}>
      <div
        className="backdrop"
        onMouseOver={() => {
          onClose();
        }}
      ></div>
      <div className="menu__content">
        <p className="menu__title">카테고리</p>
        <ul className="menu__list">
          {categoryList.map((category) => (
            <li key={category}>{category}</li>
          ))}
        </ul>
      </div>
    </Wrapper>
  );
};

export default HomeCategoryMenu;
