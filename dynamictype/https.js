///import { createServer } from 'https'
const https = require('https')
const server = https.createServer()

// function hff(){
//     return console.log('fhjff')
// }
const PORT = 5001

const friends = [

    {
     id:1,
     name: String = 'Catherine JAJA',
     school: "MEXICO"
    },

    {
     id:2,
     name: String ='Samuel JAJA',
     school: "USA"
    },

    {
     id:3,
     name: String = 'Angela Amenya',
     school: "FRANCE"
    }
]

server.listen(PORT, () => {
    console.log(`Listening on ${PORT}...`)
    console.log(friends);
})