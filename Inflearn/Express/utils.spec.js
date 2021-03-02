const utils = require('./utils')
const should = require('should')

describe('utils.js 모듈의 capitalize 함수', () => {
    it('문자열의 첫번쨰 문자를 대문자로 변환', () => {
        const result = utils.capitalize('hello')
        result.should.be.equal('Hello')
    })
})