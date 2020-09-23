import React, { useState } from "react";
import { faEye, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getDate, capitalLetter } from "../../utilis/utilis";
import ModalDialog from "../ModalDialog/ModalDialog";
import ModalDialogDelete from "../ModalDialog/ModalDialogDelete";
import style from "./Report.module.css";

function Report({ report, deleteReport, showModalDelete, modalDelete }) {
  // console.log(report);
  const [show, setShow] = useState(false);

  const showModal = () => {
    setShow(!show);
  };
  return (
    <ul
      className="list-group list-group-horizontal"
      style={{ marginBottom: "20px" }}
    >
      <li className="list-group-item" style={{ width: "250px" }}>
        <span>{report.companyName}</span>
        <p>Company name</p>
      </li>
      <li className="list-group-item" style={{ width: "250px" }}>
        <span>{report.candidateName}</span>
        <p>Candidat name</p>
      </li>
      <li className="list-group-item" style={{ width: "150px" }}>
        <span>{getDate(report.interviewDate)}</span>
        <p>Interview Date</p>
      </li>
      <li className="list-group-item" style={{ width: "150px" }}>
        <span>{capitalLetter(report.status)}</span>
        <p>Status</p>
      </li>
      <li
        className="list-group-item"
        style={{ width: "150px", textAlign: "center", padding: "25px" }}
      >
        <span
          onClick={() => {
            showModal();
          }}
          style={{ marginRight: "15px" }}
        >
          <FontAwesomeIcon icon={faEye} className={style.cursor} />
          <ModalDialog report={report} show={show} showModal={showModal} />
        </span>

        <span
          onClick={() => {
            showModalDelete();
          }}
        >
          <FontAwesomeIcon className={style.cursor} icon={faTimes} />
          <ModalDialogDelete
            report={report}
            modalDelete={modalDelete}
            showModalDelete={showModalDelete}
            deleteReport={deleteReport}
          />
        </span>
      </li>
    </ul>
  );
}

export default Report;
