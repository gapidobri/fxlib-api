var express = require('express');
var router = express.Router();

router.post('/', (req, res) => {
    try {

        if (!req.files) {
            res.send({
                status: false,
                message: 'No file uploaded',
            })
            return;
        }

        const file = req.files.sound
        if (file.mimetype == 'audio/mpeg') {
            
            file.mv('./public/audio/' + file.name);
            console.log(file.name + ' is uploaded!');
            res.send({
                status: true,
                message: 'File is uploaded',
                data: {
                    name: file.name,
                    mimetype: file.mimetype,
                    size: file.size,
                }
            });

        } else {

            console.log(file.name + ' is not uploaded!');
            res.send({
                status: false,
                message: 'File is not an audio file',
                data: {
                    name: file.name,
                    mimetype: file.mimetype,
                    size: file.size,
                }
            });

        }
        

    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;