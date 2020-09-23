import React from "react";
import Modal from "react-bootstrap/Modal";

function ModalDialogDelete({
  modalDelete,
  showModalDelete,
  deleteReport,
  report,
}) {
  const saveId = (id) => {
    deleteReport(id);
  };
  return (
    <>
      <Modal show={modalDelete} onHide={showModalDelete}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h5>Are you sure want to delete?This process cannot be undone.</h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              saveId(report.id);
            }}
          >
            Yes
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            data-dismiss="modal"
          >
            No
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalDialogDelete;
