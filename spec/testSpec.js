'use strict'
const CompareNumber = require('../main/modules/CompareNumber');
describe('CompareNumber', ()=> {
    const inputs = '1234';

    it('if A and B all are 0', ()=> {
        const systems = '5678';
        const expectAnswer = '0A0B';
        const answer = new CompareNumber(inputs, systems).print();
        expect(answer).toEqual(expectAnswer);
    });

    it('if B is 0', ()=> {
        const systems = '1234';
        const answer = new CompareNumber(inputs, systems).print();
        const expectAnswer = '4A0B';
        expect(answer).toEqual(expectAnswer);
    });

    it('if A is 0', ()=> {
        const systems = '4321';
        const expectAnswer = '0A4B';
        const answer = new CompareNumber(inputs, systems).print();
        expect(answer).toEqual(expectAnswer);
    });

    it('if A and B all are not 0', ()=> {
        const systems = '1948';
        const expectAnswer = '1A1B';
        const answer = new CompareNumber(inputs, systems).print();
        expect(answer).toEqual(expectAnswer);
    })
});

