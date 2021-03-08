const request = require('supertest')
const should = require('should')
const app = require('./index')


describe('GET /users', () => {
    describe('성공', () => {
        it('유저 객체를 담은 배열로 응답', (done) => {
            request(app)
            .get('/users')
            .end((err, res) => {
                res.body.should.be.instanceOf(Array)            
                done()
            })
        })
    })

    it("최대 limit 개수만큼 응답", (done) => {
        request(app)
        .get('/users?limit=2')
        .end((err, res) => {
            res.body.should.have.lengthOf(2)
            done()
        })
    })

    describe('실패', () => {
        it('limit이 숫자형이 아니면 400을 전송', (done) => {
            request(app)
            .get('/users?limit=two')
            .expect(400)
            .end(done)
        })
    })
})

describe('GET /users/1는', () => {
    describe('성공', () => {
        it('id가 1인 유저 객체를 반환한다', (done) => {
            request(app)
            .get('/users/1')
            .end((err, res) => {
                res.body.should.have.property('id', 1)
                done()
            })
        })
    })
})