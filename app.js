const express = require('express')
const connectDB = require('./models/db')
const app = express()

connectDB() 

// use built in Body-Parser on Expresss
app.use(express.json())
app.use(express.urlencoded({ extended : false }))

const PORT = process.env.PORT || 5000

app.use('/students', require('./controllers/studentsController'))

app.listen(PORT, () => {
    console.log(`App is running on PORT : ${PORT}`)
})