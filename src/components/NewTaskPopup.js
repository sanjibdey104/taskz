import React, { useState } from "react";
import styled from "styled-components";

const StyledNewTaskPopup = styled.section`
  width: 100%;
  height: 8rem;
  border: 1px solid black;
  position: absolute;
  bottom: 0;
  background-color: white;
  padding: 0.75rem;

  display: flex;
  flex-direction: column;

  .task-form {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  #new-task-input {
    width: 100%;
    border: 1px solid gold;
    height: 2rem;
    font-size: 1.1rem;
    padding: 0 0.5rem;
  }

  #save-task-btn {
    width: 4.5rem;
    padding: 0.3rem;
    margin-left: auto;
    font-size: 1.2rem;
    background-color: white;
    border: 0;
  }
`;

const NewTaskPopup = () => {
  const [taskValue, setTaskValue] = useState("");

  const handleTaskValue = (e) => {
    setTaskValue(e.target.value);
  };

  return (
    <StyledNewTaskPopup>
      <form className="task-form">
        <input
          type="text"
          id="new-task-input"
          value={taskValue}
          onChange={handleTaskValue}
        />
        <button id="save-task-btn" type="submit">
          Save
        </button>
      </form>
    </StyledNewTaskPopup>
  );
};

export default NewTaskPopup;
