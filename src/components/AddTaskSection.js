import React from "react";
import { MdAdd } from "react-icons/md";
import styled from "styled-components";
import NewTaskPopup from "./NewTaskPopup";

const StyledAddTaskSection = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;
  position: relative;

  .add-task-btn {
    height: 3.2rem;
    width: 3.2rem;
    border-radius: 50%;
    padding: 0.5rem;
    display: grid;
    place-content: center;
    border: 0;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3), inset 0 0 5px rgba(0, 0, 0, 0.15);
    svg {
      font-size: 1.75rem;
    }
  }
`;

const AddTaskSection = () => {
  return (
    <StyledAddTaskSection>
      <NewTaskPopup />
      <button className="add-task-btn">
        <MdAdd />
      </button>
    </StyledAddTaskSection>
  );
};

export default AddTaskSection;
