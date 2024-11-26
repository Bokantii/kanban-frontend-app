import React, { createContext, useState } from "react";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [columns, setColumns] = useState([
    { id: 1, name: "To Do", tasks: [] },
    { id: 2, name: "In Progress", tasks: [] },
    { id: 3, name: "Done", tasks: [] },
  ]);

  const addNewTask = (columnId, taskTitle) => {
    setColumns((prevColumns) =>
      prevColumns.map((column) =>
        column.id === columnId
          ? { ...column, tasks: [...column.tasks, { title: taskTitle, id: Date.now() }] }
          : column
      )
    );
  };

  return (
    <TaskContext.Provider value={{ columns, addNewTask }}>
      {children}
    </TaskContext.Provider>
  );
};
