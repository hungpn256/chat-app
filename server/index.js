const express = require('express');
const socket = require('socket.io')
const http = require('http')
const app = express();
const server = http.createServer(app);
const io = socket(server);
const cors = require('cors')
const router = require('./router')

const PORT = process.env.PORT || 5001
app.use(cors())
app.use(router)


io.on('connection', (socket) => {
    console.log('y connect');
    socket.on('join', ({ name, room }) => {
        console.log(name, room)
    })
    socket.on('User had left')
})

server.listen(PORT, () => {
    console.log('listen ', PORT)
})