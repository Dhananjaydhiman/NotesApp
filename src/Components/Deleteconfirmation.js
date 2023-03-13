import React, { useContext } from 'react'
import { Modal, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Usercontext } from './Notes'
// import { Button } from 'react-bootstrap'


const Deleteconfirmation = () => {
   const { box, Deletetion, setBox } = useContext(Usercontext);
   return (
      <div>
         <Modal show={box} >
            <Modal.Header onClick={() => { setBox(false); }} closeButton>
               <Modal.Title>Delete Confirmation</Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <div className="alert alert-danger">Are your sure you want to delete this ?</div>
            </Modal.Body>
            <Modal.Footer>
               <Button variant="default" onClick={() => { setBox(false); }}>
                  Cancel
               </Button>
               <Button variant="danger" onClick={Deletetion} >
                  Confirm
               </Button>
            </Modal.Footer>
         </Modal>
      </div>
   )
}

export default Deleteconfirmation