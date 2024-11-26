import React from "react";
import classes from "./AddNewTask.module.scss";
import Modal from "../Modal/Modal";
import { useContext } from "react";
import { ModalContext } from "../../store/modal-context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
const AddNewTask = () => {
  const modalContext = useContext(ModalContext);
  const handleClick = (e) => {
    e.preventDefault();
  };
  return (
    <Modal>
      <form className={`${classes.add_new_task} ${classes.add_new_task_dark}`}>
        <h3>Add New Task</h3>
        <section
          className={`${classes.inputSection} ${classes.inputSection_dark}`}
        >
          <p>Title</p>
          <input type="text"  placeholder="e.g Take coffee break"/>
        </section>
        <section
          className={`${classes.inputSection} ${classes.inputSection_dark}`}
        >
          <p>Description</p>
          <textarea
            name="description"
            id="description"
            className={classes.desc_textarea}
            placeholder="e.g it's always good to take a break.This 15 minute break will recharge the batteries a little"
          ></textarea>
        </section>
        <section
          className={`${classes.subtasks_section} ${classes.subtasks_section_dark}`}
        >
          <p>Subtasks</p>
          <section className={classes.my_subtasks}>
            <div>
              {" "}
              <input type="text" placeholder="e.g Make coffee"/>
              <FontAwesomeIcon icon={faX} className={classes.xMark} />
            </div>
            <div>
              {" "}
              <input type="text" placeholder="e.g Drink coffee and smile"/>
              <FontAwesomeIcon icon={faX} className={classes.xMark} />
            </div>
          </section>
          <button
            className={`${classes.add_new_column} ${classes.add_new_column_dark}`}
            onClick={handleClick}
          >
            +add new subtask
          </button>
          <section className={classes.inputSection}>
            <p>Status</p>
            <select name="status" id="status" className={classes.status}>
              <option value="todo">Todo</option>
              <option value="doing">Doing</option>
              <option value="done">Done</option>
            </select>
          </section>
          <button className={classes.save_changes} onClick={handleClick}>
            Create Task
          </button>
        </section>
      </form>
    </Modal>
  );
};

export default AddNewTask;
