import React from "react";
import styled from "styled-components";
import AddTaskSection from "./AddTaskSection";
import CompletedTaskList from "./CompletedTaskList";
import Header from "./Header";
import TaskList from "./TaskList";

const StyledHome = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.5rem;
  position: relative;
  overflow: hidden;
`;

const Home = () => {
  return (
    <StyledHome>
      <Header />
      <TaskList />
      <CompletedTaskList />
      <AddTaskSection />
    </StyledHome>
  );
};

export default Home;
