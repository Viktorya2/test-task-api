require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT
app.use(express.json())
const routes = require( "./src/routes" );

routes(app)

app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})