//Express App
const express = require('express');
const app = express();
app.use(express.static(__dirname + '/public'));

//Socket.IO
const socketIO = require('socket.io');
const expressServer = app.listen(7070);
const io = socketIO(expressServer);