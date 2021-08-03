import './detailFooter.css';
import { Row, Col, Container } from 'react-bootstrap';
export default function DetailFooter({ data }) {
    return (
        <Container className="detailFooter">
            <Row className="mx-2 py-1 ">
                <Col lg={8}></Col>
                <Col lg={2}  >Sub Total :</Col>
                <Col lg={2} className="text-center">₹ {data.subtotal} </Col>
            </Row>
            <Row className="mx-2 py-1 ">
                <Col lg={8}></Col>
                <Col lg={2} >Tax ({data.tax})% : </Col>
                <Col lg={2} className="text-center">₹ {data.subtotal * data.tax / 100} </Col>
            </Row>
            <Row className="mx-2 py-1 ">
                <Col lg={8}></Col>
                <Col lg={2} >Discount ({data.discount})% :</Col>
                <Col lg={2} className="text-center">₹ {((data.subtotal * data.tax / 100 + data.subtotal) * data.discount / 100).toFixed(2)}</Col>
            </Row>
            <Row className="mx-2 my-2 py-1 ">
                <Col lg={8}></Col>
                <Col lg={2} style={{ fontWeight: "bold" }}>Grand Total :</Col>
                <Col lg={2} className="text-center" style={{ fontWeight: "bold" }}>₹ {((data.subtotal * data.tax / 100 + data.subtotal) * (1 - data.discount / 100)).toFixed(2)} </Col>
            </Row>

        </Container>

    )
}
