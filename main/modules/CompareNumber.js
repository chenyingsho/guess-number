'use strict'
class CompareNumber {
    constructor(inputs, systems) {
        this.inputs = inputs;
        this.systems = systems;
    }

    print() {
        let inputsArrays = this.inputs.split('');
        let systemsArrays = this.systems.split('');

        const getBCount = ()=> {
            return inputsArrays.map((inputsArray, index)=>
                systemsArrays[index] != inputsArray && systemsArrays.some(systemsArray=>systemsArray === inputsArray) ? 1 : 0
            ).reduce((a, b)=>a + b);
        };

        const getACount = ()=> {
            return inputsArrays.map((inputsArray, index)=>
                systemsArrays[index] === inputsArray ? 1 : 0
            ).reduce((a, b)=>a + b);
        };

        const a = getACount();
        const b = getBCount();

        return `${a}A${b}B`;
    }
}

module.exports = CompareNumber;