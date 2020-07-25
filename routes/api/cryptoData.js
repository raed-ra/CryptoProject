
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
    let limit = 50;
    let page = 0;
    let currency = "USD";

    queryURL = "https://min-api.cryptocompare.com/data/top/totalvolfull?limit=" + limit + "&tsym=" + currency + "&page=" + page + "&api_key=" + APIKey;
    const response = await axios(queryURL)
    console.log("is this running?"+JSON.stringify(response.data))
    return res.json(response.data);
        } catch(err) {
            console.log(err);
            console.log(err.response);
            return res.json(err);
        };
})

router.get("/cryptocompare/chart", async (req, res) => {

    // let symbol = req.body.symbol;
    // let limit = req.body.limit;
    // let page = req.body.page;
    // let currency = req.body.page;
    let page = 0;
    let currency = "USD";

    queryURL = "https://min-api.cryptocompare.com/data/v2/histohour?fsym="  + symbol + "&tsym=" + currency + "&limit=100&api_key=" + APIKey;
    const data = await axios(queryURL)
    return res.json(data);
        // })
        // .catch((err) => {
        //     console.log(err);
        //     console.log(err.response);
        //     return res.json(err);
        // });
})

module.exports = router