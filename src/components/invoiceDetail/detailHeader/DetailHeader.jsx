import printImage from "../../../assets/images/printer-blue.png"
import './detailHeader.css'
import { Container } from 'react-bootstrap'
export default function DetailHeader({ data }) {
    return (
        <Container>
            <div className="header-wrapper">
                <div>
                    <div style={{ fontWeight: "bold" }}>INVOICE</div>
                    <div>{data.id}</div>
                    <div>{data.date}</div>
                </div>
                <div className="secondColumn">
                    <div className="customerInfor">
                        <div>CUSTOMER DETAILS</div>
                        <div style={{
                            fontWeight: "bold"
                        }}>{data.customerDetail.name}</div>
                        <div>{data.customerDetail.email}</div>
                    </div>
                    <div>
                        <button type="button" className="btn btn-outline-primary">
                            Print  <img src={printImage} alt="" className="printImage" />
                        </button>
                    </div>
                </div>

            </div>
        </Container >

    )
}
