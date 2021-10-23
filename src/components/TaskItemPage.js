import React, { useContext, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import { TaskContext } from "../context/TaskContext";
import SubtaskItem from "./SubtaskItem";
import { Link } from "react-router-dom";
import { FiArrowLeft, FiPlus } from "react-icons/fi";
import { FaRegTrashAlt } from "react-icons/fa";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { BsArrowReturnRight } from "react-icons/bs";
import TaskDatePicker from "./TaskDatePicker";
import TaskDateDisplay from "./TaskDateDisplay";
import { dateFormatter } from "../utils/dateFormatter";

const StyledTaskItemPage = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    #back-btn {
      font-size: 1.5rem;
    }

    #bin {
      font-size: 1.3rem;
    }
  }

  #task-title {
    font-weight: 600;
    margin-bottom: 1rem;
  }

  .subtask-list {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    font-size: 1.1rem;
  }

  .details {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 1.2rem;
    .task-details-input {
      font-size: 1.1rem;
      border: 0;
    }
  }

  .task-date {
    display: flex;
    gap: 1rem;
    align-items: center;
    font-size: 0.85rem;
  }

  .add-subtask-option {
    display: flex;
    align-items: center;

    svg {
      font-size: 1.2rem;
    }
    #add-subtask-input {
      background-color: white;
      border: 0;
      margin-left: 1rem;
      font-size: 1.1rem;
    }
  }

  .subtask-form {
    display: flex;
    gap: 1rem;
    align-items: center;
    margin-left: 2rem;
    height: 2rem;

    .subtask-input {
      font-size: 1rem;
      padding: 0.2rem 0.5rem;
    }

    .add-subtask-btn,
    .clear-subtask-btn {
      font-size: 1.2rem;
      background-color: white;
      border: 0;
    }

    .clear-subtask-btn {
      transform: rotate(-45deg);
    }
  }
`;

const TaskItemPage = () => {
  const { id } = useParams();
  const { taskState, dispatch } = useContext(TaskContext);
  const task = taskState.tasks.filter((task) => task.id === parseInt(id))[0];
  const ongoingSubtasks = task.subtasks.filter((task) => !task.isComplete);
  const [subtaskValue, setSubtaskValue] = useState("");

  const [taskDate, setTaskDate] = useState(task.taskDate);
  const formattedTaskDate = dateFormatter(task.taskDate);
  let correctDateFormat = new Date(task.taskDate) || task.taskDate;

  const handleTaskDateUpdate = (updatedTaskDate) => {
    setTaskDate(updatedTaskDate);
    let payloadObj = {
      ...task,
      updatedTaskDate: updatedTaskDate,
    };
    dispatch({
      type: "UPDATE_TASK_DATE",
      payload: payloadObj,
    });
  };

  const handlSubtaskValueChange = (e) => {
    setSubtaskValue(e.target.value);
  };

  const handleSubtaskSubmit = (e, parentId) => {
    e.preventDefault();
    let id = Math.round(Math.random() * 1000);
    let subtaskObj = {
      id: id,
      parentId: parentId,
      title: subtaskValue,
      isComplete: false,
    };
    dispatch({ type: "ADD_SUBTASK", payload: subtaskObj });
    setSubtaskValue("");
  };

  return (
    <StyledTaskItemPage>
      <div className="header">
        <Link to="/">
          <FiArrowLeft id="back-btn" />
        </Link>
        <FaRegTrashAlt id="bin" />
      </div>
      {task ? (
        <div>
          <h2 id="task-title">{task.title}</h2>
          <ul className="subtask-list">
            {ongoingSubtasks.map((subtask) => (
              <SubtaskItem key={subtask.id} subtask={subtask} />
            ))}
          </ul>
        </div>
      ) : (
        ""
      )}
      <div className="details">
        <HiOutlineMenuAlt2 />
        <input
          type="text"
          placeholder="Add details"
          className="task-details-input"
        />
      </div>
      <div className="task-date">
        <TaskDatePicker
          taskDate={correctDateFormat}
          handleTaskDateUpdate={handleTaskDateUpdate}
        />
        <TaskDateDisplay taskDate={formattedTaskDate} />
      </div>
      <div className="add-subtask-option">
        <BsArrowReturnRight />
        <button id="add-subtask-input">Add subtasks</button>
      </div>
      <form
        onSubmit={(e) => handleSubtaskSubmit(e, task.id)}
        className="subtask-form"
      >
        <input
          type="text"
          className="subtask-input"
          value={subtaskValue}
          onChange={handlSubtaskValueChange}
          placeholder="new subtask..."
        />
        <button
          type="submit"
          className="add-subtask-btn"
          disabled={!subtaskValue}
        >
          <FiPlus />
        </button>
        <button
          type="button"
          className="clear-subtask-btn"
          onClick={() => setSubtaskValue("")}
          disabled={!subtaskValue}
        >
          <FiPlus />
        </button>
      </form>
    </StyledTaskItemPage>
  );
};

export default TaskItemPage;
