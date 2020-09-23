import React from "react";

function Company({ company, saveCompany,selectItem,id}) {

 const activeItem = (id===company.id) ? "list-group-item list-group-item-info":"list-group-item"

  return (
    <summary onClick={()=>{selectItem(company.id)}} className={activeItem}>
    <li onClick={() => {saveCompany(company.name,company.id)}} >
      {company.name}
    </li>
    </summary>
  );
}

export default Company;
