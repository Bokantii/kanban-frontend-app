import React from "react";
import classes from "./DeleteBoard.module.scss";
import Modal from "../Modal/Modal";
const DeleteBoard = () => {
  return (
    <Modal>
      <section
        className={`${classes.delete_board} ${classes.delete_board_dark}`}
      >
        <h3>delete this board?</h3>
        <p>
          Are you sure you want to delete the ‘Platform Launch’ board? This
          action will remove all columns and tasks and cannot be reversed.
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

export default DeleteBoard;
