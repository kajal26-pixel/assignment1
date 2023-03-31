const express=require('express')
const app=express()
const mongoose=require('mongoose')
require('dotenv').config()
const swaggerui=require('swagger-ui-express')
const swaggeroutput=require('./swagger-output.json')
const routes=require('./routes/index')

app.use('/doc',swaggerui.serve,swaggerui.setup(swaggeroutput))

app.use('/',routes.commonroute)
app.use('/',routes.admin)
app.use('/',routes.business)
app.use('/',routes.customer)


mongoose.connect(process.env.DB)
.then(console.log('mongodb conected'))
.catch(err=>console.log(err))

const port=3000
app.listen(port,()=>{console.log('listening on port'+port+'...')})