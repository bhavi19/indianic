import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const PopUpModal = (props) => {

    return (
        <Modal show={props.show} onHide={props.handleClose} style={{ marginTop: "10%" }}>
            <Modal.Body>Do you want to delete user?</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.onClose}>
                    No
                </Button>
                <Button variant="primary" onClick={props.onConfirm}>
                    Yes
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default PopUpModal;