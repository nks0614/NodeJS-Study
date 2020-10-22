const http = require('http')
const fs = require('fs')

http.createServer((req, res) => {
    fs.readFile('server2.html', (err, data) => { //html 파일을 읽어와서 띄워준다
        if(err){
            throw err
        }
        res.end(data)
    })
}).listen(8081, () => {
    console.log('8081번 포트에서 대기 중입니다.')
})