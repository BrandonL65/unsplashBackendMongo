
let fetch = require("node-fetch");

let allSearches = {
  random: ( req, res ) => {
    fetch("https://api.unsplash.com/photos/random/?count=36", {
      headers: {
        "Authorization": `Client-ID ${process.env.ACCESS_KEY}`
      }
    })
    .then(resp => resp.json())
    .then(data => res.json(data));
  },
  search: ( req,res ) => {
    fetch(`https://api.unsplash.com/search/photos/?query=${req.body.Search}&per_page=36`, {
      headers: {
        "Authorization": `Client-ID ${process.env.ACCESS_KEY}`
      }
    })
    .then(resp => resp.json())
    .then(data => res.json(data));
  }
}

module.exports = allSearches