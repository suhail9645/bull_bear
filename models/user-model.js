const mongoose=require('mongoose')

const userSchema=mongoose.Schema({
    phone:{
        type:Number,
        require:[true,'User need a phone-number'],
        maxLength:10,
        minLength:10
    },
    userName:{
        type:String,
        require:[true,'User need a user name']
    },
    role:{
        type:String,
        enum:['user','author','admin'],
        default:'user'
    }

})

const userModel=mongoose.Model('user',userSchema)

module.exports=userModel