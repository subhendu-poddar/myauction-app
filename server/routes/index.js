const app = require('express').Router()
const Team = require('./team.routes')
const Player = require('./player.routes')
const Admin = require('./admin.routes')

app.use('/team', Team);
app.use('/player', Player);
app.use('/admin', Admin);

module.exports = app;