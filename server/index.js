const express = require('express');

const http = require('http').Server(express);

const socket = require('socket.io')(http);

http.listen('3001', () => {
    console.log('Listening at :3001 !');
});