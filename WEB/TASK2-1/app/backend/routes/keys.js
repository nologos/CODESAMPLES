MONGO_USERNAME = process.env.MONGO_username
MONGO_PASSWORD = process.env.MONGO_password
MONGO_HOST = process.env.MONGO_host
MONGO_PORT = process.env.MONGO_port
DB_NAME = "frontpage-passport"
uri = "mongodb://"+MONGO_USERNAME+":"+MONGO_PASSWORD+"@"+MONGO_HOST+":"+MONGO_PORT+"/"+DB_NAME +"?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000"

// test database connection
// const mongoose = require('mongoose');
// mongoose.connect("mongodb://"+process.env.MONGO_host+":"+process.env.MONGO_port+"/"+"frontpage-passport"+"?ssl=true&replicaSet=globaldb", {
//    auth: {
//      username: process.env.MONGO_username,
//      password: process.env.MONGO_password
//    },
//  useNewUrlParser: true,
//  useUnifiedTopology: true,
//  retryWrites: false
//  })
//  .then(() => console.log('Connection to CosmosDB successful'))
//  .catch((err) =>{
//     console.log('Connection to CosmosDB failed2')
//     console.error(err)
// });

module.exports = {
    mongoURI: uri
};
