const express = require('express')
const router = express.Router()
const teamTemplate = require('./Models/teamSignup')
const playerTemplate = require('./Models/playerSignup')


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
    teamTemplate.find({ })
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

router.get('/myteam-data?email', (req, res) => {
    teamTemplate.find({
        email: req.body.email
    }, (error, result) => {
        if(error) {
            return res.send({
                success: false,
                message: 'Server error !!'
            })
        }
        else if(result.length != 1) {
            return res.send({
                success: false,
                message: 'No team found !!'
            })
        }
        else {
            console.log(result)
            return res.send({
                success: true,
                message: 'Data found in the server !!',
                data: json(result)
            })
        }
    })



    // .then((data) => {
    //     //console.log('data: ', data)
    //     res.json(data)
    // })
    // .catch((error) => {
    //     console.log(`error found: ${error}`)
    // })
})





module.exports = router