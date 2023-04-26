const { Schema, model } = require('mongoose')


const Doctor = new Schema({
    name: String,
    spec: String,
    slots: [String]
})

module.exports = model('Doctor', Doctor)