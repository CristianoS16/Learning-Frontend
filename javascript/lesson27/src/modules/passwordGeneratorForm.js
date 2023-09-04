import generatePassword from "./generators";

const generatedPassword = document.querySelector(".generated-password");
const qtdCharacters = document.querySelector(".qtd-characters");
const chkNumbers = document.querySelector(".chk-numbers");
const chkUpper = document.querySelector(".chk-uppercase");
const chkLower = document.querySelector(".chk-lowercase");
const chkSymbols = document.querySelector(".chk-symbols");
const generateButton = document.querySelector(".btn-generate");

export default function() {
  generateButton.addEventListener("click", () => {
    console.log("click")
    generatedPassword.innerHTML = generatePassword(
      qtdCharacters.value,
      chkNumbers.checked,
      chkUpper.checked,
      chkLower.checked,
      chkSymbols.checked
    );
  });
}
