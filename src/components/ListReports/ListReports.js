import React, { useState, useEffect } from "react";
import Search from "../Search/Search";
import Reports from "../Reports/Reports";
import { fetchData } from "../../service/FetchService";

function ListReports() {
  const [reports, setReports] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [modalDelete, setDeleteModal] = useState(false);

  const showModalDelete = () => {
    setDeleteModal(!modalDelete);
  };

  useEffect(() => {
    fetchData("reports").then(
      (response) => {
        // console.log(response);
        setReports(response);
        setFiltered(response);
      },
      (err) => {
        console.log(err);
      }
    );
    // eslint-disable-next-line
  }, []);

  const deleteReport = (id) => {
    // console.log(id);
    const filterReports = filtered.filter((report) => report.id !== id);
    setFiltered(filterReports);
    setDeleteModal(false);
  };

  const searchReports = (value) => {
    // console.log(value);
    const state = reports.filter(
      (report) =>
        report.candidateName.toLowerCase().includes(value.toLowerCase()) ||
        report.companyName.toLowerCase().includes(value.toLowerCase())
    );
    setFiltered(state);
  };

  return (
    <div className="container">
      <Search onChange={searchReports} style={{ width: "500px" }} />
      <Reports
        reports={filtered}
        deleteReport={deleteReport}
        modalDelete={modalDelete}
        showModalDelete={showModalDelete}
      />
    </div>
  );
}

export default ListReports;
