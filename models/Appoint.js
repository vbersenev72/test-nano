const { Schema, model } = require('mongoose')


const Appoint = new Schema({
    user_id: String,
    doctor_id: String,
    slot: String
})

module.exports = model('Appoint', Appoint)