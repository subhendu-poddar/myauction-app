const Admin = require('../Models/admin');

exports.signin = async (req, res) => {
    try {
        const user = await Admin.findOne({
            email: req.body.email
        })
        if (!user) {
            res.send({
                success: false,
                message: "email doesn't exist"
            })
        }
        const { email, password } = user
        const valid = user.comparePassword(req.body.password)
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

exports.signup = async (req, res) => {
    try {
        const user = await Admin.findOne({
            email: req.body.email
        })
        if (user) {
            res.send({
                success: false,
                message: 'Invalid Credentials !!'
            })
        }
        else {
            const signedUpUser = new Admin(req.body)
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

    } catch (err) {
        res.status(400)
    }
}

exports.getAdmins = (req, res) => {
    Admin.find({})
        .then((data) => {
            res.json(data)
        })
        .catch((error) => {
            console.log(error);
        })
}