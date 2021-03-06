const request   = require('request');
const express   = require('express');
const router    = express.Router();
const config    = require('config');
const KEY       = config.get('key');


// GET Categories
router.get('/', function (req, res) {

    let keyCharacter = '?';

    // use request to make HTTP calls
    request('https://api.brewerydb.com/v2/categories' + keyCharacter + 'key=' + KEY, function (error, response, body) {

        if (!error && response.statusCode === 200) {
            res.send(body);
        }

    });

});

module.exports = router; 