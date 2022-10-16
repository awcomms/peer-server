const express = require("express")
const { ExpressPeerServer } = require("peer")

const port = process.env.port || 3001
const app = express()

const server = app.listen(port, () => console.log(`listening on port ${port}`))

app.use(ExpressPeerServer(server, {
    debug: true,
}))