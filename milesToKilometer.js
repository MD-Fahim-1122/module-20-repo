function milesToKilometer(miles){
    const kilometer = miles * 1.60934;
    return kilometer;
}

const mile = 2;
const kilometer =milesToKilometer(mile);
console.log(kilometer);