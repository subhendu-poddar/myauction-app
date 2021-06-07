const Team = require('../Models/team');

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

exports.signin = (req, res) => {
    Team.find({
        email: req.body.email,
        password: req.body.password
    }, (error, previousUser) => {
        if (error) {
            return res.send({
                success: false,
                message: 'Server error !!'
            })
        }
        else if (previousUser.length != 1) {
            return res.send({
                success: false,
                message: 'Invalid Email or Password !!'
            })
        }
        else {
            return res.send({
                success: true,
                message: 'signin successful !!'
            })
        }
    })
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



    // .then((data) => {
    //     //console.log('data: ', data)
    //     res.json(data)
    // })
    // .catch((error) => {
    //     console.log(`error found: ${error}`)
    // })
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