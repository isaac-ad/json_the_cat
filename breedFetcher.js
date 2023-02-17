const request = require('request');
const breedName = process.argv[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
  if (error) {
    console.log(`Error: ${error}`);
  } else {
    const data = JSON.parse(body);
    if (data.length === 0) {
      console.log(`Breed '${breedName}' not found.`);
    } else {
      console.log(data[0].description);
    }
  }
});
