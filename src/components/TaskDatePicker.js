import React, { forwardRef } from "react";
import { BsCalendarCheck } from "react-icons/bs";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";

const StyledDatePicker = styled.div`
  .custom-date-picker {
    font-size: 1.5rem;
    background-color: white;
    border: 0;
    svg {
      color: var(--fg-light);
    }
  }
`;

const TaskDatePicker = ({ taskDate, handleTaskDateUpdate }) => {
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

  return (
    <StyledDatePicker>
      <ReactDatePicker
        dateFormat="dd/MM/yyyy"
        minDate={new Date()}
        selected={taskDate}
        onChange={(date) => handleTaskDateUpdate(date)}
        customInput={<ExampleCustomInput />}
      />
    </StyledDatePicker>
  );
};

export default TaskDatePicker;
