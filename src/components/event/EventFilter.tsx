import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import useURLQuery from "../../hooks/useURLQuery";
import colors from "../../styles/colors";

const Wrapper = styled.ul`
  display: flex;
  column-gap: 30px;
  padding: 20px 0;

  li {
    a {
      color: ${colors.grey[500]};

      &.active {
        color: #000;
        font-weight: 600;
      }
    }
  }
`;

type EventType = "ING" | "END";

const EventFilter = () => {
  const { query } = useURLQuery();
  let type = query.get("type") as EventType;

  if (!type) {
    type = "ING";
  }

  return (
    <Wrapper>
      <li>
        <Link to={"/events?type=ING"} className={type === "ING" ? "active" : ""}>
          진행중
        </Link>
      </li>
      <li>
        <Link to={"/events?type=END"} className={type === "END" ? "active" : ""}>
          종료
        </Link>
      </li>
    </Wrapper>
  );
};

export default EventFilter;
