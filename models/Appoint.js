const { Schema, model } = require('mongoose')


const Appoint = new Schema({
    user_id: String,
    doctor_id: String,
    slot: Date
})

module.exports = model('Appoint', Appoint)