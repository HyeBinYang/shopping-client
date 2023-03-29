import React from "react";
import styled from "styled-components";
import EventFilter from "../components/event/EventFilter";
import EventList from "../components/event/EventList";
import colors from "../styles/colors";

const Wrapper = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h1`
  padding: 20px 0;
  font-size: 20px;
  font-weight: 600;
  color: ${colors.grey[900]};
  border-bottom: 1px solid ${colors.grey[500]};
`;

const Event = () => {
  return (
    <Wrapper>
      <Title>이벤트</Title>
      <EventFilter />
      <EventList />
    </Wrapper>
  );
};

export default Event;
