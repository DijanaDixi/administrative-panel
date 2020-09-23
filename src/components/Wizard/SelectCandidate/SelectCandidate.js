import React, { useState } from "react";
import style from "../SelectCandidate/SelectCandidate.module.css";
import Candidat from "../Candidat/Candidat";
import StepAside from "../StepAside/StepAside";
import Search from "../../Search/Search";

function SelectCandidate({
  candidates,
  saveName,
  nextStep,
  candidateName,
  handleChange,
}) {
  const [id, setId] = useState("");

  // Proceed to next step
  const cont = () => {
    nextStep();
  };

  // set id for active class
  const activeItem = (id) => {
    setId(id);
  };

  const allCandidates = candidates.map((candidat) => {
    return (
      <Candidat
        candidat={candidat}
        key={candidat.id}
        saveName={saveName}
        id={id}
        activeItem={activeItem}
      />
    );
  });

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <div className={style.border}>
              <StepAside style1={{ fontWeight: "800" }} />
            </div>
          </div>
          <div className="col-8">
            <Search onChange={handleChange} style={{ width: "352px" }} />
            <div className="row">{allCandidates}</div>
            <div>
              {/* button disabled */}
              <button
                type="button"
                className="btn btn-primary mt-5 float-right"
                onClick={() => {
                  cont();
                }}
                disabled={!candidateName}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default SelectCandidate;
