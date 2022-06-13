const axios = require('axios')
const express = require('express')
const app = express()
app.get('/', (req, res) => {
    res.send("Test!")
})
app.listen(3000, () => console.log('Example app is listening on port 3000.'));
