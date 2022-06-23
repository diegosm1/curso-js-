const country = 'Mexico';

const continent = 'American';

let population = 10000000;

console.log(typeof country, typeof continent, typeof population)

// Data Types
const isIsland = false;

let language = undefined;

console.log(isIsland, population, country, language);

//let const and var

language = 'spanish';

// isIsland = true; no se pueden cambiar menso 

console.log(language, isIsland)


//Basic Operators

console.log(population + 1);

const finlandPopulation = 6000000;

console.log(population > finlandPopulation);

const averagePopulation = 33000000;

console.log(population > averagePopulation);

const description = 'Portugal is in Europe, and its 11 million people speak portuguese';

//Strings and Tempalte Literals 

{
    (population >= averagePopulation)
        ? console.log('Portugal´s population is above average')
        : console.log('Portugal´s population is 22 million below average')
}

// Type Conversion and Cercion.

console.log('9' - '5', '19' - '13' + '17', '19' - '13' + 17, '123' < 57, 5 + 6 + '4' + 9 - 4 - 2);

//equality operators

// let numNeighbours = prompt('How many neighbour countries does your country have?')

// if (parseInt(numNeighbours) === 1) {
//     console.log('Only 1 border!');
// } else if (numNeighbours > 1){
//     console.log('More than 1 border');
// }else {
//     console.log('No borders');
// }

// Logical Operators

const sarahLanguage = 'spanish';
const sarahPoblation = 30000000;
const sarahisIsland = false;

if (sarahLanguage === "english") {
    if (sarahPoblation < 50000000) {
        if (sarahisIsland === false) {
            console.log('You Should Live in Portugal');
        }
    }
} else {
    console.log('Portugal doesn´t meet your criteria')
}

//Switch Statement 

const switchLanguage = 'chinese'

switch (switchLanguage) {
    case 'chinese': case 'mandarin':
        console.log('Most Number of Native Speakers');
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers');
        break;
    case 'english':
        console.log('3rd place');
        break;
    case 'hindi':
        console.log('4rd place');
        break;
    case 'arabic':
        console.log('5rd most spoken language');
        break;
    default:
        console.log('great language too.')
        break;
}