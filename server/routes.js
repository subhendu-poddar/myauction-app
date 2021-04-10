const express = require('express')
const router = express.Router()
const teamTemplate = require('./Models/teamSignup')
const playerTemplate = require('./Models/playerSignup')
const Admin = require('./Models/admin')
const { useContext } = require('react')


router.post('/team-signup', (req, res) => {
    teamTemplate.find({
        email: req.body.email
    }, (error, previousUser) => {
        if(error){
            return res.send({
                success: false,
                message: 'Server error !!'
            })
        }
        else if(previousUser.length>0){
            return res.send({
                success: false,
                message: 'Team with this Email Id already Exists !!'
            })
        }
        else{
            const signedUpUser = new teamTemplate(req.body)
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
})

router.post('/team-signin', (req, res) => {
    teamTemplate.find({
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
})

router.post('/player-signup', (req, res) => {
    playerTemplate.find({
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
            const signedUpUser = new playerTemplate(req.body)
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
})

router.get('/teams', (req, res) => {
    teamTemplate.find({})
        .then((data) => {
            res.json(data)
        })
        .catch((error) => {
            console.log(`error found: ${error}`)
        })
})

router.get('/players', (req, res) => {
    playerTemplate.find({})
        .then((data) => {
            res.json(data)
        })
        .catch((error) => {
            console.log(`error found: ${error}`)
        })
})

router.get('/admins', (req, res) => {
    Admin.find({})
    .then((data) => {
        res.json(data)
    })
    .catch((error) => {
        console.log(error);
    })
})

router.get('/teams/:email', async (req, res) => {
    try{
        const data = await teamTemplate.find({email: req.params.email})
        console.log(data)
        res.json(data)
    } catch(error) { 
        res.status(404)
    }



    // .then((data) => {
    //     //console.log('data: ', data)
    //     res.json(data)
    // })
    // .catch((error) => {
    //     console.log(`error found: ${error}`)
    // })
})

router.post('/admin/signin', async (req, res) => {
    try {
        const user = await Admin.findOne({
            email: req.body.email
        })
        if(!user){
            res.send({
                success: false,
                message: "email doesn't exist"
            })
        }
        const {email, password} = user
        const valid = user.comparePassword(req.body.password)
        if(valid){
            res.send({
                success: true,
                message: 'signin successful !!'
            })
        }
        else{
            res.send({
                success: false,
                message: 'Invalid Credentials !!'
            })
        }

    }catch(err){
        res.status(400)
    }
})

router.post('/admin/signup', async (req, res) => {
    try {
        const user = await Admin.findOne({
            email: req.body.email
        })
        if(user){
            res.send({
                success: false,
                message: 'Invalid Credentials !!'
            })
        }
        else{
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
})

router.put('/players/update/:email', async (req, res) => {
    try{
        const userId = await playerTemplate.findOne({email: req.params.email})
        if(!userId){
            res.send({
                success: false,
                message: "Player doesn't exists !!"
            })
        }
        const user = await playerTemplate.findByIdAndUpdate(userId._id, req.body)
        
        if(user){
            res.send({
                success: true,
                message: "Data successfully updated !!"
            })
        }
        else{
            res.send({
                success: false,
                message: "invalid credentials"
            })
        }
    }catch(error) {
        res.status(400)
    }
})

router.put('/teams/update/:email', async (req, res) => {
    try {
        const userId = await teamTemplate.findOne({ email: req.params.email })
        if (!userId) {
            res.send({
                success: false,
                message: "Team doesn't exists !!"
            })
        }
        const user = await teamTemplate.findByIdAndUpdate(userId._id, req.body)

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
    } catch (error) {
        res.status(400)
    }
})




module.exports = router