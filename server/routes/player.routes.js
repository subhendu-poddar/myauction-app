const router = require('express').Router();
const Player = require('../controllers/player.controllers');

router.post('/signup', Player.signup)
router.get('/getAllPlayers', Player.getAllPlayers)
router.get('/:email', Player.getPlayer)
router.put('/update/:email', Player.updatePlayer)

module.exports = router;