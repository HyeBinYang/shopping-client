import React, { useState } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import colors from "../../styles/colors";
import HomeCategoryMenu from "../home/HomeCategoryMenu";

const Wrapper = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  height: 100px;
  padding: 40px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .header__logo {
    font-size: 30px;
    font-weight: 700;
    letter-spacing: 0.1em;
    color: #000;
  }

  .header__menus {
    display: flex;
    gap: 100px;

    .nav__item {
      font-size: 20px;
      font-weight: 500;
      color: ${colors.grey[600]};

      &:hover {
        color: #000;
      }
    }
  }

  .header__right {
    display: flex;
    align-items: center;
    gap: 20px;

    a {
      font-size: 14px;
      color: ${colors.grey[500]};

      &:hover {
        color: #000;
      }
    }
  }
`;

const Header = () => {
  const [activeCategoryMenu, setActiveCategoryMenu] = useState(false);
  const location = useLocation();

  return (
    <Wrapper>
      <Link to={"/"} className="header__logo">
        <h1>중고나라</h1>
      </Link>
      <ul className="header__menus">
        <li>
          <Link to={"/"} className="nav__item">
            홈
          </Link>
        </li>
        {!location.pathname.includes("search") && (
          <li>
            <Link
              to={"/search"}
              className="nav__item"
              onMouseOver={() => {
                setActiveCategoryMenu(true);
              }}
            >
              카테고리
            </Link>
            <HomeCategoryMenu
              active={activeCategoryMenu}
              onMouseLeave={() => setActiveCategoryMenu(false)}
              onClose={() => {
                setActiveCategoryMenu(false);
              }}
            />
          </li>
        )}
        <li>
          <Link to={"/events"} className="nav__item">
            이벤트
          </Link>
        </li>
      </ul>
      <div className="header__right">
        <Link to={"/"}>로그인</Link>
        <Link to={"/"}>회원가입</Link>
      </div>
    </Wrapper>
  );
};

export default Header;
