const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config();
DB_NAME = process.env.DB_NAME;
DB_PASS = process.env.DB_PASS;

mongoose
    .connect('mongodb://dylans:'+DB_PASS+'@clear-talk-shard-00-00.phnbs.mongodb.net:27017,clear-talk-shard-00-01.phnbs.mongodb.net:27017,clear-talk-shard-00-02.phnbs.mongodb.net:27017/'+DB_NAME+'?ssl=true&replicaSet=atlas-ryg0wg-shard-0&authSource=admin&retryWrites=true&w=majority', { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db