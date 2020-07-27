
import React, { useState, useEffect } from "react";
import { Col, Row, Container, Form, Button, Jumbotron, Table } from 'react-bootstrap'
import Chart from "../../components/SingleCurrencyChart"
// import styled from 'styled-components';

// const Styles = styled.div`
// .canvas-container {
//     position: relative;
//     margin: auto;
//     height: 10vh;
//     width: 5vw;
//   }
//     `;

function ChartInfoTable(props) {

    // const [data, setData] = useState([])
    // const [page, setPage] = useState(0)
    // const [pageLimit, setPageLimit] = useState(10)

    // const fetchcoin = (page, limit) => {
    //     axios.get('http://localhost:3001/api/cryptocompare/table?page=' + String(page), {
    //         withCredentials: true,
    //     })
    //         .then((response) => {
    //             setData(response.data.Data)
    //             console.log(response)
    //         }).catch((err) => {
    //             if (err.response.status === 401) {
    //             }
    //         })
    // }
    // // call post api to load all the data in page
    // useEffect(() => {
    //     fetchcoin(page, pageLimit)
    // }, [page])

    // const onClickForward = () => {
    //     // click on next page
    //     setPage(page + 1)
    // }

    // const onClickBackward = () => {
    //     // click on next page
    //     setPage(page - 1)
    // }

    // text area
    // console.log(data)
    return (
        
        <Chart index={"BTC"} />
    );
}
export default ChartInfoTable;