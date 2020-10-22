const http = require('http')

const parseCookie = (cookie = '') => //cookie가 문자열 형식으로 오기 때문에 이를 객체로 바꾸는 함수
    cookie
        .split(';')
        .map(v => v.split('='))
        .map(([k, ...vs]) => [k, vs.join('=')])
        .reduce((acc, [k, v]) => {
            acc[k.trim()] = decodeURIComponent(v)
            return acc
        }, {})

http.createServer((req, res) => {
    const cookies = parseCookie(req.headers.cookie) //쿠키를 분석
    console.log(req.url, cookies) //처음에는 쿠키가 없고 두번째는 있다.
    res.writeHead(200, { 'Set-Cookie': 'mycookie=test'}) //쿠키 저장
    res.end('Hello Cookie')
}).listen(8082, () => {
    console.log('8082번 포트에서 서버 대기 중입니다.')
})