const Player = require('../Models/player')

exports.signup = (req, res) => {
    Player.find({
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
                message: 'Player with this Email Id already Exists !!'
            })
        }
        else {
            req.body.password = bcrypt.hashSync(req.body.password);
            const signedUpUser = new Player(req.body)
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
        const user = await Player.findOne({
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

exports.getAllPlayers = (req, res) => {
    Player.find({})
        .then((data) => {
            res.json(data)
        })
        .catch((error) => {
            console.log(`error found: ${error}`)
        })
}

exports.getPlayer = async (req, res) => {
    try {
        const data = await Player.find({ email: req.params.email })
        console.log(data)
        res.json(data)
    } catch (error) {
        res.status(404)
    }
}

exports.updatePlayer = async (req, res) => {
    try {
        const userId = await Player.findOne({ email: req.params.email })
        if (!userId) {
            res.send({
                success: false,
                message: "Player doesn't exists !!"
            })
        }
        else {
            const user = await Player.findByIdAndUpdate(userId._id, req.body)
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
    Player.deleteMany()
        .then(err => {
            res.status(200).send({
                message:
                    "All Players successfully deleted."
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