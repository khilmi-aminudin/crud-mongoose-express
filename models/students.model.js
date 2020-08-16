const mongoose = require('mongoose')
const Schema = mongoose.Schema

const studentsSchema = new Schema({
    name : {
        type : String
    },
    email : {
        type : String
    },
    age : {
        type : Number
    },
    addres : {
        type : String
    }
}) 

module.exports = mongoose.model('Students', studentsSchema, 'students')