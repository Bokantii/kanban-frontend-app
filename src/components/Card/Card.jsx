import React from "react";
import classes from "./Card.module.scss";
import { useState } from "react";
import { useContext } from "react";
import Modal from "../Modal/Modal";
import { ModalContext } from "../../store/modal-context";
import ViewTask from "../ViewTask/ViewTask";

const Card = ({
  task,
  totalSubTasks,
  subTasksComplete,
  taskStatus,
  numberOfTasks,
  children,
  viewTask,
}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const cardCtx = useContext(ModalContext);
  function viewTask(){
    setModalIsOpen(true)
  }

  return (
    <>
      {modalIsOpen && ViewTask}
      <section className={`${classes.card} ${classes.card_dark}`} onClick={viewTask}>
        <h3 className={classes.task}>Task Alpha is an exciting task</h3>
        <p className={classes.subTask}>0 of 3 subtasks</p>
      </section>
    </>
  );
};

export default Card;
