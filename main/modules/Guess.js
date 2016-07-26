'use strict'
const AnswerGenerator = require('./AnswerGenerator');
const CompareNumber = require('./CompareNumber');

class Guess{
    static guess(inputs){
        const randomNumber = AnswerGenerator.generate();
        const compareNumber =new CompareNumber(inputs,randomNumber).print();
        return compareNumber;
    }
}
module.exports = Guess;