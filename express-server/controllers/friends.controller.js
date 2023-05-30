const friends = require('../models/friends.model')

function getFriends (req, res){
    res.json(friends)
}

function getFriendsById(req, res){
    const friendId = Number(req.params.id);
    const friend = friends[friendId];
    if (friend) {
        res.status(200).json(friend);
    }   else{
        res.status(404).json({
            error:'Friend not Found'
        });
    }
}

function postFriend(req,res){
    if(!req.body.name) {
        return res.status(400).json({
            error:'You are missing friend name'
        })
    }

    const newFriend = {
        name:req.body.name,
        id: friends.length
    }
    friends.push(newFriend);
    res.json(newFriend);
}

module.exports={
    getFriends,
    getFriendsById,
    postFriend
}