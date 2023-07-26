function Calculator() {
  this.display = document.querySelector(".display");
  this.btnClear = document.querySelector(".btn-clear");
  this.btnDell = document.querySelector(".btn-del");

  this.start = () => {
    this.clickButtons();
    this.pressEnter();
  };

  this.clickButtons = () => {
    document.addEventListener(
      "click",
      function (e) {
        const el = e.target;

        if (el.classList.contains("btn-num")) {
          this.btnToDisplay(el.innerText);
        }

        if (el.classList.contains("btn-clear")) {
          this.clearDisplay();
        }

        if (el.classList.contains("btn-del")) {
          this.dellOne();
        }

        if (el.classList.contains("btn-eq")) {
          this.makeCalculation();
        }
      }.bind(this)
    );
  };

  this.pressEnter = () => {
    this.display.addEventListener("keyup", (e) => {
      if (e.keyCode === 13) {
        this.makeCalculation();
      }
    });
  };

  this.btnToDisplay = (value) => (this.display.value += value);
  this.clearDisplay = () => (this.display.value = "");
  this.dellOne = () => (this.display.value = this.display.value.slice(0, -1));

  this.makeCalculation = () => {
    let diplayExpression = this.display.value;
    try {
      diplayExpression = eval(diplayExpression);
      if (!diplayExpression) {
        alert("Invalid expression");
        return;
      }

      this.display.value = String(diplayExpression);
    } catch (e) {
      alert("Invalid expression");
      return;
    }
  };
}

const calculator = new Calculator();
calculator.start();
