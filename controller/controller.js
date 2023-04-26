const Appoint = require('../models/Appoint')
const Doctor = require('../models/Doctor')
const User = require('../models/User')




class Controller {

    async createUser(req, res) {
        try {

            const {name, phone} = req.body
            const user = new User({name, phone})
            await user.save()
            res.json({message: 'Пользователь успешно сохранен'})

        } catch (error) {
            res.status(400).json({message: 'create user error', error})
        }
    }


    async createDoctor(req, res) {
        try {

            const {name, spec, slots} = req.body
            const doctor = new Doctor({name, spec, slots})

            await doctor.save()
            res.json({message: 'Доктор успешно сохранен'})

        } catch (error) {
            res.status(400).json({message: 'create doctor error', error})
        }
    }


    async appoint(req, res) {
        try {
            const {user_id, doctor_id, slot} = req.body

            const user = await User.findOne({_id: user_id})
            const doctor = await Doctor.findOne({_id: doctor_id})
            const appoint = new Appoint({user_id, doctor_id, slot})


            if(!doctor.slots.includes(slot)){

                res.status(400).json({message: 'Данный слот занят'})
            } else {
                res.json({message: "Вы успешно записаны на прием!"})

                var newSlots = doctor.slots.filter((el) => el != slot)
                appoint.save()

                await Doctor.updateOne({slots: doctor.slots}, {$set:{slots: newSlots}})
            }

        } catch (error) {
            res.status(400).json({message: 'create appoint error', error})

            console.log(error);
        }
    }
}

module.exports = new Controller()