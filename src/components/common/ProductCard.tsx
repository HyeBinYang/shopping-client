import React from "react";
import styled from "styled-components";
import colors from "../../styles/colors";
import { Product } from "../../types/product";
import { getDetailDate } from "../../utils/date";

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
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
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

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Wrapper>
      <div className="card__image">
        <img src="https://picsum.photos/600" alt="" />
      </div>
      <p className="card__price">{product.price.toLocaleString()}원</p>
      <p className="card__title">{product.title}</p>
      <div className="card__bottom">
        <span>{getDetailDate(product.createdAt)}</span>
      </div>
    </Wrapper>
  );
};

export default ProductCard;
