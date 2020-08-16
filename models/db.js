const mongoose = require("mongoose")
const URl = 'mongodb://localhost:27017/studentsDB'
const Students = require('./students.model')

const connectDB = () => {
    mongoose.connect(URl,{ useNewUrlParser : true, useFindAndModify : false, useUnifiedTopology : true}, err => {
        if(!err){
            console.log(`Connection Database is Succces on URl : ${URl}`)
        }else{
            console.log(`Connection Failure : ${err}`)
        }
    })
}

module.exports = connectDB