function newCalculator() {
  return {
    display: document.querySelector(".display"),
    btnClear: document.querySelector(".btn-clear"),
    btnDell: document.querySelector(".btn-del"),

    start() {
      this.clickButtons();
      this.pressEnter();
    },

    clickButtons() {
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
    },

    pressEnter() {
      this.display.addEventListener("keyup", (e) => {
        if (e.keyCode === 13) {
          this.makeCalculation();
        }
      });
    },

    btnToDisplay(value) {
      this.display.value += value;
    },

    clearDisplay() {
      this.display.value = "";
    },

    dellOne() {
      this.display.value = this.display.value.slice(0, -1);
    },

    makeCalculation() {
      let diplayExpression = this.display.value;
      try {
        diplayExpression = eval(diplayExpression);
        console.log(diplayExpression);

        if (!diplayExpression) {
          alert("Invalid expression");
          return;
        }

        this.display.value = String(diplayExpression);
      } catch (e) {
        alert("Invalid expression");
        return;
      }
    },
  };
}

const calculator = newCalculator();
calculator.start();
