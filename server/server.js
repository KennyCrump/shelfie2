require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const massive = require('massive')
const ctrl = require('./controller.js')

const app = express()

app.use(bodyParser.json())

app.get('/api/inventory', ctrl.readAll)
app.post('/api/product', ctrl.create)
app.delete('/api/product/:id', ctrl.delete)
app.put('/api/product/:id', ctrl.update)


PORT = process.env.PORT || 4567;

massive(process.env.CONNECTION_STRING).then(connection => {
    app.set('db', connection)
    app.listen(PORT, () => console.log(`listennn to tha port ${PORT}`))
})
