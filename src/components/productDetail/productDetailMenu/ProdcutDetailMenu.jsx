/* add multiple product to new invoice*/
import './productDetailMenu.css'
import { Row, Col } from 'react-bootstrap';
import EditableInput from '../../editableInput/EditableInput';
import enterIcon from '../../../assets/images/enter-icon.png'
import { useState, useEffect } from "react";
export default function ProdcutDetailMenu({ SubTotal, getProductList }) {

    const [productList, setProductList] = useState([])
    const [temp, setTemp] = useState({})
    useEffect(() => {
        let subtotal = 0.0;
        productList.map((product) => subtotal += parseInt(product.price))

        SubTotal(subtotal)
        getProductList(productList)
    }, [productList])
    const handleProductChange = (description, value) => {
        const tempProductList = { ...temp }
        tempProductList[description] = value;
        setTemp(tempProductList)

    }
    const AddProduct = () => {
        if (!temp.productName || !temp.quantity || !temp.price)
            alert("Please make sure to input all fields")
        else {
            const newProductList = [...productList];
            newProductList.push(temp)
            setProductList(newProductList)
            setTemp({});
        }


    }
    return (
        <>
            <Row className="mx-2 py-2 detailMenu">
                <Col xs={8}>ITEM</Col>
                <Col xs={2} className="text-end">QUANTITY</Col>
                <Col xs={2} className="text-center">PRICE- ₹ </Col>
            </Row>
            {
                productList.map((product, index) => (
                    <Row className="mx-2 py-2 product" key={index}>
                        <Col xs={8}>{product.productName}</Col>
                        <Col xs={2} className="text-center">{product.quantity}</Col>
                        <Col xs={2} className="text-center">{product.price}</Col>
                    </Row>
                ))
            }

            <Row className="mx-2 py-2 detailMenu ">
                <Col xs={7} className="d-flex flex-wrap">
                    <EditableInput
                        placeholder="Please enter the item name"
                        value={temp.productName}
                        onChange={(value) => handleProductChange('productName', value)}


                    /></Col>
                <Col xs={2} className="d-flex flex-wrap" >
                    <EditableInput placeholder="0.00"
                        value={temp.quantity}
                        onChange={(value) => handleProductChange('quantity', value)}
                        type="number"
                    /></Col>
                <Col xs={2} className="d-flex flex-wrap">
                    <EditableInput placeholder="0.00"
                        onChange={(value) => handleProductChange('price', value)}
                        value={temp.price}
                        type="number" /> </Col>

                <Col xs={1} className="d-flex flex-wrap" >
                    <button className="btn btn-outline-primary" onClick={() => AddProduct()}>
                        <img src={enterIcon} style={{ width: "15px", height: "15px" }} />
                    </button>
                </Col>
            </Row>
        </>
    )
}
