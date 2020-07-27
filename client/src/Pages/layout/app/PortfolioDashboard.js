import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { withRouter } from "react-router";
import Sidebar from "../../../containers/home/Sidebar";
import HomeTable from "../../../containers/home/HomeTable";
import './style/PortfolioDashboard.css'
import DroppdownMenu from "../../../components/DropdownMenu"
import Listgroup2 from "../../../components/Listgroup2"
import Listgroup4 from "../../../components/Listgroup4"
import PortfolioChart from "../../../components/PortfolioChart"
import ModalAddCoin from "../../../components/ModalAddCoin"
import PortfolioTable from "../../../containers/Portfolio/PortfolioTable"
import ModalEditSellCoin from "../../../components/ModalEditSellCoin"

const Dash = props => {

    const [modalShow, setModalShow] = useState(false);

    return (

        <Container className='mt-5' >
            <Card >
                <Card >

                    <Button variant="warning" onClick={() => setModalShow(true)}>
                        Coin +
                     </Button>
                </Card>
                <Card className='mt-3' >
                    <Row className='mt-3'>
                        <Col sm={2} style={{ display: 'flex' }}>
                            <DroppdownMenu
                                style={{ display: 'flex' }}
                                size="md"
                            />
                        </Col>
                        <Col sm={3}><Listgroup2 Title={"Acquisition Cost"} /></Col>
                        <Col sm={2}><Listgroup2 Title={"Realized P/L"} /></Col>
                        <Col sm={2}><Listgroup2 Title={"Profit / Loss"} /></Col>
                        <Col sm={2}><Listgroup2 Title={"Holdings"} /></Col>
                        <Col sm={1}></Col>
                    </Row>
                    <Card className='mt-3'>
                        <Row className='mt-5'>
                            <Col></Col>
                            <Col sm={3}>
                                
                                    <Listgroup2 Title={"Portfolio Change"} />
                                    <Row><Listgroup4 Title1={"Portfolio MAX"} Title2={"Most Profitable"} Title3={"Best Crypto"} /></Row>
                                
                            </Col>
                            <Col sm={8}><PortfolioChart /></Col>
                            <Col sm={1}></Col>

                        </Row>
                    </Card>

                    <Card><PortfolioTable /></Card>
                    <ModalAddCoin show={modalShow} onHide={() => setModalShow(false)} />
                </Card>
            </Card>
        </Container>

    );
};
const PortfolioDashboard = withRouter(Dash);
export default PortfolioDashboard