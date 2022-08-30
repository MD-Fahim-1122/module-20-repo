function leapyear(year){
    const remainder = year % 4;
    // console.log(remainder);
    if(remainder === 0){
        return true;
    }
    else{
        return false;
    }
}

const myYear= leapyear(1952);
console.log('myYear', myYear);

