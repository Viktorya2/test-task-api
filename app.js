const express = require('express')
const app = express()
const port = 3000
const fs = require('fs');
app.use(express.json())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/get', (req, res) => {
    fs.readFile('DB.json', (err, data) => {
        if (err) throw err;
        let DB = JSON.parse(data);
        res.send({data: DB})
    });
})

app.post('/save', (req, res) => {
    const data = JSON.stringify(req.body);
    fs.writeFileSync('DB.json', data);
    res.send({data: req.body})
})

app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})