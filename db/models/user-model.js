const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema(
    {
        username: { type: String, required: true },
        email: {type: String, requried: true},
        password: { type: String, requried: true},
        chats:[{
            friend: String,
            messages:[{
                sender: Number,
                text: String,
            }]
        }]

    },
    { timestamps: true },
)

module.exports = mongoose.model('users', User)