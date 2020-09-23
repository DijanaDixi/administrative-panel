import React from "react";
import Report from "../Report/Report";


function Reports({ reports, deleteReport,showModalDelete, modalDelete}) {
 
  const allReports = reports.map((report) => {
    return (
      <Report 
      report={report}
      key={report.id} 
      deleteReport={deleteReport} 
      showModalDelete={showModalDelete} 
      modalDelete={modalDelete}/>
    );
  });
  return (
    <>
      <div className="row">
        <div className="col-12">{allReports}</div>
      </div>
    
    </>
  );
}

export default Reports;
