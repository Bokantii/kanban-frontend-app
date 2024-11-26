import React, { useState } from "react";
import classes from "./BoardTitle.module.scss";
import IconBoard from "../Icons/IconBoard";

const BoardTitle = ({ title, isSelected, onSelect }) => {
  const [isHovered, setIsHovered] = useState(false);

  let iconBoardColor;
  if (isSelected && isHovered) {
    iconBoardColor = "#635fc7";
  } else if (isSelected) {
    iconBoardColor = "#fff";
  } else {
    iconBoardColor = "#828FA3";
  }

  const className = isSelected
    ? `${classes.board} ${classes.board_selected}`
    : classes.board;

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <li
      className={className}
      onClick={onSelect}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className={classes.boardItem}>
        <IconBoard fill={iconBoardColor} />
        <span>{title}</span>
      </span>
    </li>
  );
};

export default BoardTitle;
