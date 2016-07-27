class Judege{
    static judge(input){
        if(input.length!=4){
            return false;
        }
        const inputs=input.split('');
        for(let i=0;i<inputs.length;i++){
            for (let j=i+1;j<inputs.length;j++){
                if(inputs[i]===inputs[j]){
                    return false;
                }
            }
        }
        return true;
    }
}
module.exports = Judege;