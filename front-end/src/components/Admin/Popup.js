import "./Popup.css";
import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';
import { FaPlus } from "@react-icons/all-files/fa/FaPlus";

function Popup() {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className='col-10 offset-1 col-md-6 offset-md-3 col-xl-2 offset-xl-5 mb-4 random-btn' onClick={() => setShow(true)}>
        <FaPlus className="mb-1"/> เพิ่มร้านอาหาร
      </div>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            aaaaaaaaaaaaaaaa
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            bbbbbbbbbbb!
          </p>
        </Modal.Body>
      </Modal>
    </>
  )
};

export default Popup;