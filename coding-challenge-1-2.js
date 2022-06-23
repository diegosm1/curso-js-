const markWeights = 78;
const markTall = 1.69;

const johnWeights = 92;
const johnTall = 1.95;

const BMIm = markWeights / markTall ** 2;
const BMIj = johnWeights / (johnTall * johnTall);

const markHigherBMI = BMIm > BMIj;

// console.log(BMIm, BMIj, markHigherBMI)

if (markHigherBMI) {
    console.log(`Mark's BMI ${BMIm} is higher than John's! ${BMIj}`);
    
} else {
    console.log(`John's BMI ${BMIj} is higher than Mark's! ${BMIm}`);
}