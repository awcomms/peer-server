const express = require("express")
const { ExpressPeerServer } = require("peer")

const port = process.env.port || 3001
const host = "0.0.0.0"
const app = express()

const server = app.listen(port, host, () => console.log(`listening on port ${host}/${port}`))

app.use(ExpressPeerServer(server, {
    debug: true,
}))