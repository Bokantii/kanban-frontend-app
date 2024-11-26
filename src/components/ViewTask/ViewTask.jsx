import React from "react";
import classes from "./ViewTask.module.scss";
import Modal from "../Modal/Modal";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const ViewTask = () => {
  return (
    <Modal>
      <section className={`${classes.view_task} ${classes.view_task_dark}`}>
        <section className={classes.subtask_heading}>
          <section
            className={`${classes.edit_task_menu} ${classes.edit_task_menu_dark}`}
          >
            <p className={classes.edit_task}>Edit Task</p>
            <p className={classes.delete_task}>Delete Task</p>
          </section>
          <p className={`${classes.subtask} ${classes.subtask_dark}`}>
            Research pricing points of various <br />
            competitors and trial different business <br /> models
          </p>
          <FontAwesomeIcon
            icon={faEllipsisVertical}
            className={classes.ellipsisVertical}
          />
        </section>
        <p className={classes.subtask_description}>
          We know what we're planning to build for version one. Now we need to
          finalise the first pricing model we'll use. Keep iterating the
          subtasks until we have a coherent proposition.
        </p>
        <section className={`${classes.subtasks} ${classes.subtasks_dark}`}>
          <h3 className={classes.subtasks_heading}>Subtasks (2 of 3)</h3>
          <section className={classes.subtasks_todoList}>
            <div
              className={`${classes.subtask_item} ${classes.subtask_item_dark}`}
            >
              <input type="checkbox" />
              <label className={`${classes.undone} ${classes.done}`}>
                Research competitor pricing and business models
              </label>
            </div>
            <div
              className={`${classes.subtask_item} ${classes.subtask_item_dark}`}
            >
              <input type="checkbox" />
              <label
                className={`${classes.undone} ${classes.done} `}
              >
                Outline a business model that works for our solution
              </label>
            </div>
            <div
              className={`${classes.subtask_item} ${classes.subtask_item_dark}`}
            >
              <input type="checkbox" />
              <label className={`${classes.undone} ${classes.undone_dark}`}>
                Talk to potential customers about our proposed solution and ask
                for fair price expectancy
              </label>
            </div>
          </section>
        </section>
        <section className={`${classes.task_status} ${classes.task_status_dark}`}>
          <p>current status</p>
          <select name="status" id="status" className={`${classes.status} `}>
            <option value="todo">Todo</option>
            <option value="doing">Doing</option>
            <option value="done">Done</option>
          </select>
        </section>
      </section>
    </Modal>
  );
};

export default ViewTask;
