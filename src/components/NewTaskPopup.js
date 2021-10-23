import React, { forwardRef, useContext, useState } from "react";
import styled from "styled-components";
import { PopupDisplayContext } from "../context/PopupDisplayContext";
import { TaskContext } from "../context/TaskContext";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { BsCalendarCheck } from "react-icons/bs";
import { HiOutlineMenuAlt2 } from "react-icons/hi";

const StyledNewTaskPopup = styled.section`
  width: 100%;
  height: 12rem;
  border: 1px solid black;
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: white;
  padding: 0.75rem;

  display: none;
  flex-direction: column;
  z-index: 10;

  &.open {
    display: flex;
  }

  .task-form {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    #new-task-input {
      width: 100%;
      border: 1px solid #adb5bd;
      height: 2.5rem;
      font-size: 1.2rem;
      padding: 1rem 0.75rem;
    }
  }

  .selected-task-date {
    width: 7.5rem;
    padding: 0.3rem;
    border: 1px solid black;
    text-align: center;
    border-radius: 2rem;
    font-size: 0.85rem;
  }

  .options {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.5rem 0;

    #task-details {
      font-size: 1.75rem;
    }

    .custom-date-picker {
      font-size: 1.5rem;
      background-color: white;
      border: 0;
      color: #4c8bf5;
    }

    #save-task-btn {
      width: 4.5rem;
      margin-left: auto;
      font-size: 1.2rem;
      background-color: white;
      border: 0;
    }
  }
`;

const NewTaskPopup = () => {
  const [taskValue, setTaskValue] = useState("");
  const { dispatch } = useContext(TaskContext);
  const { popupDisplay, handlePopupDisplay } = useContext(PopupDisplayContext);

  const currentDay = new Date();
  const [taskDate, setTaskDate] = useState(currentDay);
  const dateFormatOptions = {
    weekday: "short",
    day: "numeric",
    month: "short",
  };

  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <button
      type="button"
      onClick={onClick}
      ref={ref}
      className="custom-date-picker"
    >
      <BsCalendarCheck />
    </button>
  ));

  const handleTaskValue = (e) => {
    setTaskValue(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    let taskObj = {
      id: Math.round(Math.random() * 1000),
      title: taskValue,
      isComplete: false,
      subtasks: [],
      taskDate: taskDate,
    };
    dispatch({ type: "ADD_TASK", payload: taskObj });
    setTaskValue("");
    handlePopupDisplay(false);
  };

  return (
    <StyledNewTaskPopup className={popupDisplay ? "open" : ""}>
      <form className="task-form" onSubmit={(e) => handleFormSubmit(e)}>
        <input
          type="text"
          id="new-task-input"
          value={taskValue}
          onChange={handleTaskValue}
          placeholder="Enter your task"
        />
        <div className="selected-task-date">
          {taskDate.toLocaleDateString("en-US", dateFormatOptions)}
        </div>
        <div className="options">
          <HiOutlineMenuAlt2 id="task-details" />
          <div className="date-picker">
            <ReactDatePicker
              dateFormat="dd/MM/yyyy"
              minDate={currentDay}
              selected={taskDate}
              onChange={(date) => setTaskDate(date)}
              customInput={<ExampleCustomInput />}
            />
          </div>
          <button
            id="save-task-btn"
            type="submit"
            disabled={!taskValue}
            className={taskValue ? "active" : "fade"}
          >
            Save
          </button>
        </div>
      </form>
    </StyledNewTaskPopup>
  );
};

export default NewTaskPopup;
