const express = require('express')
const morgan = require('morgan')
const app = express()

// const logger = (req, res, next) => { //미들웨어
//     console.log("I am logger")
//     next()
// }

// const logger2 = (req, res, next) => {
//     console.log("I am logger2")
//     next()
// }

// app.use(logger)
// app.use(logger2)

// const commonMw = (req, res, next) => {
//     console.log('common')
//     next(new Error('error ouccered'))
// }

// const errorMw = (err, req, res, next) => { //error 미들웨어
//     console.log(err.message)
//     next()
// }

// app.use(commonMw)
// app.use(errorMw)
// app.use(morgan('dev')) //외부 미들웨어, morgan

let users = [
    {id : 1, name : 'Alice'},
    {id : 2, name : 'John'},
    {id : 3, name : 'Tom'},
]

app.use(morgan('dev'))

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/users', (req, res) => {
    res.json(users)
})

app.listen(3000, () => {
    console.log("Server is running")
})

module.exports = app