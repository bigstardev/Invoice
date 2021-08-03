import Searchbox from "../search/Searchbox"
import "./InvoiceList.css"
import InvoiceSummary from "../invoiceSummary/InvoiceSummary"
export default function InvoiceList({ list, displayData }) {

    return (
        <div className="leftPanel">
            <Searchbox />
            <div className="numberOfInvoices">
                <span >INVOICES - </span>
                <span>{list.length}</span>
            </div>
            {
                list.map((invoice, index) =>
                    <InvoiceSummary key={index} data={invoice} displayData={displayData} />
                )
            }

        </div>
    )
}
