const express = require('express')
const app = express()
const router = require('./src/routes/routes')
const cors = require('cors')

app.use(express.json()) // enable addition of datas using JSON
app.use(cors())
app.use('/', router)

app.listen(3000, () => {
    console.log('Server running')
})