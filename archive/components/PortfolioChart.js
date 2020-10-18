
import React, { useState, useEffect, Component } from "react";
import { Col, Row, Container, Form, Button, Jumbotron, Table } from 'react-bootstrap'
import axios from "axios";
import { Line } from 'react-chartjs-2';
import moment from 'moment'
import 'moment-timezone';
import ChartHighstock from './ChartHighstock.jsx';

function PortfolioChart(props) {

    const [chartData, setChartData] = useState([])
    const [chartDisplayData, setChartDisplayData] = useState([])
    const index = props.index



    const chooseData = async () => {
        switch (index) {
            case "all":
                all_portfolio_data_calcs();
            default:
                return;
        }
    }

    const fetchCryptoLogoPrice = async (index, currency) => {
        try {
            //console.log(index)
            const response = await axios.post('http://localhost:3001/api/cryptocompare/chart', { index }, {
                withCredentials: true,
            })
            //console.log(response.data.Data)
            return response.data.Data
        } catch (err) {
            console.log("there is an error here")
            if (err.response === 401) {
                console.log(err.response)
            }
        }
    }
    const all_portfolio_data_calcs = async () => {
        try {
            let response = await axios.get('http://localhost:3001/api/holding', {
                withCredentials: true,
            })
            // console.log(response.data.data)
            let holdingListp1 = response.data.data
            //console.log(holdingListp1)


            const anAsyncFunction = async (coin) => {
                //console.log(coin)
                let holdingListp2 = await fetchCryptoLogoPrice(coin.coin, coin.currency)
                console.log(holdingListp2)
                let historicalValue = holdingListp2.Data.map(item => parseFloat(coin.holding_quantity_current) * parseFloat(item.close))
                // console.log(Math.max(...historicalValue))
                return {
                    closingValue: historicalValue,
                    time: holdingListp2.Data.map(obj => obj.time)
                }
            }

            const getData = async holdingListp1 => {
                return Promise.all(holdingListp1.map(coin => anAsyncFunction(coin)))
            }

            getData(holdingListp1).then(data => {
                //console.log(data) //<<<<<<<-----------
                // setHolding(data)
                console.log(holdingListp1);//<<<<<--------
                const time = data[0].time;
                //let allHoldingsMasterData = data.map((historicalValue, index) => 
                //)
                // let bestCrypto= 0;
                for (let i = 0; i < data.length; i++) {
                    data[i].maxReach= Math.max(...data[i].closingValue)
                }
                console.log(data) //<<<<<<<-----------

                let totalHistoricalData = new Array(data[0].closingValue.length).fill(0)
                // total.map(item => )
                totalHistoricalData = totalHistoricalData.map((_, index) => {
                    let total = 0;
                    for (let i = 0; i < data.length; i++) {
                        total += data[i].closingValue[index];
                    }
                    return total;
                }
                )
                console.log(Math.max(...totalHistoricalData))   //<<<<<--------

                let hobstock_data = [];
                //console.log(totalHistoricalData)
                for (let i = 0; i < time.length; i++) {
                    // console.log(time[i] ,moment(time[i]).format())
                    hobstock_data.push({
                        'Date': moment.unix(time[i]).format("DD/MM/YY"),
                        'Close': totalHistoricalData[i]
                    })
                }
                //console.log(hobstock_data)
                return hobstock_data.reverse()
            }).then(data => setChartDisplayData(data))

        } catch (err) {
            if (err.response.status === 401) {
            }
        }
    }



    // async function fetchdata() {
    //     try {
    //         console.log(index)
    //         const response = await axios.post('http://localhost:3001/api/cryptocompare/chart', { index }, {
    //             withCredentials: true,
    //         })
    //         // console.log(response.data.Data.Data)
    //         let updated_chart_data = [];
    //         let updated_chart_label = [];
    //         response.data.Data.Data.forEach(function (d, i) {
    //             // console.log(d.time);
    //             // console.log(i);
    //             let x = Date(d.time)
    //             // console.log(x)
    //             let y = (d.low + d.high) / 2;

    //             updated_chart_data.push(y);
    //             updated_chart_label.push(x);
    //             // console.log(updated_chart_data)
    //         })
    //         let chartData = {
    //             labels: updated_chart_label,
    //             datasets: [
    //                 {
    //                     data: updated_chart_data,
    //                 }
    //             ]
    //         }
    //         // console.log(chartData)
    //         setChartData(chartData)

    //     } catch (err) {
    //         console.log("there is an error" + err)
    //     }
    // }
    // call post api to load the charts
    useEffect(() => {
        chooseData();
    }, [])


    // text area
    //console.log(chartDisplayData)
    return (
        <ChartHighstock data={chartDisplayData} title={"Portfolio Historical Status"} />
    );
}
export default PortfolioChart;