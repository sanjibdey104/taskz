import React, { useContext } from "react";
import styled from "styled-components";
import { TaskContext } from "../context/TaskContext";
import TaskItem from "./TaskItem";

const StyledTaskListSection = styled.section`
  padding: 1rem 2rem;

  .section-title {
    font-weight: 600;
    color: #343a40;
    font-size: 1.1rem;
    margin-bottom: 1rem;
  }
  .task-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    list-style: none;
  }

  #no-task-text {
    color: #adb5bd;
  }
`;

const TaskList = () => {
  const { taskState } = useContext(TaskContext);
  const ongoingTasks = taskState.tasks.filter(
    (task) => task.isComplete === false
  );

  return (
    <StyledTaskListSection>
      <p className="section-title">Tasks in progress</p>
      {ongoingTasks.length ? (
        <ul className="task-list">
          {ongoingTasks.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </ul>
      ) : (
        <p id="no-task-text">nothing to show here</p>
      )}
    </StyledTaskListSection>
  );
};

export default TaskList;
