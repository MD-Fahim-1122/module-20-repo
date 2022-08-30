function isEven(number){
    const remainder = number%2;
    if(remainder === 0){
        return true;
    }
    else{
        return false;
    }    
}

const evenNumber =isEven(222);
console.log(evenNumber);
const oddNumber = isEven(111);
console.log(oddNumber);