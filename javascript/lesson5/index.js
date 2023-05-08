const firstName = "Luiz"
const lastName = "Silva"
const age = 30
const weight = 84
const height = 1.80

let bmi;
let yearOfBirth;

bmi = weight/(height**2)
yearOfBirth = 2023 - age

console.log(`${firstName, lastName} is ${age} years old and him weight is ${weight}`)
console.log(`His height is ${height} and your BMI is ${bmi}`)
console.log(`His year of birth is ${yearOfBirth}`)