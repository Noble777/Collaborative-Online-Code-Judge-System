const express = require('express');
const path = require('path');

const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb://noble888:cgl950511@ds257640.mlab.com:57640/test-db');

const restRouter = require('./routes/rest');
const indexRouter = require('./routes/index')

var http = require('http');
var socketIO = require('socket.io');
var io = socketIO();
var editorSocketService = require('./services/editorSocketService')(io);

// app.get('/', (req, res) => {
// 	res.send('Hello world from express');
// })
app.use('/api/v1', restRouter);
app.use(express.static(path.join(__dirname, '../public')));

// app.listen(3000, () => {
// 	console.log('App is listening to port 3000.')
// });
const server = http.createServer(app);
io.attach(server);
server.listen(3000);
server.on('listening',() => {
	console.log('App is listening to port 3000.');
});

app.use((req, res) => {
	res.sendFile('index.html', {root: path.join(__dirname, '../public')});
})