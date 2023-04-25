const Router = require('express')
const router = new Router()
const Controller = require('../controller/controller')

router.post('/appoint', Controller.appoint)
router.post('/createuser', Controller.createUser)
router.post('/createdoctor', Controller.createDoctor)


module.exports = router