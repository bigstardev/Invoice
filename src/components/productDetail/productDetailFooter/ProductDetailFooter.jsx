import React from 'react'
import './productDetailFooter.css'
import { Row, Col } from "react-bootstrap"
import EditableInput from '../../editableInput/EditableInput'
import { useState, useEffect } from 'react'
export default function ProductDetailFooter({ subtotal, total, save }) {
    const [calculationInfor, setCalculationInfor] = useState({ tax: 0.00, discount: 0.00 })
    useEffect(() => {

        total(calculationInfor)


    }, [calculationInfor])
    const handleChange = (name, value) => {
        const newInfor = { ...calculationInfor };
        newInfor[name] = value;
        setCalculationInfor(newInfor)
    }

    return (
        <div className="productDetailFooter ">
            <div className="tax-discount mx-2 py-2 d-flex ">

                <div className="d-flex">
                    <div className="Tax">
                        <EditableInput placeholder="Tax"
                            value={calculationInfor.tax}
                            type="number"
                            onChange={(value) => handleChange("tax", value)} /></div>
                    <div className="Discount" >
                        <EditableInput placeholder="Discount"
                            value={calculationInfor.discount}
                            type="number"
                            onChange={(value) => handleChange("discount", value)} />
                    </div>
                </div>
                <div className="d-flex subTotal">
                    <div className="mx-2">Sub Total</div>
                    <div className="mx-2" style={{ fontWeight: "bold" }}>₹ {subtotal}</div>
                </div>

            </div>
            <div className="total-price mx-2 px-2 py-2 d-flex">
                <div className="d-flex">
                    <div className="d-flex flex-column px-3 ">
                        <span className="font-weight-bold">Tax</span>
                        <span>{calculationInfor.tax} %</span>
                    </div>
                    <div className="d-flex flex-column px-3 mx-4 discount">
                        <span>Discount</span>
                        <span>{calculationInfor.discount} %</span>
                    </div>

                </div>
                <div className="d-flex">
                    <div className="d-flex flex-column px-3 mx-4">
                        <span className="font-weight-bold ">Grand Total</span>
                        <span>{(subtotal * (calculationInfor.tax / 100 + 1) * (1 - calculationInfor.discount / 100)).toFixed(2)}</span>
                    </div>
                    <button className="btn btn-primary px-4 save" onClick={() => save()}>SAVE</button>
                </div>
            </div>
        </div>
    )
}
