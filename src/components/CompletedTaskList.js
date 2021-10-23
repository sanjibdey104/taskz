import React, { useContext, useState } from "react";
import styled from "styled-components";
import { TaskContext } from "../context/TaskContext";
import { FiCheck } from "react-icons/fi";
import { MdKeyboardArrowUp } from "react-icons/md";

const StyledCompletedTaskSection = styled.section`
  width: 100%;
  padding: 1rem 2rem;
  border-top: 1px solid #888888;

  .section-title {
    font-weight: 600;
    font-size: 1.1rem;
  }

  .list-display-toggler {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
    color: #343a40;

    #caret {
      transform: rotate(0);
      transition: transform 200ms ease-in-out;
      font-size: 1.5rem;

      &.down {
        transform: rotate(180deg);
      }
    }
  }

  #completed-task-list {
    flex-direction: column;
    gap: 0.75rem;
    display: none;

    &.show {
      display: flex;
    }
  }

  .completed-task {
    text-decoration: line-through;
    display: flex;
    gap: 1rem;
    align-items: center;
    font-size: 1.2rem;
  }

  .checkmark {
    color: blue;
    font-size: 1.5rem;
  }
`;

const CompletedTaskList = () => {
  const { taskState } = useContext(TaskContext);
  let { tasks } = taskState;
  const [listDisplay, setListDisplay] = useState(false);
  console.log(taskState);

  let completedTasks = [];

  tasks.forEach((task) => {
    task.isComplete && completedTasks.push(task);
    task.subtasks.length &&
      completedTasks.push(
        ...task.subtasks.filter((subtask) => subtask.isComplete)
      );
  });

  const handleListDisplay = () => {
    setListDisplay(!listDisplay);
  };

  return (
    <StyledCompletedTaskSection>
      <div className="list-display-toggler" onClick={handleListDisplay}>
        <p className="section-title">Completed ({completedTasks.length})</p>
        <MdKeyboardArrowUp id="caret" className={listDisplay ? "down" : ""} />
      </div>
      <ul id="completed-task-list" className={listDisplay ? "show" : ""}>
        {completedTasks.map((task) => (
          <li key={task.id} className="completed-task">
            <FiCheck className="checkmark" /> <p>{task.title}</p>
          </li>
        ))}
      </ul>
    </StyledCompletedTaskSection>
  );
};

export default CompletedTaskList;
