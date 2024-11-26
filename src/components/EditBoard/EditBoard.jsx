import React from "react";
import classes from "./EditBoard.module.scss";
import Modal from "../Modal/Modal";
import { useContext } from "react";
import { ModalContext } from "../../store/modal-context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
const EditBoard = () => {
  const modalContext = useContext(ModalContext);
  const handleClick=(e)=>{
    e.preventDefault()
  }
  /* edit_board_dark
  board_columns_dark
  
  
  */
  
  return (
    <Modal>
      <form className={ `${classes.edit_board} ${classes.edit_board_dark}`}>
        <h3>Edit Board</h3>
        <section className={ `${classes.board_name} ${classes.board_name_dark}`}>
          <p>Board Name</p>
          <input type="text" />
        </section>
        <section className={ `${classes.board_columns} ${classes.board_columns_dark}`}>
          <p>Board Columns</p>
          <section className={classes.board_column_names}>
            <div>
              {" "}
              <input type="text" />
              <FontAwesomeIcon icon={faX} className={classes.xMark}/>
            </div>
            <div>
              {" "}
              <input type="text" />
              <FontAwesomeIcon icon={faX} className={classes.xMark}/>
            </div>
            <div>
              {" "}
              <input type="text" />
              <FontAwesomeIcon icon={faX} className={classes.xMark}/>
            </div>
          </section>
          <button className={ `${classes.add_new_column} ${classes.add_new_column_dark}`} onClick={handleClick}>+add new column</button>
          <button className={classes.save_changes} onClick={handleClick}>save changes</button>
        </section>
      </form>
    </Modal>
  );
};

export default EditBoard;
