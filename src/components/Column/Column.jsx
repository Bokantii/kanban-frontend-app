import React, { useContext } from "react";
import classes from "./Column.module.scss";
import { TaskContext } from "../../store/newTaskContext";
import Card from "../Card/Card";
const Column = ({ column}) => {
  const { columns } = useContext(TaskContext);
  const columnTasks = columns.find((col) => col.id === column.id)?.tasks || [];

  return (
    <section className={classes.column}>
      <h3 className={classes.columnName}><span></span> {column.name}</h3>
      <section className={classes.tasks}>
        {/* {columnTasks.map((task) => (
          <div key={task.id} className={classes.task}>
            {task.title}
          </div>
        ))} */}
        <Card/>
        <Card/>
        <Card/>
      </section>
    </section>
  );
};

export default Column;
