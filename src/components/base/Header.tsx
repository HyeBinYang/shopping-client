import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import colors from "../../styles/colors";

const Wrapper = styled.header`
  width: 100vw;
  height: 100px;
  padding: 40px 20px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${colors.grey[300]};

  .header__logo {
    font-size: 30px;
    font-weight: 700;
    letter-spacing: 0.1em;
    color: #000;
  }

  nav {
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
  return (
    <Wrapper>
      <Link to={"/"} className="header__logo">
        <h1>중고나라</h1>
      </Link>
      <nav>
        <Link to={"/"} className="nav__item">
          홈
        </Link>
        <Link to={"/category"} className="nav__item">
          카테고리
        </Link>
        <Link to={"/event"} className="nav__item">
          이벤트
        </Link>
      </nav>
      <div className="header__right">
        <Link to={"/"}>로그인</Link>
        <Link to={"/"}>회원가입</Link>
      </div>
    </Wrapper>
  );
};

export default Header;
