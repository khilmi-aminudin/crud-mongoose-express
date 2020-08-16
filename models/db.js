const mongoose = require("mongoose")
const URl = 'mongodb+srv://khilmiA715:aiilMi15july@clusterforexperiments-yeals.mongodb.net/<dbname>?retryWrites=true&w=majority'
const Students = require('./students.model')

const connectDB = async () => {
    await mongoose.connect(URl,{ useNewUrlParser : true, useFindAndModify : false, useUnifiedTopology : true}, err => {
        if(!err){
            console.log(`Connection Database is Succces on URl : ${URl}`)
        }else{
            console.log(`Connection Failure : ${err}`)
        }
    })
}

module.exports = connectDB