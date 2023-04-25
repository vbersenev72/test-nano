const { Schema, model } = require('mongoose')

const User = new Schema({
    name: String,
    phone: String
})

module.exports = model('User', User)