function app() {
  const form = document.querySelector(".form");

  const setResult = (msg, isValid = true) => {
    const results = document.querySelector(".results");
    results.innerHTML = "";

    const p = document.createElement("p");
    p.classList.add("p-result");
    p.classList.add(isValid ? "valid-result": "invalid-result");
    p.innerHTML = msg;
    results.appendChild(p);
  };

  const receveFormEvent = (event) => {
    event.preventDefault();
    const weight = Number(form.querySelector(".weight").value);
    const height = Number(form.querySelector(".height").value);
    
    if (isNaN(weight) || weight <= 0) {
      setResult(`Invalid weight`, (isValid = false));
      return;
    }
    
    if (isNaN(height) || height <= 0) {
      setResult(`Invalid height`, (isValid = false));
      return;
    }

    const bmi = weight / height ** 2;

    const get_bmi_label = (bmi) => {
      if (bmi < 18.5) {
        return "UNDER WEIGHT";
      }
      if (bmi < 24.9) {
        return "NORMAL WEIGHT";
      }
      if (bmi < 29.9) {
        return "OVERWEIGHT";
      }
      if (bmi < 34.9) {
        return "GRADE 1 OBESITY";
      }
      if (bmi < 39.9) {
        return "GRADE 2 OBESITY";
      }
      return "GRADE 3 OBESITY";
    };

    setResult(`Your BMI is ${bmi.toFixed(2)} (${get_bmi_label(bmi)})`);
  };

  form.addEventListener("submit", receveFormEvent);
}

app();
