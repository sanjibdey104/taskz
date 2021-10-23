export const TaskReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return { ...state, tasks: [...state.tasks, { ...action.payload }] };

    case "MARK_AS_COMPLETE":
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id === action.payload.id) {
            task.isComplete = true;
            task.subtasks.forEach((subtask) => {
              subtask.isComplete = true;
            });
          }
          return task;
        }),
      };

    case "ADD_SUBTASK":
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id === action.payload.parentId) {
            task.subtasks = [...task.subtasks, action.payload];
          }
          return task;
        }),
      };

    case "MARK_SUBTASK_AS_COMPLETE":
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id === action.payload.parentId) {
            task.subtasks = task.subtasks.map((subtask) => {
              if (subtask.id === action.payload.id) {
                subtask.isComplete = true;
              }
              return subtask;
            });
          }
          return task;
        }),
      };

    case "UPDATE_TASK_DATE":
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          console.log(action.payload);
          if (task.id === action.payload.id) {
            console.log(task);
            task.taskDate = action.payload.updatedTaskDate;
          }
          return task;
        }),
      };

    case "CLEAR_COMPLETED_TASKS":
      return {
        tasks: state.tasks.reduce((acc, cur) => {
          if (!cur.isCompleted) {
            if (cur.subtasks) {
              cur.subtasks = cur.subtasks.filter(
                (subtask) => !subtask.isCompleted
              );
            }
            acc.push(cur);
          }
          return acc;
        }, []),
      };

    default:
      return state;
  }
};
