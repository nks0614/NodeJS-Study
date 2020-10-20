const timeOut = setTimeout(() => {
    console.log('1.5초 후 실행')
}, 1500)

const interval = setInterval(() => {
    console.log('1초마다 실행')
}, 1000)

const ti
meOut2 = setTimeout(() => {
    console.log('실행되지 않습니다')
}, 3000)

setTimeout(() => {
    clearTimeout(timeOut2)
    clearTimeout(interval)
}, 2500)

const immediate = setImmediate(() => {
    console.log('즉시 실행')
})

const immediate2 = setImmediate(() => {
    console.log('실행되지 않습니다')
})

clearImmediate(immediate2)

/*
0초 -> immediate, immediate2(그러나 즉시 종료)
1초 -> interval
1.5초 -> timeout
2초 -> interval
2.5초 -> interval, timeout2 종료
 */