class ValidateForm {
  constructor() {
    this.form = document.querySelector("form");
    this.events();
  }

  events() {
    this.form.addEventListener("submit", (e) => {
      this.handleSubmit(e);
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const validFields = this.checkValidsFields();
    const validPassword = this.checkValidPassword();

    if (validFields && validPassword) {
      alert("Form sent");
      this.form.submit();
    }
  }

  checkValidsFields() {
    let valid = true;

    // Removes error messages
    for (let errorText of this.form.querySelectorAll(".error-text")) {
      errorText.remove();
    }

    for (let field of this.form.querySelectorAll(".validate")) {
      let label = field.previousElementSibling.innerText;
      if (!field.value) {
        this.createError(field, `${label} field cannot be blank`);
        valid = false;
      }

      if (field.classList.contains("cpf")) {
        if (!this.validadeCPF(field)) valid = false;
      }

      if (field.classList.contains("user-name")) {
        if (!this.validadeUser(field)) valid = false;
      }
    }
    return valid;
  }

  validadeCPF(cpfField) {
    const cpf = new CpfValidator(cpfField.value);
    if (!cpf.validate()) {
      this.createError(cpfField, `Invalid CPF`);
      return false
    }
    return true;
  }

  validadeUser(userField) {
    const user = userField.value;
    let valid = true;
    if (user.length < 3 || user.length > 12) {
      this.createError(
        userField,
        `User needs to be between 3 and 12 characters`
      );
      valid = false;
    }
    if (!user.match(/^[a-zA-Z0-9]+$/g)) {
      this.createError(
        userField,
        `User name can only contain letters and/or numbers`
      );
      valid = false;
    }
    return valid;
  }

  createError(field, msg) {
    const div = document.createElement("div");
    div.innerHTML = msg;
    div.classList.add("error-text");
    field.insertAdjacentElement("afterend", div);
  }

  checkValidPassword() {
    let valid = true;

    const password = this.form.querySelector(".password");
    const checkPassword = this.form.querySelector(".check-password");

    if (password.value !== checkPassword.value) {
      valid = false;
      this.createError(password, "Passwords must be the same");
      this.createError(checkPassword, "Passwords must be the same");
    }

    if (password.value.length < 6 || password.value.length > 12) {
      this.createError(password, `Passwords to be between 6 and 12 characters`);
      valid = false;
    }
    return valid;
  }
}

const isValid = new ValidateForm();

// 187.596.300-60
