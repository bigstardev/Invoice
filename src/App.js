
import './App.css';
import { useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Header from './components/header/Header';
import InvoiceList from './components/InvoiceList/InvoiceList';
import RightPanel from './components/rightPanel/RightPanel';

import sampledata from './context/data'
function App() {

  const [invoiceList, setInvoiceList] = useState(sampledata);
  const [rightPaneldata, setRightPaneldata] = useState({})
  const displayData = (data) => {

    setRightPaneldata(data)
  }
  const addInvoice = (invoice) => {
    let newInvoice = [...invoiceList]
    newInvoice.push(invoice);
    setInvoiceList(newInvoice);
  }
  return (

    <div className="App">
      <Header />

      <Row className="m-0">
        <Col xl={2} lg={3} xs={4} className="bg-dark m-0 p-0">
          <InvoiceList list={invoiceList} displayData={displayData} />
        </Col>
        <Col xl={10} lg={9} xs={8} className="bg-light p-0" >
          <RightPanel data={rightPaneldata.id ? rightPaneldata : sampledata[0]} addInvoice={addInvoice} />
        </Col>
      </Row>



    </div>

  );
}

export default App;
