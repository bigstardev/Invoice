import './detailMenu.css'
import { Container, Row, Col } from 'react-bootstrap'
export default function DetailMenu({ data }) {


    return (

        <Container>
            <Row className="mx-2 py-2 detailMenu">
                <Col xs={8}>ITEM</Col>
                <Col xs={2} className="text-end">QUANTITY</Col>
                <Col xs={2} className="text-center">PRICE- ₹ </Col>
            </Row>
            {
                data.productList.map((product, index) => (
                    <Row className="mx-2 py-2 product" key={index}>
                        <Col xs={8}>{product.productName}</Col>
                        <Col xs={2} className="text-center">{product.quantity}</Col>
                        <Col xs={2} className="text-center">{product.price}</Col>
                    </Row>
                ))
            }

        </Container>



    )
}
