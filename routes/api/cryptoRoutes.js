
const express = require("express");
const axios = require("axios");
require('dotenv').config()
const router = express.Router();
let APIKey = process.env.CRYPTO_API_KEY;

router.get("/cryptocompare/table", async (req, res) => {
    try {
        // let symbol = req.body.symbol;
        // let limit = req.body.limit;
        // let page = req.body.page;
        // let currency = req.body.page;
        let limit = 10;
        let page = req.query.page;
        let currency = "USD";

        queryURL = "https://min-api.cryptocompare.com/data/top/totalvolfull?limit=" + limit + "&tsym=" + currency + "&page=" + page + "&api_key=" + APIKey;
        const response = await axios(queryURL)
        // console.log("is this running?" + JSON.stringify(response.data))
        return res.json(response.data);
    } catch (err) {
        // console.log(err);
        // console.log(err.response);
        return res.json(err);
    };
})

router.post("/cryptocompare/chart", async (req, res) => {
    try {
        // let symbol = req.body.symbol;
        // let limit = req.body.limit;
        // let page = req.body.page;
        // let currency = req.body.page;
        let currency = "USD";
        let limit = 20;
        
        let symbol = req.body.index
        // console.log(symbol)

        queryURL = "https://min-api.cryptocompare.com/data/v2/histoday?fsym=" + symbol + "&tsym=" + currency + "&limit=" + limit + "&api_key=" + APIKey;
        const response = await axios(queryURL)
        // console.log("is this chart running?" + JSON.stringify(response.data))
        return res.json(response.data);
    } catch (err) {
        // console.log(err);
        // console.log(err.response);
        return res.json(err);
    };
})


router.get("/cryptocompare/news", async (req, res) => {
    try {
        queryURL = "https://min-api.cryptocompare.com/data/v2/news/?lang=EN" + "&api_key=" + APIKey;
        const response = await axios(queryURL)
        console.log("is this news  running?" + JSON.stringify(response.data))
        return res.json(response.data);
    } catch (err) {
        console.log(err);
        console.log(err.response);
        return res.json(err);
    };
})

module.exports = router