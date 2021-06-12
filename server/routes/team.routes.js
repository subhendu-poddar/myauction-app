const router = require('express').Router();
const Team = require('../controllers/team.cotrollers');

router.post('/signup', Team.signup);
router.post('/signin', Team.signin);
router.get('/allTeams', Team.getAllTeams);
router.get('/:email', Team.getTeam);
router.put('/update/:email', Team.updateTeam);
router.delete('/deleteAll', Team.deleteAll);

module.exports = router;