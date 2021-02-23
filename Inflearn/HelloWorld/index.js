const http = require('http');

const hostname = '127.0.0.1'; // localhost
const port = 3000; // port

const server = http.createServer((req, res) => { //http모듈의 createServer메소드
  res.statusCode = 200; //정상 작동
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

server.listen(port, hostname, () => { //listen메소드는 서버를 요청 대기상태로 만들어줌. 
  console.log(`Server running at http://${hostname}:${port}/`);
})
