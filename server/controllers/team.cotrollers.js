const Team = require('../Models/team');
const Player = require('../Models/player');
const bcrypt = require('bcryptjs');

exports.signup = (req, res) => {
    Team.find({
        email: req.body.email
    }, (error, previousUser) => {
        if (error) {
            return res.send({
                success: false,
                message: 'Server error !!'
            })
        }
        else if (previousUser.length > 0) {
            return res.send({
                success: false,
                message: 'Team with this Email Id already Exists !!'
            })
        }
        else {
            req.body.password = bcrypt.hashSync(req.body.password);
            const signedUpUser = new Team(req.body)
            signedUpUser.save((error) => {
                if (error) {
                    console.log('Oops, Something wrong !!')
                }
                else {
                    console.log('Data has been saved.')
                }
            })
            return res.send({
                success: true,
                message: 'we received your data !!'
            })
        }
    })
}

exports.signin = async (req, res) => {
    try {
        const user = await Team.findOne({
            email: req.body.email
        })
        if (!user) {
            res.send({
                success: false,
                message: "email doesn't exist"
            })
        }
        const { email, password } = user
        const valid = bcrypt.compareSync(req.body.password, user.password);
        if (valid) {
            res.send({
                success: true,
                message: 'signin successful !!'
            })
        }
        else {
            res.send({
                success: false,
                message: 'Invalid Credentials !!'
            })
        }

    } catch (err) {
        res.status(400)
    }
}

exports.getAllTeams = (req, res) => {
    Team.find({})
        .then((data) => {
            res.json(data)
        })
        .catch((error) => {
            console.log(`error found: ${error}`)
        })
}

exports.getTeam = async (req, res) => {
    try {
        const data = await Team.find({ email: req.params.email })
        console.log(data)
        res.json(data)
    } catch (error) {
        res.status(404)
    }
}

exports.updateTeam = async (req, res) => {
    try {
        const userId = await Team.findOne({ email: req.params.email })
        if (!userId) {
            res.send({
                success: false,
                message: "Team doesn't exists !!"
            })
        }
        else {
            const user = await Team.findByIdAndUpdate(userId._id, req.body)

            if (user) {
                res.send({
                    success: true,
                    message: "Data successfully updated !!"
                })
            }
            else {
                res.send({
                    success: false,
                    message: "invalid credentials"
                })
            }
        }

    } catch (error) {
        res.status(400)
    }
}

exports.deleteAll = async(req, res) => {
    Team.deleteMany()
        .then(err => {
            res.status(200).send({
                message:
                    "All Teams successfully deleted."
            })
        })
        .catch(err => {
            res.status(500).send({
                message:
                    "Internal Server Error.",
                description: err
            })
        })
}

exports.getPlayersTaken = async(req, res) => {
    var teamEmail = req.params.email;
    try {
        var team = await Team.find({email: teamEmail});
        // console.log(team);
        if(team.length !== 1){
            res.status(400).send({
                message:
                    "No team found with this email Id"
            })
        }

        var playersEmailList = team[0].playersTaken;
        var players = []

        for (var eachPlayerEmail of playersEmailList) {
            const player = await Player.find({email: eachPlayerEmail});

            if(player.length === 1) {
                players.push(player[0].name);
            }
            else{
                players.push("-" + playersEmail[i]);
            }
        }
        res.status(200).json(players);
    } catch (err) {
        return res.status(500).send({
            message: 'Some error occurred.',
            description: err
        });
    }
}