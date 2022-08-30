// const dadaInches =84;
// const dadaFeet =  dadaInches / 12;

// console.log(dadaFeet)


function inchesToFeet(inches){
    const feet = inches / 12;
    return feet;
}

const dadaInches = 144;
const dadaFeet =inchesToFeet(dadaInches);
console.log('dadaFeet',dadaFeet);

const nanaInches = 168;
const nanaFeet = inchesToFeet(nanaInches);
console.log('NanaFeet',nanaFeet);
