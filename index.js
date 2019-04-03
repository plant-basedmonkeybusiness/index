const cors = require('cors');
const express = require('express');
const fetch = require('node-fetch');
const app = express()


app.use(cors()) 
app.get('/plants', (req, res) => {
    console.log(req.query.plant);
    fetch("https://trefle.io/api/plants?token=VEdRY0JHVDdvaFZZS0o0UW1HVyswZz09&q=" + req.query.plant)
    .then(r=>r.json())
    .then(data=>{  
        console.log(data);
        res.json(data)
        
    })
})
app.get('/images', (req, res) => {
    // console.log(req.query.link.images)
    fetch(req.query.link + "?token=VEdRY0JHVDdvaFZZS0o0UW1HVyswZz09")
    .then(r=>r.json())
    .then(data=>{  
        console.log(data.images[1]);
        res.json(data.images)
        
    })
})
const port = 3000
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
