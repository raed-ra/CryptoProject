
import React, { useState, useEffect } from "react";
// import { Button } from 'react-native-elements';
import { Col, Row, Container, Form, Button, Jumbotron, Table } from 'react-bootstrap'
import axios from "axios";
import Chart from "../../components/Chart"
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';

const Styles = styled.div`
.canvas-container {
    position: relative;
    margin: auto;
    height: 10vh;
    width: 5vw;
  }
    `;

function PortfolioTable() {

    const [data, setData] = useState([])
    const [page, setPage] = useState(0)
    const [pageLimit, setPageLimit] = useState(1)

    const fetchcoin = (page, pageimit) => {
        axios.get('http://localhost:3001/api/cryptocompare/table?page=' + String(page), {
            withCredentials: true,
        })
            .then((response) => {
                setData(response.data.Data)
                console.log(response)
            }).catch((err) => {
                if (err.response.status === 401) {
                }
            })
    }
    // call post api to load all the data in page
    useEffect(() => {
        fetchcoin(page, pageLimit)
    }, [page])

    const onClickForward = () => {
        // click on next page
        setPage(page + 1)
    }

    const onClickBackward = () => {
        // click on next page
        setPage(page - 1)
    }

    // text area
    console.log(data)
    return (
        <Styles>
            <Row>.</Row>
            <Row>
                <Col xs={8}>
                </Col>
                <Col xs={4} >
                    {<Button variant="secondary" type="button" onClick={onClickBackward}>
                        Previous Page
                     </Button>} {" "}
                    {<Button variant="secondary" type="button" onClick={onClickForward}>
                        Next Page >>>
                    </Button>}
                </Col>
            </Row>

            <Table striped bordered hover variant="light">
                <tr></tr>
                <thead>
                    <tr>
                        <th className="align-middle">#</th>
                        <th className="align-middle">Coin</th>
                        <th className="align-middle">Price</th>
                        <th className="align-middle">Total Value</th>
                        <th className="align-middle">Profit/Loss</th>
                        <th className="align-middle">Change</th>
                
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => (
                        <tr key={row.RAW.USD.FROMSYMBOL}>
                            <td className="align-middle">{pageLimit * page + index + 1}</td>
                            <td className="align-middle" >
                                <img
                                    className="image"
                                    width="35"
                                    src={`https://cryptocompare.com${row.RAW.USD.IMAGEURL}`}
                                />
                                {"  " + row.CoinInfo.FullName + "        "}
                                <Button
                                    className="float-right"
                                    variant="warning"
                                    label="Submit"
                                    buttonStyle={{ borderRadius: 50, display: 'flex', justifyContent: 'right' }}
                                    style={{ borderRadius: 50 }}
                                    labelColor={'#FFFFFF'}
                                    backgroundColor={"#0066e8"}>
                                    <FontAwesome
                                        className='super-crazy-colors'
                                        name='edit'
                                        size='1x'
                                        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                                    />
                                </Button>
                            </td>
                            <td className="align-middle">Coin</td>
                            <td className="align-middle">Price</td>
                            <td className="align-middle">Total Value</td>
                            <td className="align-middle">Profit/Loss></td>
                            <td className="align-middle">change%</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Styles>
    );
}
export default PortfolioTable;