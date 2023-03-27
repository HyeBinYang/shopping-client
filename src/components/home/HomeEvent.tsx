import React from "react";
import Slider, { Settings } from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import colors from "../../styles/colors";

const Wrapper = styled.section`
  /* height: 400px; */

  .slick-slide {
    height: 400px;
  }

  .slick-arrow {
    width: 50px;
    height: 50px;
    opacity: 0.45;
    z-index: 100;

    &::before {
      color: ${colors.grey[500]};
      font-size: 50px;
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

  .slick-dots {
    bottom: 20px;
  }

  .event__item {
    height: 400px;
    background-color: skyblue;
  }
`;

const HomeEvent = () => {
  const events = ["event 1", "event 2", "event 3", "event 4", "event 5"];

  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Wrapper>
      <Slider {...settings}>
        {events.map((event) => (
          <div key={event} className="event__item">
            {event}
          </div>
        ))}
      </Slider>
    </Wrapper>
  );
};

export default HomeEvent;
