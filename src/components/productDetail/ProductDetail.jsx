/*
rendering product detail page in modal window
*/
import React from 'react'
import ProductDetailHeader from './productDetailHeader/ProductDetailHeader'
import { Container } from 'react-bootstrap'
import './productDetail.css'
import ProdcutDetailMenu from './productDetailMenu/ProdcutDetailMenu'
import ProductDetailFooter from './productDetailFooter/ProductDetailFooter'
export default function ProductDetail({ onHide, editCustomer, data, proceed, customerData, getProduct }) {
    const [subtotal, setSubtotal] = React.useState(0)
    const [calculationInfor, setCalculationInfor] = React.useState({})
    const productList = (productList) => {

        getProduct(productList)
    }
    const saveAll = () => {

        proceed(calculationInfor, subtotal)
        onHide(false)

    }
    return (
        <div>
            <Container className="p-3 px-4" style={{ maxHeight: "600px", overflowY: "auto" }}>
                <ProductDetailHeader onHide={onHide} editCustomer={editCustomer} customerData={customerData} />
                <ProdcutDetailMenu SubTotal={setSubtotal} getProductList={productList} />
                <ProductDetailFooter subtotal={subtotal}
                    total={setCalculationInfor} save={saveAll} />
            </Container>
        </div>
    )
}
