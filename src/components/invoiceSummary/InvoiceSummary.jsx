
import "./invoiceSummary.css"
export default function InvoiceSummary({ data, displayData }) {

    return (
        <div className="invoiceSummary" onClick={() => displayData(data)}>
            <div style={{ display: "flex", color: "white", justifyContent: "space-between" }}>
                <div style={{ marginRight: "10px" }}>INV. # - {data.id} </div>
                <div style={{ fontSize: "10px", color: "#7c7b81d0" }}>{data.date}   </div>
            </div>

            <div style={{ color: "white" }}>Items - {data.productList.length}</div>

            <div style={{ display: "flex", color: "white", justifyContent: "space-between" }}>
                <div style={{ marginRight: "10px", color: "#7171f5" }}>{data.customerDetail.name} </div>
                <div style={{ fontWeight: 600, fontSize: "14px" }}>₹  {data.totalPrice} </div>
            </div>
        </div>

    )
}
