function meterToSentimeter(meter){
    const sentimeter = meter * 100;
    return sentimeter;
}

const meter = 2;
const kilometer = meterToSentimeter(meter);
console.log(kilometer)