import React from "react";
import { getDate, capitalLetter } from "../../utilis/utilis";
import Modal from "react-bootstrap/Modal";

const ModalDialog = ({ report, show, showModal }) => {
  // console.log(report)
  return (
    <Modal show={show} onHide={showModal}>
      <Modal.Header closeButton>
        <Modal.Title>
          <h3>{report.candidateName}</h3>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row">
          <div className="col-6">
            <h3>Company</h3>
            <p>{report.companyName}</p>
            <h3>Interview Date</h3>
            <p>{getDate(report.interviewDate)}</p>
            <h3>Phase</h3>
            <p>{capitalLetter(report.phase)}</p>
            <h3>Status</h3>
            <p>{capitalLetter(report.status)}</p>
          </div>
          <div className="col-6">
            <h3>Notes</h3>
            <p>{report.note}</p>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};
export default ModalDialog;
