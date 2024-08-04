const app=require('./app')
const env=require('dotenv').config()
const mongoose=require('mongoose')



const PORT=process.env.PORT
const DATABASE=process.env.DATABASE.replace('<password>',process.env.DATABASEPASSWORD)
mongoose.connect(DATABASE).then(
    console.log('Database connected')
).catch((e)=>{
    console.log(e)
})
app.listen(PORT,()=>{
console.log(`server is running on ${PORT}`)
})