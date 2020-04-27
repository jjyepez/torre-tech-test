let router = require('express').Router();

let fs = require('fs');
let path = require('path');
let fetch = require('node-fetch');

require('dotenv').config();

router

   .all((req, res, next) => {
      // reservado para validar autenticación básica
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

   .get('/people/:userName', async (req, res, next) => {

      let json = {};

      let useMock = false;

      if (useMock) {

         let filename = path.join(__dirname, '../../../data/mocks/bio.json');
         let jsonString = fs.readFileSync(filename, { encoding: 'utf8' });
         json = JSON.parse(jsonString);

      } else {

         let userName = req.params.userName;
         let endpoint = process.env.TORRE_PROFILE_ENDPOINT_HOST;
         let url = `${endpoint}/${userName}`;

         json = await fetch(url, {
            headers: {
               'Accept': 'application/json'
            }
         }).then(rslt => rslt.json());

      }


      console.log({ json });

      res
         .status(200)
         .json({
            error: false,
            status: 200,
            data: json
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

   .get('/jobs/:jobID', async (req, res, next) => {

      let jobID = req.params.jobID;
      let endpoint = process.env.TORRE_JOB_ENDPOINT_HOST;
      let url = `${endpoint}/${jobID}`;

      let json = await fetch(url, {
         headers: {
            'Accept': 'application/json'
         }
      }).then(rslt => rslt.json());
      console.log({ json });

      res
         .status(200)
         .json({
            error: false,
            status: 200,
            data: json
         })
   })

   ;

module.exports = router;