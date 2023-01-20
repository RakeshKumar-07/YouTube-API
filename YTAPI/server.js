const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//MIDDLEWARE
app.use(bodyParser.json());

const API_KEY = "YOUR_API_KEY"; // <--- Place your Youtube Data API v3 key here!!!

//GET
app.get('/:q', async (req,res) => {
    const data = [];
    await fetch(`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&q=${req.params.q}&type=video&part=snippet&order=date&maxResults=20`)
                    .then(response => response.json())
                    .then(response => data.push(response.items));
    res.status(200).send(data);
})

//PORT
const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log("server on 3001");
});