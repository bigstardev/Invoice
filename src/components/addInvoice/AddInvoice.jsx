import React from 'react'
import { Modal } from 'react-bootstrap';
import './addinvoice.css'
import AddInvoiceForm from '../addInvoiceForm/AddInvoiceForm'


export default function addInvoice({ showModal, closeModal, addNew }) {

    return (
        <div>
            <Modal
                show={showModal}
                onHide={() => closeModal(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                animation={false}

            >
                <AddInvoiceForm onHide={closeModal} addNew={addNew} />
            </Modal>


        </div>
    )
}
