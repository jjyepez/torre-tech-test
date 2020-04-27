let router = require('express').Router();

let fs = require('fs');
let path = require('path');

router
   .all((req, res, next) => {
      next();
   })

   .get('/people', async (req, res, next) => {

      let filename = path.join(__dirname, '../../../data/mocks/people.json');
      let jsonString = fs.readFileSync(filename, { encoding: 'utf8' });
      let json = JSON.parse(jsonString);

      let data = json.results.slice(0, 30);

      res
         .status(200)
         .json({
            error: false,
            status: 200,
            total: data.length,
            data
         })
   })

   .get('/jobs', async (req, res, next) => {

      let filename = path.join(__dirname, '../../../data/mocks/opportunities.json');
      let jsonString = fs.readFileSync(filename, { encoding: 'utf8' });
      let json = JSON.parse(jsonString);

      let data = json.results.slice(0, 30);

      res
         .status(200)
         .json({
            error: false,
            status: 200,
            total: data.length,
            data
         })
   })

   ;

module.exports = router;