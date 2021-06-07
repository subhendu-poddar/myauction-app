const router = require('express').Router();
const Admin = require('../controllers/admin.controllers');

router.post('/signin', Admin.signin)
router.post('/signup', Admin.signup)
router.get('/getAllAdmins', Admin.getAdmins)

module.exports = router;