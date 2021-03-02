const app = require('./index')
const request = require('supertest')
const should = require('should')

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
})