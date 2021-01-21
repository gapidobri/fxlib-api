var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = './public/audio';

router.get('/', (req, res, next) => {

    const args = req.baseUrl.split('/').shift();

    const files = fs.readdirSync(path);
    const responseObject = {
        files: files,
    };
    res.send(JSON.stringify(responseObject));

});

module.exports = router;