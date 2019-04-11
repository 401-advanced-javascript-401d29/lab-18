'use strict'

const io = require('socket.io-client');

const socket = io.connect('http://localhost:3000');

socket.on('file-error', payload => {
  console.log('error happened', payload);
});

socket.on('file-save', payload => {
  console.log('file save happened', payload);
});
