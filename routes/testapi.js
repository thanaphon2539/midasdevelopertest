const express = require('express');
const router = express.Router();
const { google } = require('googleapis');

router.post('/testapi', async (req, res, next) => {

    // console.log(req.body);
    const NodeGeocoder = require('node-geocoder');
    const options = {
        provider: 'google',
        apiKey: 'AIzaSyCPBsuYfjXEmmlUOd6mGz5fZfPXF90aB3M', // key test
        formatter: null
    };
    const geocoder = NodeGeocoder(options);
    const result = await geocoder.geocode(
        req.body.data
    ).then((result) => {
        return result;
    }).catch((err) => {
        return err
    });
    res.send(result)
});

router.post('/testapigame24', async (req, res, next) => {

    // console.log(req.body.data);
    const number = req.body.data
    // console.log(number[0]);
    // console.log(number[1]);
    // console.log(number[2]);
    // console.log(number[3]);
    let total = 0
    let text = "No"
    let method = null
    if (number.length == 4) {
        total = (number[3] * (number[2] + number[1] + number[0]))
    }
    if(total == 24){
        text = "Yes"
        method = (`นำ ${number[2]} + ${number[1]} + ${number[0]} = 6 แล้วนำเลข 6 * ${number[3]} = 24`)
    }
    const result = {
        total: total,
        resulttext: text,
        method: method
        
    }
    res.send(result)
});

module.exports = router;