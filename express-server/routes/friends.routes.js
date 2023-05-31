const express = require('express');
const friendController = require('../controllers/friends.controller');
const friendsRouter = express.Router();

friendsRouter.use((req, res, next) =>{
    console.log('IP Address:', req.ip)
    next();
});

friendsRouter.get('/', friendController.getFriends);
friendsRouter.get('/:id', friendController.getFriendsById);
friendsRouter.post('/', friendController.postFriend);

module.exports = friendsRouter;
