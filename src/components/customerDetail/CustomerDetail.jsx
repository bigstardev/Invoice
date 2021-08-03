import React from 'react'
import closeImg from "../../assets/images/close-btn.png"
import skipImg from "../../assets/images/skip-icon.png"
import { Container, Row, Col, } from 'react-bootstrap'
import { useState } from 'react';
export default function CustomerDetail({ onHide, proceed, skip }) {
    const [customerDetails, setCustomerDetail] = useState({
        name: "",
        phone: "",
        address: "",
        email: "",
        pincode: ""
    });
    const handleChange = (e) => {
        const value = e.target.value;

        setCustomerDetail({
            ...customerDetails,
            [e.target.name]: value
        })


    }
    return (
        <div>
            <Container >
                <Row className="mt-4 mx-2">
                    <Col xs={12} md={4}>
                        <h5>Creat New Invoice</h5>
                    </Col>
                    <Col xs={12} md={4}>
                        <span>ORDER NO: { }</span>
                    </Col>
                    <Col xs={12} md={4} className="text-end">
                        <img src={closeImg} alt="" onClick={() => onHide(false)} />
                    </Col>
                </Row>
                <Row className="border-bottom mb-2 mx-2 mt-2 ">
                    <Col xs={6} >
                        <span className="">CUSTOMER DETAILS</span>
                    </Col>
                    <Col xs={6} className="text-end" >
                        <button className="btn btn-light Skip" onClick={() => skip(1)}>skip  <img src={skipImg} alt="" /></button>

                    </Col>

                </Row>
                <Row className="mx-2">
                    <Col xs={6} >
                        <div>
                            <label >Full Name <span style={{ color: "red" }}>*</span></label>
                        </div>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" aria-label=""
                                name="name"
                                value={customerDetails.name}
                                onChange={handleChange} />
                        </div>
                    </Col>
                    <Col xs={6} >
                        <div>
                            <label >Phone Number <span style={{ color: "red" }}>*</span></label>
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text">+91</span>

                            </div>
                            <input type="tel" className="form-control" aria-label=""
                                name="phone"
                                value={customerDetails.phone}
                                onChange={handleChange} />

                        </div>
                    </Col>

                </Row>
                <Row className="mx-2">
                    <Col xs={6} >
                        <div>
                            <label >Address </label>
                        </div>
                        <div className="input-group mb-3">
                            <textarea className="form-control" id="validationTextarea"
                                name="address"
                                value={customerDetails.address}
                                placeholder="Required example textarea"

                                onChange={handleChange}></textarea>
                        </div>

                    </Col>
                    <Col xs={6}>
                        <div>
                            <label >Email ID <span style={{ color: "red" }}>*</span></label>
                        </div>
                        <div className="input-group mb-3">

                            <input type="email" className="form-control" aria-label=""
                                name="email"
                                value={customerDetails.email}
                                onChange={handleChange} />
                        </div>
                        <div>
                            <label >Pincode</label>
                        </div>
                        <div>
                            <input type="text" className="" aria-label="" placeholder="560067"
                                name="pincode"
                                value={customerDetails.pincode}
                                onChange={handleChange} />
                        </div>
                    </Col>

                </Row>
                <Row className="p-2 mt-2 Skip">
                    <Col xs={6} >

                    </Col>
                    <Col xs={6} className="text-end">
                        <button className="btn btn-primary" onClick={() => proceed(customerDetails)}>process</button>

                    </Col>
                </Row>
            </Container>
        </div>
    )
}
