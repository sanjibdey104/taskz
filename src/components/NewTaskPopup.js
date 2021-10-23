import React, {
  forwardRef,
  useRef,
  useContext,
  useState,
  useEffect,
} from "react";
import styled from "styled-components";
import { PopupDisplayContext } from "../context/PopupDisplayContext";
import { TaskContext } from "../context/TaskContext";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { BsCalendarCheck } from "react-icons/bs";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import TaskDateDisplay from "./TaskDateDisplay";
import { dateFormatter } from "../utils/dateFormatter";

const StyledNewTaskPopup = styled.section`
  width: 100%;
  height: 100%;
  position: absolute;
  inset: 0;
  backdrop-filter: blue(4px) opacity(0.8);
  background-color: rgba(0, 0, 0, 0.3);

  display: flex;
  visibility: hidden;
  flex-direction: column;
  z-index: 10;
  transform: translateY(100%);
  transition: transform 200ms ease-in-out;

  &.open {
    transform: translateY(0);
    visibility: visible;
  }

  .task-form {
    width: 100%;
    height: 12rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: auto;
    background-color: white;
    z-index: 100;
    padding: 0.75rem;

    #new-task-input {
      width: 100%;
      border: 0;
      outline: 0;
      height: 2.5rem;
      font-size: 1.2rem;
      padding: 1rem 0.75rem;
      caret-color: var(--google-blue);
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

    #task-details-logo {
      color: var(--google-blue);
      font-size: 1.75rem;
    }

    .custom-date-picker {
      font-size: 1.5rem;
      background-color: white;
      border: 0;
      color: var(--google-blue);

      svg {
        font-weight: bold;
      }
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
  const taskFormRef = useRef();
  const [taskValue, setTaskValue] = useState("");
  const { dispatch } = useContext(TaskContext);
  const { popupDisplay, handlePopupDisplay } = useContext(PopupDisplayContext);

  const currentDay = new Date();
  const [taskDate, setTaskDate] = useState(currentDay);
  const formattedTaskDate = dateFormatter(taskDate);

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

  useEffect(() => {
    let taskFormPopupHandler = (e) => {
      if (!taskFormRef.current.contains(e.target)) {
        handlePopupDisplay(false);
      }
    };
    document.addEventListener("mousedown", taskFormPopupHandler);
    return () => {
      document.removeEventListener("mousedown", taskFormPopupHandler);
    };
  }, []);

  return (
    <StyledNewTaskPopup className={popupDisplay ? "open" : ""}>
      <form
        className="task-form"
        onSubmit={(e) => handleFormSubmit(e)}
        ref={taskFormRef}
      >
        <input
          type="text"
          id="new-task-input"
          value={taskValue}
          onChange={handleTaskValue}
          placeholder="New task"
          // ref={taskInputRef}
          autoFocus
        />
        <TaskDateDisplay taskDate={formattedTaskDate} />
        <div className="options">
          <HiOutlineMenuAlt2 id="task-details-logo" />
          <div className="date-picker">
            <ReactDatePicker
              dateFormat="dd/MM/yyyy"
              minDate={new Date()}
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
