import React, { useEffect, useState } from "react";
import SelectCandidate from "./SelectCandidate/SelectCandidate";
import SelectCompany from "./SelectCompany/SelectCompany";
import FillReportsDetails from "./FillReportsDetails/FillReportsDetails";
import { withRouter } from "react-router-dom";
import { fetchData } from "../../service/FetchService";

function Wizard(props) {
  // console.log(props)
  const [step, setStep] = useState(1);
  // candidates
  const [candidates, setCandidates] = useState([]);
  const [filteredCandidate, setFilteredCandidate] = useState([]);
// companies
  const [companies, setCompanies] = useState([]);
  const [filteredCompanies, setFilteredCompanies] = useState([]);


  // reports
  const [candidatId, setCandidatId] = useState();
  const [candidateName, setCandidateName] = useState();
  const [companyId, setCompanyId] = useState();
  const [company, setCompany] = useState();

  // Proceed to next step
  const nextStep = () => {
    setStep(step + 1);
  };

  // Go back to prev step
  const prevStep = () => {
    setStep(step - 1);
  };

  // fetch candidates
  useEffect(() => {
    fetchData("candidates").then(
      (response) => {
        setCandidates(response);
        setFilteredCandidate(response);
      },
      (err) => {
        console.log(err);
      }
    );
  }, []);

  // fetch companies
  useEffect(() => {
    fetchData("companies")
      .then((response) => {
        setCompanies(response);
        setFilteredCompanies(response);
      })
      .then((data) => {
        console.log(data);
      });
  }, []);

  // candidat search
  const handleChange = (value) => {
    const searchCandidat = candidates.filter((candidat) =>
      candidat.name.toLowerCase().includes(value.toLowerCase().trim())
    );
    setFilteredCandidate(searchCandidat);
  };

  // company search
  const searchCompany = (value) => {
    // console.log(value);
    const search = companies.filter((company) =>
      company.name.toLowerCase().includes(value.toLowerCase().trim())
    );
    setFilteredCompanies(search);
  };

  const saveName = (name, id) => {
    setCandidatId(id);
    setCandidateName(name);
  };

  const saveCompany = (company, companyId) => {
    // console.log(companyId)
    setCompanyId(companyId);
    setCompany(company);
  };

  const redirectToHome = () => {
    props.history.push("/");
  };

  const viewMap = {
    1: (
      <SelectCandidate
        candidates={filteredCandidate}
        saveName={saveName}
        nextStep={nextStep}
        candidateName={candidateName}
        handleChange={handleChange}
      />
    ),
    2: (
      <SelectCompany
        companies={filteredCompanies}
        candidateName={candidateName}
        saveCompany={saveCompany}
        nextStep={nextStep}
        prevStep={prevStep}
        company={company}
        searchCompany={searchCompany}
      />
    ),
    3: (
      <FillReportsDetails
        candidateName={candidateName}
        candidatId={candidatId}
        company={company}
        companyId={companyId}
        prevStep={prevStep}
        redirectToHome={redirectToHome}
      />
    ),
  };

  return viewMap[step];
}
export default withRouter(Wizard);
