import { useReducer, createContext, useEffect } from "react";
import { TaskReducer } from "./TaskReducer";

const initialState = {
  tasks: [],
};

export const TaskContext = createContext();

const initializer = () => {
  const localTasksData = localStorage.getItem("tasks");
  return localTasksData ? JSON.parse(localTasksData) : initialState;
};

export const TaskProvider = ({ children }) => {
  const [taskState, dispatch] = useReducer(
    TaskReducer,
    initialState,
    initializer
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskState));
  }, [taskState]);

  return (
    <TaskContext.Provider value={{ taskState, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};
