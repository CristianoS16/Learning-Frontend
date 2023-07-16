const max = (num1, num2) => (num1 > num2 ? num1 : num2);

const isLandscape = (width, height) => !!(width > height);

const fizzBuzz = (num) => {
  if (typeof num !== "number") {
    return num;
  }
  if ((num % 3) + (num % 5) === 0) {
    return "FizzBuzz";
  } else if (num % 3 === 0) {
    return "Fizz";
  } else if (num % 5 === 0) {
    return "Buzz";
  }
  return num;
};

for (let i = 0; i <= 100; i++) {
  console.log(fizzBuzz(i));
}
