import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import EventCard from "./EventCard";

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 20px;
  padding: 40px 0 25px;

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const EventList = () => {
  return (
    <Wrapper>
      <Link to={"#"}>
        <EventCard />
      </Link>
      <Link to={"#"}>
        <EventCard />
      </Link>
      <Link to={"#"}>
        <EventCard />
      </Link>
      <Link to={"#"}>
        <EventCard />
      </Link>
      <Link to={"#"}>
        <EventCard />
      </Link>
      <Link to={"#"}>
        <EventCard />
      </Link>
      <Link to={"#"}>
        <EventCard />
      </Link>
    </Wrapper>
  );
};

export default EventList;
