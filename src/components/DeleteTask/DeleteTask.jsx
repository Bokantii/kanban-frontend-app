import React from "react";
import classes from "./DeleteTask.module.scss";
import Modal from "../Modal/Modal";
const DeleteTask = () => {
  return (
    <Modal>
      <section
        className={`${classes.delete_task} ${classes.delete_task_dark}`}
      >
        <h3>delete this task?</h3>
        <p>
          Are you sure you want to delete the ‘Build settings UI’ task and its
          subtasks? This action cannot be reversed.
        </p>
        <section className={classes.delete_action}>
          <button className={classes.delete}>delete</button>
          <button className={`${classes.cancel} ${classes.cancel_dark}`}>
            cancel
          </button>
        </section>
      </section>
    </Modal>
  );
};

export default DeleteTask;
