import React, { useState } from "react";
import style from "../SelectCandidate/SelectCandidate.module.css";
import Company from "../Company/Company";
import Search from "../../Search/Search";
import StepAside from "../StepAside/StepAside";

function SelectCompany({
  companies,
  candidateName,
  company,
  saveCompany,
  nextStep,
  prevStep,
  searchCompany,
}) {
  
  const [id, getId] = useState("");

  const cont = () => {
    nextStep();
  };

  const back = () => {
    prevStep();
  };

  const selectItem = (id) => {
    // console.log(id);
    getId(id);
  };
  const allCompanies = companies.map((company) => {
    return (
      <Company
        company={company}
        key={company.id}
        saveCompany={saveCompany}
        selectItem={selectItem}
        id={id}
      />
    );
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <div className={style.border}>
            <StepAside style2={{ fontWeight: "800" }} />
            <div className={style.name}>
              <p>Candidate:</p>
              <h2>{candidateName}</h2>
            </div>
          </div>
        </div>
        <div className="col-8">
          <Search onChange={searchCompany} style={{ width: "450px" }} />
          <div className="row">
            <div className="col-12">
              <ul className="list-group">{allCompanies}</ul>
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
                type="button"
                className="btn btn-primary float-right mt-5"
                onClick={() => {
                  cont();
                }}
                disabled={!company}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectCompany;
