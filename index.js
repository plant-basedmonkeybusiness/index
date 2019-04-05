// í upphafi þarf að setja upp Yarn og gera þessar breytur 
// Þetta er til þess að ...
const cors = require('cors');
const express = require('express');
const fetch = require('node-fetch');
const app = express()

// Þetta er gert til að setja inn API lykil til að ná í gögn úr apanum
app.use(cors()) 
//app.get tekur argument og function, og arrow-functionið tekur svo tvö argument. Fyrra er obj. fyrir request
//sem er info um þann sem fer á síðuna, res er obj til að senda svar til baka.
app.get('/plants', (req, res) => {
    // console.log(req.query.plant);

    // hér erum við að breyta gögnunum úr streng í JSON. 'r' er response frá apanum, eða gögnin sjálf, data er það 
    //sama og r, nema JSON-fied 
    fetch("https://trefle.io/api/plants?token=VEdRY0JHVDdvaFZZS0o0UW1HVyswZz09&q=" + req.query.plant)
    // request
    .then(r=>r.json())
    .then(data=>{  
        // console.log(data);
        res.json(data)
        
    })
})
// Hér fáum við birtar myndir úr apanum 
app.get('/images', (req, res) => {
    // console.log(req.query.link.images)
    fetch(req.query.link + "?token=VEdRY0JHVDdvaFZZS0o0UW1HVyswZz09")
    .then(r=>r.json())
    .then(data=>{  
        // console.log(data.images[1]);
        res.json(data.images)
        
    })
})
// local host, express er að setja upp localhost á port 3000. 
const port = 3000
app.listen(port, () => console.log(`Example app listening on port ${port}!`))


//Express er library i node.js sem meðal annars gerir það auðveldara að gera server,
// og routing og allskonar cool dóti
