let router = require('express').Router();
let path = require('path');

router
   .get('/', (req, res, next) => {
      res
         .status(200)
         .sendFile(path.join(__dirname, '../../../public/index.html'))
         ;
   });

module.exports = router;