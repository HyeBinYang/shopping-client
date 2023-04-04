import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../utils/axios";
import styled from "styled-components";
import { Product } from "../types/product";
import Slider, { Settings } from "react-slick";
import colors from "../styles/colors";
import HTMLReactParser from "html-react-parser";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getDetailDate } from "../utils/date";

const Wrapper = styled.main`
  max-width: 1000px;
  margin: 0 auto;
  padding-top: 80px;
  padding-bottom: 100px;

  .product__info {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    column-gap: 10px;
    padding: 0 30px;

    .product__images {
      width: 430px;
      height: 430px;

      img {
        width: 100%;
        border-radius: 4px;
        object-fit: cover;
      }

      .slick-arrow {
        width: 40px;
        height: 40px;
        z-index: 100;

        &::before {
          color: ${colors.grey[900]};
          font-size: 40px;
        }

        &:hover {
          opacity: 1;
        }

        &.slick-prev {
          left: 0;
        }

        &.slick-next {
          right: 0;
        }
      }
    }

    .product__right {
      padding: 10px 30px 10px;
      flex: 1;
      display: flex;
      flex-direction: column;

      .product__title {
        font-size: 24px;
        font-weight: 600;
        color: ${colors.grey[900]};
        margin-bottom: 28px;
      }

      .product__price {
        font-size: 36px;
        font-weight: 600;
        padding-bottom: 24px;
        border-bottom: 1px solid ${colors.grey[300]};
      }
    }
  }

  .product__post-info {
    padding-top: 24px;
    flex: 1;
    display: flex;
    gap: 20px;

    span {
      color: ${colors.grey[500]};
      letter-spacing: 0.7px;
    }
  }

  .product__buttons {
    display: flex;

    button {
      flex: 1 1 33%;
    }
  }

  .product__button-ask {
    padding: 10px;
    height: 60px;
    background-color: ${colors.orange[400]};
    color: #fff;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 1.2px;
    border: none;
    cursor: pointer;
  }

  .product__content {
    padding: 50px 30px 10px;

    p {
      line-height: 1.25em;
    }
  }

  @media screen and (max-width: 900px) {
    .product__info {
      .product__images {
        width: 100%;
        height: 550px;

        img {
          height: 550px;
          object-fit: contain;
        }
      }

      .product__right {
        padding: 60px 0 0px;
      }

      .product__buttons {
        margin-top: 30px;
      }
    }
  }
`;

const ProductPage = () => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [product, setProduct] = useState<Product>();
  const params = useParams();

  const getProduct = async () => {
    try {
      const res = await axiosInstance.get(`/product/${params.id}`);
      setProduct(res.data);
    } catch (err) {
      console.error(err);
      alert("상품을 불러오는데 실패했습니다.");
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  if (!product) return null;

  return (
    <Wrapper>
      <div className="product__info">
        <Slider {...settings} className="product__images">
          {product.images.map((image) => (
            <div key={image} className="product__image">
              <img src={image} alt="" />
            </div>
          ))}
        </Slider>
        <div className="product__right">
          <h1 className="product__title">{product.title}</h1>
          <p className="product__price">{product.price.toLocaleString()}원</p>
          <div className="product__post-info">
            <span>좋아요 0</span>
            <span>조회수 0</span>
            <span>{getDetailDate(product.createdAt)}</span>
          </div>
          <div className="product__buttons">
            <button className="product__button-ask">문의하기</button>
          </div>
        </div>
      </div>
      <div className="product__content">{HTMLReactParser(product.content)}</div>
    </Wrapper>
  );
};

export default ProductPage;
