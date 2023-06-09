import React, { HTMLAttributes } from "react";
import styled from "styled-components";
import colors from "../../styles/colors";
import { categoryList } from "../../utils/const";
import { Link } from "react-router-dom";

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

      a {
        font-size: 14px;
        color: ${colors.grey[600]};

        &:hover {
          color: #000;
        }
      }
    }
  }
`;

interface HomeCategoryMenuProps extends HTMLAttributes<HTMLDivElement> {
  active: boolean;
  onClose(): void;
}

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
          {categoryList.map((category, index) => (
            <li key={category}>
              <Link to={`/search?type=${1000 + index}&sort=RECENT`}>{category}</Link>
            </li>
          ))}
        </ul>
      </div>
    </Wrapper>
  );
};

export default HomeCategoryMenu;
