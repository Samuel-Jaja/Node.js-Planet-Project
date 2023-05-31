//Using ES2020 import express from 'express';
const express = require('express');
const path = require('path');
const friendsRouter = require('./routes/friends.routes');
const messageRouter = require('./routes/message.routes');

const app = express();
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

const PORT = 4001;

app.use((req, res, next)=>{
    const startTime = Date.now();
    next();
    const delta = Date.now() - startTime;
    console.log(`${req.method} ${req.baseUrl}${req.url} ${delta} milliseconds [ms]`);
})

app.use('/site', express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.get('/', (req,res) => {
    res.render('index', {
        title: 'Welcome to CypherCrescent',
        caption: 'Let\'s go Coding with Node.js @CypherCrescent ',
    })
})
app.use('/friends', friendsRouter);
app.use('/message', messageRouter);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`)
})