const express=require('express')
const router=express.Router()
const Model=require('../models/index')
const controller=require('../controller/index')
const middleware=require('../middleware/index')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
require('dotenv').config()

router.use(express.json())


router.get('/getproducts',middleware.customer.customer,async(req,res)=>{
    try{
        /* #swagger.parameters['auth'] = {
            in: 'header',
            description: 'auth'
        } */
        const wow=await Model.product.find()

        res.send(wow)

    }
    catch(err){
        res.send(err)
    }
    
})

router.get('/getproduct/:id',middleware.customer.customer,async(req,res)=>{
     try{
        /* #swagger.parameters['auth'] = {
            in: 'header',
            description: 'auth'
        } */

        const pro=await Model.product.findOne({_id:req.params.id})
        res.send(pro)

     }
     catch(err){
        res.send(err)
     }
   
})

router.post('/addtocart/:id',middleware.customer.customer,async(req,res)=>{
    try{
        /* #swagger.parameters['auth'] = {
            in: 'header',
            description: 'auth'
        } */

        const pro=await Model.product.findOne({_id:req.params.id})
        pro.addtocart=true
        await pro.save()
        console.log(pro)
        res.send(pro)

    } 
    catch(err){
        res.send(err)
    }   
    

})

router.get('/cart',middleware.customer.customer,async(req,res)=>{
    try{
        /* #swagger.parameters['auth'] = {
            in: 'header',
            description: 'auth'
        } */
        var cart=[]
        const pro=await Model.product.find()
        var i=0
        for(i=0;i<pro.length;i++){
            if(pro[i].addtocart==true){
                cart.push(pro[i])
            }
        }
    
        res.send(cart)

    }
    catch(err){
        res.send(err)
    }
   

})

router.get('/getproducts/:category',middleware.customer.customer,async(req,res)=>{
        try{
            /* #swagger.parameters['auth'] = {
                in: 'header',
                description: 'auth'
            } */
            const wow=await Model.product.find({category:req.params.category})

            if(!wow){ res.send('category not available')}
    
            res.send(wow)
    
        }
        catch(err){
            res.send(err)
        }
        
})

module.exports=router