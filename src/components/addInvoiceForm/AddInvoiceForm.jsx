import './addInvoiceForm.css'
import { useState } from "react"
import ProductDetail from '../productDetail/ProductDetail'
import CustomerDetail from '../customerDetail/CustomerDetail'
export default function AddInvoiceForm({ onHide, addNew }) {
    const [state, setState] = useState(0);
    const [invoiceDetail, setInvoiceDetail] = useState({})
    const [customerDetail, setCustomerDetail] = useState({

    })
    const [productDetail, setProductDetail] = useState([])

    const saveCustomer = (customer) => {
        setState(1)
        setCustomerDetail(customer)

    }

    const saveAll = (calculationInfor, subtotal) => {

        const d = new Date();
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let newInvoiceDetail = {
            customerDetail: customerDetail,
            productList: productDetail,
            tax: calculationInfor.tax,
            discount: calculationInfor.discount,
            subtotal: subtotal,
            date: days[d.getDay()],
            id: d.getHours() + d.getMinutes(),
            totalPrice: (subtotal * (1 + calculationInfor.tax / 100) * (1 - calculationInfor.discount / 100)).toFixed(2)
        }

        if (productDetail.length < 1)
            alert("please add products")
        else {
            setInvoiceDetail(newInvoiceDetail)
            addNew(newInvoiceDetail)
        }
    }
    return (
        <div className="modalBody" >
            {state == 0 ? <CustomerDetail onHide={onHide} proceed={saveCustomer} skip={setState} data={customerDetail} /> : <ProductDetail onHide={onHide} editCustomer={setState} data={productDetail} proceed={saveAll}
                customerData={customerDetail} getProduct={setProductDetail} />}

        </div >
    )
}
