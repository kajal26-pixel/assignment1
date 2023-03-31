const express=require('express')
const router=express.Router()
const Model=require('../models/index')
const controller=require('../controller/index')
const middleware=require('../middleware/index')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
require('dotenv').config()

router.use(express.json())

router.post('/addproduct',middleware.business.business,async(req,res)=>{
    
        /* #swagger.parameters['product'] = {
            in: 'body',
            description: 'add product',
            schema: { $ref: "#/definitions/Product" }
        } */
        /* #swagger.parameters['auth'] = {
            in: 'header',
            description: 'auth'
        } */
        const product=new Model.product(req.body)
        await product.save()
        res.send('product saved')
   
})

router.get('/myproducts',middleware.business.business,async(req,res)=>{
    try{
        /* #swagger.parameters['auth'] = {
            in: 'header',
            description: 'auth'
        } */
        const tok=jwt.verify(req.headers.auth,process.env.JWTSECRET)
        const product=await Model.product.find({addedby:tok.id})
        console.log(product)
        res.send(product)

    }
    catch(err){
        res.send(err)
    }
    

})


module.exports=router