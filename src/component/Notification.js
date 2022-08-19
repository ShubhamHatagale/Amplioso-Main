import React,{useState} from 'react'
import { FadeInText, FadeInUp, FadeInUpBtn } from '../Animation';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from "react-bootstrap/Modal";

const Notification = () => {
  const [Mupdate, setMupdate] = useState(false);

  return (
    <>
      <Modal
        size="sm"
        show={Mupdate}
        onHide={() => setMupdate(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Body >Form Update Successful</Modal.Body>
      </Modal>

    </>

  )
}

export default Notification
