import React from "react";
import styled from "styled-components";
import colors from "../../styles/colors";

const Wrapper = styled.div`
  max-width: 100%;
  cursor: pointer;

  .card__image {
    height: 180px;
    margin-bottom: 10px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .card__price {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 10px;
  }

  .card__title {
    font-size: 17px;
    font-weight: 400;
    height: 34px;
    margin-bottom: 10px;
  }

  .card__bottom {
    display: flex;
    align-items: center;
    gap: 10px;

    span {
      font-size: 14px;
      color: ${colors.grey[500]};
    }
  }
`;

const ProductCard = () => {
  return (
    <Wrapper>
      <div className="card__image">
        <img src="https://picsum.photos/600" alt="" />
      </div>
      <p className="card__price">40,000원</p>
      <p className="card__title">타이틀리스트 골프웨어 M</p>
      <div className="card__bottom">
        <span>송파1동</span>
        <span>|</span>
        <span>5시간 전</span>
      </div>
    </Wrapper>
  );
};

export default ProductCard;
