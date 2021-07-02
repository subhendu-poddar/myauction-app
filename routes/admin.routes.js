const router = require('express').Router();
const Admin = require('../controllers/admin.controllers');

router.post('/signin', Admin.signin);
router.post('/signup', Admin.signup);
router.get('/allAdmins', Admin.getAdmins);
router.delete('/deleteAll', Admin.deleteAll);

module.exports = router;