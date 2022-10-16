const { PeerServer } = require('peer');

PeerServer({ port: process.env.PORT || 3001});
console.log('running')