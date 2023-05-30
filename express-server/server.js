//import express from 'express'; ES2020
const friendController = require('./controllers/friends.controller');
const messageController = require('./controllers/message.controller');
const express = require('express')
const app = express();
const PORT = 4001;

app.use(express.json());

app.use((req, res, next)=>{
    const startTime = Date.now();
    next();
    const delta = Date.now() - startTime;
    console.log(`${req.method} ${req.url} ${delta} milliseconds [ms]`);
})


//Friend Controllers
app.get('/friends', friendController.getFriends);
app.get('/friends/:id', friendController.getFriendsById);
app.post('/friends', friendController.postFriend);

//Message Controllers 
app.get('/message', messageController.getMessages);
app.post('/message', messageController.postMessages);

app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`)
})