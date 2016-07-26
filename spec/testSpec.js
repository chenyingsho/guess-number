/**
 * Created by chenying on 16-7-26.
 */
const main = require('../main/main');

describe('main',()=>{
    it('main',()=>{
        expect(main.main()).toBe('hello');
    });
});
