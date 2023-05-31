function getMessages(req, res){
    //res.send("Hello Node.js")
    res.send('<ul><li>Hello Node.js</li></ul>');
}

function postMessages(req, res){
    console.log('Updating Messages...')
}

module.exports={
    getMessages,
    postMessages
}