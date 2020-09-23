import React from "react";
import style from "../SelectCandidate/SelectCandidate.module.css";


function StepAside(props) {
  return (
    <>
        <ul className={style.selectList}>
          <li style={props.style1}>
            <span>1</span> Select Candidate
          </li>
          <li style={props.style2}>
            <span>2</span> Select Company
          </li>
          <li style={props.style3}>
            <span>3</span> Fill Reports Details
          </li>
        </ul>
    </>
  );
}

export default StepAside;
