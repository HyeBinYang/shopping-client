import React from "react";
import styled from "styled-components";
import colors from "../../styles/colors";

const Wrapper = styled.div`
  margin-bottom: 30px;

  img {
    aspect-ratio: 2.5 / 1;
    width: 100%;
    border-radius: 4px;
  }

  .card__bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 0;

    .card__period {
      color: ${colors.grey[600]};
      font-weight: 500;
    }

    .card__dday {
      color: ${colors.orange[600]};
      font-size: 20px;
      font-weight: 700;
    }
  }
`;

const EventCard = () => {
  return (
    <Wrapper>
      <img src="https://picsum.photos/700" alt="이벤트 배너 이미지" />
      <div className="card__bottom">
        <span className="card__period">2023.03.26 ~ 2023.04.15</span>
        <span className="card__dday">D-63</span>
      </div>
    </Wrapper>
  );
};

export default EventCard;
