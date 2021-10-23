import React, { useContext, useState } from "react";
import styled from "styled-components";
import { TaskContext } from "../context/TaskContext";

const StyledSubtaskItem = styled.li`
  width: 100%;
  display: flex;
  gap: 0.5rem;
  align-items: center;

  &.complete {
    text-decoration: line-through;
  }
`;

const SubtaskItem = ({ subtask }) => {
  const [isComplete, setIsComplete] = useState(false);
  const { dispatch } = useContext(TaskContext);

  const handleSubtaskStatus = (parentId, subtask) => {
    setIsComplete(true);
    let payloadData = {
      ...subtask,
      parentId: parentId,
    };
    dispatch({
      type: "MARK_SUBTASK_AS_COMPLETE",
      payload: payloadData,
    });
  };

  return (
    <StyledSubtaskItem className={isComplete ? "complete" : ""}>
      <input
        type="radio"
        name="subtask-item"
        value={subtask.title}
        onChange={() => handleSubtaskStatus(subtask.parentId, subtask)}
      />
      {subtask && subtask.title}
    </StyledSubtaskItem>
  );
};

export default SubtaskItem;
