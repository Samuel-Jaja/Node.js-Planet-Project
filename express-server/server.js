//import express from 'express';
const express = require('express')
const app = express();
const PORT = 4001;



app.get('/',(req, res)=>{
    res.send("Hello Node.js")
})

const friends = [
    {
        id:0,
        firstName:'Catherine'
    },
    {
        id:1,
        firstName:'Carine'
    },
    {
        id:2,
        firstName:'Samuel Jaja'
    },
    {
        id:3,
        firstName:'Francis Enyi'
    },
]

app.get('/friends',(req, res)=>{
    res.send(friends)
})

app.get('/friends/:id', (req, res) => {
    const friendId = Number(req.params.id);
    const friend = friends[friendId];
    if (friend) {
        res.status(200).json(friend);
    }   else{
        res.status(404).json({
            error:'Friend not Found'
        });
    }
})

app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`)
})