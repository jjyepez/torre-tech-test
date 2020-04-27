function loadFirstTime(callback) {
   let endpoint = `/api/jobs`;

   let rslt = fetch(endpoint, {
      method: 'GET',
      headers: {
         'Accept': 'application/json'
      }
   })
      .then(rslt => rslt.json())
      .then(json => {
         if (json.error) {
            alert('ERROR 1');
         } else {
            let data = json.data;
            callback(data);
         }
      })
      .catch(err => {
         alert('ERROR 2');
         console.log({ err });
      });

}

module.exports = {
   loadFirstTime
}