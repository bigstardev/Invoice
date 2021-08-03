import InvoiceDetail from '../invoiceDetail/InvoiceDetail'
import CircleButton from '../circleButton/CircleButton'
import './rightPanel.css'
import { useState } from "react";
import AddInvoice from '../addInvoice/AddInvoice';
/*
 Right panel which show the individual invoice,
 button which can show the modal form which is for adding new invoice
*/
export default function RightPanel({ data, addInvoice }) {

    const [showModal, setShowModal] = useState(false);
    const displayModal = (state) => {
        setShowModal(state)
    }

    return (
        <div className="rightContainer">

            <div className="title">INVOICE DETAILS</div>
            <InvoiceDetail data={data} />
            <CircleButton showModal={displayModal} />
            <AddInvoice showModal={showModal} closeModal={displayModal} addNew={addInvoice} />
        </div>
    )
}
