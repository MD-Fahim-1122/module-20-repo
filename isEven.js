function isEven(number){
    const remainder =number % 2;
    // console.log(remainder);
    if(remainder === 0){
        return true;
    }
    
    else{
        return false;
    }

}
const myNumberIsEven=  isEven(61);
console.log(myNumberIsEven);
const herNumberIsEven= isEven(1110);
console.log(herNumberIsEven);