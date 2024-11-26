import React from "react";
import { useState } from "react";
import classes from './Slider.module.scss';
const Slider = ({ isChecked = false, onChange }) => {
//   const [checked, setChecked] = useState(isChecked);
//   const handleToggle = () => {
//     setChecked((prevState) => !prevState);
//     if (onChange)onChange(!checked) ;
//   };
  return (
    <label className={classes.switch}>
      {/* <input type="checkbox" onChange={handleToggle} /> */}
      <input type="checkbox"/>
      <span className={`${classes.slider} ${classes.round}`}></span>
    </label>
  );
};

export default Slider;
