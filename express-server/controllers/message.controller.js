//const path = require('path');

function getMessages(req, res){
    //res.send("Hello Node.js")
    //res.send('<ul><li>Hello Node.js</li></ul>');
    //res.sendFile(path.join(__dirname, '..', 'public', 'images', 'skimountain.jpg' ))
    res.render('messages', {
        title:'Messages to my Friends!',
        friend: 'Murphy Ochuba',
    });
}

function postMessages(req, res){
    console.log('Updating Messages...')
}

module.exports={
    getMessages,
    postMessages
}