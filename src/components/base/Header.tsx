import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import colors from "../../styles/colors";
import HomeCategoryMenu from "../home/HomeCategoryMenu";
import ModalContext from "../../context/modal";
import LoginForm from "../login/LoginForm";
import SignupForm from "../signup/SignupForm";
import { useCookies } from "react-cookie";
import axiosInstance from "../../utils/axios";

const Wrapper = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 999;
  max-width: 1100px;
  height: 100px;
  margin: 0 auto;
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

    button,
    a {
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

const MenuList = styled.ul`
  display: flex;
  gap: 8vw;
`;

const MenuItem = styled.li<{ active: boolean }>`
  a {
    font-size: 20px;
    font-weight: 500;
    color: ${({ active }) => (active ? "#000" : colors.grey[600])};

    &:hover {
      color: #000;
    }
  }
`;

const Header = () => {
  const { openModal } = useContext(ModalContext);
  const [activeCategoryMenu, setActiveCategoryMenu] = useState(false);
  const location = useLocation();
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);

  useEffect(() => {
    setActiveCategoryMenu(false);
  }, [location.pathname]);

  return (
    <Wrapper>
      <Link to={"/"} className="header__logo">
        <h1>중고나라</h1>
      </Link>
      {!location.pathname.includes("search") && (
        <MenuList>
          <MenuItem active={location.pathname === "/"}>
            <Link to={"/"} className="nav__item">
              홈
            </Link>
          </MenuItem>
          <MenuItem active={location.pathname === "/search"}>
            <Link
              to={"/search?type=1000&sort=RECENT"}
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
          </MenuItem>
        </MenuList>
      )}
      <div className="header__right">
        {cookies.user ? (
          <>
            <button
              onClick={() => {
                axiosInstance.post("login/logout").then(() => {
                  removeCookie("user");
                });
              }}
            >
              로그아웃
            </button>
            <Link to={"/profile"}>내 주문</Link>
            <Link to={"/product/register"}>판매하기</Link>
          </>
        ) : (
          <>
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
          </>
        )}
      </div>
    </Wrapper>
  );
};

export default Header;
