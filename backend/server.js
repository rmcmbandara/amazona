const express = require('express')
var cors = require('cors')
const data = require('./data')



const app = express()

app.use(cors())


app.get("/api/products", (req, res) => {
     res.send(data.products)
})


app.listen(5000, () => {
     console.log('server at 5000');
})