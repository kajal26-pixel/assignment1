const express=require('express')
const router=express.Router()
const Model=require('../models/index')
const controller=require('../controller/index')
const middleware=require('../middleware/index')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
require('dotenv').config()

router.use(express.json())

router.get('/allbusiness',middleware.admin.admin,async(req,res)=>{
    try{
        /* #swagger.parameters['auth'] = {
            in: 'header',
            description: 'auth'
        } */
        const users=await Model.user.find({role:'Business'})

        console.log(users)
        res.send(users)
    }
    catch(err){
        res.send(err)
    }
})

router.get('/allcustomers',middleware.admin.admin,async(req,res)=>{
    try{
        /* #swagger.parameters['auth'] = {
            in: 'header',
            description: 'auth'
        } */
        const users=await Model.user.find({role:'Customer'})

        console.log(users)
        res.send(users)
    }
    catch(err){
        res.send(err)
    }
})

router.get('/alladmins',middleware.admin.admin,async(req,res)=>{
    try{
        /* #swagger.parameters['auth'] = {
            in: 'header',
            description: 'auth'
        } */
        const users=await Model.user.find({role:'Admin'})

        console.log(users)
        res.send(users)
    }
    catch(err){
        res.send(err)
    }
})


module.exports=router