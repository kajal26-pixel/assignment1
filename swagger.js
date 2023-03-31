const swaggerauto=require('swagger-autogen')

const input=['./routes/admin','./routes/business','./routes/customer','./routes/commonroute']
const output='./swagger-output.json'

const doc={
    definitions:{
        "User":{
            "name":"kajal",
            "email":"sekhrika@gmail.com",
            "password":"87654",
            "mobile":"765479",
            "city":"ambala",
            "country":"India",
            "address":"400,sukhna path",
            "role":"Customer/Admin/Business"
        },
        "Product":{
            "name":"plain white t-shirt",
            "price":"12",
            "description":"comfy cotton wear suitable for summers",
            "color":"white",
            "reviews":"very cool",
            "category":"t-shirts",
            "addtocart":"yes",
            "payment":"Card/Cash/Netbanking"

        }
    }
}

swaggerauto(output,input,doc).then(()=>{
    require('./index.js')
})