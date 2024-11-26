import React, { useState, useContext, useRef } from "react";
import classes from "./Board.module.scss";
import logoDark from "../../assets/logo-dark.svg";
import logoLight from "../../assets/logo-light.svg";
import IconVerticalEllipses from "../Icons/IconVerticalEllipses";
import AddNewTask from "../AddNewTask/AddNewTask";
import EditTask from "../EditTask/EditTask";
import EditBoard from "../EditBoard/EditBoard";
import DeleteTask from "../DeleteTask/DeleteTask";
import DeleteBoard from "../DeleteBoard/DeleteBoard";
import ViewTask from "../ViewTask/ViewTask";
import AddBoardModal from "../AddBoard/AddBoardModal";
import EmptyBoard from "../EmptyBoard/EmptyBoard";
import Column from "../Column/Column";
import { ModalContext } from "../../store/modal-context";
import { TranslateContext } from "../../store/boardTranslate-context";
import { TaskProvider } from "../../store/newTaskContext";
import IconAddTaskMobile from "../../assets/svgs/IconAddTaskMobile";
import logoMobile from "../../assets/logo-mobile.svg";
import chevronUp from "../../assets/icon-chevron-up.svg";
import chevronDown from "../../assets/icon-chevron-down.svg";

const Board = () => {
  // States
  const [columnsB, setColumns] = useState([]);
  const [menuIsShown, setMenuIsShown] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [editBoardOpen, setEditBoardOpen] = useState(false);
  const [editTaskOpen, setEditTaskOpen] = useState(false);
  const [deleteTaskOpen, setDeleteTaskOpen] = useState(false);
  const [deleteBoardOpen, setDeleteBoardOpen] = useState(false);
  const [viewTaskOpen, setViewTaskOpen] = useState(false);
  const [addNewBoard, setAddNewBoard] = useState(false);
  const [boardName, setBoardName] = useState(null);

  // Context
  const { translateX, title } = useContext(TranslateContext);

  // Functions
  function openModal() {
    setModalIsOpen(true);
  }

  function editBoard() {
    setEditBoardOpen(true);
  }

  function deleteBoard() {
    setDeleteBoardOpen(true);
    setMenuIsShown(false);
  }

  function createNewColumn() {
    const newColumn = {
      id: Date.now(),
      // name: `Column ${columnsB.length + 1}`,
      name: "TODO (4)",
      tasks: [],
    };
    setColumns((prevColumns) => [...prevColumns, newColumn]);
  }

  function addTaskToColumn(columnId, task) {
    setColumns((prevColumns) =>
      prevColumns.map((column) =>
        column.id === columnId
          ? { ...column, tasks: [...column.tasks, task] }
          : column
      )
    );
  }

  function showBoardMenu() {
    setMenuIsShown(!menuIsShown);
  }

  const boardContent = columnsB.length ? (
    <TaskProvider>
      <section className={classes.columns}>
        {columnsB.map((column) => (
          <Column
            key={column.id}
            column={column}
            addTask={(task) => addTaskToColumn(column.id, task)}
          />
        ))}
        <div
          className={`${classes.create_new_column} ${classes.create_new_column_dark}`}
        >
          <span onClick={createNewColumn}>+New Column</span>
        </div>
      </section>
    </TaskProvider>
  ) : (
    <EmptyBoard createNewColumn={createNewColumn} />
  );

  return (
    <ModalContext.Provider value="none">
      {modalIsOpen && <AddNewTask />}
      {editBoardOpen && <EditBoard />}
      {deleteBoardOpen && <DeleteBoard />}
      {editTaskOpen && <EditTask />}
      {deleteTaskOpen && <DeleteTask />}
      {viewTaskOpen && <ViewTask />}
      {addNewBoard && (
        <AddBoardModal
          createTheBoard={() => setBoardName(title)}
          boardTitle={boardName}
        />
      )}
      <section className={`${classes.board_} ${classes.board_dark}`}>
        <section className={`${classes.header_} ${classes.header_dark}`}>
          <div className={`${classes.logo} ${classes.logo_dark}`}>
            <img src={logoLight} alt="logo_light" />
          </div>
          <div className={classes.header_text}>
            <div className={classes.header_mobile}>
              <img src={logoMobile} alt="logoMobile" />
              <span className={classes.platform_launch_text}>
                Platform Launch
              </span>
              <img src={chevronDown} alt="" />
            </div>

            <div className={classes.header_text_right}>
              {<IconAddTaskMobile />}
              <TaskProvider>
                <button className={classes.add_new_tasks} onClick={openModal}>
                  +add new task
                </button>
              </TaskProvider>

              <IconVerticalEllipses showBoardMenu={showBoardMenu} />
              <section
                className={`${classes.newBoard_menu} ${classes.newBoard_menu_dark}`}
                style={{ display: menuIsShown ? "block" : "none" }}
              >
                <div
                  className={`${classes.newBoard_menu_content} ${classes.newBoard_menu_content_dark}`}
                >
                  <span className={classes.edit_board} onClick={editBoard}>
                    Edit Board
                  </span>
                  <span className={classes.delete_board} onClick={deleteBoard}>
                    Delete Board
                  </span>
                </div>
              </section>
            </div>
          </div>
        </section>
        <section className={classes.kanban_app_body}>
          <section
            className={classes.kanban_body_content}
            style={{ transform: `translateX(${translateX})` }}
          >
            {boardContent}
          </section>
        </section>
      </section>
    </ModalContext.Provider>
  );
};

export default Board;
