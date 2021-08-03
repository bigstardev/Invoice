import AddInvoice from '../../assets/images/plus-white.png'
import './circleButton.css';
export default function CircleButton({ showModal }) {

    return (
        <>
            <div className="AddInovice">
                <div className="circle" onClick={() => showModal(true)}>
                    <img src={AddInvoice} alt="" />
                </div>
            </div>

        </>
    )
}
