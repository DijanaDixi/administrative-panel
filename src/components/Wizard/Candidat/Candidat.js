import React from "react";

function Candidat({ candidat, saveName, activeItem, id }) {
  // active item
  const selectItem = id === candidat.id ? "card mb-2 bg-info" : "card mb-2";

  return (
    <>
      <summary
        className="col-6"
        onClick={() => {
          saveName(candidat.name, candidat.id);
        }}
      >
        <div
          className={selectItem}
          onClick={() => {
            activeItem(candidat.id);
          }}
        >
          <div className="card-body p-1" key={candidat.id}>
            <img
              src={candidat.avatar}
              alt="avatar"
              style={{ width: "80px", height: "80px", marginBottom: "10px" }}
              className="rounded-circle"
            />
            <div style={{ display: "inline-block", marginLeft: "10px" }}>
              <p>{candidat.name}</p>
              <p>{candidat.email}</p>
            </div>
          </div>
        </div>
      </summary>
    </>
  );
}
export default Candidat;
