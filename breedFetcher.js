const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const URL = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(URL, (error, response, body) => {
    if (error) {
      callback(error, null);
    } else {
      const data = JSON.parse(body);
      if (data[0]) {
        callback(null, data[0].description);
      } else {
        callback(`Breed '${breedName}' not found.`, null);
      }
    }
  });
};

module.exports = { fetchBreedDescription };
