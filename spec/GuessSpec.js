'use strict'
const AnswerGenerator = require('../main/modules/AnswerGenerator');
const Guess = require('../main/modules/Guess');
describe('Guess', () => {

    it('should print guess', () => {
    spyOn(AnswerGenerator,'generate').and.returnValue('1234');
        const result=Guess.guess('1234');
        expect(result).toEqual('4A0B');
    });
});


