const Admin = require('../Models/admin');
const bcrypt = require('bcryptjs');

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
            req.body.password = bcrypt.hashSync(req.body.password);
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

exports.getAdmins = (req, res) => {
    Admin.find({})
        .then((data) => {
            res.json(data)
        })
        .catch((error) => {
            console.log(error);
        })
}

exports.deleteAll = async(req, res) => {
    Admin.deleteMany()
        .then(err => {
            res.status(200).send({
                message:
                    "All Admins successfully deleted."
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