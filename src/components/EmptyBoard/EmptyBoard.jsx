import React from "react";
import classes from "./EmptyBoard.module.scss";
import { TaskProvider } from "../../store/newTaskContext";
import { useState,useEffect } from "react";
const EmptyBoard = ({ createNewColumn }) => {
  const [isResponsive, setIsResponsive] = useState(window.innerWidth <= 900 );
  const responsiveSpan = isResponsive ? (
    <span>
      The board is empty. Create a new <br /> column  to get started
    </span>
  ) : (
    <span>The board is empty. Create a new column to get started</span>
  );
  useEffect(()=>{
    const handleResize=()=>{
      setIsResponsive(window.innerWidth <= 900 )
    }
    window.addEventListener('resize',handleResize)
    return window.addEventListener('resize',handleResize)
  },[])
  return (
    <TaskProvider>
      <section className={classes.new_column}>
        {responsiveSpan}
        <button className={classes.add_new_column} onClick={createNewColumn}>
          + add new column
        </button>
      </section>
    </TaskProvider>
  );
};

export default EmptyBoard;
