import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import colors from "../../styles/colors";
import HomeCategoryMenu from "../home/HomeCategoryMenu";
import ModalContext from "../../context/modal";
import LoginForm from "../login/LoginForm";
import SignupForm from "../signup/SignupForm";

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
    gap: 8vw;

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

    button {
      background-color: transparent;
      border: none;
      font-size: 14px;
      color: ${colors.grey[500]};
      cursor: pointer;

      &:hover {
        color: #000;
      }
    }
  }
`;

const Header = () => {
  const { openModal } = useContext(ModalContext);
  const [activeCategoryMenu, setActiveCategoryMenu] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setActiveCategoryMenu(false);
  }, [location.pathname]);

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
        <button
          onClick={() => {
            openModal(<LoginForm />);
          }}
        >
          로그인
        </button>
        <button
          onClick={() => {
            openModal(<SignupForm />);
          }}
        >
          회원가입
        </button>
      </div>
    </Wrapper>
  );
};

export default Header;
