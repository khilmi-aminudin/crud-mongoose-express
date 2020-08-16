const express = require('express')
const mongoose  = require("mongoose");
const router = express.Router()
const Students = mongoose.model('Students')

router.get('/', (req,res) => {
    Students.find((err,doc) =>{
        if (!err) {
            res.json(doc)
        } else {
            res.json(err)
        }
    })
})

router.post('/', (req,res) => {
    const student = new Students()
    student.name = req.body.name
    student.email = req.body.email
    student.age = req.body.age
    student.addres = req.body.addres

    student.save((err,doc) => {
        if (!err) {
            res.json(doc)
        }else{
            console.log(err)
        }
    })
})

router.put('/', (req,res) => {
    Students.findByIdAndUpdate(req.body._id, req.body, (err, doc) => {
        if (!err) {
            res.json(`Query OK : ${doc}`)
        } else {
            res.json(err)
        }
    })
})

router.delete('/:id',(req,res) => {
    Students.findOneAndRemove(req.params.id,(err,doc) => {
        if (!err) {
            res.json(`Delete Ok ${doc}`)
        }else{
            res.json(err)
        }
    })
})

module.exports = router