import React, { useState, useEffect } from "react";
import { Col, Row, Container, Form, Button, Jumbotron, Table } from 'react-bootstrap'
import axios from "axios";
import Chart from "../../components/Chart"
import styled from 'styled-components';

const Styles = styled.div`
.canvas-container {
    position: relative;
    margin: auto;
    height: 10vh;
    width: 5vw;
  }
    `;

function HomeTable() {

    const [data, setData] = useState([])
    const [page, setPage] = useState(0)
    const [pageLimit, setPageLimit] = useState(10)

    const fetchcoin = (page, limit) => {
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
                        <th className="align-middle">Market Capital</th>
                        <th className="align-middle">Rating</th>
                        <th className="align-middle">Chart</th>
                        <th className="align-middle">Chg. 24H</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => (
                        <tr key={row.RAW.USD.FROMSYMBOL}>
                            <td className="align-middle">{pageLimit * page + index + 1}</td>
                            <td className="align-middle"><img className="image" width="15" height="10" src={`https://cryptocompare.com${row.RAW.USD.IMAGEURL}`} />{"  " + row.CoinInfo.FullName}</td>
                            <td className="align-middle">{row.DISPLAY.USD.PRICE}</td>
                            <td className="align-middle">{row.DISPLAY.USD.MKTCAP}</td>
                            <td className="align-middle">{row.CoinInfo.Rating.Weiss.Rating}</td>
                            <td className="align-middle" className="canvas-container"><Chart index={row.CoinInfo.Internal} /></td>
                            <td className="align-middle">{row.DISPLAY.USD.CHANGEPCT24HOUR}%</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Styles>
    );
}
export default HomeTable;