const express = require("express")
const http = require("http")
const path = require("path")
const { ExpressPeerServer} = require("peer")

const port = process.env.port || 3001

const app = express()
const server = http.createServer(app)

const peerServer = ExpressPeerServer(server, {
    proxied: true,
    debug: true,
})

app.use(peerServer)

server.listen(port, () => `listening on port ${port}`)