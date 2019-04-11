'use strict'

const io = require('socket.io')(3000);

io.on('connection', (socket) => {
  console.log('CONNECTED', socket.id);

  socket.on('file-error', (payload) => {
    console.log('ERROR', payload);
    socket.broadcast.emit('err', payload);
  });

  socket.on('file-save', (payload) => {
    console.log('SUCCESSFUL', payload);
    socket.broadcast.emit('success', payload);
  });

  socket.on('disconnect', () => {
    console.log('DISCONNECTED', socket.id);
  });

});