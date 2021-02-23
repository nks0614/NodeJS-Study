const fs = require('fs')

//const data = fs.readFileSync('./data.txt', 'utf-8') // 동기

const data = fs.readFile('./data.txt', 'utf-8', (err, data) =>{
    console.log(data)
}) // 비동기, 동기와는 다르게 Callback 함수가 추가된다.