import React from "react";
import styled from "styled-components";
import ProductCard from "../common/ProductCard";
import { Link } from "react-router-dom";
import { Product } from "../../types/product";

const Wrapper = styled.section`
  margin: 60px 0 100px;
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
  margin-left: -10px;
  margin-right: -10px;

  & > * {
    flex-basis: 20%;
    padding: 0 10px;
  }
`;

interface HomeProductsProps {
  title?: string;
  products?: Product[];
}

const HomeProducts: React.FC<HomeProductsProps> = ({ title, products }) => {
  return (
    <Wrapper>
      {title && <h1 className="products__title">{title}</h1>}
      <ProductContainer>
        {products?.map((product) => (
          <Link key={product.id} to={`/product/${product.id}`}>
            <ProductCard product={product} />
          </Link>
        ))}
      </ProductContainer>
    </Wrapper>
  );
};

export default HomeProducts;
