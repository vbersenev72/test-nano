const express = require('express')
const mongoose = require('mongoose')
const router = require('./router/router')
const cron = require('node-cron')
const Appoint = require('./models/Appoint')
const User = require('./models/User')
const Doctor = require('./models/Doctor')
const fs = require('fs');


const PORT = 5000
const db = 'mongodb+srv://root:root@cluster0.nlikgpa.mongodb.net/test'
const app = express()


app.use(express.json())
app.use('/api', router)




const Start = async () => {
    try {
        await mongoose.connect(db)
        app.listen(PORT, () => console.log(`Сервер запущен по порту : ${PORT}`))



        // cron.schedule('0 9 * * *', async () => {
            const tomorrow = new Date('2023-04-28T12:42:58.257+00:00')
            console.log(tomorrow);




            const appoint = await Appoint.find({ slot: tomorrow })
            console.log(appoint)


            const doctor = await Doctor.findOne({id: appoint.doctor_id})
            const user = await User.findOne({id: appoint.user_id})

            console.log(doctor.name, user.name);


            var currentdate = new Date(); 
            var datetime = "Время: " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " | "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();

            fs.appendFileSync("logs.txt","\n" + datetime);



            // })
        }
    catch (error) {
        console.log(error);
    }
}
Start()
