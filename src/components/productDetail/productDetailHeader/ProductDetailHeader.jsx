import React from 'react'
import editImg from "../../../assets/images/edit.png"
import './productDetailHeader.css';
import closeImg from "../../../assets/images/close-btn.png"

export default function ProductDetailHeader({ onHide, editCustomer, customerData }) {
    return (
        <div className="product-detail-header">
            <div className='d-flex flex-column justify-content-between'>
                <div className="product-header-first">
                    <div className="" style={{ fontSize: "16px", fontWeight: "600", marginRight: "30px" }}>Create New Invoice</div>
                    <div className="">ORDER NO: 12335</div>
                </div>

                <div>PRODUCT DETAILS</div>

            </div>
            <div className="secondColumn">
                <div className="customerInfor">
                    <div>CUSTOMER DETAILS</div>
                    <div style={{ fontWeight: "600" }}>{customerData.name}</div>
                    <div>{customerData.email}</div>
                </div>
                <div className="d-flex align-items-end">

                    <img src={editImg} alt="" className="editImage" onClick={() => editCustomer(0)} />

                </div>
            </div>


            <img src={closeImg} alt="" className="closeImg" onClick={() => onHide(false)} />


        </div>
    )
}
