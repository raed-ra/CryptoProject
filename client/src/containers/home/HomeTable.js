
import React, { useState, useEffect } from "react";
import { Col, Row, Container, Form, Button, Jumbotron, Table } from 'react-bootstrap'
import axios from "axios";


function HomeTable() {

    const [data, setData] = useState([])


    // call post api to load all the data in page
    useEffect(() => {

        axios.get('http://localhost:3001/api/cryptocompare/table', {
            withCredentials: true,
        })
            .then((response) => {
                setData(response.data.Data)
                console.log(response)
            }).catch((err) => {
                if (err.response.status === 401) {

                }
            })

    }, [])


    // text area
    console.log(data)
    return (
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Coin</th>
                    <th>Price</th>
                    <th>Market Capital</th>
                    <th>Rating</th>
                    <th>Chart</th>
                    <th>Chg. 24H</th>
                </tr>
            </thead>
            <tbody>
                {data.map(row => (
                    <tr key={row.RAW.USD.FROMSYMBOL}>
                        <td>#</td>
                        <td>{row.RAW.USD.IMAGEURL}+" "+{row.CoinInfo.FullName}</td>
                        <td>{row.DISPLAY.USD.PRICE}</td>
                        <td>{row.DISPLAY.USD.MKTCAP}</td>
                        <td>{row.CoinInfo.Rating.Weiss.Rating}</td>
                        <td>CHART</td>
                        <td>{row.DISPLAY.USD.CHANGEPCT24HOUR}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}
export default HomeTable;