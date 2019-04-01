const cors = require('cors');
const express = require('express');
const fetch = require('node-fetch');
const app = express()
app.use(cors()) 
app.get('/api1', (req, res) => {
    fetch("https://trefle.io/api/plants?token=")
    .then(r=>r.json())
    .then(data=>{  
        console.log(data);
        res.json(data)
    //hér gerum við eitthvað við gögnin okkar fínu
    })
})
const port = 3000
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
