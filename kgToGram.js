function kgToGram(kgs){
    const gram = kg * 1000;
    return gram;
}

const kg = 10;
const gram = kgToGram(kg);
console.log('gram',gram);