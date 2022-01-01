const { json } = require('express');
const express = require('express');
// const pool = require('../modules/pool');
const router = express.Router();
const axios = require('axios');


// GET CELSIUS REWARDS // 

router.get('/', (req, res) => {
    // GET route code here
    const url = 'https://wallet-api.staging.celsius.network/util/interest/rates';

    axios
        .get(url)
        .then(response => {
            console.log('--- response is', response);
            res.send(response.data);
        })
        .catch(err => {
            console.log('err in recipe GET', err);
            res.sendStatus(500);
        })
});

module.exports = router;