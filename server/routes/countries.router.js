
const express = require('express');
const router = express.Router();
const axios = require('axios');


// GET CELSIUS COUNTRIES // 

router.get('/', (req, res) => {
    // GET route code here
    const url = 'https://wallet-api.staging.celsius.network/util/countries';

    const config = {
        headers: {
            'X-Cel-Partner-Token': process.env.CEL_PARTNER_TOKEN,
            'X-Cel-User-Token': process.env.CEL_USER_TOKEN
        }
    };

    axios.get(url, config)
        .then(response => {
            console.log('--- router.get countries response is', response);
            res.send(response.data);
        })
        .catch(err => {
            console.log('err in router.get/countries', err);
            res.sendStatus(500);
        })
});

module.exports = router;