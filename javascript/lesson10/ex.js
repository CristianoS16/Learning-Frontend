const num = Number(prompt("Digite um number: "));

const titleNumber = document.getElementById("title-number");
const text = document.getElementById("text");

titleNumber.innerHTML = num;

text.innerHTML = ''
text.innerHTML += `<p>Square root: ${num ** (1/2)} </p>`;
text.innerHTML += `<p>${num} is integer: ${Number.isInteger(num)} </p>`;
text.innerHTML += `<p>Is NaN: ${isNaN(num)}  </p>`;
text.innerHTML += `<p>Floor: ${Math.floor(num)} </p>`;
text.innerHTML += `<p>Ceil: ${Math.ceil(num)} </p>`;
text.innerHTML += `<p>With two decimal places: ${num.toFixed(2)} </p>`;