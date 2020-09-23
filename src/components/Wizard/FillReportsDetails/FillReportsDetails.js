import React, { useState } from "react";
import style from "../SelectCandidate/SelectCandidate.module.css";
import StepAside from "../StepAside/StepAside";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { getToken } from "../../../utilis/Common";



function FillReportsDetails({
  candidateName,
  candidatId,
  company,
  companyId,
  prevStep,
  redirectToHome,
}) {
  // console.log(props)
  const [newReport, setNewReports] = useState({
    id: Math.floor(Math.random() * 1000),
    candidateId: candidatId,
    candidateName: candidateName,
    companyId: companyId,
    companyName: company,
    interviewDate: "",
    phase: "",
    status: "",
    note: "",
  });
  const [errorDate, setErrorDate] = useState("");
  const [errorPhase, setErrorPhase] = useState("");
  const [errorStatus, setErrorStatus] = useState("");
  const [errorNote, setErrorNote] = useState("");

  const back = () => {
    prevStep();
  };

  const isValid = () => {
    if (!newReport.interviewDate) {
      setErrorDate("Date need to be select");
      return false;
    } else if (!newReport.phase) {
      setErrorPhase("Phase need to be select");
      return false;
    } else if (!newReport.status) {
      setErrorStatus("Status need to be select");
      return false;
    } else if (!newReport.note) {
      setErrorNote("Note need to be select");
    } else {
      return true;
    }
  };

  const saveReports = () => {
    if (isValid()) {
      var token = getToken();
      axios
        .post("http://localhost:3333/api/reports", newReport, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          console.log("response", response.data);
        })
        .catch((error) => {
          alert(error.data);
        });
      redirectToHome();
    }
  };

  const saveDateInput = (value) => {
    // console.log(typeof value);
    const interviewFormatDate = new Date(value);
    setNewReports({ ...newReport, interviewDate: interviewFormatDate });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <div className={style.border}>
            <StepAside style3={{ fontWeight: "800" }} />
            <hr />
            <div className={style.name}>
              <p>Candidate:</p>
              <h2>{candidateName}</h2>
              <p>Company:</p>
              <h2>{company}</h2>
            </div>
          </div>
        </div>
        <div className="col-8">
          {/* form */}
          <form onChange={isValid} class="was-validated">
            <div className="row">
              <div className="col-4">
                <label>Date:</label>
                <br />
                <input
                  type="date"
                  style={{ width: "100%" }}
                  onChange={(e) => saveDateInput(e.target.value)}
                  required
                />
                <p class="invalid-feedback">{errorDate}</p>
              </div>

              <div className="col-4">
                <label>Phase:</label>
                <br />
                <select
                  required
                  style={{ width: "100%", outline: "none" }}
                  onClick={(e) => {
                    setNewReports({ ...newReport, phase: e.target.value });
                  }}
                >
                  <option value="">Select</option>
                  <option value="tech">Technical</option>
                  <option value="cv">CV</option>
                  <option value="hr">HR</option>
                  <option value="final">Final</option>
                </select>
                <p class="invalid-feedback">{errorPhase}</p>
              </div>
              <div className="col-4">
                <label>Status:</label>
                <br />
                <select
                  required
                  style={{ width: "100%", outline: "none" }}
                  onClick={(e) => {
                    setNewReports({ ...newReport, status: e.target.value });
                    // isValidStatus();
                  }}
                >
                  <option value="">Select</option>
                  <option value="Passed">Passed</option>
                  <option value="Declined">Declined</option>
                </select>

                <p class="invalid-feedback">{errorStatus}</p>
              </div>
            </div>
            {/* Text area */}
            <div className="row">
              <div className="col-12">
                <label>Notes:</label>
                <textarea
                  required
                  onChange={(e) => {
                    setNewReports({ ...newReport, note: e.target.value });
                  }}
                  value={newReport.note}
                  className="form-control"
                  rows="3"
                ></textarea>
                <p class="invalid-feedback">{errorNote}</p>
              </div>
            </div>
          </form>
          {/* form END */}
          <button
            type="button"
            className="btn btn-secondary mt-5"
            onClick={() => {
              back();
            }}
          >
            Back
          </button>
          <button
            onClick={() => {
              saveReports();
            }}
            type="button"
            className="btn btn-primary float-right mt-5"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default withRouter(FillReportsDetails);
