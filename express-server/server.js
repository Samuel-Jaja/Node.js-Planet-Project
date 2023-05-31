//import express from 'express'; ES2020
const express = require('express')

const friendsRouter = require('./routes/friends.routes');
const messageRouter = require('./routes/message.routes')

const app = express();
const PORT = 4001;

app.use((req, res, next)=>{
    const startTime = Date.now();
    next();
    const delta = Date.now() - startTime;
    console.log(`${req.method} ${req.baseUrl}${req.url} ${delta} milliseconds [ms]`);
})

app.use(express.json());

app.use('/friends', friendsRouter);
app.use('/message', messageRouter);

app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}...`)
})