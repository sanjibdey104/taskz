import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { TaskContext } from "../context/TaskContext";
import SubtaskItem from "./SubtaskItem";
import { dateFormatter } from "../utils/dateFormatter";
import TaskDateDisplay from "./TaskDateDisplay";

const StyledTaskItem = styled.li`
  width: 100%;
  font-size: 1.2rem;

  display: flex;
  gap: 0.5rem;
  align-items: flex-start;
  flex-direction: column;

  div {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }

  input {
    font-size: 1.5rem;
  }

  &.complete {
    text-decoration: line-through;
  }

  .task-date-display {
    margin-left: 2rem;
  }

  ul {
    margin-left: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
`;

const TaskItem = ({ task }) => {
  const [isComplete, setIsComplete] = useState(false);
  const { dispatch } = useContext(TaskContext);
  const { id, title, taskDate, subtasks } = task;
  const formattedTaskDate = dateFormatter(taskDate);
  const ongoingSubtasks = subtasks.filter((task) => !task.isComplete);

  const handleTaskStatus = (task) => {
    setIsComplete(true);
    dispatch({
      type: "MARK_AS_COMPLETE",
      payload: task,
    });
  };

  return (
    <StyledTaskItem className={isComplete ? "complete" : ""}>
      <div>
        <input
          type="radio"
          name="task-item"
          value={title}
          onChange={() => handleTaskStatus(task)}
        />
        <Link to={`/${id}`}>
          <p>{title}</p>
        </Link>
      </div>
      <TaskDateDisplay taskDate={formattedTaskDate} />
      {subtasks ? (
        <ul>
          {ongoingSubtasks.map((subtask) => (
            <SubtaskItem key={subtask.id} subtask={subtask} />
          ))}
        </ul>
      ) : null}
    </StyledTaskItem>
  );
};

export default TaskItem;
