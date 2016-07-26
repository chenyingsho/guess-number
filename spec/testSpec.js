/**
 * Created by chenying on 16-7-26.
 */
const main = require('../main/main');

describe('printNumber', () => {

    it('should print answer', () => {

        const inputs = '1423';
        const answer = '1324'


        const expectText = '2A2B';

        expect(main(answer,inputs)).toEqual(expectText);
    });
});