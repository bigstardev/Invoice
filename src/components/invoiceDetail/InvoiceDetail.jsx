import DetailFooter from './detailFooter/DetailFooter'
import DetailHeader from './detailHeader/DetailHeader'
import DetailMenu from './detailMenu/DetailMenu'
import './invoiceDetail.css'



export default function InvoiceDetail({ data }) {

    return (

        <div className="detail-wrapper">
            <DetailHeader data={data} />
            <DetailMenu data={data} />
            <DetailFooter data={data} />
        </div>

    )
}
