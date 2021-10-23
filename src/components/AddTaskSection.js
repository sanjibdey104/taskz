import React, { useContext } from "react";
import { MdAdd } from "react-icons/md";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { FiMenu } from "react-icons/fi";
import styled from "styled-components";
import NewTaskPopup from "./NewTaskPopup";
import { PopupDisplayContext } from "../context/PopupDisplayContext";

const StyledAddTaskSection = styled.section`
  width: 100%;
  height: 3.75rem;
  margin-top: auto;
  padding: 0.75rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: -3px 0 8px rgba(0, 0, 0, 0.2);
  transition: all 200ms ease-in-out;

  &.shrink {
    height: 0;
  }

  &::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    width: 4.8rem;
    height: 2.4rem;
    margin-left: auto;
    margin-right: auto;
    box-shadow: inset 0 -3px 8px rgba(0, 0, 0, 0.15);
    transform: translateY(-34%);
    border-radius: 0 0 10rem 10rem;
    background-color: white;
  }

  #add-task-btn {
    height: 3.75rem;
    width: 3.75rem;
    border: 0;
    border-radius: 50%;
    padding: 0.5rem;
    background-color: white;
    display: grid;
    place-content: center;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3), inset 0 0 5px rgba(0, 0, 0, 0.15);
    transition: transform 200ms ease-in-out;

    &.shrink {
      transform: scale(0.5);
    }

    svg {
      font-size: 2.5rem;
      color: #0f9d58;
    }

    transform: translateY(-65%);
  }

  #dots,
  #hamburger {
    font-size: 1.75rem;
  }

  #dots {
    background-color: white;
    border: 0;
    padding: 0;
  }

  #clear-completed-tasks-option {
    position: absolute;
    left: 0;
    right: 0;
    transform: translateY(100%);
    transition: tranform 200ms ease-in-out;

    &.open {
      transform: translateY(0);
    }

    button {
      width: 100%;
      height: 5rem;
      background-color: white;
      border: 0;
    }
  }
`;

const AddTaskSection = () => {
  const { popupDisplay, handlePopupDisplay } = useContext(PopupDisplayContext);

  return (
    <StyledAddTaskSection className={popupDisplay ? "shrink" : ""}>
      <NewTaskPopup />
      <FiMenu id="hamburger" />
      <button
        id="add-task-btn"
        className={popupDisplay ? "shrink" : ""}
        onClick={() => handlePopupDisplay(true)}
      >
        <MdAdd />
      </button>
      <button id="dots">
        <BiDotsVerticalRounded />
      </button>
    </StyledAddTaskSection>
  );
};

export default AddTaskSection;
