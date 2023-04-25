const express = require('express')
const mongoose = require('mongoose')
const router = require('./router/router')
const cron = require('node-cron')
const Appoint = require('./models/Appoint')
const User = require('./models/User')
const Doctor = require('./models/Doctor')



const PORT = 5000
const db = 'mongodb+srv://root:root@cluster0.nlikgpa.mongodb.net/test'
const app = express()


app.use(express.json())
app.use('/api', router)



const findDoctorById = async (id) => {
    const doctor = await Doctor.findOne({_id: id})

}




const findUserById = (id) => {

}



const Start = async () => {
    try {
        await mongoose.connect(db)
        app.listen(PORT, () => console.log(`Сервер запущен по порту : ${PORT}`))



        // cron.schedule('0 9 * * *', async () => {
            const tomorrow = new Date('2023-04-28T12:42:58.257+00:00')
            console.log(tomorrow);




            const appoint = await Appoint.find({ slot: tomorrow })
            console.log(appoint);


            const doctor_name = await Doctor.findOne({_id: appoint.doctor_id}).name
            const user_name = await User.findOne({_id: appoint.user_id}).name

            console.log(doctor_name, user_name);


            // })
        }
    catch (error) {
        console.log(error);
    }
}
Start()
