const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello mbut')
})

app.listen(port, () => {
    console.log(`LOHE LOHE KOK MURUP on ${port}`)
})