import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import useURLQuery from "../../hooks/useURLQuery";
import colors from "../../styles/colors";

const Wrapper = styled.div`
  margin-bottom: 60px;
`;

const FilterList = styled.ul`
  display: flex;
  gap: 24px;

  a {
    color: ${colors.grey[500]};

    &.active {
      color: #000;
      font-weight: 600;
    }
  }
`;

type Sort = "RECENT" | "PRICE_ASC" | "PRICE_DESC" | "POPULAR";

const SearchFilter = () => {
  const { query } = useURLQuery();
  const sort: Sort = query.get("sort") as Sort;

  return (
    <Wrapper>
      <FilterList>
        <li>
          <Link to={"/search?sort=RECENT"} className={sort === "RECENT" ? "active" : ""}>
            최신순
          </Link>
        </li>
        <li>
          <Link to={"/search?sort=PRICE_ASC"} className={sort === "PRICE_ASC" ? "active" : ""}>
            낮은가격순
          </Link>
        </li>
        <li>
          <Link to={"/search?sort=PRICE_DESC"} className={sort === "PRICE_DESC" ? "active" : ""}>
            높은가격순
          </Link>
        </li>
        <li>
          <Link to={"/search?sort=POPULAR"} className={sort === "POPULAR" ? "active" : ""}>
            인기순
          </Link>
        </li>
      </FilterList>
    </Wrapper>
  );
};

export default SearchFilter;
