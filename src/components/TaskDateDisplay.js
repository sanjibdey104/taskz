import React from "react";
import styled from "styled-components";

const StyledTaskDisplay = styled.div`
  width: 7.5rem;
  padding: 0.2rem;
  border-radius: 2rem;
  border: 1px solid black;
  font-size: 0.9rem;
  display: grid;
  place-content: center;
`;
const TaskDateDisplay = ({ taskDate }) => {
  return (
    <StyledTaskDisplay className="task-date-display">
      {taskDate}
    </StyledTaskDisplay>
  );
};

export default TaskDateDisplay;
