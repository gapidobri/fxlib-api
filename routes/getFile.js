var express = require('express');
var router = express.Router();
var fs = require('fs');

router.get('/api/file/:title', (req, res, next) => {

});

router.param('title', (req, res, next, title) => {
    if (fs.existsSync(`./public/audio/${title}`)) {
        const stream = fs.createReadStream(`./public/audio/${title}`);
        stream.pipe(res);
    } else {
        res.statusCode(404);
    }
    
})

module.exports = router;