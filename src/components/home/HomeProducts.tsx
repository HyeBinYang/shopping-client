import React from "react";
import styled from "styled-components";
import ProductCard from "../common/ProductCard";

const Wrapper = styled.section`
  margin: 120px 0 100px;
  padding: 0 40px;

  .products__title {
    font-size: 28px;
    font-weight: 600;
  }
`;

const ProductContainer = styled.div`
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;
  gap: 40px 20px;
`;

interface HomeProductsProps {
  title?: string;
  products?: any[];
}

const HomeProducts: React.FC<HomeProductsProps> = ({ title, products }) => {
  return (
    <Wrapper>
      {title && <h1 className="products__title">{title}</h1>}
      <ProductContainer>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </ProductContainer>
    </Wrapper>
  );
};

export default HomeProducts;
